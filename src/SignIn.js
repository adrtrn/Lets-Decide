import React, { Component } from 'react'
import { auth, facebookAuthProvider, googleAuthProvider } from './firebase'
import './css/SignIn.css'

class SignIn extends Component {
  render () {
    return (
      <div className='SignIn'>
        <h1>Pickly</h1>
        <h5>Please Sign Up / Login</h5>
        <img className="googleIMG" src="https://www.codenameone.com/img/blog/google-sign-in.png" alt="" onClick={() => auth.signInWithPopup(googleAuthProvider)}/>
        <img className="fbIMG" src="https://okb-assets.s3.amazonaws.com/assets/login-facebook-936485885459194a2e1ab97f6cfed60267b9dc74c2ee7ad78f4083cb4398e5f4.png" alt="" onClick={() => auth.signInWithPopup(facebookAuthProvider)}/>
        <button onClick={() => auth.signInAnonymously()}>or Sign In Anonymously</button>
      </div>
    )
  }
}

export default SignIn
