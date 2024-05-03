import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import toast, { Toaster } from 'react-hot-toast';

const MainPage = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Toaster />
        </div>
    );
};

export default MainPage;