import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './App.css';

import logo from './logo.svg';

export interface AppProps extends RouteComponentProps<any>, React.Props<any> {
  id?: string;
}

function App(props:AppProps) {
  const id = props.match.params.id;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.tsx</code> and save to reload.
        
      </p>
      <p>
      Id: {id}
      </p>
    </div>
  );
}


export default App;
