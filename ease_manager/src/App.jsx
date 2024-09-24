import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Member_details from "./pages/Member_details"
import Member_details_3 from "./pages/Member_details_3"
import Home from "./pages/Home"
import WaitingList from "./pages/Waitinglist"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Home/>}/> */}
      <Route path="/dashboard" element ={<Dashboard/>}/>  
      <Route path="/" element ={<Login/>}/> 
      <Route path="/Member_details" element ={<Member_details/>}/>
      <Route path="/Member_details_3" element ={<Member_details_3/>}/>  
      <Route path="/Waiting_list" element ={<WaitingList/>}/>  

      {/* <Route path="/room_allocation" element ={<SignIn/>}/> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App
