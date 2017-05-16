import React, { Component } from 'react'
import NewDestination from './NewDestination'
import Destinations from './Destinations'
import { database } from '../firebase'

class Event extends Component {
  constructor (props) {
    super(props)
    this.state = {
      destinations: '',
      eventID: ''
    }
    this.destinationsRef = database.ref('/destinations/')

  }
 // DESTIONATIONS: ONLY GET THE DESTINATION IF IT'S CHILD Event ID IS THE SAME AS THE ELECTION ID CREATED BY FIREBASE
  componentDidMount () {
    const { eventID } = this.props
    this.destinationsRef.orderByChild('event').equalTo(eventID).on('value', (snapshot) => {
      this.setState({ destinations: snapshot.val() })
    })

  }

  render () {
    const { eventID, name } = this.props 
    const { destinations } = this.state
    return (
      <article className="event">
        <h4>Event: {name}</h4>
        <NewDestination event={eventID}/>
        <Destinations destinations={destinations} />
      </article>
    )
  }
}

export default Event
