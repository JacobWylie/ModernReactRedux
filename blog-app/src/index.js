import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import reducers from './reducers';
import Index from './components/index';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
    		<Route path="/" component={Index} />
    		{/*<Route path="/posts/:id" component={Show} />
    		<Route path="/posts/new" component={New} />*/}
    	</div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
