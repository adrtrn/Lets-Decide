import React, { Component } from 'react';
import { auth, database } from '../firebase'
import Login from './Login'
import User from './User'
import NewGroup from './NewGroup'
import Groups from './Groups'


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
      <div>
        <h2>D O G E T H E R</h2>
        { !currentUser && <Login /> }
        { 
          currentUser && 
          <div>
            <User user={currentUser} />
            <NewGroup user={currentUser} />
            <Groups groups={groups} user={currentUser}/>
          </div>
        }
      </div>
    );
  }
}

export default Application;
