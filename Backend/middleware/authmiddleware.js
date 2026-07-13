import jwt from 'jsonwebtoken'

const auth = async( req , res , next)=>{
    try{
         const header = req.header('Authorization');

    if(!header){
        return res.status(401).json({message: "token not found"})
    }

    const token = header.split(' ')[1];

    const decoded = jwt.verify(token , process.env.JWT_SECRET);

    if(!decoded){
        return res.status(400).json({message: "token not found"})
    }

    req.user = decoded;
    next();
    } catch(err){
        return res.status(401).json({
            message:"invalid or expired token",
        })
    }
}

export default auth;