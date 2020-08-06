import React from 'react'
import './styles/inicio.css'
import logo from '../images/burger.png'
import Navbar from './Navbar'
import waiter from '../images/waiter.svg'
import {Link} from 'react-router-dom'

const Inicio = () => {
    return (
        <div className="main-burger">
            <div className="container">
                <Navbar />
                <div className="container__info">
                    <div className="box__phrase">
                        <h1>"Más que una<br/>simple<br/>hamburguesa"</h1>
                        <button className="box__phrase-button"><img className="waiter" src={waiter} alt="waiter"/>
                            <Link to="/ListMenu" className="links">PEDIDOS</Link>
                        </button>
                    </div>
                    <div className="box__img">
                        <img className="box__img--content" src={logo} alt="Burger" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio
