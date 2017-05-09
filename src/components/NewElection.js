import React, { Component } from 'react'
import { database } from '../firebase'

class NewElection extends Component {
  constructor (props) {
    super(props) 
    this.state = {
      name: '',
    }
    this.electionRef = database.ref('elections')
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    const { group } = this.props
    
    this.electionRef.push({
      name: this.state.name,
      group: group
    })
    this.setState({ name: '' })
  }

  render () {
    const { name } = this.state
    return (
      <form>
        <input 
          type="text"
          value={this.name}
          placeholder="Name of the Election"
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <button onClick={this.handleSubmit}>Create Election</button>
      </form>
    )
  }
}

export default NewElection
