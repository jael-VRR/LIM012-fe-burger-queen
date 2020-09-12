import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render,screen } from '@testing-library/react';
import ListProducts from '../components/List-Products.jsx';

test('Debería mostrar la opción Desayuno', () => {
    const { getByText } = render(<ListProducts/>);
    const selectButton = getByText('Desayuno');
    expect(selectButton).toBeInTheDocument();
    screen.debug();
  });

  test('Debería mostrar la opción Menu', () => {
    const { getByText } = render(<ListProducts/>);
    const selectButton = getByText('Menu');
    expect(selectButton).toBeInTheDocument();
    screen.debug();
  });

  test('Debería mostrar la opción Acompañamientos', () => {
    const { getByText } = render(<ListProducts/>);
    const selectButton = getByText('Acompañamientos');
    expect(selectButton).toBeInTheDocument();
    screen.debug();
  });

  test('Debería mostrar la opción Bebidas', () => {
    const { getByText } = render(<ListProducts/>);
    const selectButton = getByText('Bebidas');
    expect(selectButton).toBeInTheDocument();
    screen.debug();
  });

 