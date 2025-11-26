import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const[nameError, setNameError] = useState('');

    const {createUser ,setUser , updateUser} = useContext(AuthContext)

    const navigate = useNavigate();
    const handleRegistration = (e) => {
        e.preventDefault();
        // console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        if(name.length <5){
            setNameError('Name must be at least 5 characters long');
            return;
        }
        else{
            setNameError('');
        }
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log({name, photoURL, email, password});
        createUser(email,password)
        .then(result =>{
            const user = result.user;
            // console.log(user)
            
            updateUser({displayName:name, photoURL:photoURL})
            .then(()=>{
                setUser({...user, displayName:name, photoURL:photoURL});
                navigate('/');
            })
            .catch(error=>console.log(error))
        })
        .catch((error) =>{
            const errorCode = error.code;
            const errorMessager = error.message;
            alert(errorMessager)
        })
    }

    return (
        <div className='flex justify-center mt-12 items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='text-center text-2xl font-semibold mt-8'>Registration Your Account</h1>
                <div className="card-body">
                    <form onSubmit={handleRegistration} className="fieldset">

                        <label className="label">Name</label>
                        <input name='name' type="Name" className="input" placeholder="Name" required />
                        {
                            nameError && <p className='text-red-600'>{nameError}</p>
                        }

                        <label className="label">Photo URL</label>
                        <input name='photo' type="Name" className="input" placeholder="Photo URL" required />

                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />

                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />

                        <button type='submit' className="btn btn-neutral mt-4">Registration</button>
                        <p>All Ready Have Account? <Link to='/auth/login' className='text-blue-500'>Login </Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;