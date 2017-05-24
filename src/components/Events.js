import React, { Component } from 'react'
import map from 'lodash/map'
import Event from './Event'
import NewEvent from './NewEvent'
import '../css/events.css'

class Events extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: ''
    }
  }

  render () {
    const { events, group, user } = this.props

    return (
      <div className="events-container">
        <ul>
        {
          map(events, (event, key) => {
            return <Event
              key={key} {...event}
              eventID={key}
              user={user}
            />
          }) 
        }
        {
          !events && <p>No events</p>
        }
        <NewEvent group={group} />
        </ul>
      </div>
    )
  }
}

export default Events
