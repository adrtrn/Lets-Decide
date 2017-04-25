import React, { Component, PropTypes } from 'react'
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
            .set(currentUser.photoURL)
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
    const currentUser = this.props.user
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
