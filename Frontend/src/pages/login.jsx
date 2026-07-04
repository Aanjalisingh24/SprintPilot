import { useState } from "react";
import API from "../API";

function login(){
    const [form , setform] = useState({
        email:"",
        password:""
    });

    const handlechange = (e) =>{
        setform({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handlesubmit = async (e) =>{
        e.preventDefault();

        try{
            const res = await API.post("/user/login" , form
            );
            alert(res.data.message);
        }
        catch(err){
            console.log(err.response?.data || err.message);
        }
    }


    return(
        <div>
            <form onSubmit={handlesubmit}>
                <div>
                    <label>Your email..</label>
                    <input
                    type="text"
                    placeholder="your email.."
                    value={form.email}
                    name="email"
                    onChange={handlechange}
                    />
                </div>
                <div>
                    <label>Your password...</label>
                    <input
                    type="password"
                    placeholder="your password..."
                    value={form.password}
                    name="password"
                    onChange={handlechange}
                    />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default login;