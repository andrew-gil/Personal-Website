import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';
//import Logo from './Logo'
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const welcomeArray = ['H','i',',',' ','m','y',' ','n','a','m','e',' ','i','s',' ','S','e','b','i','n',' ','G','i','l','.'];
    const hiArray = ['H','i',',',' '];
    const nameArray = ['m','y',' ','n','a','m','e',' ','i','s',' ','S','e','b','i','n',' ','G','i','l','.'];
    //22 for the first line now it's 25
    //42 for the second
    //the way idx works is that out of all the key frames you have, which in this case is 74, your first idx needs to encompass
    //the length of the first line. The second line, if you choose to have it come after, must be at least the idx of the first
    //line plus the length of the first line
    //the total length of the animation needs to be the initial idx + the length of the lines
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
    window.addEventListener("scroll", reveal);
    
    useEffect(() => {
        return () => setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    return (
        <div className = 'container home-page'>
            <div className = 'content-zone'>
                <div className = 'text-zone'>
                    <h1>
                    <AnimatedLetters letterClass = {letterClass}
                    strArray = {hiArray}
                    idx = {11} />
                    <AnimatedLetters letterClass = {letterClass}
                    strArray = {nameArray}
                    idx = {18} />
                    <br />
                    </h1>
                    <h2>
                        I am a recent grad from the University of North Carolina at Chapel Hill, looking to make an entry into software engineering. Here are some of my projects:
                    </h2>
                </div>
                <div className = 'projects-zone'>
                        <div className = 'project reveal'>
                            <h2>
                                Reading Disability Treatment
                            </h2>
                            <br />
                            <h3>
                            Created a React website to treat children at risk for reading disabilities via early intervention. This personal project involved researching tested methods of treating reading disabilities in order to design and program scientifically informed games that train phonological awareness and improves word encoding and decoding. These games also help dyslexic adults improve their reading ability.
                            </h3>
                            <a
                            target = "_blank"
                            rel = "noreferrer"
                            href = "https://funreadinggames.github.io"
                            >
                                VISIT WEBSITE
                            </a>
                        </div>
                        <div className = 'project reveal'>
                            <h2>
                                2D Graphics Engine
                            </h2>
                            <br />
                            <h3>
                            Developed a 2D graphics engine in a similar design to the Skia graphics engine. The program implements shaders, gradients, tiling, and other transformations to allow the user to code complex images.
                            </h3>
                            <a
                            target = "_blank"
                            rel = "noreferrer"
                            href = "https://github.com/andrew-gil/andrew-gil-CS-475"
                            >
                                VIEW PROJECT
                            </a>
                        </div>

                        <div className = 'project reveal'>
                            <h2>
                                Park Finder
                            </h2>
                            <br />
                            <h3>
                            Created a Firebase Website for outdoor enthusiasts to find parks they may be interested in visiting. The website includes a comprehensive search engine that returns parks of interest and information on the parks. Searches can be filtered and parks may be saved to your favorites either locally or via the cloud. 
                            </h3>
                            <a
                            target = "_blank"
                            rel = "noreferrer"
                            href = "https://github.com/andrew-gil/COMP426FinalProject"
                            >
                                VIEW PROJECT
                            </a>
                        </div>

                        <div className = 'project reveal'>
                            <h2>
                                Computational Photography
                            </h2>
                            <br />
                            <h3>
                            Implemented image modification motifs such as blending, hybrid images, synthetic bokeh, and HDR. HDR is implemented via response function estimation, and given many images of the same scene with different exposure times, the program outputs a higher precision image.
                            </h3>
                            <a
                            target = "_blank"
                            rel = "noreferrer"
                            href = "https://github.com/andrew-gil/Computational-Photography"
                            >
                                VIEW PROJECT
                            </a>
                        </div>

                        <div className = 'project reveal'>
                            <h2>
                                Lisp Interpreter
                            </h2>
                            <br />
                            <h3>
                            Built a comprehensive Lisp interpreter, including s-expressions, lambda functions, currying, and more.
                            </h3>
                            <a
                            target = "_blank"
                            rel = "noreferrer"
                            href = "https://github.com/andrew-gil/Lisp-Interpreter"
                            >
                                VIEW PROJECT
                            </a>
                        </div>

                </div>
            </div>
        </div>
    );
}
/*
                <Link to= '/hangman' id = 'hangman' className = 'flat-button'>PHONEMIC {<br/>}HANGMAN</Link>
                <Link to= '/singleplayerRhyming' id = 'sprhyming'className = 'flat-button'>SINGLEPLAYER {<br/>}RHYMING</Link>
                <Link to= '#' id = 'mprhyming'className = 'flat-button'>MULTIPLAYER {<br/>}RHYMING</Link>
 */


//<Link to= '#' className = 'flat-button'>HANGMAN LEVEL 3</Link>
/*
<Link to= '/contact' className = 'flat-button'>CONTACT ME</Link>

                <span className = {letterClass}>H</span>
                <span className = {`${letterClass} _12`}>i,</span>
                <br />
                <span className = {`${letterClass} _13`}>I</span>
                <span className = {`${letterClass} _14`}>'m,</span>
                <img src = {LogoTitle} alt = "developer" />

const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n'];
    
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e','v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];


<h1>
                <AnimatedLetters letterClass = {letterClass}
                strArray = {getArray}
                idx = {10} />
                <br />
                <AnimatedLetters letterClass = {letterClass}
                strArray = {betterArray}
                idx = {10} />
                <br />
                <AnimatedLetters letterClass = {letterClass}
                strArray = {atArray}
                idx = {10} />
                <br />
                <AnimatedLetters letterClass = {letterClass}
                strArray = {readingArray}
                idx = {10} />
                </h1>
 */
export default Home; 