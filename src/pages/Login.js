import React from 'react'
import { useForm } from 'react-hook-form';
import{useDispatch} from "react-redux"
import { signin } from '../redux/slices/userSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {  toast } from 'react-toastify';
const Login = () => {
  const navigate=useNavigate()
  const {isAdmin,isAuth,error}=useSelector(state=>state.user)
  const dispatch=useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {console.log(data);
  dispatch(signin(data));
}
useEffect(()=>{toast.error(error, {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  })},[error])
  useEffect(()=>{if (isAdmin) navigate("/dashboard")},[isAdmin])
  
  console.log(errors);
  return (
    <div style={{
      backgroundImage:"url('https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg')"
      ,backgroundSize:"100vw",
      height:"120vh",
      backgroundRepeat:"no-repeat"
  }}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" placeholder="Email" {...register("email", {required: true})} />
      <input type="password" placeholder="Password" {...register("password", {required: true, max: 20, min: 6})} />
      <input type="submit" />
    </form>
  
    </div>
  )
}

export default Login