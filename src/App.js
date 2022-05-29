//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Mynavbar from './myComp/Mynavbar'
//import MedCard from './myComp/MedCard'




import SignupForm from './myComp/SignupForm'
import SigninForm from './myComp/SigninForm';

import {Route,Routes} from 'react-router-dom';
import Home from './myComp/Home';
import Usernavbar from './UserComp/Mynavbar';
import { Dashboard } from './UserComp/Dashboard';
import AdminDashBoard from './AdminComp/AdminDashBoard';
import Adminimage from './AdminComp/Adminimage';
import AddMed from './AdminComp/AddMed';
import DeleteMed from './AdminComp/DeleteMed';
import UpdateMed from './AdminComp/UpdateMed';
import Successpage from './AdminComp/Successpage';
import Failurepage from './AdminComp/Failurepage';
import Products from './myComp/Products';
import ViewMedPage from './myComp/ViewMedPage';
import Profile from './UserComp/Profile';
import Cart from './UserComp/Cart';
function App() {
  return (
   
    <>
      
       <Routes>
            <Route path="" element={<Mynavbar/>}>
              <Route  path="" element={<Home/>}/>
              <Route  path="SignIn" element={<><SigninForm/></>}/>
              <Route  path="SignUp" element={<><SignupForm/></>}/>
            </Route>
            <Route path="user" element={<Usernavbar/>}>
              <Route  path="" element={<Dashboard/>}/>
              <Route  path="products/:id" element={<Products/>}/>
              <Route  path="ViewMed/:id" element={<ViewMedPage/>}/>
              <Route  path="profile" element={<Profile/>}/>
              <Route  path="cart" element={<Cart/>}/>
              
            </Route>
            <Route path="admin" element={<Usernavbar/>}>
              <Route  path="" element={<AdminDashBoard/>}>
                <Route path="" element={<Adminimage/>}/>
                 <Route path="addMed" element={<AddMed/>}/>
                 <Route path="updateMed" element={<UpdateMed/>}/>
                 <Route path="success" element={<Successpage/>}/>
                 <Route path="error" element={<Failurepage/>}/>
                <Route path="deleteMed" element={<DeleteMed/>}/> 
              </Route>

             
            </Route>
        </Routes>
            
           
             
            
      
      
     
    </>
    
  );
}

export default App;
