import React, {useRef}  from 'react'
import './Bg.css'
import { Gradient } from 'whatamesh'

const Bg = () => {

    const gradient = useRef(new Gradient)
    
    React.useEffect(() => {
        gradient.current.initGradient('#gradient-canvas')
    }, [gradient])


  return (
    <canvas id='#gradient-canvas' />
  )
}

export default Bg
