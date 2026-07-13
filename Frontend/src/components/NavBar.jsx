import { useNavigate } from "react-router-dom";

function NavBar(){
    const navigate = useNavigate();

    const logout=()=>{
      localStorage.clear();
      navigate('/');
    }
    
    return(
       <div className="bg-slate-900 p-2">
  <div className="bg-slate-700 text-white p-5 rounded-2xl flex justify-between items-center">

    <h1 className="text-2xl font-bold">
      SprintPilot
    </h1>

    <div className="flex gap-5">
      <button onClick={()=>{
        navigate('/dashboard')
      }} className="bg-slate-900 p-3 rounded-2xl transition-all duration-200 hover:scale-105">
        Dashboard
      </button>

      <button  onClick={()=>{
        navigate('/assistant')
      }}  className="bg-slate-900 p-3 rounded-2xl transition-all duration-200 hover:scale-105">
        Co-Pilot
      </button>

      <button  onClick={logout} className="bg-slate-900 p-3 rounded-2xl transition-all duration-200 hover:scale-105">
        Logout
      </button>
    </div>

  </div>
</div>
    )
}

export default NavBar;