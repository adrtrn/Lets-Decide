import React from 'react'
import PropTypes from 'prop-types'
import { auth } from './firebase'
import './css/User.css'

const User = ({user}) => {
  return (
    <div className='User-container'>
      <div className='User-photo'>
        <img src={user.photoURL} alt=""/>
      </div>
      <h3>{user.displayName}</h3>
      <button onClick={() => auth.signOut()}>
        Logout
      </button>
    </div>
  )
}

User.PropTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
    photoURL: PropTypes.string,
    uid: PropTypes.string.isRequired
  })
}

export default User
