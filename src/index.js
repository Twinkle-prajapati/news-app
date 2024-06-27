import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Tesla from './Components/Tesla';
import { BrowserRouter,  Routes ,Route } from 'react-router-dom';
import Home from './Components/Home';
import Apple from './Components/Apple';
import Techcrunch from './Components/Techcrunch';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/tesla' element={<Tesla/>}></Route>
      <Route path='/apple' element={<Apple/>}></Route>
      <Route path='/techcrunch' element={<Techcrunch/>}></Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
