import { useLocation } from "react-router-dom";
function MoreInfo({tickets}) {
     const location = useLocation();

    const { ticket } = location.state;
    return (
        <div>
            <h1 className="text-center p-5">Jira More Information</h1>
            <div className="flex justify-center items-center">
            <div className="border rounded-lg p-4 shadow bg-amber-900 text-white ">
                        <h2>Project Name: {ticket.project}</h2>
                        <p>Summary: {ticket.summary}</p>
                        <p>Description: {ticket.description}</p>
                        <p>Component: {ticket.component}</p>
                        <p>Assignee: {ticket.assignee}</p>
                        <p>Reporter: {ticket.reporter}</p>
                        <p>Sprint: {ticket.sprint}</p>
                        <p>StoryPoints: {ticket.storyPoints}</p>
                        <p>EstimatedHours: {ticket.estimatedHours}</p>
                        <p>LoggedHours: {ticket.loggedHours}</p>
                        <p>Environment: {ticket.environment}</p>
                        <p>Labels: {ticket.labels}</p> 

            </div>
        </div>
        </div>
    )
}

export default MoreInfo;