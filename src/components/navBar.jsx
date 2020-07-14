import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import hamburguesa from '../images/hamburguesa.svg';



function navBar(props) {
    return (

  <div className="navbar-nav" >
    <h2 className="display-5">{props.title}</h2>
    <img src={hamburguesa} className="rounded img-fluid" alt="responsive" />
    <div className ="d-flex justify-content-end">
      <button className="btn btn-info mr-2">Inicio</button>
      <button className="btn btn-warning mr-4">Productos</button>
      </div>
  </div>      


    );
  }

export default navBar;


