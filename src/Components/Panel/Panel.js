import React from 'react';
import '../Panel/panel.css';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductsSite from '../Products/Products'
import At from '../Contact/Contacts'
import HeadPage from '../HeadPage/HeadPage'
import { NavLink } from 'react-router-dom'
import s from '../Panel/Panel.module.css'


const Panel = () => {
    return (
        <div>
            <BrowserRouter>
                <header className='header'>
                    <div className='logo'>
                        <NavLink to="/">TeaShop</NavLink>
                    </div>
                    <nav>
                        <div className="logoImage">
                            <img id='image' src='https://o.remove.bg/downloads/dbba6d44-6271-46f3-9658-bcc963562109/47066-removebg-preview-removebg-preview__1_-removebg-preview.png'></img>
                        </div>
                        <div className='link'>
                            <NavLink to='products'>Products</NavLink>
                            <NavLink to='contacts'>Contacts</NavLink>
                            <NavLink to='about'>About</NavLink>
                        </div>
                    </nav>
                </header>
                <LogoTea />
                <Route path='/products' component={ProductsSite} />
                <Route exact path='/contacts' component={At} />
                <Route path='/' component={HeadPage} />
            </BrowserRouter>
        </div>
    )
}

const LogoTea = () => {
    return (
        <div className="choose">
            <div><img src='https://o.remove.bg/downloads/3c90279e-6812-458c-8c53-d414fe08ed91/7eb2ae7c40fcadf5cf04950a97929d05-removebg-preview.png'></img></div>
        </div>
    )
}

export default Panel;