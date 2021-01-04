import React from 'react';
import '../HeadPage/headPage.css'
import OneNewsBlock from './newsBlocks/oneNewsBlock/oneNewsBlock'
import TwoNewsBlock from './newsBlocks/twoNewsBlock/twoNewsBlock'
import ThreeNewsBlock from './newsBlocks/threeNewsBlock/theeNewsBlock'
import getPrize from '../../Image/headPage/getPrize.jpg'
import downButt from '../../Image/headPage/downButt.png'
import HeadPanelDown from './downPanel/headDownPanel'
import { Link } from "react-scroll"


const HeadPage = () => {

    return (
        <div className='container' >
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
            />
            <Link className="downButton" activeClass="active" to="newsBlockTwo" spy={true} smooth={true} duration={1000}><img src={downButt}></img></Link>
            <OneNewsBlock />
            <TwoNewsBlock />
            <ThreeNewsBlock />
            <HeadPanelDown />
        </div>
    )
}

export default HeadPage;