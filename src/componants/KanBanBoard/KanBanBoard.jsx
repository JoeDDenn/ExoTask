import { getElementById } from 'domutils'
import React, { Component, useState } from 'react'
import TaskList from '../TaskList/TaskList'
import './KanBan.css'

export default class KanBanBoard extends Component {

    
    render() {
        return (
            <div id='KanBan'>

            </div>
        )
    }
}



const uid = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };