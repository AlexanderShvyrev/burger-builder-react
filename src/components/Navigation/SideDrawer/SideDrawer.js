import React from 'react'
import Logo from '../../Logo/Logo'
import NavItems from '../NavItems';
import './SdDrwr.css'
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux'

const SideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Close"]
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"]
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <Logo height="11%" />
                <nav>
                    <NavItems />
                </nav>
            </div>
        </Aux>
    )
}

export default SideDrawer
