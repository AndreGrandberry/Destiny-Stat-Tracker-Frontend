// DashboardFunctions.test.js

import { convertTimestamp } from './DashboardFunctions';

describe('convertTimestamp function', () => {
  it('converts milliseconds to hours, minutes, and seconds format', () => {
    // Test cases for different input values
    expect(convertTimestamp(0)).toEqual('00:00:00');
    expect(convertTimestamp(1000)).toEqual('00:00:01');
    expect(convertTimestamp(60000)).toEqual('00:01:00');
    expect(convertTimestamp(3600000)).toEqual('01:00:00');
    expect(convertTimestamp(3661000)).toEqual('01:01:01');
    // Add more test cases as needed
  });
});
