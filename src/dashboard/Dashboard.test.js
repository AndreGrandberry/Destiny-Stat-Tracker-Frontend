// Dashboard.test.js

import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('Dashboard Component', () => {
  it('renders without crashing', () => {
    render(<Dashboard />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Dashboard />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('performs smoke test', () => {
    render(<Dashboard />);
    // If no errors are thrown, the smoke test passes
  });


});
