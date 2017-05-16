import React, { Component } from 'react'
import Destination from './Destination'
import map from 'lodash/map'

class Destinations extends Component {
  constructor (props) {
    super()
  }

  render () {
    const { destinations } = this.props
    return (
      <section className='Destinations-Container'>
        <h6>Suggestions:</h6>
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
