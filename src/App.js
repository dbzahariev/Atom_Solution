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
  count: 0,
  Pin:"",
  Inner:"No",
};

const counterReducer  = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        ...state, 
        count: state.count + 1,
        Pin: action.Pin
      }
    case 'CHECK':
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
    case 'DECREMENT':
      return { 
        count: state.count - 1,
        Pin: ""
      }
    default:
      return state
  }
};

const store = createStore(counterReducer);
store.subscribe(()=> store.getState())
class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}>
        <main className="content">
            {/* <ShowComponent /> */}
            {/* <Route path='/' exact component={HomeComponent} /> */}
            <Route path='/' exact component={HomeContainer} />
            <Route path='/login' exact component={ShowComponent} />
        </main>
      </Provider>
      </div>
    );
  }
}

export default App;
