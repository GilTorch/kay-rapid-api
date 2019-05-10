import React from 'react';
import { Link } from 'react-router-dom';
const Close=({ history })=>{
    return(
        <button onClick={()=>history.goBack()} className="close-icon">&times;</button>
    )
}

export default Close;