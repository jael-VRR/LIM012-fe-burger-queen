import React from 'react';
import logo from '../images/burger.png'
import '../components/styles/Main.css'
import '../components/styles/list.css'
// images
import acompa from '../images/acompa.svg'
import beverage from '../images/beverage.svg'
import menu from '../images/menu.svg'
import americano from '../images/cafe-americano.png'
import leche from '../images/cafe-leche.png'
import jugos from '../images/jugos.png'
import sandwich from '../images/sandwich.png'
import add from '../images/add.svg'
import error from '../images/criss-cross.svg'


class list extends React.Component{
    render(){
        return <div className="container--list">
            <header className="container__header">
                    <span>Burger</span><span>Queen</span>
                    <img src={logo} alt="Logo"/>
            </header>
            <section className="main">
                <div className="main__menu">
                    <img src={menu} alt="menu"/>
                    <p>Menú</p>
                </div>
                <div className="main__acompa">
                    <img src={acompa} alt="acompanamiento"/>
                    <p>Acompaña-<br/>miento</p>
                </div>
                <div className="main__bebidas">
                    <img src={beverage} alt="bebidas"/>
                    <p>Bebidas</p>
                </div>
            </section>
            <section className="carousel__container">
                <div className="carousel-item">
                    <img className="carousel-item__img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/800px-A_small_cup_of_coffee.JPG" alt=""/>
                    
                    <div className="carousel-item__details">
                        <p className="carousel-item__details--title">Café Americano</p>
                        
                        <div className="carousel__btn--option">
                            <img src={error} alt="disminuir" />
                            <button>3</button>
                            <img src={add}  alt="incrementar"/>
                        </div>

                    </div>
                </div>

                <div className="carousel-item">
                    <img className="carousel-item__img" src="https://images.pexels.com/photos/302890/pexels-photo-302890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                    <div className="carousel-item__details">
                        <p className="carousel-item__details--title">Café con Leche</p>
                        <div className="carousel__btn--option">
                            <img src={error} alt="disminuir" />
                            <button>3</button>
                            <img src={add}  alt="incrementar"/>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="carousel-item__img" src="https://image.freepik.com/foto-gratis/sandwich-jamon-queso_105495-195.jpg" alt=""/>
                    <div className="carousel-item__details">
                        <p className="carousel-item__details--title">Sandwich de Jamón<br/>y queso</p>
                        <div className="carousel__btn--option">
                            <img src={error} alt="disminuir" />
                            <button>3</button>
                            <img src={add}  alt="incrementar"/>
                        </div>
                    </div>
                </div> 
                <div className="carousel-item">
                    <img className="carousel-item__img"  src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?cs=srgb&dl=alcoholico-bar-barra-beber-338713.jpg&fm=jpg" alt=""/>
                    <div className="carousel-item__details">
                        <p className="carousel-item__details--title">Jugo Natural</p>
                        <div className="carousel__btn--option">
                            <img src={error} alt="disminuir" />
                            <button>3</button>
                            <img src={add}  alt="incrementar"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    }
}

export default list;