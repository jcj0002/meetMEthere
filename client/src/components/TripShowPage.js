import React, { Component } from 'react';
import axios from 'axios'
import UpdateTripPage from './UpdateTripPage'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PlansPage from './PlansPage';



const TripContainer = styled.div`



.Container{
   border: solid white 2px;
    box-shadow:5px 10px 18px #888888;
    background: white;
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content:center;
    align-items: baseline;
    width: 50vw;
    /* height:60vh; */
    margin-left:20%;
    padding: 5%;
    border-radius: 8px;
    color: tan;

   
}
.TripImage{
    display: flex;
    justify-content: center;
    width: 50vw;
    size:30px;
}
   
    
center{
    color: white;
    font-size: 30px;
    -webkit-text-stroke: .5px black;

    }


h3{
    font-size: 30px;
    color:tan;
    margin-top:-20px;
}
`
const TripDetails = styled.div`
background:	#bae1ff;
border:solid turquoise 10px;
color: white;
max-width: 100%;

.DescriptionFont{
    color:tan;

    
}

button{
    
    background-color: turquoise;
   color: white;
   font-size: 25px;
   padding: 10px;
   border-radius:8px;
   

 
}

`
const AdjustmentButton = styled.div`

display:flex;
justify-content: space-around;
align-content: center;
margin-top: 60px;
padding-right: 100px;
padding-left:100px;

@media (max-width: 500px) {
    button{
        text-align:center;
    }
    h1{
        font-size:20px;
    }
    
    .Container{
        width: 112vw;

    
    }

    
    
    
    
}
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
                <TripContainer>
                    <br/>
                    <center>
                        <h2>{this.state.trips.name}</h2>
                    </center>
                    <br/>

                    <div className="Container">
                        <h3>{this.state.trips.location}</h3>
                        <img className='TripImage' src={this.state.trips.image} alt={this.state.trips.name} />
                        <div className='DescriptionFont'>{this.state.trips.description}</div>
                       

                        <br />
                    </div>
                </TripContainer>
                <AdjustmentButton>
                    <button onClick={this.deleteTrip}>DELETE TRIP</button>

                    {this.state.editTrip
                        ? null
                        : (
                            <button onClick={this.toggleEditTripForm}>
                                EDIT TRIP
                    </button>
                        )}
                        
                </AdjustmentButton>



                <br />
                <br />
                <div className="PlansContainer">

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