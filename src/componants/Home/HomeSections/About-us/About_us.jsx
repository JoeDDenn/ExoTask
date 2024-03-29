import React from 'react'
import './About_us.css'

const About_us = () => {
  return (
    <>
    <div className='container-fluid aboutContainer' id='aboutus'>
          <div className='container-fluid abouth'>
          <h1 className='aboutTitle'>About Us</h1>
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  What we're trying to do?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>Reinvent collaborative work</strong> in a way that is more productive, more engaging, and more effecient.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Who are we?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  We're a team of <strong>passionate</strong> and <strong>dedicated</strong> developers from egypt who are trying to make a difference in the world and make something that will change the way we work.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Future Plans
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  We're planning to add more features to the platform and make it more <strong>powerful</strong> and <strong>useful</strong> for everyone. things like live chat, video conferencing, and AI powered suggestions are on the way.
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  )
}

export default About_us
