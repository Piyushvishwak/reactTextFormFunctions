import PropTypes from "prop-types";
import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar({ title = "Set_title_here", aboutText = "About", mode = "light", toggleDarkMode }) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg ${mode === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        {title}
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    {aboutText}
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                        <div className="form-check form-switch ms-3">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                id="flexSwitchCheckDefault" 
                                onChange={toggleDarkMode} 
                                checked={mode === "dark"}
                            />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                                {mode === "dark" ? "Dark Mode" : "Light Mode"}
                            </label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string,
    mode: PropTypes.string,
    toggleDarkMode: PropTypes.func.isRequired
};
