import React, { Component } from 'react'
import Nav from './Nav'

export default class Header extends Component {
  render() {
    return (
      <header className="flex p-4">
        <div className="basis-1/3">
          <div>Logo</div>
        </div>
        <div className="basis-2/3">
          <Nav />
        </div>
      </header>
    )
  }
}
