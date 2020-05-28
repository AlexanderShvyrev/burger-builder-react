import React from 'react'
import './Plum.css'

const BuildControl = (props) => {
    return (
        <div className="BuildControl">
            <div className="Label"> <em>{props.label}</em> </div>
            <button className="btn btn-danger"
                onClick={props.removed}
                disabled={props.disabled}>
                Less
            </button>
            <button className="btn btn-success"
                onClick={props.added}>
                More
            </button>
        </div>
    )
}

export default BuildControl
