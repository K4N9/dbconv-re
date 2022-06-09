import React, {Component, useEffect, useState} from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import { useSearchParams } from 'react-router-dom';

import Pay from './Components/Pay';
import Stock from './Components/Stock';
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
        <Subject />
        <Stock />
      </div>
    );
  }
}
export default App;
