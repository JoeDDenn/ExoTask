import './Hero.css'
import heroimg from './heroimg.png'
import { NavLink } from 'react-router-dom'
const Hero = () => {
  return (
    <>
        <div className='container-fluid heroContainer'>
          <div className='row herorow'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='hero-text'>
                <h1>Get your <span>dream</span> job</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                <NavLink className='btn nav-item herobtn' to='/signup' >Signup Now</NavLink>
              </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12'>
                <img src={heroimg} alt='heroimg' className='heroimg'/>

              </div>
            

          </div>

        </div>
    </>
  )
}

export default Hero
