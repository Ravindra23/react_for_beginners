import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <a className="navbar-brand" href="/">Navbar</a> */}
            <Link className="navbar-brand" to="/">Navbar</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        {/* <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a> */}
            <Link className="navbar-brand" to="/">Users</Link>

                    </li>
                    {/*  */}
                    <li className="nav-item ">
                        {/* <a className="nav-link" href="/timer">
                            Timer
                        </a> */}
        <Link className="navbar-brand" to="/timer">Timer</Link>

                        
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li> */}
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;