import React from 'react'
import './NavItms.css'
import NavI from './NavI'

const NavItems = (props) => (


    <ul className="Navigation">
        <NavI link="/" active>Burger Builder</NavI>
        <NavI link="/">Checkout</NavI>
    </ul>

)


export default NavItems
