import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';
import * as router from 'react-router-dom';

// Mock the useOutletContext hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useOutletContext: jest.fn(),
}));

describe('BookingForm', () => {
  beforeEach(() => {
    router.useOutletContext.mockReturnValue({
      availableTimes: ['17:00', '18:00', '19:00'],
      fetchTimes: jest.fn(),
      submitForm: jest.fn(),
    });
  });

  test('disables submit button when form is invalid', () => {
    render(<BookingForm />);

    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeDisabled();
  });

  test('enables submit button when form is valid', () => {
    render(<BookingForm />);

    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2023-10-10' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'birthday' } });

    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeEnabled();
  });

  test('calls submitForm with correct data when form is submitted', async () => {
    const mockSubmitForm = jest.fn();
    router.useOutletContext.mockReturnValue({
      availableTimes: ['17:00', '18:00', '19:00'],
      fetchTimes: jest.fn(),
      submitForm: mockSubmitForm,
    });

    render(<BookingForm />);

    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2023-10-10' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'birthday' } });

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: '2023-10-10',
      time: '17:00',
      guests: '2',
      occasion: 'birthday',
    });
  });
});
