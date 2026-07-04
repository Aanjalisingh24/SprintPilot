import { useState } from "react";
import API from "../API";

function Signup(){
    const [formdata , setformdata] = useState({
        username:"",
        email:"",
        password:""
});

    const handlechange = (e) =>{
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value,
        })
    }

    const handlesubmit = async (e)=>{
        e.preventDefault();
        try{
            const res = await API.post("/user/signup" , formdata);
            alert(res.data.message);
        } catch(err){
            console.log(err.response?.data || err.message);
        }
    };

      return(
        <div id="container">
             <h1>Sign Up</h1>
        <div id="wholeform">
            <form id="form" onSubmit={handlesubmit}>
                <div className="input">
                    <label htmlFor="username">Enter your name = </label>
                    <input 
                    type="text" 
                    placeholder="username" 
                    id="username" 
                    value={formdata.username}
                    name="username"
                    onChange={handlechange}/>
                </div>
                 <div className="input">
                    <label htmlFor="email">Enter your email = </label>
                    <input 
                    type="text" 
                    placeholder="email" 
                    id="email" 
                    name="email"
                    value={formdata.email}
                    onChange={handlechange}/>
                </div>
                 <div className="input">
                    <label htmlFor="password">Enter your password = </label>
                    <input 
                    type="password" 
                    placeholder="password" 
                    id="password" 
                    name="password"
                    value={formdata.password}
                    onChange={handlechange}/>
                </div>
                <div>
                    <button id="btn">Submit</button>
                </div>
            </form>
        </div>
        </div>
      )
}

export default Signup;