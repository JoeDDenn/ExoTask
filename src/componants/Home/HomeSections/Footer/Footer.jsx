import React from 'react';
import './Footer.css'
const Footer = () => {
  return (

    <>
     <footer className='footer mt-2'>
        <div className="container">
          <div className='row gy-3'>
            <div className='col-lg-3 col-md-6 d-flex'>
              <div>
                <h4 className='h4-title'>Address</h4>
                <p>
                  A108 Adam Street <br/>
              New York, NY 535022 - US<br/>
                </p>
              </div>

            </div>
            <div className='col-lg-3 col-md-6 footer-links d-flex'>
              <div>
                <h4 className='h4-title'>Contact Us</h4>
                <p>
                <strong>Phone:</strong> +1 5589 55488 55<br/>
              <strong>Email:</strong> EXOTASK@Example.com<br/>
                </p>
              </div>

            </div>
            <div class="col-lg-3 col-md-6 footer-links d-flex">
          {/* <i class="bi bi-clock icon"></i> */}
          <div>
            <h4 className='h4-title'>Available Working Hours</h4>
            <p>
              <strong>Mon-Sat: 11AM</strong> - 23PM<br/>
              Sunday: Closed
            </p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 footer-links">
          <h4 className='h4-title'>Follow Us</h4>
          <div class="social-links d-flex">
            <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
            <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>


          </div>
        </div>
        <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>EXOTASK</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>


     </footer>
    
    
    </>
    
    
    )
}

export default Footer
