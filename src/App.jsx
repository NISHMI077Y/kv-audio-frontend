
import './App.css'
import ProductCard from './components/productCard'

import AdminPage from './pages/admin/adminPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from './pages/home/homePage';
import Testing from './components/testing';
import Login from './pages/login/login';
import LoginPage from './pages/login/login';
import { Toaster } from 'react-hot-toast';








function App() {
  
  return (
    <BrowserRouter>
          <Toaster position='top-right' /> 


   <Routes path= "/*">

      <Route  path='/testing' element= {<Testing/>}/>
      <Route path="/admin" element={<AdminPage/>}/>
      <Route path="/*" element={<HomePage/>}/>
      <Route  path='/login' element= {<LoginPage/>}/>

      

   
   </Routes>
      
      
       
       </BrowserRouter>  
  )
}

export default App
