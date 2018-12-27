import React from 'react';
import { Link } from 'react-router-dom';

import "../css/neighborhood.css";

const Neighborhood =({name})=>{

    return(
    <div className="neighborhood">
      <h2 className="neighborhood__title">{name}</h2>
    </div>
        
    )
}


export default Neighborhood;



