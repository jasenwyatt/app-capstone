import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <ul className="list-none flex flex-row gap-8 justify-end uppercase font-bold">
          <li className="font-semibold leading-6 text-gray-900"><Link to="/">Home</Link></li>
          <li className="font-semibold leading-6 text-gray-900"><Link to="/about">About</Link></li>
          <li className="font-semibold leading-6 text-gray-900"><Link to="/menu">Menu</Link></li>
          <li className="font-semibold leading-6 text-gray-900"><Link to="/reservations">Reservations</Link></li>
          <li className="font-semibold leading-6 text-gray-900"><Link to="/order">Order</Link></li>
          <li className="font-semibold leading-6 text-gray-900"><Link to="/login">Login <span aria-hidden="true">&rarr;</span></Link></li>
        </ul>
      </nav>
    )
  }
}
