import React, { Component } from 'react'
import './MessageBox.css'

export default class MessageBox extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: true,
            message: '',
        }
    }


  render() {
    return (
      <div>
        <div className="message-box">
            <p className="message-text">{this.props.message}</p>
        </div>
      </div>
    )
  }
}
