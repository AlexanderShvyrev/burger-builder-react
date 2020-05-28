import React from 'react'
import burgerLogo from '../../assets/images/burger-logo.png'
import './Lg.css'

const Logo = (props) => {
    return (
        <div className="Logo" style={{ height: props.height }}>
            <img src={burgerLogo} alt="logo" />
        </div>
    )
}

export default Logo
