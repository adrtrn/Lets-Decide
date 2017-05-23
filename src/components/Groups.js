import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Group from './Group'
import map from 'lodash/map'
import NewGroup from './NewGroup'
import { database } from '../firebase'
import '../css/groups.css'

class Groups extends Component {

  handleRemove (key) {
    const currentUser = this.props.user
    if (confirm("Are you sure you want to leave this group?")) {
      database.ref('/users')
              .child(currentUser.uid)
              .child('groups')
              .child(key)
              .remove()
           
      database.ref('/groups')
              .child(key)
              .child('members')
              .child(currentUser.uid)
              .remove()
    }
  }

  render () {
    const { groups, user } = this.props 
    return (
      <div className="groups-container">
        <h3>GROUPS</h3>
        <NewGroup user={user} />
        <ul>
        {
          map(groups, (group, key) => {
            return <Group
              key={key} {...group}
              groupID={key}
              handleRemove={() => this.handleRemove(key)}
            />
          })
        }
        </ul>
      </div>
    )
  }
}

Groups.propTypes = {
  groups: PropTypes.object,
  groupID: PropTypes.string
}

export default Groups
