import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route } from 'react-router-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ShowComponent from './components/showComponent';
// import HomeComponent from './components/home';
import HomeContainer from './components/home';

const initialState={
  Pin:"",
  Inner:"No",
};

const LoginReducer  = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        ...state, 
        Pin: action.Pin
      }
    case 'LOGIN':
      if (state.Pin === action.ToPin){
        return {
          ...state,
          Inner: "Yes"
        }
      }
      else {
        return {
          ...state,
          Inner: "No"
        }
      }
    case 'LOGOUT':
      return { 
        Pin: "",
        Inner: "No"
      }
    default:
      return state
  }
};

const store = createStore(LoginReducer);
store.subscribe(()=> store.getState())
class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}>
        <main className="content">
          
          <Route path='/' exact component={HomeContainer} />
          <Route path='/login' exact component={ShowComponent} />
        </main>
      </Provider>
      </div>
    );
  }
}

export default App;
