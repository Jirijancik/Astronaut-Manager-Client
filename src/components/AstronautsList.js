import React, { Component } from 'react';
import AstronautRecord from './AstronautRecord';
import '../styles/AstronautListStyle.scss'
import LoadingLayer from './LoadingLayer';
import AddAstronautForm from './AddAstronautForm';

class AstronautsList extends Component {
    constructor(props) {
        super(props);

        this.enableContent = this.enableContent.bind(this);

        this.state = {
            loading: true,
            timerFinished: false,
            data: []
        }

    }


    async componentDidMount() {
        const url = "/getAstronauts";
        const response = await fetch(url).catch((err) => console.log(err));
        const data = await response.json();


        const list = data.map(item =>
            <AstronautRecord
                item={item}

                firstName={item.firstName}
                lastName={item.lastName}
                dateOfBirth={item.dateOfBirth}
                superpower={item.superpower}
                gender={item.gender}
                key={item.id}

            >
            </AstronautRecord>
        )
        setTimeout(this.enableContent, 2200);
        this.setState({ loading: false, data: list });
    }

    componentWillUnmount() {
        clearTimeout(this.timerFinished);
    }

    enableContent() {
        this.setState({ timerFinished: true });
    }

    render() {
        return [

            <div className="Astronaut-List" >{

                !this.state.loading && !this.state.timerFinished ?

                    <LoadingLayer></LoadingLayer> :

                    <React.Fragment>
                        <AddAstronautForm></AddAstronautForm>

                        {
                            this.state.data
                        }

                    </React.Fragment>
            }</div>
        ]
    }
}

export default AstronautsList;
