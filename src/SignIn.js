import React, { Component } from 'react'
import { auth, facebookAuthProvider, googleAuthProvider } from './firebase'

class SignIn extends Component {
  render () {
    return (
      <div className='SignIn'>
        <button onClick={() => auth.signInWithPopup(googleAuthProvider)}>
          Sign in with Google
        </button>        
        <button onClick={() => auth.signInWithPopup(facebookAuthProvider)}>
          Login with Facebook
        </button>
      </div>
    )
  }
}

export default SignIn
