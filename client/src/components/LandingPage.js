import React, { Component } from 'react';
import styled from 'styled-components'

const LandinPage= styled.div`

display:flex;
justify-content: space-around;
margin-top: -1px;
background-color: #bae1ff;
border: solid 10px turquoise;

padding: 30%;

form{
    display:flex;
    width:30%;
    text-align:center;
    justify-content: space-around;
   
}
h1{
    
}

`

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
        <LandinPage>
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
            
            </LandinPage>
    );
}
}

export default LandingPage;