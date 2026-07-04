import User from "../models/usermodel.js";
import bcrypt from "bcrypt";

const login = async (req,res)=>{
    try{
        const {email,password} = req.body;

        console.log("Request Body:", req.body);
console.log("Email received:", email);

    const userdetails = await  User.findOne({email});

    if(!userdetails){
        return res.status(400).json({message: "User not found"});
    }

    const iscompare  = await bcrypt.compare(password , userdetails.password);
    if(!iscompare){
        return res.json({message: "password is incorrect"});
    }

    return res.status(200).json({message: "login sucessfully"});

    }
    catch(err){
        return res.json({message: err.message});
    }

}

export default login;