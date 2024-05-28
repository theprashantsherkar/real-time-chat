import React from 'react'
import About from '../pages/About.jsx'
import Home from '../pages/Home.jsx'
import Login from '../pages/Login.jsx'
import { Link } from 'react-router-dom'
import "../styles/Header.scss"


function Header() {
    return (
        <>
            <nav>
                <h1>
                    Sheru's chat-app
                </h1>

                <div className="list">
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About us</Link>
                    <Link to='/login'>Log in</Link>
                    <Link to='/register'>Sign in</Link>
                </div>
            </nav>
        </>
    )
}

export default Header