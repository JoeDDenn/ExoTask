import React from 'react'
import './Login.css'; 
const Login = () => {
  return (
    <>
      <div className='cover'>
      <div className='loginLayer'>
        <div className='container container-login'>
          <div className='row'>
            <div className='col-md-10 col-sm-5'>
              <form className='box-login' >
                <h1 className='text-center box-header-login'>Login</h1>
                <div className='form-group form-group-login'>
                  <label for='email' className='label-login'>Email address</label>
                  <input type='email' className='form-control form-control-login' id='email' placeholder='Enter email' />
                </div>
                <div className='form-group form-group-login'>
                  <label for='password' className='label-login'>Password</label>
                  <input type='password' className='form-control form-control-login' id='password' placeholder='Password' />
                </div>
                <button type='submit' className=' btn btn-login btn-primary text-black'>Submit</button>
                  
                  <div className='box-footer-login'> 
                    <p className='text-center'>Don't have an account? <a href='/signup'>Signup</a></p>
                  </div>
                  
  
              </form>
            </div>
  
          </div>
  
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Login
