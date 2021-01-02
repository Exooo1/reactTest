import React from 'react';
import '../Total/total.css'

let Total = (props) => {

    return (
        <div className="total">
            <div className="headTotal">
                <h1 >Total:{props.total} </h1>
            </div>
        </div>
    )
}

export default Total;