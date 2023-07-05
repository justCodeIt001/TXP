import React from 'react';
import { Outlet } from "react-router-dom";

// Components
import Header from '../components/Header';

// Data
import { ReactComponent as BgHome } from '../img/bg-home.svg';

function Layout() {
    return (
        <>
            <Header />
            <div className='position-fixed bg-primary bg-home overflow-hidden'>
                <BgHome className='top-svg' />
            </div>
            <Outlet />
        </>
    )
}

export default Layout;