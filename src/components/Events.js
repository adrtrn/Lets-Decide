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
    const { events, group } = this.props
    return (
      <div className="events-container">
      <h3>EVENTS</h3>
      {
        group && <NewEvent group={group}/>      
      }
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
