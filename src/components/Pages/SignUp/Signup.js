import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo2.png'
import googleLogo from '../../../images/google-logo.png'
const Signup = () => {
    return (
        <div className='container d-flex align-items-center flex-column mt-3'>
            <div className='mb-5'><img style={{width:'200px'}} src={logo} alt="" /></div>
            <input style={{backgroundColor:"#dfe6e9"}} className='mb-3 p-2 w-25  border-0'  type="text" name="name" placeholder='name' />
            <input style={{backgroundColor:"#dfe6e9"}} className='mb-3 p-2 w-25  border-0'  type="email" name="email" placeholder='email' />
            
            <input style={{backgroundColor:"#dfe6e9"}} className='mb-3 p-2 w-25  border-0' type="password" name="password" placeholder='password' />
            <input style={{backgroundColor:"#dfe6e9"}} className='mb-3 p-2 w-25  border-0' type="password" name="confirm-password" placeholder='confirm password' />
            <input style={{backgroundColor:"#F92C54"}} className='w-25 btn text-light' type="button" value="Sign up" />
            <p className='mt-2'> already have an account ? <Link className=''
            style={{color:"#F92C54"}}
             to='/login'>Login</Link></p>
            <button className='w-25 btn bold border'>
                <img style={{width:'40px'}} src={googleLogo} alt="" />
                continue with google</button>
        </div>
    );
};

export default Signup;