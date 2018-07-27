import { MailList,Home } from './routes'
import { Router,Scene,Actions,ActionConst } from 'fs-router'
import React, { Component } from 'react';

global.log = (...params) => {
    if (__DEV__) console.log(...params);
  };

  console.disableYellowBox = true;

export default class AppRouter extends Component{

    render(){
        return(
            <Router>
                <Scene  name="mailList" key="mailList" hideNavBar component={MailList} onExit={() => { }} onEnter={() => {  }} />
                <Scene  initial name="home" key="home" hideNavBar component={Home} onExit={() => { }} onEnter={() => {  }} />
            </Router>
        )
    }
}