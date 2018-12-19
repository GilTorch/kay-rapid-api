import React from 'react';
import { Link } from 'react-router-dom';
import "../css/header-bar.css"

const HeaderBar=({ title,hasBack })=>{
    return(
        <header className="header-bar">
            {
                hasBack==true ?
                <Link to="/">
                    <i className="fas fa-arrow-circle-left back-arrow"></i>
                </Link>:""
            }

            <h1>{title}</h1>
        </header>
    )
};



export default HeaderBar;