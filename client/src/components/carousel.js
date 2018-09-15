import React  from 'react';
import Carousel from 'nuka-carousel';



const Sliders = () => {

     return (
     <div className="container">
             <Carousel>
                 <img  src= "https://images.unsplash.com/photo-1524082983062-21c24967d6c9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0a1532b84f66efdf63f7af7b1f0493f5&auto=format&fit=crop&w=1458&q=80/&text=slide1" alt ="" />
                 <img src= "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a89aadd142f6b7fb7d4ae8196acd51cb&auto=format&fit=crop&w=401&q=80/text=slide2" alt = "" />
                 <img src= "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a89aadd142f6b7fb7d4ae8196acd51cb&auto=format&fit=crop&w=401&q=80/text=slide3" alt = "" />
                
             </Carousel>
     </div>
     )
        
     
 }
 

export default  Sliders;
