import mongoose from "mongoose";

const jireSchema = new mongoose.Schema({
    ticketid :String,
    issueType : String,
    status :String,
    priority:String
})

export default mongoose.model("JiraTickets" , jireSchema);