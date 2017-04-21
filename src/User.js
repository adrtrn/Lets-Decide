import React, { PropTypes } from 'react'
import { auth } from './firebase'
import './css/User.css'

const User = ({user}) => {
  return (
    <div className="User">
      <div className="User-photo">
        <img src={user.photoURL} alt={user.displayName}/>
      </div>
      <h3>{user.displayName}</h3>
      <button onClick={() => auth.signOut()}>
      Sign Out
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
