import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'

const NewContainer=styled.div`
    background:	#bae1ff;
    border:solid turquoise 10px;
    color: white;

form{
    border: solid #336699 2px;
    box-shadow:5px 10px 18px #888888;
    background: white;
   display: flex;
   flex-direction: column;
   flex-wrap:wrap;
   justify-content:space-around;
   align-items: baseline;
   width: 30vw;
   height:30vh;
   margin: 100px 0 20% 480px ;
   padding: 70px;
   border-radius: 8px;


}

button{
    background-color: turquoise;
   color: white;
   font-size: 25px;
   padding-bottom: 10px;
   border-radius: 8px;
}

h1{
    text-align:center;
}

`

class NewTripPage extends Component {
    state = {
        name: '',
        location: '',
        departureDate: '',
        returnDate: '',
        description: '',
        hotel: '',
        image: ''
    }

    handleChange = (event) => {
        const inputName = event.target.name
        const tripInput = event.target.value
        this.setState({ [inputName]: tripInput })

    }
    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/trips', this.state)
            .then((res) => {
                console.log(res.data)
                this.props.history.push(`/trips/${res.data._id}`)
            })
    }



    render() {
        return (
            <NewContainer>
                <h1>Create A Trip</h1>

                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="Trip Name"
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        placeholder="Location"
                        type="text"
                        name="location"
                        value={this.state.location}
                        onChange={this.handleChange} />
                    <br />
                    <input
                        placeholder="Description"
                        type="description"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange} />
                    <br />
                    <input
                        placeholder="Hotel Information"
                        type="text"
                        name="hotel"
                        value={this.state.hotel}
                        onChange={this.handleChange} />
                    <br />
                    <input
                        placeholder="Trip Image"
                        type="text"
                        name="image"
                        value={this.state.image}
                        onChange={this.handleChange} />
                    <br />
                    <input
                        placeholder="Departure Date"
                        type="date"
                        name="departureDate"
                        value={this.state.departureDate}
                        onChange={this.handleChange} />
                    <br />
                    <input
                        placeholder="Return Date"
                        type="date"
                        name="returnDate"
                        value={this.state.returnDate}
                        onChange={this.handleChange} />

                    <br />
                    <button type="submit">Submit</button>




                </form>


            </NewContainer>
        );
    }
}

export default NewTripPage;