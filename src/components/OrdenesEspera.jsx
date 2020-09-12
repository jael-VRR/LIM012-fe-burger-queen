import React, { Fragment } from 'react'
import Navbar from './Navbar'
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './styles/ordenesEspera.css';
import {getOrders,updateStatusInOrder} from '../controllers/order'

const OrdenesEspera = () => {
    let history = useHistory();

    const [detailsOrders, setDetailsOrders] = useState([])

   
    useEffect(() => {
    setDetailsOrders([]);
    getOrders(data=>setDetailsOrders(data)
);
    }, []);
    console.log(detailsOrders)

    let today1 = new Date()
    const time2 = today1.toLocaleString();
  

    const checklistOrder = (e) => {
        const id = e.target.value
        updateStatusInOrder(id,({
            Fecha: time2,
            Status: 'Pedido listo',
            TimeWaitOrder: 0

        }))
        history.push("/OrdenesAtendidas");
    };

    return (
        <Fragment>
            <Navbar />
           
                <div className="card-order1">
                    {detailsOrders.filter((x) => x.Status === 'Pendiente').map((item,key) => (
                        <ul key={item.id} >
                            <p className="box__title">CLIENTE:{item.client.client}</p>
                            <p>PEDIDO REALIZADO A LAS :{item.Fecha}</p>
                            <div>DETALLES PEDIDO:{item.Products.map((item) =>
                                <p key={item.id}>{item.Cantidad}    {item.Descripcion} {item.Status}</p>
                                
                            )}</div>
                           
                            <input
                                type="checkbox"
                                value={item.id}
                                onChange={checklistOrder} />
                            <label>PEDIDO EN ESPERA</label>
                        </ul>
                    ))
                    }
                </div>
           
        </Fragment>

    )

}

export default OrdenesEspera
