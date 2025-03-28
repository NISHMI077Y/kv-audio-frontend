import { MdOutlineAutoGraph } from "react-icons/md";
import { MdOutlineDataSaverOn } from "react-icons/md";
import { BsFillSpeakerFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";


export default function AdminPage(){

    return(

        <div className= "w-full h-screen">
      <div className="w-[400px] h-full bg-green-200">
   <button className='w-full h-[40px] text[25px] font-bold flex justify-center items-center' > <MdOutlineAutoGraph />Dashboard</button>
   <button className='w-full h-[40px] text[25px] font-bold flex justify-center items-center'> <MdOutlineDataSaverOn />Bookings</button>
   <button className='w-full h-[40px] text[25px] font-bold flex justify-center items-center'> <BsFillSpeakerFill />Items</button>
   <button className='w-full h-[40px] text[25px] font-bold flex justify-center items-center'> <FaUserCircle/> Users</button>




      </div>
<div className="w-full">

</div>
      
    
    </div>

    )
}