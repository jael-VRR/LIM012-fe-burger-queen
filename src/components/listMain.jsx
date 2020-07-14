/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react'
import './listMain.css';
import group from '../images/group.png';
import food from '../images/food.png';
import chips from '../images/chips.png';
import drink from '../images/drink.png';
import { useHistory } from "react-router-dom";





function listMain(){
  let history = useHistory();
    

  function handleClick() {
      history.push("/modal");
    }

  return (
    <div className="container">
     <p className="listMain-text">¿Qué deseas pedir hoy?</p>
      <div className="card1 card" onClick={handleClick}>
       <img src={group} className="card-img-top img-fluid" alt="responsive"/>
       <div className="card-body">
          <h5 className="card-title">DESAYUNO</h5>
       </div>
     </div>
     <div className="card2 card" onClick={handleClick}>
       <img src={food} className="card-img-top img-fluid" alt="responsive"/>
       <div className="card-body">
          <h5 className="card-title">MENÚ</h5>
       </div>
     </div>
     <div className="card3 card" onClick={handleClick}>
       <img src={chips} className="card-img-top img-fluid" alt="responsive"/>
       <div className="card-body">
          <h5 className="card-title">ACOMPAÑAMIENTOS</h5>
       </div>
     </div>
     <div className="card4 card" onClick={handleClick}>
       <img src={drink} className="card-img-top img-fluid" alt="responsive"/>
       <div className="card-body">
          <h5 className="card-title">BEBIDAS</h5>
       </div>
     </div>
     </div>

  );
 }
export default listMain;
