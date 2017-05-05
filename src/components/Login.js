import React, { Component } from 'react'
import { auth, facebookAuthProvider, googleAuthProvider } from '../firebase'

class Login extends Component {

  handleFacebookAuth () {
    auth.signInWithPopup(facebookAuthProvider)
  }

  handleGoogleAuth () {
    auth.signInWithPopup(googleAuthProvider)
  }

  render () {
    return (
        <div>
          <button 
            onClick={this.handleGoogleAuth}> 
            Sign In With Google 
          </button>
          <button 
            onClick={this.handleFacebookAuth}> 
            Login With Facebook 
          </button>
        </div>
    )
  }
}

export default Login
