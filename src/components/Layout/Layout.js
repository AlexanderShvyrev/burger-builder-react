import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import ToolBar from '../Navigation/ToolBar'
import './Lyot.css'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    sideDrawerClosed = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }

    render() {
        return (
            <Aux>
                <ToolBar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosed} />
                <main className="Content">{this.props.children}</main>
            </Aux>

        )
    }

}

export default Layout

