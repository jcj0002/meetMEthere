import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const PlansContainer = styled.div`


button{
  background-color: turquoise;
   color: white;
   display: flex;
   justify-content: space-around;
   font-size: 25px;
   padding-bottom: 10px;
   border-radius:8px;
  
}

form{
    border: solid 2px;
    box-shadow:5px 10px 18px #888888;
    background: white;
   display: flex;
   flex-direction: column;
   flex-wrap:wrap;
   justify-content:space-around;
   align-items: baseline;
   width: 50vw;
   height:40vh;
   margin-left: 20%;
   padding: 5%;
   border-radius: 8px;

}
h1{
   
   border: solid #336699 2px;
   width:30vw;
   height:5vh;
   text-align: center;
   display:flex;
   justify-content: center;
   background:#336699;
   color:white;
   border-radius: 8px;
   margin-left:36%;
   padding:10px;
   
}
h2{
    text-align: center;
    font-size:35px;
    /* margin-top: 150px; */

}
.Plans{
    -webkit-text-stroke: .5px black;
    font-size: 40px;
}

`

const TripPlans = styled.div`
    border: solid white 2px;
    box-shadow:5px 10px 18px #888888;
    background: white;
   display: flex;
   flex-direction: row;
   flex-wrap:wrap;
   justify-content:center;
   align-items: baseline;
   width: 50vw;
   margin-left: 20%;
   /* height:60vh; */
   padding: 5%;
    color:tan;
   border-radius: 8px;
}

.TripImage{
    display: flex;
    justify-content: center;
    width: 50vw;
    size:30px;
}

    `


class PlansPage extends Component {
    state = {
        trip: {},
        plans: []
    }



    componentDidMount() {
        const tripId = this.props.match.params.tripId

        axios.get(`/api/trips/${tripId}`).then((res) => {
            console.log("Setting Plans")
            this.setState({
                trip: res.data.trip,
                plans: res.data.trip.plans
            })
        })

    }

    handleChange = (event) => {
        const inputName = event.target.name
        const planInput = event.target.value
        this.setState({ [inputName]: planInput })

    }
    handleSubmit = (event) => {
        event.preventDefault()
        const tripId = this.props.match.params.tripId

        const data = {
            image: this.state.image,
            activity: this.state.activity,
            description: this.state.description,
            price: this.state.price,
            duration: this.state.duration
        }

        axios.post(`/api/trips/${tripId}/plans/new`, data).then((res) => {
            this.setState({
                trip: res.data.trip,
                plans: res.data.trip.plans.new
            })
            console.log(res.data)
        })
    }


    render() {
        const mappedArray = this.state.plans.map((plan) => {
            return (
                <PlansContainer>
                    <h2 className="Plans">Plans</h2>
                    <br />
                    <br />
                    <TripPlans key={plan._id}>
                        <h2>{plan.activity}</h2>
                        <br />
                        <img className='TripImage' src={plan.image} alt={plan.name} />
                        <br />
                        <ul>
                            <li>
                                <h3>PRICE: {plan.price}</h3>
                            </li>
                            <br />
                            <h3>{plan.Date}</h3>
                            <li>
                                <h3>DESCRIPTION: {plan.description}</h3>
                            </li>
                            <br />
                            <li>
                                <h3>DURATION: {plan.duration}</h3>
                            </li>
                        </ul>
                    </TripPlans >
                </PlansContainer >

            )
        })
        console.log("PLANS PAGE", this.props.plans)


        return (
            <PlansContainer>
                <div>
                    {mappedArray}
                    <br />
                    <h1>CREATE PLANS</h1>
                    <br />
                    <form onSubmit={this.handleSubmit}>
                        <input
                            placeholder="Activity Name"
                            type="text"
                            name="activity"
                            value={this.state.activity}
                            onChange={this.handleChange}
                        />
                        <br />
                        <input
                            placeholder="Price"
                            type="text"
                            name="price"
                            value={this.state.price}
                            onChange={this.handleChange} />
                        <br />
                        <input
                            placeholder="Description"
                            type="text"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange} />
                        <br />
                        <input
                            placeholder="Duration"
                            type="text"
                            name="duration"
                            value={this.state.duration}
                            onChange={this.handleChange} />
                        <br />
                        <input
                            placeholder="Activity Image"
                            type="text"
                            name="image"
                            value={this.state.image}
                            onChange={this.handleChange} />
                        <br />

                        <button type="submit">SAVE</button>

                    </form>
                    <br />
                </div>
            </PlansContainer >

        );

    }
}

export default PlansPage;