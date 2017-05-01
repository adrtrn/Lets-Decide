import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Destination from './Destination'
import map from 'lodash/map'
import { database } from './firebase'
import './css/Destinations.css'

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

  handleDelete (key) {
    confirm("Are you sure you want to delete this suggestion?")
    database.ref('/destinations')
            .child(key)
            .remove()
  }
  render () {
    const { user, destinations } = this.props
    return (
      <section className='Destinations-Container'>
        {
          map(destinations, (destination, key) => {
            return <Destination
              key={key} {...destination}
              user={user}
              handleSelect={() => this.handleSelect(key)}
              handleDeselect={() => this.handleDeselect(key)}
              handleDelete={() => this.handleDelete(key)}
            />
          })
        }
      </section>
    )
  }
}

Destinations.propTypes = {
  user: PropTypes.object,
  destinationsRef: PropTypes.object,
  destinations: PropTypes.object
}

export default Destinations
