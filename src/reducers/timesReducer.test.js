import { initializeTimes, updateTimes } from './timesReducer';

describe('timesReducer', () => {
  describe('initializeTimes', () => {
    test('should return the initial available times', () => {
      const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      const result = initializeTimes();
      expect(result).toEqual(expectedTimes);
    });
  });

  describe('updateTimes', () => {
    test('should return the same state that is provided', () => {
      const currentState = ['17:00', '18:00', '19:00'];
      const action = { type: 'UPDATE_TIMES', payload: '2023-06-01' };
      const result = updateTimes(currentState, action);
      expect(result).toEqual(currentState);
    });
  });
});
