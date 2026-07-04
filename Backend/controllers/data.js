import JiraTickets from "../models/jiraticketmodel.js";

const getdata = async(req, res)=>{
    try{
         const tickets = await  JiraTickets.find();
         res.status(200).json(tickets);
    }
    catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};

export default getdata;