import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
    
    <div className='h-screen bg-no-repeat bg-cover bg-center bg-[url("https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=1000")]'>
        
    <div className='h-screen space-y-3 w-[400px] flex flex-col justify-center items-center mx-auto'>
    
    <form className='bg-black/70 h-96 justify-center space-y-3 w-[300px] flex flex-col rounded-lg' action="">
        <center className="text-white text-3xl font-semibold">LOGIN</center>
        <center>
            <input className='w-3/4 outline-none rounded-lg px-3 bg-transparent border border-white h-8 text-white' type="text" placeholder='Enter Your Username'/>
        </center>
        <center>
          <input className='w-3/4 outline-none rounded-lg px-3 bg-transparent border border-white h-8 text-white' type="password" placeholder="Enter Your Password"/>  
        </center>
        <center>
            <Link className='w-full text-white text-lg font-normal hover:border-b border-white' to="">Forgotten Password</Link>
        </center>
        <center>
           <button className='w-3/4 text-black bg-slate-300 h-8 rounded-lg text-lg font-normal '>Login</button>
        </center>
    </form>
    </div>
    </div>
    </>
  )
}

export default Login
