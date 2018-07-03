import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'

const FormContainer = styled.div`

form{
    border: solid #336699 2px;
    box-shadow: 5px 10px 18px #888888;
    background: white;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: baseline;
    width: 30vw;
    height: 30vh;
    margin: 100px 0 20% 480px;
    padding: 70px;
    border-radius: 8px;
}

h1{
    text-align:center;

}
button{
    background-color: turquoise;
   color: white;
   font-size: 25px;
   padding: 10px;
   border-radius:8px;
   

 
}

`


class UpdateTripPage extends Component {
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
        const tripId = this.props.match.params.tripId
        event.preventDefault()

        console.log('props inside handleSubmit', this.props)

        axios.put(`/api/trips/${tripId}`, this.state)
            .then((res) => {
                this.props.history.push(`/trips/${tripId}`)
                console.log(res.data)
            })
    }
    render() {
        return (
            <div>
                <FormContainer>

                    <h1>UPDATE TRIP</h1>




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
                        <button type="submit">UPDATE</button>
                    </form>
                </FormContainer>
            </div>
        );
    }

}

export default UpdateTripPage