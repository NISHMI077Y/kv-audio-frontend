
import './App.css'
import ProductCard from './components/productCard'

import AdminPage from './pages/admin/adminPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from './pages/home/homePage';
import Testing from './components/testing';
import Login from './pages/login/login';
import LoginPage from './pages/login/login';
import { Toaster } from 'react-hot-toast';
import AddProductsPage from './pages/admin/addItemPage';
import AddItemPage from './pages/admin/addItemPage';
import RegisterPage from './pages/register/register';
import { GoogleOAuthProvider } from '@react-oauth/google';
import VerifyEmail from './pages/verifyEmail/verifyEmail';









function App() {
  

  return (

    <GoogleOAuthProvider clientId="1053001966359-3tdebshnod2ooiuug8on00i4pc733dpt.apps.googleusercontent.com">
    <BrowserRouter>
          <Toaster position='top-right' /> 


   <Routes path= "/*">

      <Route  path='/testing' element= {<Testing/>}/>
      <Route path="/admin/*" element={<AdminPage/>}/>

      <Route path="/*" element={<HomePage/>}/>
      <Route  path='/login' element= {<LoginPage/>}/>
      
      <Route path= "verifyEmail" element= { <VerifyEmail/>}/>

      <Route path= "/register" element= { <RegisterPage/>}/>
      <Route path='/admin/items/add' element={<AddItemPage/>}/>


      

   
   </Routes>
      
      
       
       </BrowserRouter> 
       </GoogleOAuthProvider> 
  );
}

export default App
