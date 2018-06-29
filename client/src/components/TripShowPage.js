import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'



class TripShowPage extends Component {
    state = {
        trips: []
    }
    componentDidMount() {
        const tripId = this.props.match.params.tripId
        axios.get(`/api/trips/${tripId}`).then((res) => {
            console.log(res)
            this.setState({ trips: res.data.trip })
        })
            .catch((err) => {
                console.error(err)
            })
    }
    deleteTrip = () => {
        const tripId = this.state.trips._id
    
        axios.delete(`/api/trips/${tripId}`)
          .then(res => {
            this.props.history.push('/trips')
          })
      }




    render() {

        return (
            <div>
                <h2>Your Trip</h2>
                <img className='TripImage' src={this.state.trips.image} alt={this.state.trips.name} />

                <br/>
                <button onClick={this.deleteTrip}>Delete User</button>

            </div>
        );
    }
}

export default TripShowPage;