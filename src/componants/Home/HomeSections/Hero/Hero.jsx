import './Hero.css'
import heroimg from './heroimg.png'
import { NavLink } from 'react-router-dom'
const Hero = () => {
  return (
    <>
        {/* creating hero section */}
        <div className='container-fluid heroContainer' id='hero'>
          <div className='row herorow'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='hero-text'>
                <h1>Start Working <span>Smart</span> Now</h1>
                <p>A new and Innovative way to Work, Collaborate, and learn!</p>
                <NavLink className='btn nav-item herobtn' to='/WorkSpace' >Get Started Now</NavLink>
              </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12'>
                <img src={heroimg} alt='heroimg' className='heroimg'/>
              </div>
          </div>
        </div>

        {/* creating about section */}
        
        
    </>
  )
}

export default Hero
