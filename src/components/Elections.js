import React, { Component } from 'react'
import map from 'lodash/map'
import Election from './Election'

class Elections extends Component {

  render () {
    const { elections } = this.props
    return (
      <div>
      {
        map(elections, (election, key) => {
          return <Election
            key={key} {...election}
            electionID={key}
          />
          console.log(key)
        }) 
      }
      </div>
    )
  }
}

export default Elections
