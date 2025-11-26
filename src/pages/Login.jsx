import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';


const Login = () => {
        const [error,setError]= useState('');

    const {signIn} = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    console.log(location);
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email,password)
        .then((result)=>{
            const user = result.user;
            console.log(user);
           navigate(`${location.state ? location.state : '/' }`,{replace:true});
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log(errorMessage);
            // alert(errorCode,errorMessage);
            setError(errorCode)
        })

    }
    return (
        <div className='flex justify-center mt-12 items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='text-center text-2xl font-semibold mt-8'>Login Your Account</h1>
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                        {/* Email */}
                        <label className="label">Email</label>
                        <input required name='email' type="email" className="input" placeholder="Email" />

                        {/* Password */}
                        <label className="label">Password</label>
                        <input required name='password' type="password" className="input" placeholder="Password" />

                        <div><a className="link link-hover">Forgot password?</a></div>
                        {
                            error && <p className='text-red-600'>{error}</p>
                        }

                        <button type='submit' className="btn btn-neutral mt-4">Login</button>

                        <p>Dont't Have An Account? <Link to='/auth/registher' className='text-blue-500'>Registration</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;