import React, { Component } from 'react'

class Destination extends Component {
  render () {
    const { name, type, destinationURL} = this.props

    return (
      <article className='Destination-Container'>
        <h3>{ name } { destinationURL && <a target='_blank' href={destinationURL}>website</a> } </h3>        
        <p className="Destination-Type"> { type } </p>
      </article>
    )
  }
}

export default Destination
