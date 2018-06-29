import React, { Component } from 'react';
import axios from 'axios'

class NewTripPage extends Component {
    state = {
    name: '' ,
    location: '',
    departureDate: '',
    returnDate: '',
    description: '',
    hotel: '',
    image: ''
    }
    
    handleChange = (event)=>{
        const inputName = event.target.name
        const tripInput = event.target.value
        this.setState({[ inputName ]:tripInput})
       
    }
    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/trips', this.state).then((res)=>{
            console.log(res.data)
            this.props.history.push(`/trips/${res.data._id}`)
        })
    }

    
    render() {
        return (
            <div>
                <h1>Create A Trip</h1>
                
                <form onSubmit={this.handleSubmit}>
                <input
                placeholder="Trip Name"
                type="text"
                name= "name"
                value={this.state.name}
                onChange={this.handleChange}
                />
                <br/>
                <input
                placeholder = "Location"
                type="text"
                name="location"
                value={this.state.location}
                onChange={this.handleChange}/>
 <br/>
                <input
                placeholder = "Departure Date"
                type="date"
                name="departureDate"
                value={this.state.departureDate}
                onChange={this.handleChange}/>

                

                
                
                </form>

                
            </div>
        );
    }
}

export default NewTripPage;