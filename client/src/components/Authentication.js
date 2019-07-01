import React from 'react';
import { Link } from 'react-router-dom';
import "../css/authentication.css";

const Authentication = props => (
    <div className="card signin-card">
        <div className="signin-card__wrapper">
            <p className="signin-card__message">Konekte kounya pou ou ka genyen yon pi bon eksperyans.</p>
            <Link to="/authentication/signin-methods">
                <button className="auth-button success-button">KONEKTE</button>
            </Link>
        </div>
    </div>
)

export default Authentication;