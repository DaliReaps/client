import React from 'react'
import { useForm } from 'react-hook-form';
import{useDispatch} from "react-redux"
import { signup } from '../redux/slices/userSlice';
import './Register.css'
const Register = () => {
    const dispatch=useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {dispatch(signup(data))
    console.log(data)
    }
  console.log(errors);
  return (
    <div>
      <div style={{
        backgroundImage:"url('https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg')"
        ,backgroundSize:"100vw",
        height:"100vh",
        backgroundRepeat:"no-repeat"
    }}>
        <form onSubmit={handleSubmit(onSubmit)} >
      <input type="text" placeholder="First name" {...register("firstname", {required: true})} />
      <input type="text" placeholder="Last name" {...register("lastname", {required: true})} />
      <input type="email" placeholder="Email" {...register("email", {required: true})} />
      <input type="password" placeholder="Password" {...register("password", {required: true, max: 20, min: 6})} />
      <input type="number" placeholder="Age" {...register("age", {required: true})} />

      <input type="submit" />
    </form>
      
      </div>
        
    </div>
  )
}

export default Register