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
      channels: null,
      destinations: null
    }

    this.destinationRef = database.ref('/destinations')
    this.channelRef = database.ref('/channels')
  }

  componentDidMount () {
    auth.onAuthStateChanged((currentUser) => {
      this.setState({ currentUser })

      this.destinationRef.on('value', (snapshot) => {
        this.setState({ destinations: snapshot.val() })
      })

      this.channelRef.on('value', (snapshot) => {
        this.setState({ channels: snapshot.val() })
      })
    })
  }

  render () {
    const { currentUser, channels, destinations } = this.state

    return (
      <div className='App'>
        { !currentUser && <SignIn /> }
        { currentUser &&
            <div>
              <h1>Picky</h1>
              <User user={currentUser} />
              <NewDestination />
              <Destinations destinations={destinations} user={currentUser} />
            </div>
        }
      </div>
    )
  }
}

export default App
