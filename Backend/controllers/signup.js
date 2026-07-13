import User from "../models/usermodel.js";
import bcrypt from "bcrypt";

const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if(!username || !email || !password) {
            return res.status(400).json({
                message: "All fields are required."
            })
        } 

        const userdetails = await User.findOne({ email });

        if (userdetails) {
            return res.status(409).json({
                message: "User already exists"
            });
        }

        const hashpassword = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            email,
            password: hashpassword
        });

        await user.save();

        return res.status(201).json({
            message: "User created successfully"
        });

    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
};

export default signup;