import React from 'react'
import { useOutletContext } from 'react-router-dom'
import HeroReserve from './HeroReserve'

export default function ReservePage()  {
  const { availableTimes, setAvailableTimes } = useOutletContext();

  return (
    <>
      <HeroReserve availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
    </>
  )
}
