import './index.scss';
import {Link, NavLink} from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInfoCircle, faHome, faAddressCard, faFile, faBars} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { useMediaQuery } from 'react-responsive'
import React, {useState, useEffect} from 'react'
import {PageIcon} from './page-icon'

//When clicking on a page, the corresponding icon will appear on the left. All the other pieces will be on the right
//<FontAwesomeIcon icon = {faMale} color = "#4d4d4e" />
const Navbar = () =>  {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    const [showMenu, setShowMenu] = useState(false);
    const [path, setPath] = useState(window.location.pathname);


   

    const wideNav = 
        <div className = 'nav-bar'>
            <PageIcon path = {path} />
            <ul>
                <li>
                    <a
                    target = "_blank"
                    rel = "noreferrer"
                    href = "https://www.linkedin.com/in/sebin-gil-86a296210"
                    >
                        <FontAwesomeIcon icon = {faLinkedin} colors = '#4d4d4e' />

                    </a>
                    <a
                    target = "_blank"
                    rel = "noreferrer"
                    href = "https://www.github.com/andrew-gil"
                    >
                        <FontAwesomeIcon icon = {faGithub} colors = '#4d4d4e' />

                    </a>
                </li>
            </ul>
            <nav className = 'wide-nav-style'>
                <NavLink exact = "true" activeclassname = "active" to ="/" onClick = {() => setPath("/")}>
                    HOME
                </NavLink>
                <NavLink exact = "true" activeclassname = "active" to ="/about" onClick = {() => setPath("/about")}>
                    ABOUT ME
                </NavLink>  
                <NavLink exact = "true" activeclassname = "active" to ="/resume" onClick = {() => setPath("/resume")}>
                    RESUME
                </NavLink>  
                <NavLink exact = "true" activeclassname = "active" to ="/contact" onClick = {() => setPath("/contact")}>
                    CONTACT ME
                </NavLink>
                
            </nav>
        </div>

    const midNav = 
        <div className = 'nav-bar'>
            <ul>
                <li>
                    <a
                    target = "_blank"
                    rel = "noreferrer"
                    href = "https://www.linkedin.com/in/sebin-gil-86a296210"
                    >
                        <FontAwesomeIcon icon = {faLinkedin} colors = '#4d4d4e' />

                    </a>
                    <a
                    target = "_blank"
                    rel = "noreferrer"
                    href = "https://www.github.com/andrew-gil"
                    >
                        <FontAwesomeIcon icon = {faGithub} colors = '#4d4d4e' />

                    </a>
                </li>
            </ul>
            <nav className = 'wide-nav-style'>
                <NavLink exact = "true" activeclassname = "active" to ="/">
                    HOME
                </NavLink>
                <NavLink exact = "true" activeclassname = "active" to ="/about">
                    ABOUT ME
                </NavLink>  
                <NavLink exact = "true" activeclassname = "active" to ="/resume">
                    RESUME
                </NavLink>  
                <NavLink exact = "true" activeclassname = "active" to ="/contact">
                    CONTACT ME
                </NavLink>
            </nav>
        </div>
    
    function mobileClick (path) {
        setShowMenu(!showMenu);
        setPath(path);
    }

    const portraitNav = 
        <div className = 'nav-bar'>
            <PageIcon path = {path} />
            <div className = 'mobile-nav'>
                <ul>
                    <li>
                        <a
                        target = "_blank"
                        rel = "noreferrer"
                        href = "https://www.linkedin.com/in/sebin-gil-86a296210"
                        >
                            <FontAwesomeIcon icon = {faLinkedin} colors = '#4d4d4e' />

                        </a>
                        <a
                        target = "_blank"
                        rel = "noreferrer"
                        href = "https://www.github.com/andrew-gil"
                        >
                            <FontAwesomeIcon icon = {faGithub} colors = '#4d4d4e' />

                        </a>
                    </li>
                </ul>
                <FontAwesomeIcon icon = {faBars} color = "#4d4d4e" className = 'hamburger-menu' 
                onClick = {() => setShowMenu(!showMenu)}/>
                {showMenu && 
                <div className = 'mobile-nav-style'>
                    <NavLink exact = "true" activeclassname = "active" to ="/" onClick = {() => mobileClick("/")}>
                        HOME
                        <FontAwesomeIcon icon = {faHome} color = "#4d4d4e" className = 'active-icon'/>
                    </NavLink>
                    <NavLink exact = "true" activeclassname = "active" to ="/about" onClick = {() => mobileClick("/about")}>
                        ABOUT ME
                        <FontAwesomeIcon icon = {faInfoCircle} color = "#4d4d4e" className = 'active-icon'/>
                    </NavLink>  
                    <NavLink exact = "true" activeclassname = "active" to ="/resume" onClick = {() => mobileClick("/resume")}>
                        RESUME
                        <FontAwesomeIcon icon = {faFile} color = "#4d4d4e" className = 'active-icon'/>
                    </NavLink>  
                    <NavLink exact = "true" activeclassname = "active" to ="/contact" onClick = {() => mobileClick("/contact")}>
                        CONTACT ME
                        <FontAwesomeIcon icon = {faAddressCard} color = "#4d4d4e" className = 'active-icon'/>
                    </NavLink>
                    
                </div>
                }
            </div>
        </div>

    
    

    
    return (
        <div>
            {(isDesktopOrLaptop || isBigScreen) && wideNav }
            {isTabletOrMobile && !isPortrait && wideNav }
            {isPortrait && portraitNav }
        </div>
    );
}
 
/*
<Link className = 'logo' to = '/'>
            <img src ={LogoS} alt ="logo" />
            <img className = 'sub-logo' src ={LogoSubtitle} alt ="slobodan" />
        </Link>
*/

export default Navbar;