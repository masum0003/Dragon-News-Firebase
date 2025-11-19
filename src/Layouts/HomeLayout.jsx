import React from 'react';
import { Outlet } from 'react-router';
import Hearder from '../Component/Hearder';
const HomeLayout = () => {
    return (
        <div>
            <header>
                <Hearder></Hearder>
            </header>
            <main>
                <section className="left-corner">

                </section>
                <section className="main-corner">
                    <Outlet></Outlet>
                </section>
                <section className="right-corner">

                </section>
            </main>
        </div>
    );
};

export default HomeLayout;