import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import reportWebVitals from './reportWebVitals';
import { TutorialIndex } from './tutorial/tutorial-index';
import Demo from './Mui/Mui-Demo';
import { ShoppingIndex } from './Shopping-spa/shoppingIndex';
import { MUItextbox } from './Mui/Mui-textbox';
import FloatingActionButtons from './Mui/Floating-botton-actions';
import BasicRating from './Mui/Ratting';
import { ContextDemo } from './components/context/context-demo';
import { ReducerDemo } from './components/Reducer/ReducerDemo';
import { UserLogin } from './Custom-Hooks/UserLogin';
import { NasaApi } from './components/api/NasaApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TutorialIndex/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
