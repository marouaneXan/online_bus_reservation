import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import ReservationCards from '../Components/Reservation/ReservationCards'
import { token } from '../Config/Token'

const Reservations = () => {
  const navigate=useNavigate()
  useEffect(()=>{
    token ? navigate('/reservations') : navigate('/register')
  },[token])
  return (
    <>
      <ReservationCards/>
    </>
  )
}

export default Reservations