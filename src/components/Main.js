import React, { useReducer, useEffect } from 'react'
import { Routes, Route, Outlet, useNavigate } from 'react-router-dom'
import HomePage from './HomePage'
import ReservePage from './ReservePage'
import ConfirmationPage from './ConfirmationPage'
import { fetchAPI, submitAPI } from '../mockAPI'  // Import both mock functions

export default function Main() {
  const navigate = useNavigate();

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

  async function submitForm(formData) {
    const success = await submitAPI(formData);
    if (success) {
      navigate('/success');
    }
  }

  useEffect(() => {
    fetchTimes(new Date());
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/success" element={<ConfirmationPage />} />
        <Route
          path="/reservations"
          element={<Outlet context={{ availableTimes, dispatchAvailableTimes, fetchTimes, submitForm }} />}
        >
          <Route index element={<ReservePage />} />
        </Route>
      </Routes>
    </main>
  )
}
