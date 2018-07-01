import React, { Component } from 'react';
import axios from 'axios'
class PlansPage extends Component {
    state = {
        activity: '',
        price: '',
        date: '',
        description: '',
        duration: '',
        image: ''
    }

    handleChange = (event) => {
        const inputName = event.target.name
        const planInput = event.target.value
        this.setState({ [inputName]: planInput })

    }
    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/plans', this.state).then((res) => {
            console.log(res.data)
            this.props.history.push(`/trips/:tripId/plans/${res.data._id}`)
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
                        value={this.state.hotel}
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
                
           
        );
    }
}

export default PlansPage;