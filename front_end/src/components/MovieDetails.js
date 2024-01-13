import React from 'react';
import { useParams} from 'react-router-dom';

function MovieDetails (){
    const { id } = useParams();
    console.log(`Movie id is ${id}`)
    return (
        <div>
            <article>
                
            </article>
        </div>
    );
};


export default MovieDetails;