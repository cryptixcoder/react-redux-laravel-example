import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Posts from './components/posts/posts'
import AddPost from './components/posts/add_post'
import EditPost from './components/posts/edit_post'
import Post from './components/posts/show_post'

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import reducers from './reducers'

import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Posts} />
              <Route exact path="/posts/create" component={AddPost} />
              <Route exact path="/posts/:id/edit" component={EditPost} />
              <Route exact path="/posts/:id" component={Post} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
