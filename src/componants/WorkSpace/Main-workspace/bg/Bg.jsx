import { Gradient } from 'whatamesh'
import './bg.css'
import React, { useRef } from 'react'


const Bg = () => {
  const gradient = useRef(new Gradient)
  React.useEffect(() => {
    gradient.current.initGradient("#gradient-canvas");
  }, [gradient])

  return (
    <div id='#gradient-canvas'>
      <canvas  />
    </div>
  )
}

export default Bg