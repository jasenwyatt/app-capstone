import React from 'react'
import { useOutletContext } from 'react-router-dom'
import BookingForm from './BookingForm'

export default function HeroReserve() {
    const { availableTimes, setAvailableTimes } = useOutletContext();

    return (
        <section className="relative isolate overflow-hidden bg-gradient-to-b from-sand-500/20 pt-14">
            <div className="mx-auto max-w-7xl px-6 py-8 sm:py-10 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                    <div className="max-w-2xl lg:col-span-2 xl:col-auto">
                        <h1 className="text-6xl font-serif font-bold tracking-tight text-forest-600 sm:text-8xl">Reserve a Table</h1>
                        <h2 className="text-4xl font-serif font-bold tracking-tight text-forest-400 sm:text-5xl">Little Lemon</h2>
                    </div>
                    <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                        <p className="text-lg leading-8 text-gray-600">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    </div>
                    <div className="mt-10 w-full max-w-lg rounded-2xl sm:mt-8 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-18 bg-white shadow-lg p-8">
                        <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
                    </div>
                </div>
            </div>
        </section>
    )
}
