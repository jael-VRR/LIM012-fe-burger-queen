import React, { Fragment } from 'react'
import {firebase} from '../firebase'
import Navbar from './Navbar'
import './styles/listMenu.css'
import BoxPedidos from './Box-Pedidos'
import BoxProducts from './Box-Products'


const ListProducts = () => {
    const [initialState, setState] = React.useState({
        products: [],
        type: 'Desayuno'
    })
    const [order, setOrder] = React.useState([])
    
    React.useEffect(() => {
        const dataProducts = async() => {
            try{
                const db = firebase.firestore()
                const data = await db.collection("Products").get()
                const arrayData = data.docs.map((doc) => (
                    {
                        id:doc.id,
                        ...doc.data()
                    }
                ))
                console.log(arrayData)
                setState(prevState => ({...prevState, products:arrayData}))
            } catch (error) {
                console.error(error)
            }
        }
        dataProducts()
    }, [])
    const pruebita = (product) => {
        // console.log(product)
        setOrder(prevState => [...prevState, product])
    }
    return (
        <Fragment>
            <Navbar />
            <div className="container-list">
                <div className="list-product">
                    <ul>
                        <li>
                            <button className="list__button" onClick={(e) =>{
                            e.preventDefault();
                            setState(prevState => ({ ...prevState, type: 'Desayuno' }))
                            // setCount(prevCount => prevCount - 1)
                            }}>desayuno</button>
                        </li>
                        <li>
                            <button className="list__button" onClick={(e) =>{
                            e.preventDefault();
                            setState(prevState => ({ ...prevState, type: 'Menu' }))
                            }}>Menu</button>
                        </li>
                        <li>
                            <button className="list__button" onClick={(e) =>{
                            e.preventDefault();
                            setState(prevState => ({ ...prevState, type:'Acompañamientos'}))
                            }}>Acompañamientos</button>
                        </li>
                        <li>
                            <button className="list__button" onClick={(e) =>{
                            e.preventDefault();
                            setState(prevState => ({ ...prevState, type:'Bebidas' }))
                            }}>Bebidas</button>
                        </li>
                    </ul>
                    <div className="container__box" >
                    {
                        initialState.products.map((ele) => {
                            if(ele.type === initialState.type){
                                return(
                                    <BoxProducts key={ele.id} {...ele} pruebita={pruebita}/>
                                )
                            }
                        })
                    }
                    </div>
                </div>
                <BoxPedidos order={order}/>
            </div>
        </Fragment>
    )
}

export default ListProducts
