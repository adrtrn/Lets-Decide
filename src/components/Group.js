import React, { Component } from 'react'
import { database } from '../firebase'
import Events from './Events'
import '../css/group.css'

class Group extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      members: '',
      events: '',
      isActive: false
    }
    this.groupRef = database.ref(`/groups/${this.props.groupID}/`)
    this.eventsRef = database.ref('/events')
    this.setActive = this.setActive.bind(this)
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

  setActive () {
    const { isActive } = this.state
    this.setState({ isActive: !isActive })
  }

  render () {
    const { handleRemove } = this.props
    const { name, events, isActive } = this.state
    return (
      <section>
        <a href="#" onClick={this.setActive} className={ isActive ? "group--active" : "group"} >
          {name}
          <button onClick={handleRemove}>&#9660;</button>
        </a>
        { 
          isActive &&
          <Events 
            group={this.groupRef.key}
            events={events}
          /> 
        }
      </section>
    )
  }
}

export default Group
