import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './css/Destination.css'
import FontAwesome from 'react-fontawesome'

class Destination extends Component {
  render () {
    const { name, type, destinationURL, user, votes, handleSelect, handleDeselect, handleDelete } = this.props
    const userHasSelected = votes && Object.keys(votes).includes(user.uid)
    const userCanDelete = this.props.creator === this.props.user.displayName

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
        { userCanDelete && 
          <button className='destroy' onClick={handleDelete}>
            <FontAwesome
              name='trash'
              size='2x'
            />
          </button> 
        }
        <h3>{ name } { destinationURL && <a target='_blank' href={destinationURL}>website</a> } </h3>
        <p> { type } </p>
        <p>Votes: { count }</p>
        { userHasSelected
          ? <button className='destructive' onClick={handleDeselect}>Actually... Nevermind</button>
          : <button className='positive' onClick={handleSelect}>Let's Go Here</button>
        }
      </article>
    )
  }
}

Destination.propTypes = {
  user: PropTypes.object,
  destinationRef: PropTypes.object,
}

export default Destination
