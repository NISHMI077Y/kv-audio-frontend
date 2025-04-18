import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="w-full h-[100px] shadow-xl flex justify-center items-center relative bg-accent "  >
<img src= "/logo1.png" alt="logo" className="w-[100px] h-[100px] absolute left-2.5" />
            <Link to="/" className="text-[25px] font-bold m-4">Home</Link>
            <Link to="/contact" className="text-[25px] font-bold m-4">Contact</Link>
            <Link to="/gallery" className="text-[25px] font-bold m-4">Gallery</Link>
            {/* Items */}
            <Link to="/items" className="text-[25px] font-bold m-4">Items</Link>
            

        </header>
    )
     
}