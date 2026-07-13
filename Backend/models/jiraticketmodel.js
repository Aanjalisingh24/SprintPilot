import mongoose from "mongoose";

const jireSchema = new mongoose.Schema({
    ticketId: String,
    project: String,
    issueType: String,
    summary: String,
    description: String,
    priority: String,
    status: String,
    component: String,
    assignee: String,
    reporter: String,
    sprint: String,
    storyPoints: Number,
    estimatedHours: Number,
    loggedHours: Number,
    environment: String,
    labels: String,
    createdAt: Date,
    updatedAt: Date
});

export default mongoose.model("JiraTickets" , jireSchema);