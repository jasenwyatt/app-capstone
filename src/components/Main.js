import React, { useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import HomePage from './HomePage'
import ReservePage from './ReservePage'

export default function Main() {
  const [availableTimes, setAvailableTimes] = useState([
    "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
  ]);

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/reservations" 
          element={<Outlet context={{ availableTimes, setAvailableTimes }} />}
        >
          <Route index element={<ReservePage />} />
        </Route>
      </Routes>
    </main>
  )
}
