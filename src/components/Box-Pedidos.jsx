import React, { Fragment } from 'react'
import waiter from '../images/waiter.svg'
import {Link} from 'react-router-dom'
import err from '../images/delete.svg'

const BoxPedidos = ({order}) => {

    return (
        <Fragment>
            <div className="list-pedidos">
                <div className="datos">
                    <p>Nombre del cliente</p>
                    <input type="text"/>
                </div>
                <div className="inventario-pedidos">
                    <ul>
                        <li>cantidad</li>
                        <li>producto</li>
                        <li>precio ($.)</li>
                        <li>eliminar</li>
                    </ul>
                    <div>
                        {
                            order.map((ele) => (
                            <ul key={ele.id}>
                                <li>{ele.Cantidad}</li>
                                <li>{ele.Descripcion}</li>
                                <li>{ele.Precio}</li>
                                <li><img src={err} className="img__delete" alt="delete"/></li>
                            </ul>
                            ))
                        }
                    </div>
                    <p>TOTAL: 0</p>
                    <p></p>
                    <button className="button-pedidos"><img className="waiter" src={waiter} alt="waiter"/>
                        <Link to="/OrdenesEspera" className="links">Enviar Pedido</Link>
                    </button>
                </div>
            </div>           
        </Fragment>
    )
}

export default BoxPedidos
