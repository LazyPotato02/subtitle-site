import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import './MovieDetails.css'
// import MoviePic from '../img/wl-op-16se.jpg'
import GenrePic from '../img/Assets/movie_genre_button.svg'
import SupportPic from '../img/Assets/donate_button.svg'
import axios from "axios";

// Images
import CountryFlag from 'react-country-flag';


// let filePath = './subtitles'

function MovieDetails() {
    const {id} = useParams();
    const [data, setData] = useState([])
    let langs = ['AZ','AR','AL','BA','BG','GE','EE','LV','LT','MK','RO','SI','SK','SR','TR','UA','US']
    useEffect(() => {
        axios.get(`http://localhost:8000/subtitles/api/${id}`)
            .then(response => setData(response.data))
            .catch(error => console.log(error))
    }, [id]);
    window.onload = function () {
        let langs = document.querySelectorAll('.languages')
        langs.forEach(function (elem) {
            elem.addEventListener("click", (event) => {
                let language = event.srcElement.className
                const link = document.createElement('a');
                link.href = data.subtitle_location;
                let tmpStr = data.subtitle_location.split('/')[2]
                console.log(tmpStr)
                link.download = `${tmpStr}_`+ language+'.srt'
                console.log(link)
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
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

                    <img className={'img'} src={data.cover_image_location} alt=""/>
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
                        {langs.map((item) => (
                                <CountryFlag
                                    countryCode={item}
                                    svg
                                    key={item}
                                    className={item}
                                    style={{
                                        width:'47%',
                                        height:'50%'
                                    }}
                                />
                        ))}

                    </div>
                </div>

            </article>

        </div>
    );
};


export default MovieDetails;