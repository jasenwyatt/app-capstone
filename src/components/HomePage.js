import React, { Component } from 'react'
import Hero from './Hero'
import Specials from './Specials'
import Testimonials from './Testimonials'
import OurStory from './OurStory'

export default class HomePage extends Component {
  render() {
    return (
      <>
        <Hero />
        <Specials />
        <Testimonials />
        <OurStory />
      </>
    )
  }
}
