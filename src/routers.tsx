import Hello from './containers/Hello';
import App from './containers/App';
import NotFoundPage from './containers/not-found/index';

export default () => {
    return [{
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
      }];
}
