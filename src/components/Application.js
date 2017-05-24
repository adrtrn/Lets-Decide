import React, { Component } from 'react';
import { auth } from '../firebase'
import Login from './Login'
import User from './User'
import Navigation from './Navigation'
import Groups from './Groups'
import Destinations from './Destinations'
import '../css/application.css'


class Application extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentUser: null,
    }
  }

  componentDidMount () {
    auth.onAuthStateChanged((currentUser) => {
      this.setState({ currentUser })
    })
  }

  render() {
    const { currentUser } = this.state
    return (
      <div className="application-header">
        <h1>D O G E T H E R</h1>
        { !currentUser && <Login /> }
        { 
          currentUser && 
          <div>
            <User user={currentUser} />
            <Navigation 
              user={currentUser}
            />
          </div>
        }
      </div>
    );
  }
}

export default Application;
