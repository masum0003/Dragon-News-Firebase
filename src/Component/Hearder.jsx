import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Hearder = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center gap-4 mt-2'>
                <img className='w-[400px]' src={logo} alt="" />
                <p className='text-accent'>Journalism Without Fear or Favour</p>
                <p className='font-semibold text-accent'>{format(new Date(),"EEEE , MMMM dd , yyyy")}</p>
               
            </div>
        </>
    );
};

export default Hearder;