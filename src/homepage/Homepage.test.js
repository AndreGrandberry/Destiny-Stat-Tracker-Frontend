// HomePage.test.js

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage component', () => {
  it('renders the homepage correctly', () => {
    const { getByText } = render(<HomePage />);
    expect(getByText('Welcome to The Destiny 2 Stat Tracker')).toBeInTheDocument();
    expect(getByText('Click the button below to give us permission to authorize with Bungie to access your Bungie.net information.')).toBeInTheDocument();
    expect(getByText('Log in with your Bungie.net account')).toBeInTheDocument();
  });

  it('displays loading text when button is clicked', async () => {
    const { getByText } = render(<HomePage />);
    const button = getByText('Log in with your Bungie.net account');
    fireEvent.click(button);
    await waitFor(() => expect(getByText('Loading...')).toBeInTheDocument());
  });

  // Add more test cases as needed
});
