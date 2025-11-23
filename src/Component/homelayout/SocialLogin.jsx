import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h1 className='text-xl font-semibold'>Login With</h1>
            <div className='space-y-3 mt-4'>
                <button className='btn bg-cyan-400 hover:bg-blue-600 hover:text-black w-full'><FaGoogle size={24} /> Login with Google</button>
                <button className='btn btn-outline w-full'><FaGithub size={25} /> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;