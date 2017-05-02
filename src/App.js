import React, { Component } from 'react'
import { auth, database } from './firebase'
import SignIn from './SignIn'
import User from './User'
import NewDestination from './NewDestination'
import Destinations from './Destinations'
import './css/App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentUser: null,
      destinations: null,
      members: null
    }
    this.destinationRef = database.ref('/destinations')
  }

  componentDidMount () {
    auth.onAuthStateChanged((currentUser) => {
      this.setState({ currentUser })
    
      this.destinationRef.on('value', (snapshot) => {
        this.setState({ destinations: snapshot.val() })
      })
    })
  }

  render () {
    const { currentUser, destinations, members } = this.state
    return (
      <div className='App'>
        { !currentUser && <SignIn /> }
        { currentUser &&
          <div>
            <h1>Picky</h1>
            <User user={currentUser} />
            <NewDestination user={currentUser} />
            <Destinations destinations={destinations} user={currentUser} />
          </div>
        }
      </div>
    )
  }
}

export default App
