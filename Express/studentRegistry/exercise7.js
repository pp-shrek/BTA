import 'dotenv/config';
import jwt from 'jsonwebtoken';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImphY2siLCJpYXQiOjE3MDY4NjYyOTl9.u-r3v8ebTToOwv8Y9t_om5qH8yrkPT76NSwiP-g1vtE";
const secret = process.env.SECRET;

jwt.verify(token, secret, (err, user) => {
    console.log(err);

    if(err) {
        console.log(`Error: ${err}`);
    } // if
    else {
        console.log(user);
    }
});