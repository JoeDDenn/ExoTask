import React from 'react'
import './Services.css'

const Service = () => {
  return (
    <services className="container custom-services mt-2" id='Services'>
        <div className='row'>

        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-item">
                <div className="service-icon">
                    <i className="flaticon-rocket"></i>
                </div>
                <h3 className='subtitle-service'>AI assisted decisions</h3>
                <p className='desc-service'>Using state of the art AI to give the user decisions and aid with each task.</p>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-item">
                <div className="service-icon">
                    <i className="flaticon-rocket"></i>
                </div>
                <h3 className='subtitle-service'>Communication</h3>
                <p className='desc-service'>Giving the team the ability to communicate withing the workspace to improve Communication and increase productivity.</p>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-item">
                <div className="service-icon">
                    <i className="flaticon-rocket"></i>
                </div>
                <h3 className='subtitle-service'>Rich content</h3>
                <p className='desc-service'>Allowing users to add rich content to create a modular and robus project doccumentation in real time.</p>
            </div>
        </div>
        </div>

    

      
    </services>
  )
}

export default Service
