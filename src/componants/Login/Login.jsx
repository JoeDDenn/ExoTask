import React from 'react'
import './Login.css'; 
import { Nav } from "../index";
import axios from 'axios'
import formdata from 'form-data'



class Login extends React.Component {
  state = {
    email: '',
    password: '',
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
      data.append('UserNameOrEmail', this.state.email);
      data.append('Passward', this.state.password);
      //create a request to the backend using axios and send the data and headers
      const response = await axios.post('https://localhost:7042/api/User/Login', data, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      });
      

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userName', response.data.userNameOrEmail);

      console.log(response.data.token)
      window.location.href = '/workspace';

      // Handle successful login response
    } catch (error) {
      this.setState({ error: error.response.data.title });
    }
  }

  render() {
    if(localStorage.getItem('token') != null)
    {
      window.location.href = '/workspace';
    }else{

      
      return (
        <>
      <Nav/>
       <div className='cover'>
       <div className='loginLayer'>
         <div className='container container-login'>
           <div className='row'>
             <div className='col-md-10 col-sm-5'>
               <form onSubmit={this.handleSubmit} className='box-login' >
                 <h1 className='text-center box-header-login'>Login</h1>
                    {this.state.error && <div>{this.state.error}</div>}
                 <div className='form-group form-group-login'>
                    <label className='label-login'>Email address</label>
                    <input type="email" className='form-control form-control-login' placeholder='Enter email' name="email" value={this.state.email} onChange={this.handleInputChange} />
                 </div>
                 <div className='form-group form-group-login'>
                    <label className='label-login'>Password</label>
                    <input type="password" className='form-control form-control-login'  placeholder='Password' name="password" value={this.state.password} onChange={this.handleInputChange} />
                 </div>
                 <button type="submit" className=' btn btn-login btn-primary text-black'>Login</button>  
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
    );
  }
}
}


export default Login