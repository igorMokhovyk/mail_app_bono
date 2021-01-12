import React, {useEffect, useState} from 'react';
import './App.css';
import HeaderBase from './Base/HeaderBase';
import Sidebar from "./Base/Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Mail from "./Base/Mail";
import EmailList from "./Base/EmailList";
import SendMail from "./Base/SendMail";
import {connect} from 'react-redux';
import Login from "./Base/Login";
import {auth} from "./Firebase/Firebase";


function App(props) {


  const opener = props.mailAdd.sendMessageIsOpen;
  const {userLogin, mailLogin} = props;


  console.log(userLogin)


  useEffect(() => {
    auth.onAuthStateChanged((userLogin) => {
      if (userLogin) {
        mailLogin({
          displayName: userLogin.displayName,
          email: userLogin.email,
          photoURL: userLogin.photoURL
        })
      }
    })
  }, []);


  return (

    <Router>
      {!userLogin ? (
        <Login/>
      ) : (
        <div className="App">
          <HeaderBase/>
          <div className='app_body'>
            <Sidebar/>

            <Switch>

              <Route path='/mail'>
                <Mail/>
              </Route>

              <Route path='/'>
                <EmailList/>
              </Route>

            </Switch>

          </div>
          {opener && <SendMail/>}
        </div>
      )}
    </Router>

  );
}

const mapStateToProps = (state) => ({
  mailAdd: state.mailAdd,
  userLogin: state.userLogin
})

const mapDispatchToProps = (dispatch) => ({
  mailLogin: (payload) => dispatch({type: 'USER_LOGGING', payload: payload}),
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
