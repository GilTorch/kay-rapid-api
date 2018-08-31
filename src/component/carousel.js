import React  from 'react';
import image_5 from './images/image_5.jpg';



 function Carousel (props){

     return (
     <div className="container">
             <div className="mySlides">
                 <div className="numbertext"></div>
                 <img src={image_5} alt="imageOne" />
         </div>
        
     </div>
     )
 }
 

export default  Carousel;
