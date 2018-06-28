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
            this.setState({ trips: res.data.trips })
        }).catch((err) => {
            console.error(err)
        })
    }

    
    render() {
        return (
            <div>
               <h2>TripShowPage</h2>
               <div>{trips.name}</div>
            </div>
        );
    }
}

export default TripShowPage;