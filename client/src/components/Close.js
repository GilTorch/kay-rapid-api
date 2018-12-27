import React from 'react';
import { Link } from 'react-router-dom';
const Close=({whereToGo})=>{
    return(
        <Link to={whereToGo}>
            <button className="close-icon">&times;</button>
        </Link>
    )
}

export default Close;