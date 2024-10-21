import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import * as router from 'react-router-dom';

// Mock the useOutletContext hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useOutletContext: jest.fn(),
}));

test('renders BookingForm with static text', () => {
  // Mock the context data
  router.useOutletContext.mockReturnValue({
    availableTimes: ['17:00', '18:00', '19:00'],
  });

  render(<BookingForm />);
  const headingElement = screen.getByText(/Book Online/i);
  expect(headingElement).toBeInTheDocument();
});
