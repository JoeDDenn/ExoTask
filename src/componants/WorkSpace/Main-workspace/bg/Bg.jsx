import { Gradient } from 'whatamesh'
import './bg.css'
import React from 'react'

const gradient = new Gradient();

const Bg = () => {
    const [gradient, setGradient] = React.useState(()=>new Gradient())
    
    React.useEffect(() => {
        gradient.initGradient("#gradient-canvas");
    }, [gradient])

  return (
    <canvas id="gradient-canvas"/>
  )
}

export default Bg


        