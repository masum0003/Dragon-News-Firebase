import React from 'react';
import swimingImage from '../../assets/swimming.png'
import classImage from '../../assets/class.png'
import playImage from '../../assets/playground.png'

const QZone = () => {
    return (
        <>
            <div className='bg-base-200 p-4 rounded-xl'>
                <h2 className='font-bold mb-5'>Q-zone</h2> 
                <div className='space-y-5'>
                    <img src={swimingImage} alt="" />
                    <img src={classImage} alt="" />
                    <img src={playImage} alt="" />
                </div>

            </div>
        </>
    );
};

export default QZone;