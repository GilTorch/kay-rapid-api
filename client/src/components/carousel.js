import React  from 'react';
import Carousel from 'nuka-carousel';



const Sliders = ({ children }) => {

     return (
     <div className="container">
             <Carousel>
                 {children}
             </Carousel>
     </div>
     )
        
     
 }
 

export default  Sliders;
