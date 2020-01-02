import React, { Component } from 'react';

class AddAstronautForm extends Component {
    state = {
        open: false,
        lastName: '',
        firstName: '',
        dateOfBirth: '',
        superpower: '',
        gender: ''
    };


    handleOpen = () => {
        this.setState({ open: true });
    }

    handleOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    createRandomDbId = () => {
        return (Math.random()) * (10 ** 5);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const url = "/createAstronaut";
        fetch(url, {

            method: 'POST',
            headers: new Headers(),
            body: JSON.stringify({
                lastName: this.state.lastName,
                firstName: this.state.firstName,
                superpower: this.state.superpower,
                dateOfBirth: this.state.dateOfBirth,
                gender: this.state.gender
            })
        }).then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
    }




    render() {
        const { lastName, firstName, dateOfBirth, superpower, gender } = this.state
        let form;

        if (this.state.open) {
            form = <form onSubmit={this.handleSubmit}>
                <h1>ADD NEW ASTRONAUT</h1>
                <input
                    placeholder="First Name"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={this.handleOnChange}
                ></input>
                <input
                    placeholder="Last Name"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={this.handleOnChange}
                ></input>
                <input placeholder="Date Of Birth"
                    type="text"
                    name="dateOfBirth"
                    value={dateOfBirth}
                    onChange={this.handleOnChange}
                ></input>
                <input placeholder="Superpower"
                    type="text"
                    name="superpower"
                    value={superpower}
                    onChange={this.handleOnChange}
                ></input>
                <input placeholder="Gender"
                    type="text"
                    name="gender"
                    value={gender}
                    onChange={this.handleOnChange}
                ></input>
                <button type="submit" >ADD</button>
            </form>
        }

        return [
            <button onClick={this.handleOpen}>ADD A NEW RECRUIT</button>,

            <React.Fragment>
                {form}
            </React.Fragment>

        ]
    }
}

export default AddAstronautForm