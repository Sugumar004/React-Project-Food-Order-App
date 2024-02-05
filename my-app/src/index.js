import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MyApp from './App';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from "./Components/Redux/Store";
// import { createStore } from 'redux';
// import { setReducer } from './reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const store= createStore(setReducer)
root.render(

  <BrowserRouter>
    <Provider store={store}>
      <MyApp />
    </Provider>
  </BrowserRouter>
  
);

reportWebVitals();
