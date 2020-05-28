import React from 'react'
import './Btn.css'

const Button = (props) => (
    <button
        className={["Button", props.btnType].join(' ')}
        onClick={props.clicked} >{props.children}
    </button>
)

export default Button
