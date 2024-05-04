import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes, Route,} from 'react-router-dom';
import Home from './components/Home'
import Nav from './components/Nav'
import MovieDetails from "./components/MovieDetails";
import img1 from "./img/Ahsoka_Mandalorian_babyyoda.jpg";
import img2 from "./img/Avengers.jpg";
import img3 from "./img/DUNE_2.jpg";
import img4 from "./img/R2D2.jpg";
import img5 from "./img/DUNE_2_.jpg";
import img6 from "./img/Guardion_of_the_gaxay.jpg";
import img8 from "./img/Spider_Man_Miles.jpg";
import img9 from "./img/Stranger_Things.jpg";
import img10 from "./img/THE_Mandalorian.jpg";
import NotFound from "./components/notFound";

function setRandomBackground() {
    const backgrounds = [
        img1, img2, img3, img4, img5, img6, img8, img9, img10
    ];

    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    document.body.style.backgroundImage = `url(${backgrounds[randomIndex]})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.minHeight = '100vh';
    document.body.style.backgroundSize = '100% 100%';
}


setRandomBackground()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Nav/>
          <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Home/>}/>
              {/*<Route path="/search/:searchValue" element={<SearchView/>} />*/}
              <Route path="/subtitle/:id" element={<MovieDetails/>} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
