import React, { Component } from 'react';
import styled from 'styled-components'

const LoginButton= styled.div`
display:flex;
justify-content: flex-end;
width: 115px;
position:absolute;
margin:0 auto;
left: 0;
right: 0;
`

   
   
    


const LandinPage= styled.div`

margin-top: -1px;
background-color: #bae1ff;
border: solid 10px turquoise;
height: 1000px;
text-align: center;
text-align: center;
text-shadow:2px;
color: #6D929B;
text-shadow: 2px 1px black;
font-size: 35px;
text-decoration:underline;

@media (max-width: 500px) {

h1 {
font-size: 20px;
}



form{
    margin-right: 180px;

}


}

input{
   display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  width:200px;
  height: 20px;
  margin-left: 43%;
  margin-bottom: 40px;
  padding-top: 20px;
    
}

button{
    background-color: turquoise;
   color: white;
   font-size: 25px;
   border-radius:8px;

   
   
}

a{
    text-decoration: blink;
    color:white;
  font-size:20px;
  text-transform: uppercase;
  display:flex;
  align-content: center;
  padding:20px;
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
            
                <LoginButton>
                <button> <a href ="http://localhost:3000/trips">Login</a></button>
                </LoginButton>
            </form>
            
            
            </LandinPage>
    );
}
}

export default LandingPage;