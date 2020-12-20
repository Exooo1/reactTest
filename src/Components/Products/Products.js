import React from 'react';
import "../Products/products.css"

const ProductsSite = (props) => {

    let getOneTier = props.productsOne.map(get => <ProductItem name={get.name} src={get.src} id={get.gramPrice} />);

    let getTwoTier = props.productsTwo.map(get => <ProductItem name={get.name} src={get.src} id={get.gramPrice} />);

    let getThreeTier = props.productsThree.map(get => <ProductItem name={get.name} src={get.src} id={get.gramPrice} />);

    return (
        <div className="wrap">
            <div className="wrappers">
                {getOneTier}
                {getTwoTier}
                {getThreeTier}

            </div>
        </div>
    )
}

const ProductItem = (props) => {

    return (
        <div className="wrapper">
            <div className="prods">
                <div className="wrapProd">
                    <div>
                        <h1>{props.name}</h1>
                        <img src={props.src}></img>
                    </div>
                    <div className="but">
                        <button id="one">+</button>
                        <button id="two">-</button>
                    </div>
                </div>
            </div>
        </div>)
}

export default ProductsSite;