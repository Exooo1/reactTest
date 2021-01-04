import React from 'react';
import '../Panel/panel.css';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import ProductsSite from '../Products/Products'
import ShowContacts from '../Contact/Contacts'
import HeadPage from '../HeadPage/HeadPage'
import { NavLink } from 'react-router-dom'
import Logo from '../../Image/panel/logo.png'
import mainP from '../../Image/panel/mainPhoto.png'
import About from '../About/About'

const Panel = (props) => {

    debugger
    return (
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
                productsOne={props.state.products.oneTierpPoductItem}
                productsTwo={props.state.products.twoTierproductItem}
                productsThree={props.state.products.threeTierproductItem} />} />
            <Route exact path='/contacts' render={() => <ShowContacts linkCont={props.state.cont.showCont} />} />
            <Route exact path='/' render={() => <HeadPage dispatch={props.dispatch} state={props.state} />} />
        </BrowserRouter>
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