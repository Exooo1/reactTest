import React, { useState } from 'react';
import '../About/about.css';
import Me from '../../Image/me.jpg';


const About = () => {

    return (
        <div className="wrapperAbout">
            <div className='wrapperAb'>
                <div className="aboutMe">
                    <div className="backImg">
                        <img src={Me}></img></div>
                    <div className='backMe'>
                        <h1 className="twoSec">Vlas Maskalenchik</h1>
                        <p className="fiveSec">Hello! My name is vlas, welcome to my site, this is site i make in hope that recruiters is from IT-sphere  will notice my endeavors. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;