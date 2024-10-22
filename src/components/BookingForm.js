import React from 'react';
import { useOutletContext } from 'react-router-dom';

function BookingForm() {
  const { availableTimes, fetchTimes, submitForm } = useOutletContext();

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    
    // Fetch new times for the selected date
    fetchTimes(selectedDate);
  };

  const [formDate, setDate] = React.useState(today);
  const [formTime, setTime] = React.useState("");
  const [formGuests, setGuests] = React.useState("");
  const [formOccasion, setOccasion] = React.useState("");

  const isFormValid = () => {
    return formDate && formTime && formGuests && formOccasion;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      date: formDate,
      time: formTime,
      guests: formGuests,
      occasion: formOccasion,
    };
    await submitForm(formData);
  };

  return (
    <form className="max-w-5xl grid gap-4" onSubmit={handleSubmit}>
      <h2 className="text-4xl font-serif font-bold tracking-tight text-forest-400 sm:text-5xl">Book Online</h2>
      <label className="text-xl font-bold" htmlFor="res-date">Choose date</label>
      <input 
        id="res-date"
        type="date"
        value={formDate}
        onChange={handleDateChange}
        min={today}
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
        defaultValue=""
        onChange={e => setOccasion(e.target.value)}
        className="h-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-forest-600 sm:text-sm sm:leading-6"
      >
        <option value=""></option>
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
        <option value="other">Other</option>
      </select>
      <input
        className={`mt-4 rounded-md px-3.5 py-2.5 text-sm font-semibold text-forest-700 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-600 ${
          isFormValid()
            ? "bg-peach-500 hover:bg-peach-600"
            : "bg-gray-300 cursor-not-allowed"
        }`}
        type="submit"
        value="Submit"
        disabled={!isFormValid()}
      />
      <p className="text-sm text-gray-00">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum luctus odio, non sodales augue. Mauris sodales sollicitudin varius. Fusce egestas porta sem, et placerat nibh maximus vel. Donec ipsum mauris, auctor quis sem vel, tempor tincidunt sapien.</p>
    </form>
  );
}

export default BookingForm;
