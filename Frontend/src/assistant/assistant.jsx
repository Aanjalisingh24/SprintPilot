import { useEffect, useState } from "react";
import axios from "axios";
import API from "../API";

function assistant() {
    const[query , setquery] = useState("");

    const [data , setdata] = useState([]);

    const getdata = async ()=>{
        try{
            const res = await API.get("/user/getdata");
            setdata(res.data);
        }
        catch(err){
            console.log(err.response?.data || err.message);
        }
    }

    const handlechange = (e) =>{
        setquery(e.target.value);
    }

    useEffect(()=>{
        getdata();
    },[]);


    return (
        <div className="flex justify-center m-20">
             <div className="flex  gap-2 bg-amber-900 text-white w-85 rounded-2xl">
            <div className="flex justify-center p-4">
                <input className="pl-2"
                    type="text"
                    placeholder="Enter your query"
                    value={query}
                    onChange={handlechange}
                />
            </div>
            <div className="flex justify-center m-5">
                <button className="bg-white text-amber-900 p-2 rounded-xl">Submit</button>
            </div>
        </div>
        </div>
    )
}

export default assistant;