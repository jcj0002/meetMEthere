import React, { Component } from 'react';
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import TripPage from './components/TripPage'
import LandingPage from './components/LandingPage'
import PlansPage from './components/PlansPage'
import TravelersPage from './components/TravelersPage'
import TripShowPage from './components/TripShowPage'
import NewTripPage from './components/NewTripPage'
import UpdateTripPage from './components/UpdateTripPage'



class App extends Component {
  state = {
    trips: []
  }


  render() {
    const TripShowPageInfo = (props) => (
      <TripShowPage trips={this.state.trips}{...props} />
    )
    return (
      

        <Router>
          <div >
            <div>
              <Link to="/trips">Home</Link>

            </div>
            <div className="App">

            </div>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/trips" component={TripPage} />
              <Route exact path="/trips/new" component={NewTripPage} />

              <Route exact path="/trips/:tripId" render={TripShowPageInfo} />
              <Route exact path="/trips/:tripId/" component={UpdateTripPage} />
              <Route exact path="/trips/:tripId/plans/new" component={PlansPage} />
              <Route exact path="/trips/:tripId/travelers" component={TravelersPage} />

            </Switch>

          </div>

        </Router>
   
    );
  }
}

export default App;
