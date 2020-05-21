import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import logo from './../img/logo.png'
import iconMecanico from './../img/icon-mecanico.png'
import iconHistorial from './../img/icon-historial.png'

const Menu = () =>{

    return(
        <section className='menu'>
        <img src={logo} className='logo' />
        <Link to='/nuevo' activeClassName='item-container-active'>
            <div className='item-container'>
                <img src={iconMecanico} className='icon'/>
                <p className='menu-text'>Nueva reparación</p>
            </div>
        </Link>
        <Link to='/historial' activeClassName='item-container-active'>
            <div className='item-container'>
                <img src={iconHistorial} className='icon'/>
                <p className='menu-text'>Historial</p>
            </div>
        </Link>
      </section>
    )
}

export default Menu
