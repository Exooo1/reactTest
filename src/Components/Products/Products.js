import React from 'react';
import "../Products/products.css"

const ProductsSite = () => {

    return (
        <div className="wrappers">
            <ProductItem oneProducts='BlackTea' twoProducts='GreenTea' threeProducts='BlueTea' fourProducts='YellowTea' />
            <ProductItem oneProducts='BlackTeaChris' twoProducts='GreenTeaChris' threeProducts='BlueTeaChris' fourProducts='YellowTeaChris' />
            <ProductItem oneProducts='BlackTeaBuds' twoProducts='GreenTeaBuds' threeProducts='BlueTeaBuds' fourProducts='YellowTeabuds' />
        </div>
    )
}

const ProductItem = (props) => {
    return (
        <div className="wrapper">
            <div className="prods">
                <ol className="prod">
                    <li><h1>{props.oneProducts}</h1><img src="https://dhb3yazwboecu.cloudfront.net/1007//10142_ChristmasTeaBlack_1000x1000_l.jpg"></img></li>
                    <li><h1>{props.twoProducts}</h1><img src="https://dhb3yazwboecu.cloudfront.net/1007//Magic-Kingdom_1000X1000_l.jpg"></img></li>
                    <li><h1>{props.threeProducts}</h1><img src="https://dhb3yazwboecu.cloudfront.net/1007//Magic-Kingdom_1000X1000_l.jpg"></img></li>
                    <li><h1>{props.fourProducts}</h1><img src="https://dhb3yazwboecu.cloudfront.net/1007//Magic-Kingdom_1000X1000_l.jpg"></img></li>
                </ol>
            </div>
        </div>)
}

export default ProductsSite;