import React from 'react';
import { Outlet } from 'react-router';
import Hearder from '../Component/Hearder';
import LatestNews from './LatestNews';
import Navbar from '../Component/Navbar';
import LeftAside from '../Component/homelayout/leftAside';
// import RightAside from '../Component/homelayout/rightAside';
import  RightAside from '../Component/homelayout/RightAside'


const HomeLayout = () => {
    return (
        <div>
            <header>
                <Hearder></Hearder>
                <section className='w-11/12 mx-auto my-4 justify-center'>
                <LatestNews></LatestNews>
                </section>

                <section className='mt-8'>
                    <Navbar></Navbar>
                </section>
            </header>
            <main className='w-11/12 mx-auto my-3  gap-6 grid grid-cols-12'>
               <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
               </aside>
                <section className="main-corner col-span-6">
                    <Outlet></Outlet>
                </section>
                <section className="right-corner col-span-3">
                    <aside className='sticky top-0 h-fit'>
                        <RightAside></RightAside>  
                    </aside>
                </section>
            </main>
        </div>
    );
};

export default HomeLayout;