import { useEffect, useState } from "react";
import API from "../API";
import MoreInfo from "../pages/moreinfo.jsx";
import { useNavigate } from "react-router-dom";


function Dashboard() {
     const user = localStorage.getItem("user");
    const [tickets, setTickets] = useState([]);
     const navigate = useNavigate();


    const getdata = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await API.get("/user/getdata" , {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });
            setTickets(res.data);
        }
        catch (err) {
            console.log(err.response?.data || err.message);
        }
    }


    useEffect(() => {
        getdata ;
    }, [tickets]);

    return (
        <div className="min-h-screen bg-slate-900 text-white">
            <h1 className="text-4xl text-center p-5">Hello {user} , How are you?</h1>
            <div className="text-center">
                 <button onClick={getdata} className="bg-slate-600 text-white p-3 rounded-xl m-3" >Click here for viewing all jira</button>
            </div>
            <div className="grid grid-cols-5 gap-10 m-5">
            {tickets.map((ticket) => (
                <div key={ticket._id} className="border rounded-lg p-4 shadow bg-slate-700 text-white">
                    <h2>Ticket Id: {ticket.ticketId}</h2>
                    <p>IssueType: {ticket.issueType}</p>
                    <p>Priority: {ticket.priority}</p>
                    <p>Status: {ticket.status}</p>
                    <button onClick={() =>  navigate("/moreinfo" ,{ state: { ticket } })} className="bg-slate-900 text-white m-5 rounded-xl w-25 h-10">More Info</button>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Dashboard;