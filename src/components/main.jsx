/* eslint-disable react-hooks/rules-of-hooks */
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './main.css';
import burguer from '../images/burguer.png';
import camarero from '../images/camarero.png';
import { useHistory } from "react-router-dom";

const main = ()=> {
    let history = useHistory();
    

    function handleClick() {
        history.push("/ListMain");
      }

    return (
    <div className= "App-main">    
    <main className="d-sm-flex">
    <div className= "container-fluid">
        <p className="main-text">Más que una simple Hamburguesa</p>
        <button className="btn main-btn"  onClick={handleClick}>
        <img src={camarero} className="img-fluid" alt="Responsive"/>
        <p className="txt-btn">PEDIDO</p></button>
     </div>
     <img src={burguer} className="img-fluid" alt="Responsive"/>
    </main>
    </div>
    );
}

export default main;
