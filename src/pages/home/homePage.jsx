import { Route, Routes } from "react-router-dom";
import Header from "../../components/header";
import Contact from "./contact";
import Gallery from "./gallery";
import Items from "./items";
import Home from "./home";
import ErrorNotFound from "./error";
import ProductOverView from "./productOverview";
import BookingPage from "./bookingPage";
import GalleryPage from "./gallery";
import HeroSection from "./home";

export default function HomePage(){
    return(
        <>
            
           <Header/>
           <div className="h-[calc(100vh-100px] w-full bg-primary">

                <Routes path="/*">

                <Route path="/contact" element={<Contact/>}/>
                <Route path="/gallery" element={<GalleryPage/>}/>
                <Route path="/items" element={<Items/>}/>
                <Route path="/product/:key" element={<ProductOverView/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/*" element={<ErrorNotFound/>}/>
                <Route path="/booking" element={<BookingPage/>}/>



                
                </Routes>

           </div>


           </>    
           
    )
}