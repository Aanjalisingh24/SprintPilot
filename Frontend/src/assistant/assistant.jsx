import { useEffect, useState } from "react";
import axios from "axios";
import API from "../API";
import ReactMarkdown from "react-markdown";
const user = localStorage.getItem("user");


function assistant() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);
  const user = localStorage.getItem("user");

  const sendMessage = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        "http://localhost:3000/user/chat" ,
        {
          method: "POST",
          body: JSON.stringify({message}),
          headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`,
          },
        }
    );

      const reader = res.body.getReader();

      async function result() {
        try{
          setReply("");
          setMessage("");
          const decoder = new TextDecoder();
          while(true){
            const{value , done} = await reader.read();
            if(done) break;
            const text = decoder.decode(value);
            setReply(prev => prev + text);
          }
        }
        catch(err){
          console.log(err.response?.data , err.message);
        }
        
      }
      result();


    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="flex flex-col items-center m-20">
        <h1 className="text-4xl p-7">Hello , {user}. What's on your mind?</h1>
        <div className="flex  bg-slate-700 text-white w-100 rounded-4xl">
          <div className="flex justify-center p-4">
            <input className=" flex-1 pl-2 rounded-2xl transition-all duration-200 hover:scale-105 w-65"
              type="text"
              placeholder="Ask SprintPilot..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="flex  justify-end m-5 transition-all duration-200 hover:scale-105">
            <button onClick={sendMessage} className="bg-slate-900 text-white p-3 rounded-xl">Send</button>
          </div>
        </div>


        {reply && (
          <div className="w-full max-w-4xl mt-6 rounded-2xl bg-white/10 backdrop-blur-lg 
          border border-slate-700 p-6 text-slate-100 leading-8 shadow-xl transition-all duration-300" >
            <ReactMarkdown>{reply}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  )
}

export default assistant;