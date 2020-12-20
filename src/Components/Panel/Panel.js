import React from 'react';
import '../Panel/panel.css';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import ProductsSite from '../Products/Products'
import ShowContacts from '../Contact/Contacts'
import HeadPage from '../HeadPage/HeadPage'
import { NavLink } from 'react-router-dom'
import DownPanel from './DownPanel/DownPanel'
import Logo from '../../Image/logo.png'
import MainPhoto from '../../Image/mainPhoto.png'
import About from '../About/About'

const Panel = (props) => {

    return (
        <div >
            <BrowserRouter>
                <header className='header'>
                    <div className='logo'>
                        <NavLink to="/">TeaShop</NavLink>
                    </div>
                    <nav>
                        <div className='link'>
                            <NavLink to='products'>Products</NavLink>
                            <NavLink to='contacts'>Contacts</NavLink>
                            <NavLink to='about'>About</NavLink>
                        </div>
                        <div className="logoImage">
                            <NavLink to="/"><img src={Logo}></img></NavLink>
                        </div>
                    </nav>
                </header>
                <LogoTea />
                <Route exact path='/about' render={() => <About />} />
                <Route exact path='/products' render={() => <ProductsSite
                    productsOne={props.state.products.oneTierpPoductItem}
                    productsTwo={props.state.products.twoTierproductItem}
                    productsThree={props.state.products.threeTierproductItem} />} />
                <Route exact path='/contacts' render={() => <ShowContacts linkCont={props.state.showCont} />} />
                <Route exact path='/' render={() => <HeadPage />} />
                <DownPanel />
            </BrowserRouter>
        </div>
    )
}

const LogoTea = () => {
    return (
        <div className="choose">
            <div><img src={MainPhoto}></img></div>
        </div>
    )
}

export default Panel;