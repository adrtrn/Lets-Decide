import React, { Component } from 'react'
import Destination from './Destination'
import map from 'lodash/map'
import { database } from '../firebase'

class Destinations extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { destinations } = this.props
    return (
      <section className='Destinations-Container'>
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
