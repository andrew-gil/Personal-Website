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
                            I care about working on projects that can improve people's lives with high functionality and efficiency.
                            While I feel have a long way to go in learning and improving my skills, I try to improve myself every day, 
                            and am always looking for the best way to accomplish a particular task.
                            <br />
                            <br />
                            Off the computer, I have many hobbies which include competitive activities such as volleyball, as well as hobbies
                            that involve creating, such as cooking, robotics, and more recently, pottery. Volleyball for me is an outlet by which I can
                            get satisfaction from personal improvement, as I try to be better at the sport every time I play it. However, my creation
                            based hobbies represent my desire to use the most optimal way to do something. For example, I love reading up on food science so
                            I know the ways in which the ingredients in my food react with each other, and can use that to put the best food in my mouth.
                            When I set my mind on a goal, I simply want to be the best at being the best. 
                            <br />
                        </h2>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default About; 