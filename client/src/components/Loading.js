import React from 'react';
import '../css/bouncing-loader.css';

const Loading = ({ children}) =>{
        return (
            <div className="loading">
                {children}
                <div className="bouncing-loader">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }

export default Loading;