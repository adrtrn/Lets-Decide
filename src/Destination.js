import React, { Component, PropTypes } from 'react'
import './css/Destination.css'

class Destination extends Component {
  render () {
    const { post, name, destinationURL, user, votes, handleSelect, handleDeselect, handleDelete } = this.props
    const userHasSelected = votes && Object.keys(votes).includes(user.uid)

    Object.count = (votes) => {
      var count = 0, vote
      for (vote in votes) {
        if (votes.hasOwnProperty(vote)) count += 1
      }
      return count
    }
    var count = Object.count(votes)

    return (
      <article className='Destination-Container'>
        <h3>{ name }</h3>
        <a target='_blank' href={destinationURL}>{ destinationURL} </a>
        <p>Votes: { count }</p>
        { userHasSelected
          ? <button className='destructive' onClick={handleDeselect}>Actually... Nevermind</button>
          : <button className='positive' onClick={handleSelect}>Let's Go</button>
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
