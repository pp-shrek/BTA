import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import argon2 from "argon2";

const __dirname = dirname(fileURLToPath(import.meta.url));
const router = express.Router();

let students = [
    {id : 101, name : "seppo", email : "seppo@meil.com"},
    {id : 102, name : "teppo", email : "teppo@meil.com"},
    {id : 103, name : "matti", email : "matti@meil.com"}
];

let testUsrName = "jack";
let testUsrHash = "$argon2id$v=19$m=65536,t=3,p=4$Uh89i9jXFG0lv4N4ijl4lA$uzOj1Y/T3Pb4QA2kAx8rsGTLGF6t/Nlv3vQf7/awQDw"; // testi

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
    // res.send("Home page");
    res.sendFile(__dirname + "/public/index.html");
});
  
router.get('/students', (req, res) => {
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

router.post("/register", async (req, res, next) => {
    if (!req.body.usrName || !req.body.usrPwd) {
        const err = new Error(`Bad Request`);
        err.status = "fail";
        err.statusCode = 404;
        next(err);
    } // if
    else {
        let userName = req.body.usrName;
        let userPwd = req.body.usrPwd;
        let userHash;
        try {
            userHash = await argon2.hash(userPwd);
        } // try
        catch (err) {
            console.log(`Error ${err}.`);
        } // catch
        console.log(`userName ${userName}`);
        console.log(`userHash ${userHash}`);
        res.json({statusCode: 201});
    } // else
}); // POST ("/register"
//

router.post("/login", async (req, res, next) => {
    if (!req.body.usrName || !req.body.usrPwd) {
        const err = new Error(`Bad Request`);
        err.status = "fail";
        err.statusCode = 404;
        next(err);
    } // if
    else {
        let userName = req.body.usrName;
        let userPwd = req.body.usrPwd;
        let userHash;
        let userLoggedIn = false;
        if (testUsrName === userName) {
            try {
                if (await argon2.verify(testUsrHash, userPwd)) {
                    console.log(`matched`);
                    userLoggedIn = true;
                } // if
                else {
                    console.log(`no match`);
                } // else
            } // try
            catch (err) {
                console.log(`Error ${err}.`);
            } // catch
        } // if
        // try {
        //     userHash = await argon2.hash(userPwd);
        // } // try
        // catch (err) {
        //     console.log(`Error ${err}.`);
        // } // catch
        // console.log(`userName ${userName}`);
        // console.log(`userHash ${userHash}`);
        if (userLoggedIn) {
            res.json({statusCode: 201});
        } // if
        else {
            res.json({statusCode: 401})
        } // else
    } // else
}); // POST ("/login"

router.put("/student/:id([0-9]{3,})", (req, res, next) => {
    const currStudent = students.findIndex((student) => {
        return (student.id == req.params.id);
    }); // findIndex
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

export {router};