import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Users from './components/Users';
import Demo from './components/Demo';
import Timer from './components/Timer';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Albums from './components/Albums';
import Photos from './components/Photos';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Navbar></Navbar>

        <Route exact path="/" component={Users}></Route>
        <Route path="/demo" component={Demo}></Route>
        <Route path="/timer" component={Timer}></Route>
        <Route path="/albums/:uid/:uname" component={Albums}></Route>
        <Route path="/photos/:uid/:uname/:aid" component={Photos}></Route>
        <Route path="/posts/:uid/:uname" component={Posts}></Route>
    </BrowserRouter>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
