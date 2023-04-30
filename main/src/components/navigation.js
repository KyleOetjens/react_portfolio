import React from 'react';


export default function Navigation({currentPage, handlePageChange}) {
    return (
        <nav className="navbar" >
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a href="#home"
                    onClick={() => handlePageChange('Home')}
                    className={currentPage ==='Home' ? 'nav-link active': 'nav-link'}
                    >
                        About Me
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#porfolio"
                    onClick={() => handlePageChange ('Portfolio')}
                    className={currentPage==='Portfolio' ? 'nav-link active':'nav-link'}
                    >
                    Portfolio
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="#contactme"
                    onClick={() => handlePageChange ('ContactMe')}
                    className={currentPage==='ContactMe' ? 'nav-link active':'nav-link'}
                    >
                    Contact Me
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="#resume"
                    onClick={() => handlePageChange ('Resume')}
                    className={currentPage==='Resume' ? 'nav-link active':'nav-link'}
                    >
                    Resume
                    </a>
                    </li>
            </ul>
        </nav>
    )
}