// ReturnHomeButton.test.js

import React from 'react';
import { render } from '@testing-library/react';
import ReturnHomeButton from './ReturnHomeButton';

describe('ReturnHomeButton component', () => {
  it('renders the return home button correctly', () => {
    const { getByText } = render(<ReturnHomeButton />);
    const returnHomeButton = getByText('Return to Home');
    expect(returnHomeButton).toBeInTheDocument();
    expect(returnHomeButton).toHaveAttribute('href', 'https://b46364ca2452.ngrok.app');
  });

  it('has the correct class name', () => {
    const { container } = render(<ReturnHomeButton />);
    const returnHomeButton = container.querySelector('.return-home-button');
    expect(returnHomeButton).toBeInTheDocument();
  });
});
