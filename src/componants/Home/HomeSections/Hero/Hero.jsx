import './Hero.css'
import heroimg from './heroimg.png'

const Hero = () => {
  return (
    <>
        <div className='heroContainer container'>
          <div className='row heroBox'>
            <div className='col-lg-6 col-md-7 col-sm-3 container'>
              <div className='heroText'>
                <h1 className='heroTextHeader'>Exotask</h1>
                <p className='heroTextPara'>ExoTask is a modernized approach to collaboration platforms wich focuses on user friendlyness and approachability</p>
                </div>
              </div>
            <div className='col-lg-6 col-md-7 col-sm-3'>
              <div className='heroImgcard'>
                {/* import heroimg  */}
                <img src={heroimg} alt='heroimg' className='heroImg'/>
                </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default Hero
