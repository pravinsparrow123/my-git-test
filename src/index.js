import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Blogs from './Blogs';
import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='/my-git-test'>
      <Routes>
        {/* <Route path="/" element={<App />}>
         
        </Route> */}
         <Route index element={<Home />} />
         <Route path="/blogs" element={<Blogs />} />
      </Routes>
   {/* <React.StrictMode>
    <App />
  </React.StrictMode> */}
  </BrowserRouter>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
