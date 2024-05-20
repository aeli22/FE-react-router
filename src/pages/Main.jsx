import React from 'react';
import Header from '../containers/Header';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Header />
            <h1>Main Page</h1>
            <Link to="/menu">메뉴 페이지로 이동</Link>
        </>
    );
};

export default Main;
