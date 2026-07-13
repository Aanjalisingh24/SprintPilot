import express from 'express';
const router = express.Router();

import signup from "../controllers/signup.js";
import login from "../controllers/login.js";
import controller from "../controllers/data.js";
import auth from '../middleware/authmiddleware.js';



router.post('/signup' , signup);
router.post('/login' , login);
router.get('/getdata' , auth ,  controller.getdata);
router.post('/chat' , auth,  controller.chat);

export default router;

