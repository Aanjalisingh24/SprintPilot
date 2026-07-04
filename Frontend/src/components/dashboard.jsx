import { useEffect, useState } from "react";
import API from "../API";
import MoreInfo from "../pages/moreinfo.jsx";
import { useNavigate } from "react-router-dom";


function Dashboard() {
    const [tickets, setTickets] = useState([]);
     const navigate = useNavigate();


    const getdata = async () => {
        try {
            const res = await API.get("/user/getdata");
            setTickets(res.data);
            console.log("fetched sucessfully");
        }
        catch (err) {
            console.log(err.response?.data || err.message);
        }
    }


    useEffect(() => {
        getdata ;
    }, [tickets]);

    return (
        <div>
            <div  className="text-center">
                 <button onClick={getdata} className="bg-amber-700 text-white p-3 rounded-xl m-3" >Click here for viewing all jira</button>
            </div>
            <div className="grid grid-cols-5 gap-10 m-5">
            {tickets.map((ticket) => (
                <div key={ticket._id} className="border rounded-lg p-4 shadow bg-amber-900 text-white">
                    <h2>Ticket Id: {ticket.ticketId}</h2>
                    <p>IssueType: {ticket.issueType}</p>
                    <p>Priority: {ticket.priority}</p>
                    <p>Status: {ticket.status}</p>
                    <button onClick={() =>  navigate("/moreinfo" ,{ state: { ticket } })} className="bg-white text-black m-5 rounded-xl w-25 h-10">More Info</button>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Dashboard;