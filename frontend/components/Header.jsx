import React from 'react'
import About from '../pages/About.jsx'
import Home from '../pages/Home.jsx'
import Login from '../pages/Login.jsx'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <>
            <nav>
                <h1>
                    Sheru's chat-app
                </h1>

                <div className="list">
                    <Link to="/"  >home</Link>
                    <Link to= '/about' >About App</Link>
                    <Link to= '/login' >log in</Link>
                    <Link to='/register' >Sign in</Link>
                </div>
            </nav>
        </>
    )
}

export default Header