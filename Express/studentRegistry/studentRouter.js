// const express = require("express");
import express from "express";
const router = express.Router();

let students = [
    {id : 101, name : "seppo", email : "seppo@meil.com"},
    {id : 102, name : "teppo", email : "teppo@meil.com"},
    {id : 103, name : "matti", email : "matti@meil.com"}
];

const logger = (req, res, next) => {
    // console.log(`logger`);
    console.log("A new request received at " + Date.now());
    console.log("request method " + req.method);
    console.log(`endpoint: ${req.originalUrl}`);
    console.log(`request body ${req.body}`);
    next();
  };
  
router.use(logger);

router.get('/', (req, res) => {
    res.send("Home page");
    // res.sendFile(__dirname + "/index.html");
});
  
router.get('/students', (req, res) => {
    // res.send("Student page");
    let studentsID = [];
    students.forEach(student => {
        studentsID.push(student.id);
    }); // forEach
    res.json(studentsID);
});

router.get("/student/:id([0-9]{3,})", (req, res, next) => {
    const currStudent = students.find((student) => {
        return (student.id == req.params.id);
    });
    if (currStudent != null) {
        res.json(currStudent);
    } // if
    else {
        const err = new Error(`Can't find student on ID ${req.params.id}!`);
        err.status = "fail";
        err.statusCode = 404;
        next(err);
    } // else
});

router.post("/student", (req, res, next) => {
    // console.log(`hei`);
    // console.log(req.body);
    if (!req.body.id || !req.body.name || !req.body.email) {
        const err = new Error(`Bad Request`);
        err.status = "fail";
        err.statusCode = 404;
        next(err);
    } // if
    else {
        students.push({
            id : req.body.id,
            name : req.body.name,
            email : req.body.email
        }); // push
        console.log(students);
        res.json({statusCode: 201});
    } // else
});

router.put("/student/:id([0-9]{3,})", (req, res, next) => {
    const currStudent = students.findIndex((student) => {
        return (student.id == req.params.id);
    });
    if (currStudent != -1 && req.body.name && req.body.email) {
        students[currStudent].name = req.body.name;
        students[currStudent].email = req.body.email;
    } //if
    else if (currStudent != -1 && req.body.name) {
        students[currStudent].name = req.body.name;
    } // else if
    else if (currStudent != -1 && req.body.email) {
        students[currStudent].email = req.body.email;
    } // else if
    else {
        const err = new Error(`Bad Request`);
        err.status = "fail";
        err.statusCode = 404;
        next(err);
        return;
    } // else
    // console.log(students);
    res.json({statusCode: 204});
});

router.delete("/student/:id([0-9]{3,})", (req, res, next) => {
    const currStudent = students.findIndex((student) => {
        return (student.id == req.params.id);
    });
    if (currStudent != -1) {
        console.log(`poistettava löytyi`);
        students.splice(currStudent, 1);
    } //if
    else {
        const err = new Error(`Bad Request`);
        err.status = "fail";
        err.statusCode = 404;
        next(err);
        return;
    } // else
    // console.log(students);
    res.json({statusCode: 204});
});

router.all("*", (req, res, next) => {    
    const err = new Error(`Can't find ${req.originalUrl} on the server!`);
    err.status = "fail";
    err.statusCode = 404;
    next(err);
});

router.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    res.status(err.statusCode).json({
        status : err.statusCode,
        message : err.message
    });
});

// module.exports = router;
export {router};