import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo2.png'
import googleLogo from '../../../images/google-logo.png'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const Signup = () => {
    let errorElement;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating,] = useUpdateProfile(auth);
    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>;
    }

    const handleFromSubmit = async (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        const confirmPassword = event.target.confirmPassword.value
        if (password === confirmPassword) {
            await createUserWithEmailAndPassword(email, password)
            await updateProfile({ displayName: name });
        } else {
            alert('nashf')
        }

    }
    return (
        <div className='container d-flex align-items-center flex-column mt-3'>
            <div className='mb-5'><img style={{ width: '200px' }} src={logo} alt="" /></div>
            <form className='d-flex align-items-center flex-column w-100' onSubmit={handleFromSubmit}>
                <input style={{ backgroundColor: "#dfe6e9" }} className='mb-3 p-2 w-25  border-0' type="text" name="name" placeholder='name' required />
                <input style={{ backgroundColor: "#dfe6e9" }} className='mb-3 p-2 w-25  border-0' type="email" name="email" placeholder='email' required/>

                <input style={{ backgroundColor: "#dfe6e9" }} className='mb-3 p-2 w-25  border-0' type="password" name="password" placeholder='password' required />
                <input style={{ backgroundColor: "#dfe6e9" }} className='mb-3 p-2 w-25  border-0' type="password" name="confirmPassword" placeholder='confirm password' required />
                {errorElement ? errorElement : ''}
                <input style={{ backgroundColor: "#F92C54" }} className='w-25 btn text-light' type="submit" value="Sign up" />
            </form>
            <p className='mt-2'> already have an account ? <Link className=''
                style={{ color: "#F92C54" }}
                to='/login'>Login</Link></p>
            <button className='w-25 btn bold border'>
                <img style={{ width: '40px' }} src={googleLogo} alt="" />
                continue with google</button>
        </div>
    );
};

export default Signup;