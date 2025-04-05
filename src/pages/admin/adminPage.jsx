// import { MdOutlineAutoGraph } from "react-icons/md";
// import { MdOutlineDataSaverOn } from "react-icons/md";
// import { BsFillSpeakerFill } from "react-icons/bs";
// import { FaUserCircle } from "react-icons/fa";
// import { Link, Route, Routes } from "react-router-dom";


// export default function AdminPage(){

//     return(

//         <div className= "w-full h-screen flex">
//       <div className="w-[400px] h-full bg-green-200">
//    <Link to="/admin/" className='w-full h-[40px] text[25px] font-bold flex justify-center items-center' > <MdOutlineAutoGraph />Dashboard</Link>
//    <Link to="/admin/bookings" className='w-full h-[40px] text[25px] font-bold flex justify-center items-center'> <MdOutlineDataSaverOn />Bookings</Link>
//    <Link to="/admin/items" className='w-full h-[40px] text[25px] font-bold flex justify-center items-center'> <BsFillSpeakerFill />Items</Link>
//    <Link to="/admin/users" className='w-full h-[40px] text[25px] font-bold flex justify-center items-center'> <FaUserCircle/> Users</Link>

 


//       </div>
// <div className="w-[calc(100vw-400px)] bg-blue-300">
// <Routes path="/*">
//           <Route path="/admin/dashboard" element={<h1>Dashboard</h1>} />
//           <Route path="/admin/bookings" element={<h1>Bookings</h1>} />
//           <Route path="/admin/items" element={<h1>Items</h1>} />
//           <Route path="/admin/users" element={<h1>Users</h1>} />
//         </Routes>



// </div>
      
    
//     </div>

//     )
// }


import { MdOutlineAutoGraph } from "react-icons/md";
import { MdOutlineDataSaverOn } from "react-icons/md";
import { BsFillSpeakerFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { Link, Route, Routes } from "react-router-dom";
import AdminItemsPage from "./adminItems";

export default function AdminPage() {
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
          <Route path="/bookings" element={<h1>Bookings</h1>} />
          <Route path="/items" element={<AdminItemsPage/>}/>
          <Route path="/users" element={<h1>Users</h1>} />
        </Routes>
        
      </div>
    </div>
  );
}
