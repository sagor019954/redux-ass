import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Sheared/Navber/Navbar'
import Footer from '../Sheared/Footer/Footer'

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;