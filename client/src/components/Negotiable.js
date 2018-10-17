import React from 'react'


const Negotiable = ()=>{

    
        return (
            <div className="Negotiable-Container">
                <div><i className="fas fa-times Negotiable-Container__fa-times "></i></div>
                <h1 className="Negotiable-Container__Title">Ou enterese ak Kay sa ?</h1>
                <p className="Negotiable-Container__Paragraph">Kay sa gen yon pri negosyab. Fe popriete a konnen konbyen ou pre pou bay </p>
            <form action="">
                    <input type="number" className="Negotiable-Container__Input" placeholder="Ekri pri w'ap bay la"/>
                    <p className="Negotiable-Container__Exemple"><strong>Ex: 10 000 $US</strong></p>
                <Button />
            </form>
          </div>
        );
    
}
const Button = () => {
    return <input type="submit" value="Valide" className="Negotiable-Container__Button" />
        
}
export default Negotiable;



