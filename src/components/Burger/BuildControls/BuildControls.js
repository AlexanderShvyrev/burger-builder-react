import React from 'react'
import './Banana.css'
import BuildControl from './BuildControl'
const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const BuildControls = (props) => {
    return (
        <div className="BuildControls">
            <p>Current Price: <em>${props.price.toFixed(2)}</em></p>
            {controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            ))}
            <button
                className="btn btn-lg btn-warning"
                disabled={!props.purchasable}
                onClick={props.ordered}
            >
                Order Now
            </button>
        </div>
    )
}

export default BuildControls
