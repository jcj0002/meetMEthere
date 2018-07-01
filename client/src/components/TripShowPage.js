import React, { Component } from 'react';
import axios from 'axios'
import UpdateTripPage from './UpdateTripPage'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PlansPage from './PlansPage';




const TripImage = styled.div`
.TripImage{
    width: 50vw

}
`




class TripShowPage extends Component {
    
    state = {
        trips: [],
        editTrip: false
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
    toggleEditTripForm = () => {
        const updatedEditTrip = !this.state.editTrip
        this.setState({ editTrip: updatedEditTrip })
    }



    render() {

        return (
            <div>
                <TripImage>
                <h2>{this.state.trips.name}</h2>
                <img className='TripImage' src={this.state.trips.image} alt={this.state.trips.name} />
                <div>{this.state.trips.description}</div>

                <br />
                <button onClick={this.deleteTrip}>DELETE TRIP</button>


                {this.state.editTrip
                    ? null
                    : (
                        <button onClick={this.toggleEditTripForm}>
                            EDIT TRIP
                    </button>
                    )
                }
                </TripImage>
                
                <br/>
                <div>

                <PlansPage match ={this.props.match}/>
                </div>



                {this.state.editTrip
                    ? <div>
                        <UpdateTripPage match={this.props.match} history={this.props.history}/>
                        
                       
                    </div>
                    : null}
            </div>
        );
    }
}

export default TripShowPage;