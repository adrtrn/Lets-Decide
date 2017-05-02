import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './css/Destination.css'
import FontAwesome from 'react-fontawesome'

class Destination extends Component {
  render () {
    const { name, type, destinationURL, user, votes, handleSelect, handleDeselect, handleDelete, upVote } = this.props
    const userHasSelected = votes && Object.keys(votes).includes(user.uid)
    const userCanDelete = this.props.creator === this.props.user.uid

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
        <h3>{ name } { destinationURL && <a target='_blank' href={destinationURL}>website</a> } </h3>        { userCanDelete && 
          <a className='destroy' onClick={handleDelete}><FontAwesome name='trash' size='2x' /></a> 
        }
        <p className="Destination-Type"> { type } </p>
        <p className="Destination-Votes">votes: { count }</p>
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
