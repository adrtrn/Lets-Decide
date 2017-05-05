import React, { Component } from 'react'
import { database } from '../firebase'
import map from 'lodash/map'

class Group extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      members: ''
    }
    this.groupRef = database.ref(`/groups/${this.props.groupID}/`)
  }

  componentDidMount () {
    this.groupRef.child('name').on('value', (snapshot) => {
      this.setState({ name: snapshot.val() })
     
      this.groupRef.child('members').on('value', (snapshot) => {
        this.setState({ members: snapshot.val() })
      })    
    })     
  }

  render () {
    const { handleRemove } = this.props
    const { members, name } = this.state
  
    return (
      <div>
        <h4>
          {name}
          <button onClick={handleRemove}>Leave Group</button>
        </h4>
          <h6>{Object.keys(members).length} Member(s): </h6>
          <ul>
            {
              map(Object.keys(members), (member, key) => {
                return <li key={key}>{member}</li>
              })
            }
          </ul>
      </div>
    )
  }
}

export default Group
