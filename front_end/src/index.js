import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes, Route,} from 'react-router-dom';
import Home from './components/Home'
import NavBar from './components/NavBar'
import MovieDetails from "./components/MovieDetails";
import SearchView from "./components/searchView";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path=":id" element={<MovieDetails/>} />
                <Route path="/search/:searchValue" element={<SearchView/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);


reportWebVitals();
