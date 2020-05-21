import React from "react";
import logo from './../../img/logo-grande.png'

const Home = () => {
    return(
        <div className='home-container'>
            <img src={logo}  width='300px' height='300px'></img>
            <button type='button'> Nueva reparación</button>
        </div>
    )
}

export default Home