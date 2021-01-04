import React from 'react';
import "../Products/products.css"
import { useState } from 'react';
import Total from './Total/Total'
import cup from '../../Image/product/cup.png'


const ProductsSite = (props) => {
    debugger

    let addProducts = () => {
        props.dispatch({ type: "ADD-PRODUCTS" })
    }

    let getOneTier = props.productsOne.map(get => <ProductItem name={get.name} src={get.src} id={get.gramPrice} text={get.text} />);

    let getTwoTier = props.productsTwo.map(get => <ProductItem name={get.name} src={get.src} id={get.gramPrice} text={get.text} />);

    let getThreeTier = props.productsThree.map(get => <ProductItem name={get.name} src={get.src} id={get.gramPrice} text={get.text} />);

    return (
        <div className='headWrap'>
            <div className="countProd"><img src={cup}></img><h1> :products</h1></div>
            <div className="wrap">
                <div className="wrappers">
                    {getOneTier}
                    {getTwoTier}
                    {getThreeTier}
                </div>
            </div>
            <Total />
            <button onClick={addProducts}>onClick</button>
        </div>
    )
}

const ProductItem = (props) => {

    let addCount = () => {
        if (count <= 400) {
            setCount(count += 100)
        }
    }

    let decCount = () => {
        if ((count >= 100) && (count != 0)) {
            setCount(count -= 100)

        } else {
            setCount(count = 100)
        }
    }

    let [count, setCount] = useState(props.id);

    return (
        <div className="prods">
            <div className="wrapProd">
                <div className="front">
                    <h1>{props.name}</h1>
                    <img src={props.src}></img>
                    <p>{props.text}</p>
                </div>
                <div className="but">
                    <div className='back'>
                        <h1>{props.name}</h1>
                    </div>
                    <div className="backImage"><img src={props.src}></img></div>
                    <div className="count"><b >{count}g</b></div>
                    <div className="twoBut">
                        <button id="one" onClick={addCount}>+</button>
                        <button id="two" onClick={decCount}>-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsSite;