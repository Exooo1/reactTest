import React from 'react';
import oneNews from '../../../../Image/headPage/oneNews.jpg'
import './css/oneNews.css'

const OneNewsBlock = () => {
    return (
        <div className="newsBlock" >
            <div className='oneNews'>
                <div className="textNews">
                    <h1 class="animate__animated animate__backInDown">Green Tea </h1>
                    <p class="animate__animated animate__backInUp">Contains many beneficial substances. The most famous property of green tea is antioxidant.
                    Thanks to this, it affects the entire body.
                        Regular consumption improves skin condition and well-being.</p>
                    <button><a target="blank" href="https://www.kp.ru/putevoditel/eda/chaj/zelenyj/#:~:text=%D0%9F%D1%80%D0%B8%20%D0%BF%D1%80%D
                        0%BE%D1%81%D1%82%D1%83%D0%B4%D0%BD%D1%8B%D1%85%20%D0%B7%D0%B0%D0%B1%D0%BE%D0%BB%D0%B5%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%D1%85%20%D
                        0%B8%20%D0%BE%D0%B1%D1%89%D0%B5%D0%BC,
                        %D0%BF%D0%BE%D0%BB%D0%B5%D0%B7%D0%BD%D0%BE%20%D0%BF%D0%B8%D1%82%D1%8C%20%D0%B5%D0%B3%D0%BE%20%D0%BF%D0%BE%20%D1%8
                        3%D1%82%D1%80%D0%B0%D0%BC.">Learn More</a>
                    </button>
                </div>
                <div className="imgNews"><img src={oneNews} alt="here"></img></div>
            </div>
        </div>
    )
}

export default OneNewsBlock;