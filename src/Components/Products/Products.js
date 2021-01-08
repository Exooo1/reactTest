import React, { useState } from 'react';
import "../Products/products.css"
import cup from '../../Image/product/cup.png'
import ProductItem from './itemProducts/ProductItem'



const Products = (props) => {

    let [total, setTotal] = useState(0)

    let setT = (number) => {
        setTotal(total += number)
    }

    const cancel = () => {
        setTotal(total = 0)
    }


    let getOneTier = props.productsOne.map(get => <ProductItem name={get.name} src={get.src} id={get.gramPrice} text={get.text} cost={get.cost} setT={setT} />);

    let getTwoTier = props.productsTwo.map(get => <ProductItem name={get.name} src={get.src} id={get.gramPrice} text={get.text} cost={get.cost} />);

    let getThreeTier = props.productsThree.map(get => <ProductItem name={get.name} src={get.src} id={get.gramPrice} text={get.text} cost={get.cost} />);

    return (

        <div className='headWrap'>
            <div className="countProd"><img src={cup}></img><h1>{props.array}:products</h1></div>
            <div className="wrap">
                <div className="wrappers">
                    {getOneTier}
                    {getTwoTier}
                    {getThreeTier}
                </div>
            </div>
            <div className="wrapperTotal">
                <div className="total">Total:{total}</div>
                <div className="wrapperBasket">
                    <button onClick={cancel}>Cancel</button>
                    <button>Basket</button>
                </div>
            </div>
            <button onClick={props.addProducts}>onClick</button>
        </div>
    )
}

export default Products;