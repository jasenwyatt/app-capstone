import React from 'react'
import { useOutletContext } from 'react-router-dom'
import HeroReserve from './HeroReserve'

export default function ReservePage()  {
  const { availableTimes, dispatchAvailableTimes, fetchAPI } = useOutletContext();

  return (
    <>
      <HeroReserve 
        availableTimes={availableTimes} 
        dispatchAvailableTimes={dispatchAvailableTimes} 
        fetchAPI={fetchAPI} 
      />
    </>
  )
}
