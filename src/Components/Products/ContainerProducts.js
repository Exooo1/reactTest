import React from 'react';
import "../Products/products.css"
import Products from './Products'
import { useState } from 'react';
import StoreContext from '../StoreContext';


const ProductsContainer = (props) => {

    return (
        <StoreContext.Consumer>{

            (store) => {

                let addProducts = () => {
                    props.dispatch({ type: "ADD-PRODUCTS" })
                }
                let productsOne = store.getState().products.oneTierpPoductItem;

                let productsTwo = store.getState().products.oneTierpPoductItem;

                let productsThree = store.getState().products.oneTierpPoductItem;

                return (
                    <div className='headWrap'>
                        <Products  productsOne={productsOne} productsTwo={productsTwo} productsThree={productsThree} addProducts={addProducts} />
                    </div>
                )
            }
        }</StoreContext.Consumer>
    )

}

export default ProductsContainer;