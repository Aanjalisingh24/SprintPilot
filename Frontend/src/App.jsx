import {Routes , Route} from "react-router-dom";
import Signup from "./pages/signup.jsx";
import Login from "./pages/login.jsx";
import NavBar from "./components/NavBar.jsx";
import Dashboard from "./components/dashboard.jsx";
import "./index.css";
import MoreInfo from "./pages/moreinfo.jsx";
import Assistant from "./assistant/assistant.jsx";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.jsx";


function App() {
  return (
    <>
       <NavBar/>
    <Routes>
      <Route path="/" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/NavBar" element={<NavBar/>}></Route>
      <Route 
      path="/dashboard" 
      element={
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>}/>
      <Route 
      path="/moreinfo" 
      element={
        <ProtectedRoute>
          <MoreInfo />
        </ProtectedRoute>
      }/>
      <Route 
      path="/assistant" 
      element={
         <ProtectedRoute>
         <Assistant/>
        </ProtectedRoute>
      }/>
    </Routes>
    </>
  );
}

export default App;
