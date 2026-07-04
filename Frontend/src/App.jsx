import {Routes , Route} from "react-router-dom";
import Signup from "./pages/signup.jsx";
import Login from "./pages/login.jsx";
import NavBar from "./components/NavBar.jsx";
import Dashboard from "./components/dashboard.jsx";
import "./index.css";
import MoreInfo from "./pages/moreinfo.jsx";
import Assistant from "./assistant/assistant.jsx";


function App() {
  return (
    <div>
       <NavBar/>
    <Routes>
      <Route path="/" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/NavBar" element={<NavBar/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/moreinfo" element={<MoreInfo />} />
      <Route path="/assistant" element={<Assistant/>}/>
    </Routes>
    </div>
  );
}

export default App;
