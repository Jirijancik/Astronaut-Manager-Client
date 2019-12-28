import React, { Component } from 'react'
import AstronautsList from '../components/AstronautsList'
import SpaceBackground from '../components/SpaceBackground'

import '../styles/MainPageStyle.scss'

class MainPage extends Component {
    render() {
        return [
            <SpaceBackground></SpaceBackground>,
            <div className="Main-Page__Wrapper">
                <h1 className="Main-Page__Header">ASTRONAUT MANAGER</h1>

                <AstronautsList></AstronautsList>
            </div>
        ]
    }
}

export default MainPage