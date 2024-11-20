import { Button,Nav } from 'react-bootstrap';
import '../styles/Homepage.css';
import pfp from '../images/profile-pic.png';
function Homepage(){

    const contactEmail = () =>{
        window.location.href = 'mailto:haydenclark1@live.com';
    }

    return(
        <>
        <div className='homepage'>
            <div className='greeting'>
                <div className='intro'>
                    <h2>Hi</h2>
                    <h3>
                        I'm <span className='name'>Hayden</span>
                    </h3>
                    <h3>a Full Stack Developer</h3>
                </div>
                <div className='paragraph'>
                    <p>Computer scientist from UW-Madison motivated to learn and grow his skills.
                        Excellent with problem solving and communication. Proficient in Java, with
                        knowledge in HTML, CSS, Javascript, and React.
                    </p>
                </div>
                <Button className='contact-btn' onClick={contactEmail}>Contact Me</Button>
            </div>
            <div className='profile-pic-container'>
                <img src={pfp} alt='profile picture' className='profile-pic'></img>
            </div>

        </div>

        </>
    )

}
export default Homepage;
