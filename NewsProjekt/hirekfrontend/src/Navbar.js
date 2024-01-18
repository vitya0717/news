import React from 'react'
import { useContext } from 'react';

const Navbar = ({ setCurrentLanguage, currentLanguage, NyelvKontextus, szotar }) => {
    const nyelv = useContext(NyelvKontextus);
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{szotar[currentLanguage].navtitle}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {szotar[currentLanguage].changeLanguage}
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href='#' onClick={() => {
                                    setCurrentLanguage('hu');
                                }}>{szotar[currentLanguage].hungarian}</a></li>
                                <li><a className="dropdown-item" href='#' onClick={() => {
                                    setCurrentLanguage('en');
                                }}>{szotar[currentLanguage].english}</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar