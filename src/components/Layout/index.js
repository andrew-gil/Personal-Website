import './index.scss';
import Navbar from '../Navbar'
import {Outlet} from 'react-router-dom'
import React, {useState, useEffect, componentDidUpdate} from 'react'

const Layout = () => {
    

    return (
        <div className = 'App'>
            <Navbar/>
            <div className = 'page'>
            <Outlet />
            </div>
        </div>
    )
}

/*
<span className = 'tags top-tags'>&lt;body&gt;</span>
                <Outlet />
                <span className = 'tags bottom-tags'>
                    &lt;/body&gt;
                    <br />
                    <span className = 'bottom-tag-html'>&lt;/html&gt;</span>
                </span>
*/
export default Layout;