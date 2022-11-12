import React from 'react';
import './App.css';
import {Header} from "./components/Header";


function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <nav className='nav'>
                <a href={''}>Profile</a>
                <a href={''}>Messages</a>
                <a href={''}>News</a>
                <a href={''}>Music</a>
                <a href={''}>Settings</a>
            </nav>
            <div className='content'>
                <div>
                    <img src="https://wallpaperaccess.com/full/11861.jpg" alt="Picture"/>
                </div>
                <div>
                    avatar + description
                </div>
                <div>
                    my post
                    <div>
                        new post
                    </div>
                </div>
                <div>post 1</div>
                <div>post 2</div>
            </div>
        </div>
    );
}

export default App;




