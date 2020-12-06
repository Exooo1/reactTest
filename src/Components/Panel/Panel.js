import React from 'react';
import '../Panel/panel.css'


const Panel = () => {
    return (
        <div>
            <header className='header'>
                <div className='logo'>
                    <a href="#">TeaShop</a>
                </div>
                <nav>
                    <div>
                        <button></button>
                        <img></img>
                    </div>
                    <div className='link'>
                        <a href='#'>Products</a>
                        <a href='#'>Contacts</a>
                        <a href='#'>About</a>
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default Panel;