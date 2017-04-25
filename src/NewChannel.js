import React, { Component } from 'react'
import { database } from './firebase'

class NewChannel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      channel: null
    }

    this.channelRef = database.ref('/channels')
  }

  

  render () {
    return (
      
    )
  }
}
