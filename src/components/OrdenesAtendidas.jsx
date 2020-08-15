import React, { Fragment} from 'react'
import Navbar from './Navbar'
import { useState ,useEffect} from 'react'
import { firebase } from '../firebase';




const  OrdenesAtendidas = () => {


 const [status,setStatus] = useState([])

 useEffect(() => {
    setStatus([]);
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
            setStatus(data);
     
        });

}, []);


    return(
        <Fragment>
            <Navbar />
            <div >
                       <div className="card-order1"> 
                            {status.filter((x)=>x.Status === 'Pedido listo').map((item) => (
                                <ul key={item.id}>
                                    <p  className = "box__title">CLIENTE:{item.client.client}</p>
                                    <li>PEDIDO REALIZADO A LAS :{item.Fecha}</li>
                                    <p>DETALLES PEDIDO:{item.Products.map((item)=>
                                        <p>{item.Cantidad}  {item.Descripcion}  {item.Precio} </p>
                                    )}</p>
                                    <p>ESTADO:{item.Status}</p>
  
                                    </ul>
                            ))
                        }
                        </div>
                    </div>
        </Fragment>

    )
    

}

export default OrdenesAtendidas