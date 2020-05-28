import React from 'react'
import './Tlbr.css'
import Logo from '../Logo/Logo'
import NavItems from './NavItems'
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle'

const ToolBar = (props) => {
    return (
        <header className="Toolbar">
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <Logo height="80%" />
            <nav className="DesktopOnly">
                <NavItems />
            </nav>
        </header>
    )
}

export default ToolBar
