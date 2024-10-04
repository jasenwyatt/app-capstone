import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import ReservePage from './ReservePage'

export default class Main extends Component {
  render() {
    return (
        <main>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/reservations" element={<ReservePage />}></Route>
          </Routes>
        </main>
    )
  }
}
