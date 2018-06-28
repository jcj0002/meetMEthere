import React, { Component } from 'react';

class LandingPage extends Component {
    state = {
        userName: '',
        password: ''
    }
    handleChange = (event) => {
        const inputName = event.target.name
        const userInput = event.target.value
    
    const newState = { ...this.state }
    newState[ inputName ] = userInput
    this.setState(newState)
    console.log(event) 
}

render() {
    return (
        <div>
            <h1>meetMEthere!</h1>
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="Username"
                    type="text"
                    name="userName"
                    value={this.state.userName}
                    onChange={this.handleChange}
                />
                <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
        
                />
                
                <button> <a href ="http://localhost:3000/trips">Login</a></button>
                
            </form>
            
        </div>
    );
}
}

export default LandingPage;