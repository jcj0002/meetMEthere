import React, { Component } from 'react';
import axios from 'axios'
class PlansPage extends Component {
    state = {
        trip:{},
        plans:[]
    }

    componentDidMount () {
        const tripId = this.props.match.params.tripId

    axios.get(`/api/trips/${tripId}`).then((res) => {
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
        // axios.post(`/api/trips/${tripId}/plans/new`, this.state)
        // .then((res) => {
        
        //     this.props.history.push(`/trips/${tripId}`)
        
        axios.post(`/api/trips/${tripId}/plans/new`).then((res) => {
            this.setState({
            trip: res.data.trip,
            
              plans: res.data.trip.plans.new
              
            })
            console.log(res.data)
          })
        }

        
    render() {
        return (
            <div>

                 <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="Activity Name"
                        type="text"
                        name="activity"
                        value={this.state.trip.activity}
                        onChange={this.handleChange}
                    />
                    <br />
                     <input
                        placeholder="Price"
                        type="text"
                        name="price"
                        value={this.state.trip.price}
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
                        value={this.state.trip.duration}
                        onChange={this.handleChange} />
                    <br />
                    {/* <input
                        placeholder="Activity Image"
                        type="text"
                        name="image"
                        value={this.state.trip.image}
                        onChange={this.handleChange} />
                    <br />  */}
                
                    <button type="submit">SAVE</button>
                    </form> 
            </div>
                
           
        );
    }
}

export default PlansPage;