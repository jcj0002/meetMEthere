import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'





const Title = styled.div`
text-align: center;
text-shadow:2px;
color: #6D929B;
text-shadow: 2px 1px black;
font-size: 35px;
text-decoration:underline;

`

const TripImage = styled.div`
color: tan;
.TripImage{
    display: flex;
    justify-content: center;
    width: 50vw;
    size:30px;
   
    

}
.Container {
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
   border-radius: 8px;
}
`
const TripContainer = styled.div`
background-color: 	#bae1ff;
border: solid turquoise 10px;
text-align: center;


h2{
    color: white;
    -webkit-text-stroke: .5px black;
    font-size: 30px;
}
h3{
    font-size: 30px;
    color:tan;
    margin-top:-20px;
}

button{
   background-color: turquoise;
   color: white;
   font-size: 25px;
   padding: 10px;
   border-radius:8px;
    
}

.CreateButton{
    margin-right: 82%;
    margin-bottom:30px;
   
}
@media (max-width: 500px) {
    button{
        text-align:center;
    }
    h1{
        font-size:20px;
    }
    
    .TripContainer{
        width: 112vw;
    }
    
    
    
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
        const mappedArray = this.state.trips.map((trips) => {
            return (
                <TripImage key={trips._id}>
                    <h2>{trips.name}</h2>
                    <br/>
                    <div className='Container'>
                    <h3>{trips.location}</h3>
                        <img className='TripImage' src={trips.image} alt={trips.name} />
                        <br/>
                        <br/>
                        <div>{trips.description}</div>
                        <br/>
                        
                    </div>
                    <br/>
                    <Link to={`/trips/${trips._id}`}><button>VIEW</button></Link>
                    <br />
                </TripImage>
            )
        })

        return (
            <TripContainer className="TripContainer">
                <Title>
                    <h1>meetMEthere!</h1>
                </Title>

                {mappedArray}

                <br />
               
                    <Link to="/trips/new"><button className="CreateButton" >START PLANNING</button></Link>
               
                <br />


            </TripContainer>
        );
    }
}

export default TripPage;