import React from 'react';
import { useParams} from 'react-router-dom';
import './MovieDetails.css'
import MoviePic from '../img/wl-op-16se.jpg'
function MovieDetails (){
    const { id } = useParams();
    console.log(`Movie id is ${id}`)
    return (
        <div className={'movieMain'}>
            <article className={'movieBody'}>
                <img className={'img'} src={MoviePic} alt=""/>
            </article>
        </div>
    );
};


export default MovieDetails;