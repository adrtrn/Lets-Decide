import React, { Component } from 'react';
import { auth, database } from '../firebase'
import Login from './Login'
import User from './User'
import Groups from './Groups'
import Events from './Events'
import '../css/application.css'


class Application extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentUser: null,
      groups: null
    }
  }

  componentDidMount () {
    auth.onAuthStateChanged((currentUser) => {
      this.setState({ currentUser })
    
      database.ref(`/users/${currentUser.uid}/groups`).on('value', (snapshot) => {
        this.setState({ groups: snapshot.val() })
      })
    })
  }

  render() {
    const { currentUser, groups } = this.state
    return (
      <div className="application-container">
        <h1>D O G E T H E R</h1>
        { !currentUser && <Login /> }
        { 
          currentUser && 
          <div>
            <User user={currentUser} />
            <Groups className='groups-container' groups={groups} user={currentUser}/>
          </div>
        }
      </div>
    );
  }
}

export default Application;
