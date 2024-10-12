import React, { Component } from 'react'
import HeroHome from './HeroHome'
import Specials from './Specials'
import Testimonials from './Testimonials'
import OurStory from './OurStory'

export default class HomePage extends Component {
  render() {
    return (
      <>
        <HeroHome />
        <Specials />
        <Testimonials />
        <OurStory />
      </>
    )
  }
}
