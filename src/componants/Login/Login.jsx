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
      }).catch((error) => { 
        Swal.fire({
          icon: 'error',
          
          text: error.response.data[0],
          
        })
       });

      


       

      

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userName', response.data.userNameOrEmail);

      // localStorage.setItem('projectListLength', response.data.projectName.length);

      // for (let i = 0; i < response.data.projectName.length; i++) {
      //   //push the project object to the projectList array
      //   localStorage.setItem('projectList'+i+'name', response.data.projectName[i].name);
      //   localStorage.setItem('projectList'+i+'id', response.data.projectName[i].id );
      // }

      //get default workspace id
      localStorage.setItem('defwsid', response.data.project[0].workSpacseRes2[0].workSpacseId);


      window.location.href = '/workspace';

      // Handle successful login response
    } catch (error) {
      console.log('error');
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
                    <input type="text" className='form-control form-control-login' placeholder='Enter email' name="email" value={this.state.email} onChange={this.handleInputChange} />
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