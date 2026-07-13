import { useState } from "react";
import API from "../API";
import { useNavigate  ,Link} from "react-router-dom";

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

    const navigate = useNavigate();

    const handlesubmit = async (e) =>{
        e.preventDefault();

        try{
            const res = await API.post("/user/login" , form);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user" , res.data.user.username);
            console.log(localStorage.getItem("user"));
            alert(res.data.message);
            navigate('/dashboard')
        }
        catch(err){
            console.log(err.response?.data || err.message);
            alert(err.response.data.message);
        }
    }


    return(
        <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center">
            <h1 className="p-5 text-2xl rounded-3xl m-5">Log In</h1>
            <div className="bg-slate-600 flex items-center rounded-2xl">
                <form onSubmit={handlesubmit} className="flex flex-col items-center">
                <div className="p-5 bg-slate-900 rounded-2xl m-3 w-80 flex items-center gap-3">
                    <label className="w-20">Email </label>
                    <input className="bg-slate-600 rounded-2xl p-2 transition-all duration-200 hover:scale-105"
                    type="text"
                    placeholder="Email.."
                    value={form.email}
                    name="email"
                    onChange={handlechange}
                    />
                </div>
                <div className="p-5 bg-slate-900 rounded-2xl m-3 w-80 flex items-center gap-3">
                    <label className="w-20">Password </label>
                    <input className="bg-slate-600 rounded-2xl p-2 transition-all duration-200 hover:scale-105"
                    type="password"
                    placeholder="Password.."
                    value={form.password}
                    name="password"
                    onChange={handlechange}
                    />
                </div>
               <div className=" flex flex-col  gap-2 p-5">
                        <button id="btn" className="bg-slate-900 p-3 rounded-xl transition-all duration-200 hover:scale-105">Log In </button>
                        <p className="text-gray-400 ">
                            Already have an account?{" "}
                            <Link to="/" className="text-white hover:underline">
                                Signup
                            </Link>
                        </p>
                    </div>
            </form>
            </div>
        </div>
    )
}

export default login;