import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render,screen } from '@testing-library/react';
import Navbar from '../components/Navbar';


test('Debería mostrar encabezado ', () => {
  const { getByText } = render(<Navbar/>);
  const linkElement = getByText('Burger Queen');
  expect(linkElement).toBeInTheDocument();
  screen.debug();
});

describe('App', () => {
    test('renders App component', () => {
      render(<Navbar />);
      screen.debug();
      expect(screen.getByText('Burger Queen')).toBeInTheDocument();
    });
  });

