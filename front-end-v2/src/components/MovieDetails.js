import axios from "axios";
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import CountryFlag from 'react-country-flag';
import './MovieDetails.css'
import img1 from "../img/Ahsoka_Mandalorian_babyyoda.jpg";

function MovieDetails() {
    const {id} = useParams();
    const [data, setData] = useState([])
    let isSeries = false
    let episodesCount = data.episode_count
    let langs = ['AZ','AR','AL','BA','BG','GE','EE','LV','LT','MK','RO','SI','SK','RS','TR','UA','US']

    useEffect(() => {
        axios.get(`http://localhost:8000/subtitles/api/${id}`)
            .then(response => setData(response.data))
            .catch(error => console.log(error))
    }, [id]);

    const handleDownload = (language) => {
        if (data.type === 'series'){
            if (data) {
                let episodeNumber = document.querySelector('select').value
                const downloadUrl = `http://localhost:8000/subtitles/download/${encodeURIComponent(data.folder_name)}/` + `${encodeURIComponent(data.subtitle_file_name)}${episodeNumber}_${language}.srt`;
                const anchor = document.createElement('a');
                anchor.href = downloadUrl;
                anchor.download = data.folder_name.substring(data.subtitle_file_name.lastIndexOf('/') + 1);
                anchor.click();
            }
        }
        else if (data.type === 'movie'){
            if (data) {
                const downloadUrl = `http://localhost:8000/subtitles/download/${encodeURIComponent(data.folder_name)}/` + `${encodeURIComponent(data.subtitle_file_name)}_${language}.srt`;
                const anchor = document.createElement('a');
                anchor.href = downloadUrl;
                anchor.download = data.folder_name.substring(data.subtitle_file_name.lastIndexOf('/') + 1);
                anchor.click();
            }
        }


    };


    if (data.type === 'series') {
        isSeries = true
    }

    return (
        <div>

            <div className={'MovieDetailBox'}>
                <p className={'name'}>{data.name}</p>
                <div className={'wrapper'}>
                    <div className={'infoBox'}>

                        <img className={'img'} src={`http://localhost:3000/${data.cover_image_location}`}
                             alt=""/>
                    </div>
                    <div className={'detailBox'}>
                        <p className={'details'}>DETAILS</p>
                        <div className={'detailsData'}>
                            <p className={'year'}>{data.year}</p>
                            <p className={'genre'}>{data.genre}</p>
                        </div>


                        {isSeries ? <div className={'seriesSection'}>
                            <label htmlFor="episode">Choose episode:</label>

                            <select className={'selectEpisodes'} name="episode" id="episode">
                                {Array.from(Array(episodesCount), (_, i) => {
                                    const episodeNumber = i + 1;
                                    return <option key={episodeNumber} value={episodeNumber}>{episodeNumber}</option>;
                                })}

                            </select>
                        </div> : ''}

                    </div>
                    <div className={'adsBox'}>
                        <img className={'add'} src={img1} alt=""/>
                    </div>
                </div>

            </div>
            <div className={'langWrapper'}>
                <p>CHOSE LANGUAGE</p>
                <div className={'languageBox'}>
                    {langs.map(item => (
                        <div key={item} style={{width: '47%', height: '50%', cursor: "pointer"}}
                             disabled={!data.name}
                             onClick={() => handleDownload(item)}>
                            <CountryFlag
                                countryCode={item}
                                svg
                                className="language"
                                style={{width: '80px', height: '40px'}}
                            />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );


};

export default MovieDetails