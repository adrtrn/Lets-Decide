import React, { Component, PropTypes } from 'react'
import { database } from './firebase'
import './css/NewDestination.css'

class NewDestination extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      destinationURL: ''
    }
    this.destinationRef = database.ref('/destinations')
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    this.destinationRef.push({ name: this.state.name, destinationURL: this.state.destinationURL })
    this.setState({ name: '', destinationURL: '' })
  }

  render () {
    const { name, destinationURL } = this.state
    return (
      <form className='Destination-Form'>
        <input
          type='text'
          value={this.name}
          placeholder='Destination'
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <input
          type='text'
          value={this.destinationURL}
          placeholder='Destination URL (optional)'
          onChange={(event) => this.setState({ destinationURL: event.target.value })}
        />
        <button onClick={this.handleSubmit} disabled={!name}>ADD DESTINATION</button>
      </form>
    )
  }
}

NewDestination.propTypes = {
  destinationRef: PropTypes.object
}

export default NewDestination
