import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex gap-5 items-center bg-base-200 rounded-sm'>
            <p className=' bg-secondary px-4 py-2 rounded'>Latest</p>

            <marquee >
                <div className="flex gap-4">
                    
                    <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                    <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                    <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>    
            </div>
        </marquee>
       </div>
    );
};

export default LatestNews;