import React, { Component } from 'react'
import AstronautsList from '../components/AstronautsList'

class MainPage extends Component{
    render(){
        return[
                <h1>ASTRONAUT MANAGER</h1>,
                <button>ThemeSwitch</button>,
                <AstronautsList></AstronautsList>
        ]
    }
}

export default MainPage