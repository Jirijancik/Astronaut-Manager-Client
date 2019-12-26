import React, { Component } from 'react';
import '../styles/AstronautRecordStyle.scss'
import AstronautProfileImage from './AstronautProfileImage';


const AstronautRecordInfo = (props) => {
    return [
        <div>
            <div className="Astronaut-Record__Name">
                <div > {props.firstName}  {props.lastName}</div>
            </div>
            <div className="Astronaut-Record__Date-Of-Birth"> {props.dateOfBirth}</div>
            <div className="Astronaut-Record__Superpower"> {props.superpower} </div>
        </div>

    ]
}

export default AstronautRecordInfo;
