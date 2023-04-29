import React from 'react';



const styles ={
li:{
   listStyleType: 'none' 
}
}


export default function Navigation() {
    return (
        <nav className="navbar" >
            <ul className="navlist" style={styles.li}>
                <li>About Me</li>
                <li>Portfolio</li>
                <li>Contact Me</li>
                <li>Resume</li>
            </ul>
        </nav>
    )
}