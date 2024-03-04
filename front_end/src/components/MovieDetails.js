import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import './MovieDetails.css'
import MoviePic from '../img/wl-op-16se.jpg'
// import DownloadPic from '../img/Assets/download_button.svg'
import GenrePic from '../img/Assets/movie_genre_button.svg'
import SupportPic from '../img/Assets/donate_button.svg'
import axios from "axios";

// Images

import USLogo from '../img/Assets/flag1.svg'
import BGLogo from '../img/Assets/flag2.svg'
import TRLogo from '../img/Assets/flag3.svg'
import ROLogo from '../img/Assets/flag4.svg'
import ALLogo from '../img/Assets/flag5.svg'
import GELogo from '../img/Assets/flag6.svg'
import MKLogo from '../img/Assets/flag7.svg'
import UALogo from '../img/Assets/flag8.svg'
import SKLogo from '../img/Assets/flag9.svg'
import SLLogo from '../img/Assets/flag10.svg'
import BALogo from '../img/Assets/flag11.svg'
import AZLogo from '../img/Assets/flag13.svg'
import ARLogo from '../img/Assets/flag14.svg'
import EELogo from '../img/Assets/flag15.svg'
import LTLogo from '../img/Assets/flag16.svg'
import LALogo from '../img/Assets/flag17.svg'

function MovieDetails() {
    const {id} = useParams();
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/subtitles/api/${id}`)
            .then(response => setData(response.data))
            .catch(error => console.log(error))
    }, [id]);
    window.onload = function () {
        let langs = document.querySelectorAll('.languages')
        langs.forEach(function (elem) {
            elem.addEventListener("click", (event) => {
                console.log(event.srcElement)
            //     add classes to every pic so you can filter based on class
            })
        })

    }


    return (
        <div className={'movieMain'}>
            <article className={'movieBody'}>

                <div className={'movieData'}>
                    <p>{data.name}</p>
                    {/*<p>{data.type}</p>*/}
                    {/*<p>{data.genre}</p>*/}
                    {/*<p>{data.year}</p>*/}
                </div>
                <div className={'movieDetailBox'}>

                    <img className={'img'} src={MoviePic} alt=""/>
                    {/*<div className={'iconWrapper'}>*/}

                    {/*</div>*/}
                    <div className={'icons'}>
                        {/*<div id={'icon'} className={'download'}>*/}
                        {/*    <img src={DownloadPic} alt=""/>*/}
                        {/*    <p>DOWNLOAD</p>*/}
                        {/*</div>*/}
                        <div id={'icon'} className={'genre'}>
                            <img src={GenrePic} alt=""/>
                            <p>{data.genre}</p>
                        </div>
                        <div id={'icon'} className={'genre'}>
                            <img src={SupportPic} alt=""/>
                            <p>SUPPORT US</p>
                        </div>

                    </div>
                    <div className={'movieInfo'}>
                        <div className={'trailer'}>
                            <p>TRAILER</p>
                            <iframe width="80%" height="270px"
                                    src="https://www.youtube.com/embed/LDU_Txk06tM?si=oAqiAdu3JMtyABEJ"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>
                        <div className={'info'}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deleniti, earum eius
                                explicabo
                                fugiat fugit laboriosam quia vero? Accusantium alias commodi inventore iure mollitia nam
                                nemo pariatur, sint velit voluptatem?</p>

                        </div>
                    </div>

                </div>
                <div>
                    <div className={'languages'}>
                        <img id={'langPic'} className={'langPic'} src={USLogo} alt=""/>
                        <img id={'langPic'} className={'langPic'} src={BGLogo} alt=""/>
                        <img id={'langPic'} className={'langPic'} src={TRLogo} alt=""/>
                        <img id={'langPic'} className={'langPic'} src={ROLogo} alt=""/>
                        <img id={'langPic'} className={'langPic'} src={ALLogo} alt=""/>
                        <img id={'langPic'} className={'langPic'} src={GELogo} alt=""/>
                        <img id={'langPic'} className={'langPic'} src={MKLogo} alt=""/>
                        <img id={'langPic'} className={'langPic'} src={UALogo} alt=""/>
                        <img id={'langPic'} className={'langPic'} src={SKLogo} alt=""/>
                        <img id={'langPic'} className={'langPic'} src={SLLogo} alt=""/>
                        <img id={'langPic'} className={'langPic'} src={BALogo} alt=""/>
                        <img id={'langPic'} className={'langPic'} src={AZLogo} alt=""/>
                        <img id={'langPic'} className={'langPic'} src={ARLogo} alt=""/>
                        <img id={'langPic'} className={'langPic'} src={EELogo} alt=""/>
                        <img id={'langPic'} className={'langPic'} src={LTLogo} alt=""/>
                        <img id={'langPic'} className={'langPic'} src={LALogo} alt=""/>
                    </div>
                </div>

            </article>

        </div>
    );
};


export default MovieDetails;