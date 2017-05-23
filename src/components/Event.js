import React, { Component } from 'react'
import Destinations from './Destinations'
import { database } from '../firebase'
import '../css/event.css'

class Event extends Component {
  constructor (props) {
    super(props)
    this.state = {
      destinations: '',
      eventID: '',
      isActive: false
    }
    this.destinationsRef = database.ref('/destinations/')
    this.setActive = this.setActive.bind(this)
  }

  componentDidMount () {
    const { eventID } = this.props
    this.destinationsRef.orderByChild('eventID').equalTo(eventID).on('value', (snapshot) => {
      this.setState({ destinations: snapshot.val() })
    })
  }

  setActive () {
    const { isActive } = this.state
    this.setState({ isActive: !isActive })
  }

  render () {
    const { eventID, name, user } = this.props 
    const { destinations, isActive } = this.state

    return (
      <article className="event-container">
        <a href="#" onClick={this.setActive} className={ isActive ? 'event--active' : 'event'}>{name} </a>
        { 
          isActive && 
            <Destinations 
              destinations={destinations}
              eventID={eventID}
              user={user}
            />
        }
      </article>
    )
  }
}

export default Event
