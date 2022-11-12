import React from 'react';
import './App.css';


function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img width={50} src="https://www.seekpng.com/png/full/307-3073829_media-ninja-logo-ninja-logo-png-free.png" alt="Picture"/>
            </header>
            <nav className='nav'>
                <div>Profile</div>
                <div>Messages</div>
            </nav>
            <div className='content'>
                Main content
            </div>
        </div>
    );
}

export default App;




