import React from 'react';
import '../Panel/css/panel.css';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import ProductsContainer from '../Products/ContainerProducts'
import ShowContacts from '../Contact/Contacts'
import HeadPage from '../HeadPage/HeadPage'
import { NavLink } from 'react-router-dom'
import Logo from '../../Image/panel/logo.png'
import About from '../About/About'
import LogoTea from './logoTea/LogoTea'
import StoreContext from '../StoreContext'

const Panel = (props) => {

    let store = props.store;

    return (
        <StoreContext.Provider value={store}>
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
                <Route exact path='/products' render={() => <ProductsContainer />} />
                <Route exact path='/contacts' render={() => <ShowContacts />} />
                <Route exact path='/' render={() => <HeadPage />} />
            </BrowserRouter>
        </StoreContext.Provider>
    )
}

export default Panel;