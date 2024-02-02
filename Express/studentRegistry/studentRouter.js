import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import argon2 from "argon2";
import 'dotenv/config';
import jwt from 'jsonwebtoken';

const __dirname = dirname(fileURLToPath(import.meta.url));
const router = express.Router();
const secret = process.env.SECRET;

let students = [
    {id : 101, name : "seppo", email : "seppo@meil.com"},
    {id : 102, name : "teppo", email : "teppo@meil.com"},
    {id : 103, name : "matti", email : "matti@meil.com"}
];

let testUsrName = "jack";
let testUsrHash = "$argon2id$v=19$m=65536,t=3,p=4$Uh89i9jXFG0lv4N4ijl4lA$uzOj1Y/T3Pb4QA2kAx8rsGTLGF6t/Nlv3vQf7/awQDw"; // testi
// testi JWT "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImphY2siLCJpYXQiOjE3MDY4NjYyOTl9.u-r3v8ebTToOwv8Y9t_om5qH8yrkPT76NSwiP-g1vtE"

const logger = (req, res, next) => {
    // console.log(`logger`);
    console.log("A new request received at " + Date.now());
    console.log("request method " + req.method);
    console.log(`endpoint: ${req.originalUrl}`);
    console.log(`request body ${req.body}`);
    next();
};
  
const authenticate = (req, res, next) => {
    console.log(`authenticate`);
    const auth = req.get('authorization');
    console.log(auth);
    if (!auth?.startsWith('Bearer ')) {
        return res.status(401).send("Invalid token");
    } // if
    const token = auth.substring(7);
    try {
        const decodedToken = jwt.verify(token, secret);
        // console.log(decodedToke.username);
        req.user = decodedToken;
        next();
    } // try
    catch (err) {
        return res.status(401).send("Invalid token");
    } // catch
};
router.use(logger);

router.get('/protected', authenticate, (req, res) => {
        console.log(`protected`);
        res.send(`${req.user.username} accessed protected route`);
});

router.get('/', (req, res) => {
    // res.send("Home page");
    res.sendFile(__dirname + "/public/index.html");
});
  
router.get('/students', authenticate, (req, res) => {
    let studentsID = [];
    students.forEach(student => {
        studentsID.push(student.id);
    }); // forEach
    res.json(studentsID);
}); // GET /students

router.get("/student/:id([0-9]{3,})", authenticate, (req, res, next) => {
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
}); // GET /student/:id

router.post("/student", authenticate, (req, res, next) => {
    if (req.user.username === process.env.AD_USERNAME) {
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
    } // if
    else {
        const err = new Error(`Bad Request`);
        err.status = "fail";
        err.statusCode = 403;
        next(err);
        return;
    } // else
}); // POST "/student"

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
        const payload = { username: userName };
        const token = jwt.sign(payload, secret);
        console.log(token);
        res.json({statusCode: 201, JWT: token});
        // res.json({statusCode: 201});
    } // else
}); // POST ("/register"

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
        if (userLoggedIn) {
            const payload = { username: userName };
            const token = jwt.sign(payload, secret);
            console.log(token);
            res.json({statusCode: 201, JWT: token});
        } // if
        else {
            res.json({statusCode: 401})
        } // else
    } // else
}); // POST ("/login"

router.post("/admin", async (req, res, next) => {
    if (!req.body.usrName || !req.body.usrPwd) {
        const err = new Error(`Bad Request`);
        err.status = "fail";
        err.statusCode = 404;
        next(err);
    } // if
    else {
        const adminName = process.env.AD_USERNAME;
        const adminHash = process.env.AD_USERPWD;
        let userName = req.body.usrName;
        let userPwd = req.body.usrPwd;
        let userLoggedIn = false;
        if (adminName === userName) {
            try {
                if (await argon2.verify(adminHash, userPwd)) {
                    console.log(`admin match`);
                    userLoggedIn = true;
                } // if
                else {
                    console.log(`admin no match`);
                } // else
            } // try
            catch (err) {
                console.log(`Error ${err}.`);
            } // catch
        } // if
        if (userLoggedIn) {
            res.json({statusCode: 201});
        } // if
        else {
            res.json({statusCode: 401})
        } // else
    } // else
}); // POST ("/admin"

router.put("/student/:id([0-9]{3,})", authenticate, (req, res, next) => {
    if (req.user.username === process.env.AD_USERNAME) {
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
    } // if
    else {
        const err = new Error(`Bad Request`);
        err.status = "fail";
        err.statusCode = 403;
        next(err);
        return;
    } // else
}); // PUT /student/:id

router.delete("/student/:id([0-9]{3,})", authenticate, (req, res, next) => {
    if (req.user.username === process.env.AD_USERNAME) {
        console.log(req.user);
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
    } // if
    else {
        const err = new Error(`Bad Request`);
        err.status = "fail";
        err.statusCode = 403;
        next(err);
        return;
    } // else
}); // DELETE /student/:id

router.all("*", (req, res, next) => {    
    const err = new Error(`Can't find ${req.originalUrl} on the server!`);
    err.status = "fail";
    err.statusCode = 404;
    next(err);
}); // ALL

router.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    res.status(err.statusCode).json({
        status : err.statusCode,
        message : err.message
    });
});

export {router};