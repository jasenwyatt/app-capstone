import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <nav className="m-4">
        <ul className="list-none flex flex-row gap-8 justify-end uppercase font-bold">
          <li className="p-2"><Link to="/">Home</Link></li>
          <li className="p-2"><Link to="/about">About</Link></li>
          <li className="p-2"><Link to="/menu">Menu</Link></li>
          <li className="p-2"><Link to="/reservations">Reservations</Link></li>
          <li className="p-2"><Link to="/order">Order</Link></li>
          {/*<li className="p-2"><Link to="/login">Login</Link></li>*/}
        </ul>
      </nav>
    )
  }
}
