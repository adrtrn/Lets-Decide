import React, { Component } from 'react'
import '../css/destination.css'

class Destination extends Component {
  render () {
    const { name, type, destinationURL, user, votes, handleSelect, handleDeselect } = this.props
    const userHasSelected = votes && Object.keys(votes).includes(user.uid)

    return (
      <article className='destination-container'>
        <h3>{ name } { destinationURL && <a target='_blank' href={destinationURL}>website</a> } </h3>        
        <p className="destination-type"> { type } </p>
        {
          userHasSelected
          ? <button onClick={handleDeselect}>NOPE</button>
          : <button onClick={handleSelect}>YES</button>
        }
      </article>
    )
  }
}

export default Destination
