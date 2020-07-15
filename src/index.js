import React from 'react';
import ReactDOM from 'react-dom';
// import Main from './components/Main';
import List from './components/list'

const container = document.getElementById('app');
// cuando no tiene un mayo que y menor que decimos que es un componente
// Pero a ReactDOM hay que darle un elemento autocerrado entonces procedemos a poner los simbolos
// ReactDOM.render(<Main titleLogo="BurgerQueen" />, container);
ReactDOM.render(<List />, container);