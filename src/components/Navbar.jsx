import React from "react";
import photo from "./flag.jpg";

export default function Navbar(props) {
    return (
         <nav 
            className={props.darkMode ? "dark": ""}
        >
            <img className="nav--logo_icon"
                src={photo}/>
            <h3 className="nav--logo_text">Nigeria</h3>
            <div className="toggler" >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}