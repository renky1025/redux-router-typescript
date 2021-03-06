import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Switch, Router, Route } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { AppReducers  } from './reducers/index';
import Main from './layout/Main';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import routers from './routers';
import 'antd/dist/antd.css';

import './styles/index.scss';

const history = createHistory();    
const middleware = routerMiddleware(history);

// loading all reducers
const store = createStore(
  AppReducers,
  applyMiddleware(thunk.withExtraArgument(middleware))
)

// render page with layout
const FadingRoute = ({ component: Component, ...rest }:any) => {
  const rLam = (props:React.Props<any>) => {
    return (<Main> <Component {...props}/> </Main>);
  }
  return (<Route {...rest} render={rLam}/>);
}

// implement all routers 
// const routeComponents = routers().map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);
const routeComponents = routers().map(({path, component}, key) => <FadingRoute exact path={path} component={component} key={key} />);

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
      <Switch>
        {routeComponents}
      </Switch>
      </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
