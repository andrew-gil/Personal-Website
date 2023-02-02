import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import face1 from './face1.jpeg'
//import Logo from './Logo'
import './index.scss'
const slideImages = [
    {
      url: './face1.jpeg',
      caption: 'Slide 1'
    },
  ];
  
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const welcomeArray = ['A','b','o','u','t',' ','m','e'];
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
    return (
        <div className = 'container about-page'>
            <div className = 'content-zone'>
                <div className = 'text-zone'>
                    <h1>
                    <AnimatedLetters letterClass = {letterClass}
                    strArray = {welcomeArray}
                    idx = {11} />
                    <br />
                    </h1>
                    <div className = 'text-and-image' >
                        <img src = {face1} id = 'face'/>
                        <h2>
                            I am an ambitious programmer looking for a role in which I can challenge myself and develop my skills. 
                            My goal is to work on projects that can improve lives with functionality and efficiency.
                            One thing that defines me is that I am always looking for the most optimal way to accomplish a particular task.
                            I try to improve myself every day; growth is a process, and I want to embrace the process.
                            <br />
                            <br />
                            Off the computer, my hobbies include competitive activities such as volleyball and chess, as well as creation activities, 
                            such as cooking and robotics. 
                            <br />
                        </h2>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default About; 