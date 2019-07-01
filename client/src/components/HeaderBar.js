import React from 'react';
import { Link } from 'react-router-dom';
import "../css/header-bar.css"

const HeaderBar=({ title,hasBack })=>{
    return(
        <header className="header-bar">
            {
                hasBack===true ?
                <Link to="/">
                    <span className="header-bar-previous-page-button"></span>
                </Link>:""
            }

            <h1>{title}</h1>
        </header>
    )
};



export default HeaderBar;