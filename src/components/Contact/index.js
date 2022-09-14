import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import {faClipboard} from '@fortawesome/free-regular-svg-icons';
//import Logo from './Logo'
import './index.scss'

function show(setter) {
    setter(true);
    setTimeout(() => {
      setter(false);
    }, 2000);
  }

const Notification = ({ showNotification }) => {
    return (
      <div className={`notification-container ${showNotification ? 'show' : ''}`}>
        <p>Copied!</p>
      </div>
    )
  }

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const welcomeArray = ['C','o','n','t','a','c','t', ' ', 'm','e'];
    const [showEmail, setShowEmail] = useState(false);
    const [showPhone, setShowPhone] = useState(false);
    const [showCopiedEmail, setShowCopiedEmail] = useState(false);
    const [showCopiedPhone, setShowCopiedPhone] = useState(false);
    //22 for the first line now it's 25
    //42 for the second
    //the way idx works is that out of all the key frames you have, which in this case is 74, your first idx needs to encompass
    //the length of the first line. The second line, if you choose to have it come after, must be at least the idx of the first
    //line plus the length of the first line
    //the total length of the animation needs to be the initial idx + the length of the lines
    
    useEffect(() => {
        return () => setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    function copyClick (text) {
        navigator.clipboard.writeText(text);
        if (text == "andrewsebing@gmail.com") {
            show(setShowCopiedEmail);
        } else if (text == "(919)-348-3174") {
            show(setShowCopiedPhone);
        }
    }

    


    return (
        <div className = 'container contact-page'>
            <div className = 'content-zone'>
                <div className = 'text-zone'>
                    <h1>
                    <AnimatedLetters letterClass = {letterClass}
                    strArray = {welcomeArray}
                    idx = {11} />
                    </h1>
                </div>
                <div className = 'projects-zone'>
                        <div className = 'project'>
                            <button >
                                EMAIL
                                <FontAwesomeIcon icon = {faCaretDown} color = "#4d4d4e" className = 'caret-down' onClick = {() => setShowEmail(!showEmail)}/>
                                {showEmail && 
                                <h3>andrewsebing@gmail.com
                                    <FontAwesomeIcon icon = {faClipboard} color = "#4d4d4e" className = 'clipboard' onClick={() => copyClick("andrewsebing@gmail.com")}/>
                                    <Notification showNotification={showCopiedEmail} />
                                </h3>
                                }
                            </button>
                            <button >
                                PHONE
                                <FontAwesomeIcon icon = {faCaretDown} color = "#4d4d4e" className = 'caret-down' onClick = {() => setShowPhone(!showPhone)}/>
                                {showPhone && 
                                <h3>(919)-348-3174
                                    <FontAwesomeIcon icon = {faClipboard} color = "#4d4d4e" className = 'clipboard' onClick={() => copyClick("(919)-348-3174")}/>
                                    <Notification showNotification={showCopiedPhone} />
                                </h3>
                                }
                            </button>
                            <a
                            target = "_blank"
                            rel = "noreferrer"
                            href = "https://www.linkedin.com/in/sebin-gil-86a296210"
                            >
                                LINKEDIN
                            </a>
                            <a
                            target = "_blank"
                            rel = "noreferrer"
                            href = "https://www.github.com/andrew-gil"
                            >
                                GITHUB
                            </a>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default About; 