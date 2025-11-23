import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
         <div className='flex justify-center mt-12 items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='text-center text-2xl font-semibold mt-8'>Registration Your Account</h1>
                <div className="card-body">
                    <form className="fieldset">

                        <label className="label">Name</label>
                        <input type="Name" className="input" placeholder="Name" />

                        <label className="label">Photo URL</label>
                        <input type="Name" className="input" placeholder="Photo URL" />

                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />

                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />

                        <button className="btn btn-neutral mt-4">Registration</button>
                        <p>All Ready Have Account? <Link to='/auth/login' className='text-blue-500'>Login </Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;