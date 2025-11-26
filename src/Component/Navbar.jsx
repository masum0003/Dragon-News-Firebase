import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user , logout} = use(AuthContext);
    const handleLogout = () => {
        console.log('logout clicked');
        logout()
        .then(()=>{
            alert('Logout Successful')
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div className='flex justify-between items-center'>
            <div className='ml-14 border p-2 text-shadow-amber-400  hover:bg-blue-300 rounded-sm'>{user && user.email}</div>
            <div className='flex gap-4 text-gray-700 ml-20'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='flex gap-4 mr-8'>
                <img className='w-16 rounded-full border p-2' src={user ? user.photoURL: userIcon} alt="" />

                {
                    user ? <button onClick={handleLogout} className='btn btn-primary px-4'>Logout</button>
                        : <Link to='/auth/login' className='btn btn-primary px-4'>Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;