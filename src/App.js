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
      destinations: null
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
    const { currentUser, destinations } = this.state

    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Picky</h1>
        </header>
        { !currentUser && <SignIn /> }
        {
          currentUser &&
            <div>
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
