import '../About/css/about.css';
import me from '../../Image/about/me.jpg';

const About = () => {

    return (
        <div className="wrapperAbout">
            <div className='wrapperAb'>
                <div className="aboutMe">
                    <div className="backImg">
                        <img src={me} title="Hello"></img>
                    </div>
                    <div className='backMe'>
                        <h1 className="twoSec">Vlas Maskalenchik</h1>
                        <p className="fiveSec">Hello! My name is vlas, welcome to my site, this is site i make in hope
                        that recruiters is from IT-sphere  will notice my endeavors.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;