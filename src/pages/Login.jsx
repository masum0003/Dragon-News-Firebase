import React from 'react';
import { Link } from 'react-router';


const Login = () => {
    return (
        <div className='flex justify-center mt-12 items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='text-center text-2xl font-semibold mt-8'>Login Your Account</h1>
                <div className="card-body">
                    <form className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                        <p>Dont't Have An Account? <Link to='/auth/registher' className='text-blue-500'>Registration</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;