import React from 'react'
import {Link} from 'react-router-dom'

const header = () => {
    return (
        <header>
            <div className="">
                <Link to="/" className="logo">
                    Store
                </Link>
            </div>
            <div className="">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/cart">cart</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/login">login</Link>
                    </li>
                </ul>

            </div>
            
        </header>
    )
}

export default header