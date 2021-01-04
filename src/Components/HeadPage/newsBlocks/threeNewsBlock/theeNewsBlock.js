import React from 'react';
import getPrize from '../../../../Image/headPage/getPrize.jpg'
import './css/threeNews.css'

const ThreeNewsBlock = () => {
    return (
        <div>
            <div className="newsBlockThree">
                <div className="blockThree">
                    <img src={getPrize}></img>
                </div>
                <div className="buttonBlockThree">
                    <button>Participate</button>
                </div>
            </div>
        </div>
    )
}

export default ThreeNewsBlock;