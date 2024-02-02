import 'dotenv/config';
import jwt from 'jsonwebtoken';

const payload = { username: 'sugarplumfairy' };
const secret = process.env.SECRET;
const options = { expiresIn: '15min'};
const token = jwt.sign(payload, secret, options);
console.log(token);