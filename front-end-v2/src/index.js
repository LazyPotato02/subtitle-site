import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes, Route,} from 'react-router-dom';
import Home from './components/Home'
import Nav from './components/Nav'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Nav/>
          <Routes>
              {/*<Route path="*" element={<NotFound />} />*/}
              <Route path="/" element={<Home/>}/>
              {/*<Route path="/search/:searchValue" element={<SearchView/>} />*/}
              {/*<Route path="/subtitle/:id" element={<MovieDetails/>} />*/}
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
