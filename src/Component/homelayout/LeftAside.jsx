import React, { Suspense } from 'react';
import Catogoties from '../../Layouts/Catogoties';

const LeftAside = () => {
    return (
        <>
            <div>
                <Suspense fallback={<span>
                    <span className="loading loading-ring loading-xs"></span>
                    <span className="loading loading-ring loading-sm"></span>
                    <span className="loading loading-ring loading-md"></span>
                    <span className="loading loading-ring loading-lg"></span>
                    <span className="loading loading-ring loading-xl"></span>
                </span>}>
                    <Catogoties></Catogoties>
                </Suspense>
            </div>
        </>
    );
};

export default LeftAside;