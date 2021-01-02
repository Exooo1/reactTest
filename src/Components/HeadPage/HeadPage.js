import React from 'react';
import '../HeadPage/headPage.css'
import { useState } from 'react';
import oneNews from '../../Image/oneNews.jpg'
import oneTea from '../../Image/oneTea.png'
import twoTea from '../../Image/twoTea.png'
import threeTea from '../../Image/threeTea.png'
import fourTea from '../../Image/fourTea.png'
import right from '../../Image/right.png'
import left from '../../Image/left.png'
import test from '../../Image/19200.jpg'
import HeadPanelDown from './downPanel/headDownPanel'
import downButt from '../../Image/downButt.png'
import { Link } from "react-scroll"


const HeadPage = () => {
    let [butt, setButt] = useState(<Link className="downButton" activeClass="active" to="newsBlockTwo" spy={true} smooth={true} duration={1000}><img src={downButt}></img></Link>)

    let [count, setCount] = useState(0);

    let [tea, setTea] = useState(oneTea);

    let nextTea = (e) => {
        console.log(e.target.display);
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

    let backTea = () => {
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
        <div className='container' >
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
            />
            {butt}
            <div className="newsBlock" >
                <div className='oneNews'>
                    <div className="textNews">
                        <h1 class="animate__animated animate__backInDown">Green Tea </h1>
                        <p class="animate__animated animate__backInUp">Contains many beneficial substances. The most famous property of green tea is antioxidant. Thanks to this, it affects the entire body.
                        Regular consumption improves skin condition and well-being.</p>
                        <button><a target="blank" href="https://www.kp.ru/putevoditel/eda/chaj/zelenyj/#:~:text=%D0%9F%D1%80%D0%B8%20%D0%BF%D1%80%D
                        0%BE%D1%81%D1%82%D1%83%D0%B4%D0%BD%D1%8B%D1%85%20%D0%B7%D0%B0%D0%B1%D0%BE%D0%BB%D0%B5%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%D1%85%20%D
                        0%B8%20%D0%BE%D0%B1%D1%89%D0%B5%D0%BC,
                        %D0%BF%D0%BE%D0%BB%D0%B5%D0%B7%D0%BD%D0%BE%20%D0%BF%D0%B8%D1%82%D1%8C%20%D0%B5%D0%B3%D0%BE%20%D0%BF%D0%BE%20%D1%8
                        3%D1%82%D1%80%D0%B0%D0%BC.">Learn More</a>
                        </button>
                    </div>
                    <div className="imgNews"><img src={oneNews}></img></div>
                </div>
            </div>
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
            <div className="newsBlockThree">
                <div className="blockThree">
                    <img src={test}></img>
                </div>
                <div className="buttonBlockThree">
                    <button>Participate</button>
                </div>
            </div>
            <div>
                <HeadPanelDown />
            </div>
            <span id="spans">HelloF</span>
        </div >
    )
}

export default HeadPage;