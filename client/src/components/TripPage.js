import React, { Component } from 'react';
import axios from 'axios'
import style from 'styled-components'

const TripImage = style.div`
.TripImage{
    width: 50vw;

}
`

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
                        <TripImage key ={trips._id}>
                        <img className='TripImage' src={trips.image} alt={trips.name}/>
                        <p>{trips.name}</p>
                        <div>{trips.location}</div>

                         </TripImage>

                    )
                })}
            </div>
        );
    }
}

export default TripPage;