import React, { useReducer, useEffect } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import HomePage from './HomePage'
import ReservePage from './ReservePage'
import { fetchAPI } from '../mockAPI'  // Import the mock function

export default function Main() {
  function updateTimes(state, action) {
    switch (action.type) {
      case 'SET_TIMES':
        return action.payload;
      default:
        return state;
    }
  }

  const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, []);

  async function fetchTimes(date) {
    const times = await fetchAPI(new Date(date));
    dispatchAvailableTimes({ type: 'SET_TIMES', payload: times });
  }

  useEffect(() => {
    fetchTimes(new Date());
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/reservations" 
          element={<Outlet context={{ availableTimes, dispatchAvailableTimes, fetchTimes }} />}
        >
          <Route index element={<ReservePage />} />
        </Route>
      </Routes>
    </main>
  )
}
