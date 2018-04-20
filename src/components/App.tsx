import * as React from 'react';
import {match} from 'react-router-dom';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

import logo from './logo.svg';

export interface EntitiesPageProps extends  React.Props<any> {
  name?: string;
  counter?: number;
  match?:match<any>;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function App(params:EntitiesPageProps ) {
  let urlParame = "";
  if (params.match && params.match.params){
    urlParame = params.match.params.id;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>

      <div className="greeting">
        Hello {params.name} 
        <p>Counter: {params.counter}</p>
        <p>url parameter:{urlParame} </p>
      </div>
      <div>
        <button onClick={params.onDecrement}>-</button>
        <button onClick={params.onIncrement}>+</button>
      </div>
  
      <div>
      <DatePicker />
      </div>

    </div>
  );
}


export default App;
