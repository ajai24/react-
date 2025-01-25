import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Display from './Display';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Myclass from './Myclass';
import States from './states';
import Test from './test';
import Reducer from './reducer';
import Parent from './parent';
import Form1 from './form';
import Form2 from './Form2';
import LongForm from './LongForm';
import NestedRouter from './Nested_Router';
import Navbar from './Navbar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <h1>-----------------------------------------------------------------------------------------------</h1>
    <App />
    <h1>-----------------------------------------------------------------------------------------------</h1>
    <Myclass />
    <h1>-----------------------------------------------------------------------------------------------</h1>
    <States />
    <h1>-----------------------------------------------------------------------------------------------</h1>
    <Test />
    <h1>-----------------------------------------------------------------------------------------------</h1>
    <Reducer />
    <h1>-----------------------------------------------------------------------------------------------</h1>
    <Parent/>
    <h1>-----------------------------------------------------------------------------------------------</h1>
    <Form1/>
    <h1>-----------------------------------------------------------------------------------------------</h1>
    <Form2/>
    <h1>-----------------------------------------------------------------------------------------------</h1>
    <LongForm/>
    <h1>-----------------------------------------------------------------------------------------------</h1>
    {/* <Navbar/> */}
    <Display />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
