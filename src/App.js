import React, { Component } from 'react'
import { auth } from './firebase'
import SignIn from './SignIn'
import User from './User'
import './css/App.css'

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => {
      this.setState({ currentUser })
    })
  }

  render() {
    const {currentUser} = this.state

    return (
      <div className='App'>
        <header className='App-header'>
          <h2>Let's Decide</h2>
        </header>
        { !currentUser && <SignIn /> }
        { currentUser && <User user={currentUser} /> }
      </div>
    )
  }
}

export default App
