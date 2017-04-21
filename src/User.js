import React, { PropTypes } from 'react'
import { auth } from './firebase'

const User = ({user}) => {
  return (
    <div>
      <img src={user.photoURL} alt={user.displayName}/>
      <h3>{user.displayName}</h3>
    </div>
    <button onClick={auth.signOut()}>
      Sign Out
    </button>
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
