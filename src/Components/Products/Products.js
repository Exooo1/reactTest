import React from 'react';
import "../Products/products.css"

const ProductsSite = (props) => {
    let getProductsItem = props.products.map(get => <ProductItem src={get.src} id={get.id} name={get.name} />)
    return (
        <div className="wrappers">
            {getProductsItem}
        </div>
    )
}

const ProductItem = (props) => {

    return (
        <div className="wrapper">
            <div className="prods">
                <ol className="prod">
                    <li><h1>{props.name}{props.id}</h1><img src={props.src}></img></li>
                    <li><h1>{props.name}{props.id}</h1><img src={props.src}></img></li>
                    <li><h1>{props.name}{props.id}</h1><img src={props.src}></img></li>
                    <li><h1>{props.name}{props.id}</h1><img src={props.src}></img></li>
                </ol>
            </div>
        </div>)
}

export default ProductsSite;