import React from 'react';
import { useState } from 'react';
import './css/item.css'

const ProductItem = (props) => {
    debugger

    let [cost, setCost] = useState(props.cost);

    let addCount = () => {
        debugger
        if (count <= 400) {
            setCount(count += 100)
            setCost(cost += props.cost)
            props.setT(props.cost);
        }
    }

    let decCount = () => {
        if (count > 100) {
            setCount(count -= 100)
            setCost(cost -= props.cost)
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
                    <div className="count"><b >{count}g - cost:{cost}$ </b></div>
                    <div className="twoBut">
                        <button id="one" onClick={addCount}>+</button>
                        <button id="two" onClick={decCount}>-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;