import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const TripContainer = styled.div`
background-color: 	#bae1ff
border: solid turquoise 10px;


`
const Title = styled.div`
text-align: center;
`

const TripImage = styled.div`
.TripImage{
    display: flex
    justify-content: center;
    width: 50vw;
   
    

}
.Container {
    border: solid white 2px;
    box-shadow:5px 10px 18px #888888
    background: white;
   display: flex
   flex-direction: row
   flex-wrap:wrap
   justify-content:center;
   align-items: baseline;
   width: 50vw
   padding: 70px;
   margin-left: 20%;


   
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
            <TripContainer>
                <Title>
                <h1>meetMEthere!</h1>
                </Title>
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
                <br />
                <Link to="/trips/new"><button>START PLANNING</button></Link>
                <br />

            </TripContainer>
        );
    }
}

export default TripPage;