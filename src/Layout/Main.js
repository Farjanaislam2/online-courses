import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../component/NavBar/NavBar';
import Footer from './../component/Footer/Footer';
import Nav from './../component/NavBar/Nav';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;