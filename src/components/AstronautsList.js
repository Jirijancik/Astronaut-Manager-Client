import React, {Component} from 'react';
import AstronautRecord from './AstronautRecord';

class AstronautsList extends Component{

    state = {
        loading:true,
        data:[]
    }

    async componentDidMount(){
        const url = "https://europe-west1-astronaut-manager.cloudfunctions.net/getAstronauts";
        const response = await fetch(url).catch((err) => console.log(err));
        const data = await response.json();
        console.log(data);


        const list = data.map(item => 
            <AstronautRecord 
            item={item}

            firstName = {item.firstName}
            lastName = {item.lastName}
            >
            </AstronautRecord>
        )

        this.setState({loading:false, data:list})
    }



    render(){



        return[
            <h2>Astronauts List</h2>,
        <div>{this.state.loading ? <div>loading...</div> : <div>{this.state.data}</div>}</div>
        ]
    }
}

export default AstronautsList;
