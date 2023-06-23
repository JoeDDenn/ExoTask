import React from 'react'
import  './Signup.css'
import { Nav } from "../index";
import axios from 'axios'
import formdata from 'form-data'


class Signup extends React.Component
{
    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: ''
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const data = new formdata();
            data.append('username', this.state.name);
            data.append('email', this.state.email);
            data.append('Passward', this.state.password);


            //create a request to the backend using axios and send the data and headers
            const response = await axios.post('http://joeddenn-001-site1.itempurl.com/api/User/Register', data, {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            });

            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userName', response.data.userName);
            localStorage.setItem('email', response.data.email);


            // create a default project and workspace for the user

            const data2 = new formdata();
            data2.append('Name', 'My Project');

            //get default workspace id
            localStorage.setItem('defwsid', response.data.project[0].workSpacseRes2[0].workSpacseId);

            window.location.href = '/workspace';

            // Handle successful register response
        // }
        } catch (error) {
            this.setState({ error: error.response.data.title });
        }
    }

    render(){
        if(localStorage.getItem('token') != null)
        {
          window.location.href = '/workspace';
        }else {

            return (
                <>
            <Nav/>
            <div className='cover-signup'>
                <div className='layer-signup'>
                    <div className='container container-signup'>
                        <div className='row'>
                            <div className='col-md-12 col-sm-12'>
                                <form className='box' onSubmit={this.handleSubmit} >
                                    <h1 className='text-center box-header'>Signup</h1>
                                    {this.state.error && <div>{this.state.error}</div>}
                                    <div className='form-group form-group-signup'>
                                        <label className='lab-signup' htmlFor='name' >Name</label>
                                        <input type='text' className='form-control form-control-signup' id='name' placeholder= 'Name' value={this.state.Username} onChange={this.handleInputChange} name="name"/>
                                    </div>
                                    <div className='form-group form-group-signup'>
                                        <label className='lab-signup' htmlFor='email' >Email address</label>
                                        <input type='email' className='form-control form-control-signup' id='email' placeholder='Enter email' value={this.state.email} onChange={this.handleInputChange} name="email" />
                                    </div>
                                    <div className='form-group form-group-signup'>
                                        <label className='lab-signup' htmlFor='password'>Password</label>
                                        <input type='password' className='form-control form-control-signup' id='password' placeholder='Password' value={this.state.password} onChange={this.handleInputChange} name="password"/>
                                    </div>
                                    <div className='form-group form-group-signup'>
                                        <label className='lab-signup' htmlFor='confirmPassword'>Confirm Password</label>
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
    }
}
// }


export default Signup
