import User from "../models/usermodel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

const login = async (req,res)=>{
    try{
        const {email,password} = req.body;

         if(!email || !password) {
            return res.status(400).json({
                message: "All fields are required."
            })
        } 

    const userdetails = await  User.findOne({email});

    if(!userdetails){
        return res.status(400).json({message: "User not found"});
    }

    const iscompare  = await bcrypt.compare(password , userdetails.password);
    if(!iscompare){
        return res.json({message: "password is incorrect"});
    }

    const token = jwt.sign(
        {userid: userdetails._id},
        process.env.JWT_SECRET,
        {expiresIn: "1d"}
    );

    const response = {
        message:"login successfully",
        token,
        user:{
            username: userdetails.username
        }
    };

    res.json(response);
    }
    catch(err){
        return res.json({message: err.message});
    }

}

export default login;