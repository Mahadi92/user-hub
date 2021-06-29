import React from 'react';
import Navbar from '../Header/Navbar/Navbar';
import ProfileList from '../Profile/ProfileList/ProfileList'
const Home = () => {
    return (
        <div className="container">
            <Navbar></Navbar>
            <ProfileList></ProfileList>
        </div>
    );
};

export default Home;