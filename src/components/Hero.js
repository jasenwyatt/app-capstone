import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Hero extends Component {
  render() {
    return (
        <section className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
            <div className="mx-auto max-w-7xl px-6 py-8 sm:py-10 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                    <div className="max-w-2xl lg:col-span-2 xl:col-auto">
                        <h1 className="text-6xl font-serif font-bold tracking-tight text-gray-900 sm:text-8xl">Little Lemon</h1>
                        <h2 className="text-4xl font-serif font-bold tracking-tight text-gray-600 sm:text-5xl">Chicago</h2>
                    </div>
                    <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                        <p className="text-lg leading-8 text-gray-600">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <Link to="/reservations" className="rounded-md bg-forest-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-forest-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Reserve a Table</Link>
                            <Link to="/" className="rounded-md bg-lemon-500 px-3.5 py-2.5 text-sm font-semibold text-forest-900 shadow-sm hover:bg-lemon-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Order Online</Link>
                        </div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="" className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-8 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-18" />
                </div>
            </div>
        </section>
    )
  }
}
