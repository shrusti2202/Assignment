import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
        <div>
            
           
            <nav className="navbar navbar-expand-sm bg-primary ">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/photos">photos</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </nav>
           
        </div>
    </>
    )
}

export default Header