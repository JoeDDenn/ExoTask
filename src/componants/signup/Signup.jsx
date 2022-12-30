import React from 'react'
import  './Signup.css'
import { Nav } from "../index";
const signup = () => {
  return (
    <>
        <Nav/>
        <div className='cover-signup'>
            <div className='layer-signup'>
                <div className='container container-signup'>
                    <div className='row'>
                        <div className='col-md-12 col-sm-12'>
                            <form className='box'>
                                <h1 className='text-center box-header'>Signup</h1>
                                <div className='form-group form-group-signup'>
                                    <label className='lab-signup' htmlhtmlfor='name'>Name</label>
                                    <input type='text' className='form-control form-control-signup' id='name' placeholder= 'Name' />
                                </div>
                                <div className='form-group form-group-signup'>
                                    <label className='lab-signup' htmlfor='email'>Email address</label>
                                    <input type='email' className='form-control form-control-signup' id='email' placeholder='Enter email' />
                                </div>
                                <div className='form-group form-group-signup'>
                                    <label className='lab-signup' htmlfor='password'>Password</label>
                                    <input type='password' className='form-control form-control-signup' id='password' placeholder='Password' />
                                </div>
                                <div className='form-group form-group-signup'>
                                    <label className='lab-signup' htmlfor='confirmPassword'>Confirm Password</label>
                                    <input type='password' className='form-control form-control-signup' id='confirmPassword' placeholder='Confirm Password' />
                                </div>
                                <button type='submit' className='btn btn-signup btn-primary text-black'>Submit</button>
                                <div className='box-footer-signup'>
                                    <p className='text-center'>Already have an account? <a href='/login'>Login</a></p>
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

export default signup
