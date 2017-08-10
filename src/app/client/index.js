import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from './redux/store/configureStore';
import routes from './routes/index';
import '../static/stylesheets/main.scss';

const store = configureStore();

render(<Provider store={store} >
        <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)} routes={routes(store)} />
      </Provider>, document.getElementById('app')
);
