
import { MdOutlineAutoGraph } from "react-icons/md";
import { MdOutlineDataSaverOn } from "react-icons/md";
import { BsFillSpeakerFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { Link, Route, Routes } from "react-router-dom";
import AdminItemsPage from "./adminItems";
import UpdateItemPage from "./updateItemPage";
import AdminUsersPage from "./adminUsersPage";
import AdminOrdersPage from "./adminBookingPage";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminPage() {
  const [UserValidated, setUserValidated] = useState(false);
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(!token){
      window.location.href = "/login";
    }
    axios.get(`http://localhost:3000/api/users/`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    }).then((res)=>{
      console.log(res.data);
      const user = res.data;
      if(user.role == "admin"){
        setUserValidated(true);        
      }else{
        window.location.href = "/";
      }
      
    }).catch((err)=>{
      console.error(err);
      setUserValidated(false);
    })
  },[])
  
  return (
    <div className="w-full h-screen flex">
      {/* Sidebar */}
      <div className="w-[200px] h-full bg-green-200">
        <Link to="/admin/dashboard" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
          <MdOutlineAutoGraph /> Dashboard
        </Link>
        <Link to="/admin/bookings" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
          <MdOutlineDataSaverOn /> Bookings
        </Link>
        <Link to="/admin/items" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
          <BsFillSpeakerFill /> Items
        </Link>
        <Link to="/admin/users" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
          <FaUserCircle /> Users
        </Link>
      </div>

     
      <div className="flex-1 p-4 w-[calc(100w-200px)] bg-amber-200">
        <Routes path="/*">

          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
          <Route path="/bookings" element={<AdminOrdersPage/>} />
          <Route path="/items" element={<AdminItemsPage/>}/>
          <Route path="/users" element={<AdminUsersPage/>} />
          <Route path="/items/edit" element={<UpdateItemPage/>}/>

        </Routes>
        
      </div>
    </div>
  );
}
