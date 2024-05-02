import React, {useState, useEffect} from 'react';
import img1 from '../img/Ahsoka_Mandalorian_babyyoda.jpg'
import img2 from '../img/Avengers.jpg'
import img3 from '../img/DUNE_2.jpg'
import img4 from '../img/R2D2.jpg'
import img5 from '../img/DUNE_2_.jpg'
import img6 from '../img/Guardion_of_the_gaxay.jpg'
import img8 from '../img/Spider_Man_Miles.jpg'
import img9 from '../img/Stranger_Things.jpg'
import img10 from '../img/THE_Mandalorian.jpg'
import './Home.css'
import logo from '../img/logo.svg'
import testImg from '../img/13_Hours_2016.webp'
import testImg2 from '../img/Ant_Man_2015.webp'
import testImg3 from '../img/Barbie_2023.webp'
import testImg4 from '../img/Captain_America_The_Winter_Soldier_2014.webp'
function Home() {
    const backgrounds = [
        img1, img2, img3, img4, img5, img6, img8, img9, img10
    ];


    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * backgrounds.length);

        document.body.style.backgroundImage = `url(${backgrounds[randomIndex]})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.minHeight = '100vh'
        document.body.style.backgroundSize = '100% 100%';

        return () => {
            document.body.style.backgroundImage = '';
            document.body.style.backgroundSize = '';
            document.body.style.backgroundPosition = '';
        };
    }, [backgrounds]);
    return (
        <div className={'main'}>
            <div className={'leftWrap'}>
                <div className={'leftWrapTextBoxes'}>
                    <p className={'welcome'}>WELCOME</p>
                    <div className={'subtitlesText'}>
                        <p className={'aqua'}>SUBTITLES</p>
                        <p>IN ANY LANGUAGE FOR ANY MOVIE</p>
                    </div>
                    <a href="/"><img className={'addimg1'} src={img1} alt=""/></a>

                </div>

            </div>
            <div className={'rightWrap'}>
            <p className={'latest'}>LATEST</p>
                <ul className={'movies'}>
                    <li className={'movie'}>
                        <img src={testImg} alt=""/>
                        <p>NAME</p>
                    </li>
                    <li className={'movie'}>
                        <img src={testImg2} alt=""/>
                        <p>NAME</p>
                    </li>
                    <li className={'movie'}>
                        <img src={testImg3} alt=""/>
                        <p>NAME</p>
                    </li>
                    <li className={'movie'}>
                        <img src={testImg4} alt=""/>
                        <p>NAME</p>
                    </li>
                    <li className={'movie'}>
                        <img src={testImg} alt=""/>
                        <p>NAME</p>
                    </li>
                    <li className={'movie'}>
                        <img src={testImg2} alt=""/>
                        <p>NAME</p>
                    </li>
                </ul>
            </div>
            <a href="/"><img className={'addimg2'} src={img1} alt=""/></a>

        </div>
    )
}

export default Home;
