import React from 'react'
import logo from '../images/burger.png'
import './styles/inicio.css'

const Navbar = () => {
    return (
        
            <div className="container__header">
                <span>Burger Queen</span>
                 <img src={logo} alt="Logo"/>
            </div>
          
        
    )
}

export default Navbar
