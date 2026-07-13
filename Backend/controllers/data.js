import dotenv from "dotenv";
dotenv.config();
import JiraTickets from "../models/jiraticketmodel.js";
import Groq from "groq-sdk";

const getdata = async (req, res) => {
    try {
        const tickets = await JiraTickets.find();
        res.status(200).json(tickets);
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});


const chat = async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({
            message: "Message is required",
        });
    }

    try {
        const tickets = await JiraTickets.find()
            .select("ticketId project summary priority status assignee sprint storyPoints estimatedHours loggedHours")
            .limit(50);

        const ticketContext = tickets
            .map(
                (ticket) => `
Ticket ID: ${ticket.ticketId}
Project: ${ticket.project}
Summary: ${ticket.summary}
Status: ${ticket.status}
Priority: ${ticket.priority}
Assignee: ${ticket.assignee}
Sprint: ${ticket.sprint}
Estimated Hours: ${ticket.estimatedHours}
Logged Hours: ${ticket.loggedHours}
Story Points: ${ticket.storyPoints}
`
            )
            .join("\n-----------------\n");

        const completion = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "system",
                    content: `You are an AI assistant for a Jira Management application.
                    Current Jira Tickets: ${ticketContext}`,
                },
                {
                    role: "user",
                    content: message,
                },
            ],
            stream: true
        });

        for await (const chunk of completion){
            const text = chunk.choices[0]?.delta?.content || "";

            res.write(text);
        }

        res.end();

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message,
        });
    }
};

export default { getdata, chat };