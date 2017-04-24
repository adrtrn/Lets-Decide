import React, { Component, PropTypes } from 'react'
import './css/Destination.css'

class Destination extends Component {
  render () {
    const { name, destinationURL, user, votes, handleSelect, handleDeselect } = this.props
    const userHasSelected = votes && Object.keys(votes).includes(user.uid)

    Object.count = (votes) => {
      var count = 0, vote
      for (vote in votes) {
        if (votes.hasOwnProperty(vote)) count += 1
      }
      return count
    }
    // Get the size of an object
    var count = Object.count(votes)

    return (
      <article className='Destination-Container'>
        <h3>{ name }</h3>
        <a href={destinationURL} target='_blank'>{ destinationURL} </a>
        <p>Votes: { count }</p>

        { userHasSelected
          ? <button className='destructive' onClick={handleDeselect}>NO</button>
          : <button className='positive' onClick={handleSelect}>YES</button>
        }
      </article>
    )
  }
}

Destination.propTypes = {
  name: PropTypes.string,
  destinationURL: PropTypes.string
}

export default Destination
