import React from 'react';



const styles = {
    footerStyle:{
      listStyleType: 'none',
      position: 'relative',
      display: 'inline'
    }
}

export default function Footer(){
    return (
        <nav className="navbar" >
            <ul className="navlist" style={styles.footerStyle}>
                <li>Git</li>
                <li>LinkedIn</li>
                <li>Stack Overflow</li>
            </ul>
        </nav>
    )  
}