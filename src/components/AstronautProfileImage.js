import React, { Component } from 'react';
import maleAstronautPng from '../img/MaleAstronaut.png'
import femaleAstronautPng from '../img/FemaleAstronaut.png'

import '../styles/AstronautProfileImageStyle.scss'

const AstronautProfileImage = (props) => {
    return [
        <div className="Astronaut-Profile-Image__Wrapper">
            <img className="Astronaut-Profile-Image" src={
                props.gender === "male" ? maleAstronautPng : femaleAstronautPng
                } alt="Profile"></img>
        </div>
    ]
}

export default AstronautProfileImage;
