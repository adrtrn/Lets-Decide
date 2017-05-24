import React, { Component } from 'react'
import Groups from './Groups'
import Events from './Events'
import { database } from '../firebase'
import '../css/navigation.css'

class Navigation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      groups: null,
    }
  }

  componentDidMount () {
    const { user } = this.props
    database.ref(`/users/${user.uid}/groups`).on('value', (snapshot) => {
      this.setState({ groups: snapshot.val() })
    })
  }

  render () {
    const { user, events } = this.props    
    const { groups } = this.state


    return (
      <div className="navigation-container">
        <h2>GROUPS </h2>
        <Groups 
          groups={groups} 
          user={user}
        />   
      </div>
    )
  }
}

export default Navigation
