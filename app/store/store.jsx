import { applyMiddleware, combineReducers, createStore, } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRoutes } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import queryString from 'query-string';

import routesMap from './router/routesMap.jsx';
import page from './router/pageReducer.jsx';
import * as reducers from './reducers.jsx';
  
const history = createHistory();
  
const { reducer, middleware, enhancer, initialDispatch } = connectRoutes(history, routesMap, {
    initialDispatch: false,
    querySerializer: queryString,
});
export { initialDispatch };

const rootReducer = combineReducers({
    ...reducers,
    page,
    location: reducer,
});

const middlewares = applyMiddleware(middleware, thunk);

export const store = createStore(
    rootReducer,
    composeWithDevTools(enhancer, middlewares)
);