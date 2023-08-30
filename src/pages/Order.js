import React from 'react'
import {useSelector,useDispatch}from 'react-redux'
import { useEffect ,useState} from 'react'
import { selforder } from '../redux/slices/userSlice'
import {useNavigate} from 'react-router-dom'

  
const Order = () => {
  const navigate=useNavigate()
  const {isAuth}=useSelector(state=>state.user)
useEffect(()=>{if (!isAuth) navigate("/register")},[isAuth])
const {orderdata}=useSelector(state=>state.user)
const dispatch=useDispatch()
var TotalPrice=0
  useEffect(()=>{dispatch(selforder())},[])
  return (<div >
    <br></br>
    <h1>My orders</h1>
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around	'}}>
  {orderdata.map(el=><div style={{backgroundColor:'rgb(216, 216, 174)',border:'groove',minWidth:'40%',columnGap:'30px', marginBottom: '50px'}} >
  <h3>Item :{el.item.name}</h3>
      <h3>Number of items:{el.numberOfItems}</h3>
      <img style={{width:'30vw',height:'30vh'}} src= {`${el.item.img}`}></img> 
      <h3>Total Item Price:{`${el.item.price*el.numberOfItems}`}$</h3>
    {console.log(TotalPrice+=el.item.price*el.numberOfItems)}

  </div>)}
  {console.log(TotalPrice)}
  <div>  <h1>Total price:{`${TotalPrice}`}$</h1></div>
</div></div>
    
  )
}

export default Order