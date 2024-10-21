import React, { useReducer } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import HomePage from './HomePage'
import ReservePage from './ReservePage'

export default function Main() {
  function updateTimes(state, action) {
    // For now, return the same available times regardless of the date
    return state;
  }
  
  function initializeTimes() {
    return ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }

  const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, null, initializeTimes);

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/reservations" 
          element={<Outlet context={{ availableTimes, dispatchAvailableTimes }} />}
        >
          <Route index element={<ReservePage />} />
        </Route>
      </Routes>
    </main>
  )
}
