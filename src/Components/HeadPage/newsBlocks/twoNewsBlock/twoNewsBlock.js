import React from 'react';
import right from "../../../../Image/headPage/right.png"
import left from "../../../../Image/headPage/left.png"
import oneTea from "../../../../Image/headPage/oneTea.png"
import twoTea from "../../../../Image/headPage/twoTea.png"
import threeTea from "../../../../Image/headPage/threeTea.png"
import fourTea from "../../../../Image/headPage/fourTea.png"
import { useState } from 'react';
import './css/twoNews.css'


const TwoNewsBlock = () => {

    let [count, setCount] = useState(0);

    let [tea, setTea] = useState(oneTea);

    const nextTea = () => {
        if (count <= 0) {
            setTea(tea = twoTea)
            setCount(count += 1)
        } else if (count <= 1) {
            setTea(tea = threeTea)
            setCount(count += 1)
        } else if (count <= 2) {
            setTea(tea = fourTea)
            setCount(count += 1)
        } else if (count <= 3) {
            setTea(tea = oneTea)
            setCount(count = 0)
        }
    }

    const backTea = () => {
        if (count === 1) {
            setTea(tea = oneTea)
            setCount(count = 0);
        } else if (count === 2) {
            setTea(tea = twoTea)
            setCount(count = 1);
        } else if (count === 3) {
            setTea(tea = threeTea)
            setCount(count = 2);
        } else if (count === 0) {
            setTea(tea = fourTea)
            setCount(count = 3);
        }
    }

    return (
        <div>
            <div className="newsBlockTwo">
                <p id="twoBlockText">Even more flavors...</p>
                <div className="twoNews">
                    <div className="oneButtonTwoNews">
                        <img onClick={backTea} src={left}></img>
                    </div>
                    <div className="imgTwoNews">
                        <img src={tea}></img>
                    </div>
                    <div className="twoButtonTwoNews">
                        <img onClick={nextTea} src={right}></img>F
                    </div>
                </div>
                <p id="oneTwoBlockText">...Even more choice</p>
            </div>
        </div>
    )
}

export default TwoNewsBlock;