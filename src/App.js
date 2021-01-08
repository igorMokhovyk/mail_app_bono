import React from 'react';
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



function App(props) {

  const opener = props.mailAdd[0]

  console.log(opener)
  return (

      <Router>

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
          {!opener && <SendMail/>}
        </div>

      </Router>

  );
}

const mapStateToProps = (state) => ({
  mailAdd: state.mailAdd
})



export default connect(mapStateToProps)(App);
