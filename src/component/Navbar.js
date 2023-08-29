import React from 'react'
import {Link } from "react-router-dom"
import { logout } from '../redux/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import './Navbar.css'
import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
const Navbar = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {isAuth}=useSelector(state=>state.user)
    {useEffect(()=>{if (isAuth) navigate("/menus")},[isAuth])}
    {useEffect(()=>{if (!isAuth) navigate("/register")},[isAuth])}
  return ( <>{
        isAuth? 
        <div className="navigationBar" id="nv">
        <Link to ="/contacts"  style= { { textDecoration: 'none'}}>Contacts</Link>
        <Link to ="/menus"  style= { { textDecoration: 'none' }}>Menus</Link>
        <Link to ="/order"  style= { { textDecoration: 'none' }}>Order</Link>
      
        <button style={{backgroundColor:'rgb(176, 176, 84)',width:'200px',borderRadius:'20px'}} onClick={()=>dispatch(logout())}>Log out</button></div> 
        :<div>
        <div className="navigationBar" id="nv">
        <div><Link to="/login"  style= { { textDecoration: 'none' }}>Login</Link></div>
        <div><Link to ="/register"  style= { { textDecoration: 'none' }}>Register</Link></div>
        <div> <Link to ="/contacts"  style= { { textDecoration: 'none' }}>Contacts</Link></div>
        <div><Link to ="/menus"  style= { { textDecoration: 'none' }}>Menus</Link></div>
        
       
        
        
        
        </div>
        
        </div>
        }
   
   </> )
}

export default Navbar