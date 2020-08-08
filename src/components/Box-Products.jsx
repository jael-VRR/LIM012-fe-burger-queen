import React, { Fragment } from 'react'
import add from '../images/add.svg'
import quit from '../images/menos.png'
import agregar from '../images/agregar1.png'

const BoxProducts = ({image, title, price, id, pruebita}) => {

    const [count, setCount] = React.useState(0)
    
    const incremento = (event) => {
        event.preventDefault();
        setCount(count +1)
    }
    const decremento = (event) => {
        event.preventDefault();
        if(count === 0) {
            setCount(0);
        } else{ 
            setCount(count - 1);
        }  
    }

    const addItemProduct = (count, id, title, price) =>{
        if(count === 0){
            alert('Ingrese la cantidad del producto')
        } else {
            const objProduct = {
                id,
                Descripcion: title,
                Precio: (price*count),
                Cantidad: count, 
            }
            return objProduct
        }
    }

    const addProduct = (event) => {
        event.preventDefault();
       const listProduct = addItemProduct(count, id, title, price)
        pruebita(listProduct)
    }

    return (
        <Fragment>
            <div className="container__box--item">
                <img className="img--item1" src={image} alt="cafe-americano"/>
                <p className="box__title">{title}</p>
                <p className="box__price">$ {price}</p>
                <div className="box__button">
                    <img className="box__btn--itemQ" src={quit} onClick = {decremento} alt=""/>
                    <input type="text" value={count}/>
                    <img className="box__btn--item" src={add} onClick = {incremento}alt=""/>
                    <button className="button__icon" onClick = {addProduct}>
                        <img className="box__btn--item" src={agregar} alt=""/>
                    </button>
                </div>
            </div> 
        </Fragment>
    )
}

export default BoxProducts
