import React, { useState } from 'react';

export default function BookingForm({ availableTimes, setAvailableTimes }) {
    const [formDate, setDate] = useState("");
    const [formTime, setTime] = useState("");
    const [formGuests, setGuests] = useState("");
    const [formOccasion, setOccasion] = useState("");

    return (
      <form className="max-w-5xl grid gap-4">
        <h2 className="text-4xl font-serif font-bold tracking-tight text-forest-400 sm:text-5xl">Booking Form</h2>
        <label className="text-xl font-bold" htmlFor="res-date">Choose date</label>
        <input 
          id="res-date"
          type="date"
          onChange={e => setDate(e.target.value)}
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-forest-600 sm:text-sm sm:leading-6"
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          onChange={e => setTime(e.target.value)}
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-forest-600 sm:text-sm sm:leading-6"
        >
          {availableTimes.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          id="guests"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          onChange={e => setGuests(e.target.value)}
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-forest-600 sm:text-sm sm:leading-6"
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          onChange={e => setOccasion(e.target.value)}
          className="h-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-forest-600 sm:text-sm sm:leading-6"
        >
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Other</option>
        </select>
        <input className="mt-4 rounded-md bg-peach-500 px-3.5 py-2.5 text-sm font-semibold text-forest-700 shadow-sm hover:bg-peach-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-600" type="submit" value="Submit"></input>
        <p className="text-sm text-gray-00">
          {formTime}
        </p>
        <p className="text-sm text-gray-00">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum luctus odio, non sodales augue. Mauris sodales sollicitudin varius. Fusce egestas porta sem, et placerat nibh maximus vel. Donec ipsum mauris, auctor quis sem vel, tempor tincidunt sapien.</p>
      </form>
    )
}
