import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import InputForm from './App'
import testApi from './utils/api';

// test('renders learn react link', () => {
//   const { getByText } = render(<InputForm />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("Card component", () => {
  render(<Card heroName="Abyss" headingName="PLAYER 1" />)

})