import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render,screen } from '@testing-library/react';
import Boxpedidos from '../components/Box-Pedidos.jsx';

test('Debería mostrar encabezado ', () => {
    const { getByText } = render(<Boxpedidos/>);
    const linkElement = getByText('Burger Queen');
    expect(linkElement).toBeInTheDocument();
    screen.debug();
  });