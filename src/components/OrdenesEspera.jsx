import React, { Fragment } from 'react'
import Navbar from './Navbar'
import { firebase } from '../firebase';
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './styles/ordenesEspera.css';

const OrdenesEspera = ({ date }) => {
    let history = useHistory();

    const [detailsOrders, setDetailsOrders] = useState([])

    useEffect(() => {
        setDetailsOrders([]);
        firebase
            .firestore()
            .collection('Orders')
            .onSnapshot((snap) => {
                const data = [];
                snap.forEach((doc) => {
                    data.push({
                        id: doc.id,
                        ...doc.data(),
                    });
                });
                setDetailsOrders(data);
             console.log(data)
            });

    }, []);

    console.log(detailsOrders)


  

    const checklistOrder = (e) => {
        const id = e.target.value
        //const arrayWithStatus = detailsOrders.filter((el) => (el.id) === (id))
        //setDetailsOrders(arrayWithStatus)
        //const updateStatus = arrayWithStatus[0]
        //updateStatus.Status= 'readyOrder'
        firebase.firestore().collection('Orders').doc(id).update({
            Status: 'Pedido listo',
            TimeWaitOrder: 0

        })
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
                                <p key={item.id}>{item.Cantidad}    {item.Descripcion}</p>
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
