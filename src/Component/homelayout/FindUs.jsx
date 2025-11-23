import React from 'react';
import { FaFacebook ,FaTwitter,FaInstagram } from "react-icons/fa";

const FindUs = () => {
    return (
        <>
            <div>
                <h2 className='font-bold'>Find Use On</h2>
            </div>
            <div className='grid grid-cols-1 space-y-0.5 '>
                <button className='btn justify-start  bg-blue-200 hover:bg-amber-100'> <FaFacebook size={20} /> FaceBook</button>
                <button className='btn justify-start  border-y-indigo-200 hover:bg-amber-300 '> <FaTwitter size={20}/> Twiter</button>
                <button className='btn justify-start  bg-emerald-200 hover:bg-blue-400'> <FaInstagram className='text-amber-500' size={20} /> Instagram</button>
            </div>
        </>
    );
};

export default FindUs; 