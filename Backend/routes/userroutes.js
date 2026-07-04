import express from 'express';
const router = express.Router();

import signup from "../controllers/signup.js";
import login from "../controllers/login.js";
import getdata from '../controllers/data.js';

router.post('/signup' , signup);
router.post('/login' , login);
router.get('/getdata' , getdata);

export default router;

