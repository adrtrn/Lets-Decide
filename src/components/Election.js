import React, { Component } from 'react'
import NewDestination from './NewDestination'
import Destinations from './Destinations'
import { database } from '../firebase'

class Election extends Component {
  constructor (props) {
    super(props)
    this.state = {
      destinations: '',
      electionID: ''
    }
    this.destinationsRef = database.ref('/destinations/')

  }
 // DESTIONATIONS: ONLY GET THE DESTINATION IF IT'S CHILD ELECTION ID IS THE SAME AS THE ELECTION ID CREATED BY FIREBASE
  componentDidMount () {
    const { electionID } = this.props
    this.destinationsRef.orderByChild('electionID').equalTo(electionID).on('value', (snapshot) => {
      this.setState({ destinations: snapshot.val() })
    })

  }

  render () {
    const { electionID, name } = this.props 
    const { destinations } = this.state
    return (
      <ul>
        <h4>Event: {name}</h4>
        <NewDestination election={electionID}/>
        <Destinations destinations={destinations} />
      </ul>
    )
  }
}

export default Election
