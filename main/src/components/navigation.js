import React from 'react';



const styles ={
li:{
   listStyleType: 'none' 
}
}


export default function Navigation({currentPage, handlePageChange}) {
    return (
        <nav className="navbar" >
            <ul className="navlist" style={styles.li}>
                <li>
                    <a href="#home"
                    onClick={() => handlePageChange('Home')}
                    className={currentPage ==='Home' ? 'home-active': 'home-inactive'}
                    >
                        About Me
                    </a>
                </li>
                <li>
                    <a href="#porfolio"
                    onClick={() => handlePageChange ('Portfolio')}
                    className={currentPage==='Portfolio' ? 'portfolio-active':'portfolio-inactive'}
                    >
                    Portfolio
                    </a>
                    </li>
                    <li>
                    <a href="#contactme"
                    onClick={() => handlePageChange ('ContactMe')}
                    className={currentPage==='ContactMe' ? 'contactme-active':'contactme-inactive'}
                    >
                    Contact Me
                    </a>
                    </li>
                    <li>
                    <a href="#resume"
                    onClick={() => handlePageChange ('Resume')}
                    className={currentPage==='Resume' ? 'resume-active':'resume-inactive'}
                    >
                    Resume
                    </a>
                    </li>
            </ul>
        </nav>
    )
}