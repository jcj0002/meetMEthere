import React, { Component } from 'react';
import axios from 'axios'

class TripPage extends Component {
    state = {
        trips: []
    }

    componentDidMount() {
        axios.get('/api/trips').then((res) => {
            console.log(res)
            this.setState({ trips: res.data.trips })
        }).catch((err) => {
            console.error(err)
        })
    }

    render() {
        return (
            <div>
                {this.state.trips.map((trips)=>{
                    return(
                        <div key ={trips._id}>
                        <img src={trips.image} alt={trips.name}/>
                        <p>{trips.name}</p>
                        <div>{trips.location}</div>

                         </div>

                    )
                })}
            </div>
        );
    }
}

export default TripPage;