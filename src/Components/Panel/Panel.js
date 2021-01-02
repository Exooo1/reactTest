import React from 'react';
import '../Panel/panel.css';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import ProductsSite from '../Products/Products'
import ShowContacts from '../Contact/Contacts'
import HeadPage from '../HeadPage/HeadPage'
import { NavLink } from 'react-router-dom'
import DownPanel from './DownPanel/DownPanel'
import Logo from '../../Image/logo.png'
import photo from '../../Image/photo.jpg'
import mainP from '../../Image/mainPhoto.png'
import About from '../About/About'

const Panel = (props) => {


    return (
        <div >
            <BrowserRouter >
                <header className='header'>
                    <div >
                        <div className="logoImage">
                            <NavLink to="/" className='logo'>TeaShop</NavLink>
                            <NavLink className="goodJ" to="/" ><img src={Logo}></img></NavLink>
                        </div>
                    </div>
                    <nav>
                        <div className='link'>
                            <NavLink to='products'>Products</NavLink>
                            <NavLink to='contacts'>Contacts</NavLink>
                            <NavLink to='about'>About</NavLink>
                        </div>
                    </nav>
                </header>
                <LogoTea />
                <Route exact path='/about' render={() => <About />} />
                <Route exact path='/products' render={() => <ProductsSite
                    dispatch={props.dispatch}
                    productsOne={props.state.oneTierpPoductItem}
                    productsTwo={props.state.twoTierproductItem}
                    productsThree={props.state.threeTierproductItem} />} />
                <Route exact path='/contacts' render={() => <ShowContacts linkCont={props.state.showCont} />} />
                <Route exact path='/' render={() => <HeadPage dispatch={props.dispatch} state={props.state} />} />
            </BrowserRouter>
        </div>
    )
}

const LogoTea = () => {
    return (
        <div className="choose">
            <div><img src={mainP}></img></div>
        </div>
    )
}

export default Panel;