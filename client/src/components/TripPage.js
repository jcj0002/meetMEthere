import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'



const TripImage = styled.div`
.TripImage{
    width: 50vw

}
.Container {
    border: solid black 5px;
    width: 50vw
    height: 45vw
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
                <h1>Trip</h1>
                <form>
                    Name: <input type='text' />
                </form>
                {this.state.trips.map((trips) => {
                    return (
                        <TripImage key={trips._id}>
                            <p>{trips.name}</p>
                            <div>{trips.location}</div>
                            <div className='Container'>
                                <img className='TripImage' src={trips.image} alt={trips.name} />
                                <div>{trips.description}</div>
                            </div>
                            <Link to={`/trips/${trips._id}`}><button>VIEW</button></Link>  
                        </TripImage>
                    )
                })}

                <Link to="/trips/new"><button>START PLANNING</button></Link>  
              
            </div>
        );
    }
}

export default TripPage;