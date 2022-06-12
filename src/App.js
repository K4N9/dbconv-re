import React, {Component, useEffect, useState} from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import { useSearchParams } from 'react-router-dom';

import PayContext from './Components/PayContext';
import RefundContext from './Components/RefundContext';
import ManageContext from './Components/ManageContext';
// import Store from './Components/Store';
// import Manage from './Components/Manage';

// property = props

class Subject extends Component{
  render(){
    return(
      <header>
      <h1>DATABASE CONV PROJECT</h1>
      </header>
    );
  }
}

class App extends Component{ 
  render(){
    return(
      <div>
        {/* <Subject />
        <Stock /> */}
        <PayContext query = {[{transaction : "requestStock"}, {transaction : "pay"}]}/>
        <RefundContext query = {[{transaction: "reqRefund"}, {transaction : "refund"}]}/>
        {/* <ManageContext query = {[{transaction: "reqManage"}]}/> */}
      </div>
    );
  }
}
export default App;
