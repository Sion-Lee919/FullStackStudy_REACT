import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import NumberList from './13_test2_numberlist';
import { Main, NoMatch, OneNumber } from './14_main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Link to="/numberlist">NumberList 컴포넌트로 이동합니다.</Link><br/>
  <Link to="/number/300/400">OneNumber 컴포넌트로 이동합니다.</Link><br/>
  <Link to="/">Main 컴포넌트로 이동합니다.</Link><br/>
  <Link to="/c">NoMatch 컴포넌트로 이동합니다.</Link><br/>

  <Routes>
    <Route path="/numberlist" element={<NumberList/>}></Route>
    <Route path="/" element={<Main/>}></Route>
    <Route path="/number/:num3/:num4" element={<OneNumber num1="100" num2={200}/>}></Route>
    <Route path="*" element={<NoMatch/>}></Route>
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
