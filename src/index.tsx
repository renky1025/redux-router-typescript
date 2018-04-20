import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Switch, Router, Route } from 'react-router';
// import { createStore} from 'redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { enthusiasm  } from './reducers/helloreducer';
import { numbers  } from './reducers/appreducer';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'

import Hello from './containers/Hello';
import App from './containers/App';
import NotFoundPage from './containers/not-found/index';

const history = createHistory();    
const middleware = routerMiddleware(history);

// const store = createStore(enthusiasm, {
//   enthusiasmLevel: 1,
//   languageName: 'TypeScript',
// });
const store = createStore(
  combineReducers({
    enthusiasm,
    numbers,
    router: routerReducer
  }),

  applyMiddleware(thunk.withExtraArgument(middleware)),
);
const routes = [{
  path: '/',
  component: Hello,
}, {
  path: '/app',
  component: App,
}, {
  path: '/app/:id',
  component: App,
}, {
  path: '*',
  component: NotFoundPage,
}, /* And so on. */];

const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);

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
