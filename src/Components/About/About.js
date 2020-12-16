import React from 'react';
import '../About/about.css';
import Me from '../../Image/me.jpg';


const About = () => {

    return (
        <div className='wrapperAb'>
            <div className="aboutMe">
                <div className="back">
                    <img src={Me}></img></div>
                <div className='backAb'>
                    <h1>Vlas Maskalenchik</h1>
                    <p>Chris Pederick is a web developer originally from London, England, but now living in San Francisco, California. He is a Director of Engineering at Bleacher Report. In his spare time he writes the Web Developer browser extension and is also the creator of Read Ruler which allows you to view your Pocket articles listed by reading time and automatically add reading time tags to those articles. His pronouns are he/him.</p>
                </div>
            </div>
        </div>
    )
}

export default About;