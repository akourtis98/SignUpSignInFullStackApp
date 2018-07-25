import React, { Component } from 'react';
import fire from './Firebase';

const Home = () => {
    return (
        <div>
            hi home
            <button onClick={logout} type="button" className="btn btn-info">Sign out</button>
        </div>
    ) 
}

function logout(){
    fire.auth().signOut();
}

export default Home;