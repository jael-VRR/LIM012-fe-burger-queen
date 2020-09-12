import React, { Fragment } from 'react'
import waiter from '../images/waiter.svg'
import err from '../images/delete.svg'
import { useState, } from 'react'
import { useHistory } from "react-router-dom"
import {addOrder}  from '../controllers/order'


const BoxPedidos = ({ order, ProductItemOrder }) => {
    let history = useHistory();

    const [client, setClient] = useState('')

    const getTotalSum = () => {
        return order.reduce(
            (sum, { Precio }) => sum + Precio,
            0
        );
           
    };

    const sum = getTotalSum(order)

    let today = new Date()
    const time1 = today.toLocaleString();

 const send = () => {//shorthand
    addOrder({
      client,
      Products: order,
      Total: sum,
      Fecha: time1,
      Status: 'Pendiente',
      Timer: time1
    })
    history.push("/OrdenesEspera");
}

    const btnEliminarItem = (event) => {
        event.preventDefault();
        ProductItemOrder(event.target.id)
    }

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setClient((prevState) => ({
            ...prevState,
            [name]: value,
        }));

    };




    return (
        <Fragment>
            <div className="list-pedidos">
                <div className="datos">
                    <p>Nombre del cliente</p>
                    <input type="text" name="client" value={order.client} onChange={handleChange} />
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
                                    <img src={err} className="img__delete" alt="delete" />
                                    <button onClick={btnEliminarItem} id={ele.idOrder}>Eliminar </button>
                                </ul>

                            ))
                        }
                    </div>
                    <p>TOTAL:${getTotalSum(order)}</p>
                    <p>CLIENTE:{client.client}</p>
                    <button className="button-pedidos" onClick={send}><img className="waiter" src={waiter} alt="waiter" />ENVIAR</button>

                </div>
            </div>
        </Fragment>
    )
}

export default BoxPedidos
