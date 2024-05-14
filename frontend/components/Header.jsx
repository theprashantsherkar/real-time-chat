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
                    <Link>Home</Link>
                    <Link>About us</Link>
                    <Link>Log in</Link>
                    <Link>Sign in</Link>
                </div>
            </nav>
        </>
    )
}

export default Header