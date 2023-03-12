import React from 'react'
import './Popup.css'

function Popup(props) {

  return (
    <div className='popup'>
      <div className='popup-inner'>
        <h3>Attention</h3>
        <p>{props.text}</p>
        <button>close me</button>
        </div>
    </div>
  )
}

export default Popup
