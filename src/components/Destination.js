import React, { Component } from 'react'
import '../css/destination.css'

class Destination extends Component {
  render () {
    const { name, type, destinationURL} = this.props

    return (
      <article className='destination-container'>
        <h3>{ name } { destinationURL && <a target='_blank' href={destinationURL}>website</a> } </h3>        
        <p className="destination-type"> { type } </p>
      </article>
    )
  }
}

export default Destination
