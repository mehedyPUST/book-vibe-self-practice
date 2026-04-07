import React from 'react';
import NavBar from '../components/shared/NavBar/NavBar';
import { Outlet } from 'react-router';
import HomePage from '../pages/Homepage/HomePage';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet>
                <HomePage></HomePage>
            </Outlet>
        </div>
    );
};

export default MainLayout;