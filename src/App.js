import React, {Component, useEffect, useState} from 'react';

import StoreContext from './Components/StoreContext';
import PayContext from './Components/PayContext';
import RefundContext from './Components/RefundContext';
import ReqruitContext from './Components/ReqruitContext';
import FireContext from './Components/FireContext';
import DebugContext from './Components/DebugContext';
import OrderContext from './Components/OrderContext';
import TakeStockContext from './Components/TakeStockContext';

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
        <StoreContext query = {[{transaction: "open"}]}/>
        <PayContext query = {[{transaction : "requestStock"}, {transaction : "pay"}]}/>
        <RefundContext query = {[{transaction : "reqRefund"}, {transaction : "refund"}]}/>
        <ReqruitContext query = {[{transaction : "reqReqruit"}, {transaction : "reqruit"}]}/>
        <FireContext query = {[{transaction : "reqFire"}, {transaction : "fire"}]}/>
        <OrderContext />
        <TakeStockContext />
        <DebugContext />
      </div>
    );
  }
}
export default App;
