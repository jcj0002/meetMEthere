import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const PlansContainer = styled.div`
background:	#bae1ff;

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
   padding: 70px;
   margin-left: 20%;
   margin-bottom:20%;
   border-radius: 8px;
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
        const mappedArray = this.state.plans.map ((plan)=>{
            return(
                <PlansContainer>
                <TripPlans key={plan._id}>
                
                <h2>{plan.activity}</h2>
                <br/>
                <img src= {plan.image} alt={plan.name}/>
                <br/>
                <h3>{plan.price}</h3>
                <h3>{plan.Date}</h3>
                <h3>{plan.description}</h3>
                <h3>{plan.duration}</h3>
                </TripPlans>
              </PlansContainer>
                
            )
        })
        console.log("PLANS PAGE", this.props.plans)
       
       
        return (
            <PlansContainer>
            <div>
            {mappedArray}
                
               

<h1>CREATE Plans</h1>
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
                        {/* <input
                        placeholder="Description"
                        type="text"
                        name="description"
                        value={this.state.trip.description}
                        onChange={this.handleChange} />
                    <br /> */}
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

            </div>
            </PlansContainer>
        
            );
       
        }
    }
    
export default PlansPage;