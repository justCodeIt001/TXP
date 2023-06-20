import React from 'react';
import { Outlet } from "react-router-dom";

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Data
import { ReactComponent as BgHome } from '../img/bg-home.svg';

function Layout() {
    return (
        <>
            <Header />
            <div className='position-fixed bg-primary bg-home overflow-hidden'>
                <BgHome className='top-svg' />
            </div>
            <div className='py-7 py-lg-6'>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout;