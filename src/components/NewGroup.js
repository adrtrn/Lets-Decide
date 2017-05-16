import React, { Component } from 'react'
import { database } from '../firebase'
import '../css/NewGroup.css'

class NewGroup extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      owner: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    const { user } = this.props

    var groupsRef = database.ref('/groups').push({
      name: this.state.name,
      owner: user.uid
    })
    var groupID = groupsRef.key
    database.ref(`/groups/${groupID}/members`).update({
      [user.uid]: true
    })
    database.ref(`/users/${user.uid}/groups/`).update({
      [groupID]: true
    })
    this.setState({ name: '', owner: ''})
  }

  render () {
    const { name } = this.state 
    return (
      <form className="group-form">
        <h6>NEW GROUP:</h6>
        <input 
          type="text" 
          value={this.name}
          placeholder="Group Name"
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <button onClick={this.handleSubmit} disabled={!name}>
          Create
        </button>
      </form>
    )
  }
}

export default NewGroup
