import React from 'react'
import { About } from '../pages/About.jsx'
import { Home } from '../pages/Home.jsx'
import { Login } from '../pages/Login.jsx'


function header() {
    return (
        <>
            <nav>
                <h1>
                    Sheru's chat-app
                </h1>

                <div className="list">
                    <Link to="/" element={<Home />} >home</Link>
                    <Link to= '/about' element= {< About />}>About App</Link>
                    <Link to= '/login' element= {< Login />}>log in</Link>
                    <Link to='/register' element={<Register />}>Sign in</Link>
                </div>
            </nav>
        </>
    )
}

export default header