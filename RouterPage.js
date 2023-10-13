import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./users/Login";
import Registration from "./Registration";
import Dashboard from "./users/Dashboard";
import Orders from "./users/Orders";
import Profile from "./users/Profile";
import Cart from "./users/Cart";
import Registration from "./users/Registration";
import AdminDashboard from "./admin/AdminDashboard";
import AdminOrders from "./admin/AdminOrders";
import Medicine from "./admin/Medicine";


export default function RouterPage(){
    return(
        <Router>
            <Routes>
                <Route path='/registration' element={<Login />}/>
                <Route path='/dashboard' element={<Registration />}/>
                <Route path='/myorders' element={<Dashboard />}/>
                <Route path='/profile' element={<Orders />}/>
                <Route path='/cart' element={<Profile />}/>
                <Route path='/' element={<Cart />}/>
                <Route path='/products' element={<MedicineDisplay />}/>

                <Route path='/admindashboard' element={<AdminDashboard />}/>
                <Route path='/adminorders' element={<AdminOrders />}/>
                <Route path='/customers' element={<CustomerList />}/>
                <Route path='/medicine' element={<Medicine />}/>
    

            
            </Routes>
        </Router>
    )
}