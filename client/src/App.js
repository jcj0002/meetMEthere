import React, { Component } from 'react';
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import axios from 'axios'
import TripPage from './components/TripPage'
import LandingPage from './components/LandingPage'
import PlansPage from './components/PlansPage'
import TravelersPage from './components/TravelersPage'
import TripShowPage from './components/TripShowPage'

class App extends Component {
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
      <Router>
        <div>
          <div>
            <Link to="/"></Link>
          </div>
          <div className="App">


          </div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/trips/:tripId/plans" component={PlansPage} />
            <Route exact path="/trips/:tripId/travelers" component={TravelersPage} />
            <Route exact path="/trips/:tripId" component={TripShowPage} />
            <Route exact path="/trips" component={TripPage} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
