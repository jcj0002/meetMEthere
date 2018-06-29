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


    render() {

        return (
            <div>
                <h2>Your Trip</h2>
                <img className='TripImage' src={this.state.trips.image} alt={this.state.trips.name} />
            </div>
        );
    }
}

export default TripShowPage;