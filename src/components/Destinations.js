import React, { Component } from 'react'
import Destination from './Destination'
import NewDestination from './NewDestination'
import map from 'lodash/map'
import '../css/destinations.css'

class Destinations extends Component {
  render () {
    const { destinations, eventID } = this.props
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
            />
          })
        }
      </section>
    )
  }
}

export default Destinations
