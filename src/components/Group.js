import React, { Component } from 'react'
import { database } from '../firebase'
import NewElection from './NewElection'
import Elections from './Elections'

class Group extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      members: '',
      elections: ''
    }
    this.groupRef = database.ref(`/groups/${this.props.groupID}/`)
    this.electionsRef = database.ref('/elections')
  }

  componentDidMount () {
    const { groupID } = this.props
    this.groupRef.child('name').on('value', (snapshot) => {
      this.setState({ name: snapshot.val() })
     
      this.groupRef.child('members').on('value', (snapshot) => {
        this.setState({ members: snapshot.val() })
      })    
      this.electionsRef.orderByChild('group').equalTo(groupID).on('value', (snapshot) => {
        this.setState({ elections: snapshot.val() })
      })
    })     
  }

  render () {<div></div>
    const { handleRemove } = this.props
    const { members, name, elections } = this.state
    return (
      <section>
        <h4>
          {name}
          <button onClick={handleRemove}>Leave Group</button>
        </h4>
        <NewElection 
          group={this.groupRef.key}
        />
        <Elections 
          elections={elections}
        />
      </section>
    )
  }
}

export default Group
