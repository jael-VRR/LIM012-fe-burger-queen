import React, { Fragment } from 'react'
import Navbar from './Navbar'
import { firebase } from '../firebase';
import { useState, useEffect } from 'react';


const OrdenesEspera = () => {

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
            });

    }, []);

    console.log(detailsOrders)

    return (
        <Fragment>
            <Navbar />
            <div >
                       <div className="card-order1"> 
                            {detailsOrders.map((item) => (
                                <ul key={item.id}>
                                    <li>PEDIDO REALIZADO A LAS :{item.Fecha}</li>
                                    <p  className = "box__title">CLIENTE:{item.client.client}</p>
                                    <p>DETALLES PEDIDO:{item.Products.map((item)=>
                                        <p>{item.Cantidad}  {item.Descripcion}  {item.Precio} </p>
                                    )}</p>
                             
                                    <p>TOTAL:{item.Total}</p>
                                </ul>
                              
                            ))
                        }
                        </div>
                    </div>
        </Fragment>

    )

}

export default OrdenesEspera
