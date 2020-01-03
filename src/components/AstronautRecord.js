import React from 'react';
import '../styles/AstronautRecordStyle.scss'
import AstronautProfileImage from './AstronautProfileImage';
import AstronautRecordInfo from './AstronautRecordInfo';


const AstronautRecord = (props) => {
    return [
        <div className="Astronaut-Record">
            <AstronautProfileImage
             gender = {props.gender}
            ></AstronautProfileImage>

            <AstronautRecordInfo
            {...props}
            ></AstronautRecordInfo>

            
        </div>,
        <hr className= "Astronaut-Record__Hr" ></hr>

    ]
}

export default AstronautRecord;
