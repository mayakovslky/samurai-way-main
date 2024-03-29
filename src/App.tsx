import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {AppPropsType} from "./redux/state";
import {Friends} from "./components/Friends/Friends";

function App(props: AppPropsType) {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path={'/dialogs'}
                       render={() => <Dialogs dialogs={props.stateApp.messagesPage.dialogs}
                                              messages={props.stateApp.messagesPage.messages}/>}/>
                <Route path={'/profile'}
                       render={() => <Profile posts={props.stateApp.profilePage.posts}/>}/>
                <Route path={'/news'}
                       render={() => <News/>}/>
                <Route path={'/music'}
                       render={() => <Music/>}/>
                <Route path={'/settings'}
                       render={() => <Settings/>}/>
                <Route path={'/friends'}
                       render={() => <Friends/>}/>
            </div>
        </div>
    );
}

export default App;


