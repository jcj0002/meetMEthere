import React, { Component } from 'react';
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import TripPage from './components/TripPage'
import LandingPage from './components/LandingPage'
import PlansPage from './components/PlansPage'
import TravelersPage from './components/TravelersPage'
import TripShowPage from './components/TripShowPage'

class App extends Component {


  render() {
    return (

      <Router>
        <div>
          <div>
            <Link to="/trips">Home</Link>
          </div>
          <div className="App">


          </div>
          <Switch>
            <Route exact path="/trips" component={TripPage} />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/trips/:tripId/plans" component={PlansPage} />
            <Route exact path="/trips/:tripId/travelers" component={TravelersPage} />
            <Route exact path="/trips/:tripId" component={TripShowPage} />
            <Route exact path="/trips/new" component={NewTripPage}/>
    
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
