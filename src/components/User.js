import React, { Component } from 'react'
import { auth, database } from '../firebase'
import '../css/user.css'

class User extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: this.props.user
    }
  }

  storeUser () {
    const { user } = this.state
    database.ref('/users/' + user.uid).set({
      username: user.displayName,
      email: user.email,
      profile_picture: user.photoURL,
    })
  }

  componentDidMount () {
    const { user } = this.state
    database.ref('/users/'+ user.uid).on('value', (snapshot) => {
      !snapshot.val() && this.storeUser()
    })
  }

  render () {
    const { user } = this.state
    return (
      <div className="user-container">
        <div className='user-photo'>
          <img src={user.photoURL} alt={user.displayName}/>
        </div>
        <h3 className="user-name">{user.displayName}</h3>
        <button onClick={() => auth.signOut()}>Logout</button>
      </div>
    )
  }
}

export default User
