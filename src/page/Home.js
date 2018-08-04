import React from 'react';
import Navigation from '../components/Navigation';

const Home=({ title })=>{
    return(
        <div>
            <header>
            <div className="wrapper">
                <img className="app-logo" src="../../images/LAKAY-OU_lOGO.png"/>
                <h1 className="">{ title }</h1>
            </div>
            <form>
                <input type="search" placeholder="Tape non vil, komin oswa katye ou vle jwenn kay la..."/>
                <input type="button" value="search"/>
            </form>
            </header>
            <Navigation/>
        </div>
    )
}    ;

export default Home;