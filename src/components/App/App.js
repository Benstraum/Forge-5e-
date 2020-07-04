import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';


import './App.css';
import Home from '../1Home/Home';
import Races from '../2Races/Races';
import Class from '../3Class/Class';
import Features from '../4Features/Features';
import Equipment from '../5Equipment/Equipment';
import Stats from '../6Stats/Stats';
import Skills from '../7Skills/Skills';
import ReviewAndName from '../8ReviewAndName/ReviewAndName';
import CharacterSheet from '../9CharacterSheet/CharacterSheet';

class App extends Component {
  componentDidMount () {
   this.getInfo()
  }
  getInfo = () => {
    this.props.dispatch({type: 'FETCH_USER'})
    this.props.dispatch({ type: 'GET_CHARACTERS' })
    this.props.dispatch({ type: 'GET_SIMPLES' })
    this.props.dispatch({ type: 'GET_MARTIALS' })
    this.props.dispatch({ type: 'GET_ARMORS' })
    this.props.dispatch({ type: 'GET_SHIELDS' })
    this.props.dispatch({ type: 'GET_PACKS' })
    this.props.dispatch({ type: 'GET_RACES' })
    this.props.dispatch({type:'GET_CLASSES'})
}

  render() {
    return (
      <Router>
        
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={Home}
            />
            <ProtectedRoute
              exact
              path="/Races"
              component={Races}
            />
            <ProtectedRoute
              exact
              path="/Class"
              component={Class}
            />
            <ProtectedRoute
              exact
              path="/Features"
              component={Features}
            />
            <ProtectedRoute
              exact
              path="/Equipment"
              component={Equipment}
            />
            <ProtectedRoute
              exact
              path="/Stats"
              component={Stats}
            />
            <ProtectedRoute
              exact
              path="/Skills"
              component={Skills}
            />
            <ProtectedRoute
              exact
              path="/Review"
              component={ReviewAndName}
            />
            <ProtectedRoute
              exact
              path="/CharacterSheet"
              component={CharacterSheet}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
