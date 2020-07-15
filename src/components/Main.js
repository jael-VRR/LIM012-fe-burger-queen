import React from 'react';
import './styles/Main.css'
import logo from '../images/burger.png'
import waiter from '../images/waiter.svg'

// Los componentes son clases asi que la clase Main extiende a React.component
class Main extends React.Component{
    // todo los componentes requieren por lo menos un metodo
    // render definie el resultado que vamos a ver en la pantalla
    render(){
        return <div className="main-burger">
            <div className="container">
                <div className="container__header">
                    <span>Burger</span><span>Queen</span>
                    <img src={logo} alt="Logo"/>
                </div>
                <div className="container__info">
                    <div className="box__phrase">
                        <h1>"Más que una<br/>simple<br/>hamburguesa"</h1>
                        <button><img className="waiter" src={waiter} alt="waiter"/>Pedidos</button>
                    </div>
                    <div className="box__img">
                        <img className="box__img--content" src={logo} alt="Burger" />
                    </div>
                </div>
            </div>
        </div>         
    }
}

export default Main;