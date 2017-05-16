import React, { Component } from 'react'
import { database } from '../firebase'
import NewEvent from './NewEvent'
import Events from './Events'

class Group extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      members: '',
      events: ''
    }
    this.groupRef = database.ref(`/groups/${this.props.groupID}/`)
    this.eventsRef = database.ref('/events')
  }

  componentDidMount () {
    const { groupID } = this.props
    this.groupRef.child('name').on('value', (snapshot) => {
      this.setState({ name: snapshot.val() })
     
      this.groupRef.child('members').on('value', (snapshot) => {
        this.setState({ members: snapshot.val() })
      })    
      this.eventsRef.orderByChild('group').equalTo(groupID).on('value', (snapshot) => {
        this.setState({ events: snapshot.val() })
      })
    })     
  }

  render () {
    const { handleRemove } = this.props
    const { name, events } = this.state
    return (
      <section>
        <h4>
          {name}
          <button onClick={handleRemove}>Leave </button>
        </h4>
        <NewEvent 
          group={this.groupRef.key}
        />
        <Events 
          events={events}
        />
      </section>
    )
  }
}

export default Group
