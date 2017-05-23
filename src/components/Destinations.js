import React, { Component } from 'react'
import Destination from './Destination'
import NewDestination from './NewDestination'
import { database } from '../firebase'
import map from 'lodash/map'
import '../css/destinations.css'

class Destinations extends Component {
  constructor (props) {
    super(props)
  }

  handleSelect (key) {
    const currentUser = this.props.user
    database.ref('/destinations')
            .child(key)
            .child('votes')
            .child(currentUser.uid)
            .set(currentUser.displayName)
  }
  handleDeselect (key) {
    const currentUser = this.props.user
    database.ref('/destinations')
            .child(key)
            .child('votes')
            .child(currentUser.uid)
            .remove()
  }

  render () {
    const { destinations, eventID, user } = this.props
    return (
      <section className='destinations-container'>
        <h1>DESTINATIONS</h1>
        <NewDestination 
          eventID={eventID}
        />
        {
          map(destinations, (destination, key) => {
            return <Destination
              key={key} {...destination}
              user={user}
              handleSelect={() => this.handleSelect(key)}
              handleDeselect={() => this.handleDeselect(key)}
            />
          })
        }
      </section>
    )
  }
}

export default Destinations
