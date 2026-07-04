import mongoose from "mongoose";

const dbconnect = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("dbconnected...");

    }
    catch(err){
        console.log(err.message);
    }
}

export default dbconnect;