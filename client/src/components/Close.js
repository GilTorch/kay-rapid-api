import React from 'react';

const Close=({ history })=>{
    return(
        <button onClick={()=>history.goBack()} className="close-icon">&times;</button>
    )
}

export default Close;