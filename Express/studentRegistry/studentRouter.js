const express = require("express");
const router = express.Router();

let students = [
    {id : 101, name : "seppo", email : "seppo@meil.com"},
    {id : 102, name : "teppo", email : "teppo@meil.com"},
    {id : 103, name : "matti", email : "matti@meil.com"}
];
// router.use(express.json());
// router.use(express.urlencoded({extended: false}));

// const bodyParser = require("body-parser");
// router.use(bodyParser.urlencoded({extended:true}));
// router.use(bodyParser.json());
// const urlencodedParser = bodyParser.urlencoded({extended:false});
// const jsonParser = bodyParser.json();
// const urlencodedParser = bodyParser.urlencoded({extended: false});

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
    });
    res.json(studentsID);
});

router.get("/student/:id([0-9]{3,})", (req, res, next) => {
    // console.log(req.params.id);
    const currStudent = students.find((student) => {
        // console.log(student);
        return (student.id == req.params.id);
    });
    // console.log(currStudent);
    if (currStudent != null) {
        res.json(currStudent);
    } // if
    else {
        const err = new Error(`Can't find student on ID ${req.params.id}!`);
        err.status = "fail";
        err.statusCode = 404;
        next(err);
    }
});

// router.post("/", (req, res) => {
//     // res.send("POST route on things");
//     console.log(`POST request init!`);
//     console.log(req.body);
//     res.redirect("/");
// });

router.post("/student", (req, res, next) => {
    console.log(`hei`);
    console.log(req.body);
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
        });
        console.log(students);
        res.json({statusCode: 201});
    } // else
});

router.all("*", (req, res, next) => {
    // res.status(404).send({error: "No on here"});
    
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

module.exports = router;