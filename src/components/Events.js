import React, { Component } from 'react'
import map from 'lodash/map'
import Event from './Event'

class Events extends Component {

  render () {
    const { events } = this.props
    return (
      <div className="events-container">
      {
        map(events, (event, key) => {
          return <Event
            key={key} {...event}
            eventID={key}
          />
        }) 
      }
      </div>
    )
  }
}

export default Events
