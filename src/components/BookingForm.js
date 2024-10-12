import React, { Component } from 'react'

export default class BookingForm extends Component {
  render() {
    return (
      <form className="max-w-5xl grid gap-4">
        <h2 className="text-4xl font-serif font-bold tracking-tight text-forest-400 sm:text-5xl">Booking Form</h2>
        <label className="text-xl font-bold" for="res-date">Choose date</label>
        <input type="date" id="res-date" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-forest-600 sm:text-sm sm:leading-6" />
        <label for="res-time">Choose time</label>
        <select id="res-time" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-forest-600 sm:text-sm sm:leading-6">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
        </select>
        <label for="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-forest-600 sm:text-sm sm:leading-6" />
        <label for="occasion">Occasion</label>
        <select id="occasion" class="h-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-forest-600 sm:text-sm sm:leading-6">
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Other</option>
        </select>
        <input className="mt-4 rounded-md bg-peach-500 px-3.5 py-2.5 text-sm font-semibold text-forest-700 shadow-sm hover:bg-peach-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-600" type="submit" value="Submit"></input>
        <p className="text-sm text-gray-00">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum luctus odio, non sodales augue. Mauris sodales sollicitudin varius. Fusce egestas porta sem, et placerat nibh maximus vel. Donec ipsum mauris, auctor quis sem vel, tempor tincidunt sapien.</p>
      </form>
    )
  }
}
