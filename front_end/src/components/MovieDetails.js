import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import './MovieDetails.css'
import GenrePic from '../img/Assets/movie_genre_button.svg'
import SupportPic from '../img/Assets/donate_button.svg'
import axios from "axios";

import CountryFlag from 'react-country-flag';



function MovieDetails() {
    const {id} = useParams();
    const [data, setData] = useState([])
    let langs = ['AZ','AR','AL','BA','BG','GE','EE','LV','LT','MK','RO','SI','SK','RS','TR','UA','US']
    useEffect(() => {
        axios.get(`http://localhost:8000/subtitles/api/${id}`)
            .then(response => setData(response.data))
            .catch(error => console.log(error))
    }, [id]);

    const handleDownload = (language) => {
        if (data) {
            const downloadUrl = `http://localhost:8000/subtitles/download/${encodeURIComponent(data.folder_name)}/`+`${encodeURIComponent(data.subtitle_file_name)}_${language}.srt`;
            const anchor = document.createElement('a');
            anchor.href = downloadUrl;
            anchor.download = data.folder_name.substring(data.subtitle_file_name.lastIndexOf('/') + 1);
            anchor.click();
        }
    };




    return (
        <div className={'movieMain'}>
            <article className={'movieBody'}>

                <div className={'movieData'}>
                    <p>{data.name}</p>
                </div>
                <div className={'movieDetailBox'}>

                    <img className={'img'} src={`http://localhost:3000/${data.cover_image_location}`} alt=""/>

                    <div className={'icons'}>
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
                        {langs.map(item => (
                            <div key={item} style={{ width: '47%', height: '50%', cursor:"pointer" }} disabled={!item.name} onClick={() => handleDownload(item)}>
                                <CountryFlag
                                    countryCode={item}
                                    svg
                                    className="language"
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </div>
                        ))}

                    </div>
                </div>

            </article>

        </div>
    );
};


export default MovieDetails;