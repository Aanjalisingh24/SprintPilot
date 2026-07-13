import { useState } from "react";
import API from "../API";
import { useNavigate , Link } from "react-router-dom"

function Signup() {
    const [formdata, setformdata] = useState({
        username: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handlechange = (e) => {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value,
        })
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post("/user/signup", formdata);
            alert(res.data.message);
            navigate('/login')
        } catch (err) {
            console.log(err.response?.data || err.message);
            alert(err.response.data.message);
        }
    };

    return (
        <div id="container" className="min-h-screen bg-slate-900 text-white flex flex-col items-center">
            <h1 className="p-5 text-2xl rounded-3xl m-5">Sign Up</h1>
            <div id="wholeform" className="bg-slate-600 flex items-center rounded-2xl p-4">
                <form id="form" onSubmit={handlesubmit} className="flex flex-col items-center">
                    <div className="p-5 bg-slate-900 rounded-2xl m-3 w-80 flex items-center gap-3">
                        <label htmlFor="username" className="w-20">
                            Name
                        </label>
                        <input
                            className="flex-1 bg-slate-600 rounded-2xl p-2 transition-all duration-200 hover:scale-105"
                            type="text"
                            placeholder="Username"
                            id="username"
                            value={formdata.username}
                            name="username"
                            onChange={handlechange}
                        />
                    </div>
                    <div className="p-5 bg-slate-900 rounded-2xl m-3 w-80 flex items-center gap-3">
                        <label htmlFor="email" className="w-20">Email </label>
                        <input className=" flex-1 bg-slate-600 rounded-2xl p-2 transition-all duration-200 hover:scale-105"
                            type="text"
                            placeholder="email"
                            id="email"
                            name="email"
                            value={formdata.email}
                            onChange={handlechange} />
                    </div>
                    <div className="p-5 bg-slate-900 rounded-2xl m-3 w-80 flex items-center gap-3">
                        <label htmlFor="password" className="w-20">Password</label>
                        <input className="bg-slate-600 rounded-2xl p-2 transition-all duration-200 hover:scale-105"
                            type="password"
                            placeholder="password"
                            id="password"
                            name="password"
                            value={formdata.password}
                            onChange={handlechange} />
                    </div>
                    <div className=" flex flex-col  gap-2 p-5">
                        <button id="btn" className="bg-slate-900 p-3 rounded-xl transition-all duration-200 hover:scale-105">Submit</button>
                        <p className="text-gray-400 ">
                            Already have an account?{" "}
                            <Link to="/login" className="text-white hover:underline">
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;