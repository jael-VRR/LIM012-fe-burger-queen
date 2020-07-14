import React from 'react'
import './modal.css';
import camarero from '../images/camarero.png'
// import Main from './main.jsx ';



function modal(){
  return (
    <div className="modal">
  
      <div className="contenido">
        <h2 className="modal-text">CLIENTE</h2>
        <p className="modal-user">NOMBRE</p>
        <input type="text" placeholder="Ingrese Nombre Aquí" className="input"/>
        <button className="btn-aceptar">
        <img src={camarero} className="img-fluid" alt="Responsive"/>
        <p className="btn-aceptar">ACEPTAR</p></button>
        <button className="btn-cancelar">
        <img src={camarero} className="img-fluid" alt="Responsive"/>
        <p className="btn">CANCELAR</p></button>
      </div> 
    </div> 
  );
 }
export default modal;