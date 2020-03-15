import React from 'react';
import { render } from '@testing-library/react';
import DemoApp from '../DemoApp';

test('renders learn react link', () => {
  const { getByText } = render(<DemoApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
