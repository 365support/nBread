import React from 'react'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Subscribers from './component/Subscribers';
import SignUp from './modal/SignUp';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import Comment from './component/Comment';

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/signUp">
          <SignUp/>
        </Route>
        <Route path="/MyPage">
          <MyPage/>
        </Route>
        <Route path="/sub">
          <Subscribers/>
        </Route>
        <Route path="/comment">
          <Comment/>
        </Route>
    </BrowserRouter>
  );
}

export default App;
