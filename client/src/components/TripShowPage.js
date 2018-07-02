import React, { Component } from 'react';
import axios from 'axios'
import UpdateTripPage from './UpdateTripPage'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PlansPage from './PlansPage';


const TripImage = styled.div`
.TripImage{
    width: 50vw;
    border: solid white 2px;
    box-shadow:5px 10px 18px #888888;
    background: white;
   display: flex;
   flex-direction: row;
   flex-wrap:wrap;
   justify-content:center;
   align-items: baseline;
   width: 50vw;
   padding: 70px;
   margin-left: 20%;
   margin-bottom:20%;
   border-radius: 8px;

   
    
    center{
        color: white;
    }


}
`
const TripDetails = styled.div`
background:	#bae1ff;
border:solid turquoise 10px;
color: white;

.DescriptionFont{
    color: black;

    
}
button: margin-top: 50px;

`

class TripShowPage extends Component {

    state = {
        trips: {},
        editTrip: false
    }
    componentDidMount() {
        const tripId = this.props.match.params.tripId
        axios.get(`/api/trips/${tripId}`).then((res) => {
            console.log("TRIP API", res.data)
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
            <TripDetails>
                <TripImage>
                    <center>
                    <h2>{this.state.trips.name}</h2>
                    </center>
                    <img className='TripImage' src={this.state.trips.image} alt={this.state.trips.name} />
                    <div className= 'DescriptionFont'>{this.state.trips.description}</div>

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

                <br />
                <div>

                    <PlansPage plans={this.state.trips.plans} {...this.props} />
                </div>



                {this.state.editTrip
                    ? <div>
                        <UpdateTripPage match={this.props.match} history={this.props.history} />


                    </div>
                    : null}
            </TripDetails>
        );
    }
}

export default TripShowPage;