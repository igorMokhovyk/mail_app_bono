import React from 'react';
import './App.css';
import HeaderBase from './Base/HeaderBase';
import Sidebar from "./Base/Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Mail from "./Base/Mail";
import EmailList from "./Base/EmailList";
import SendMail from "./Base/SendMail";

function App() {
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
        <SendMail />
      </div>

    </Router>
  );
}

export default App;
