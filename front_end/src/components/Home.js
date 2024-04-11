import React ,{ useState, useEffect } from 'react';
import axios from 'axios'

import './Home.css';
import MoviePic from '../img/wl-op-16se.jpg'
function Home() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)

        axios.get('http://localhost:8000/subtitles/api/')
            .then(response => setData(response.data))
            .catch(error => console.log(error))
        setLoading(false);
    }, []);

    return (
        <div className="mainPage">
            <div className={'movies'}>
                {loading && <div>Loading</div>}
                {!loading && (

                    data.slice(0,14).map((item, index) => (
                        <article key={index} className={`movie`}>

                            <a href={`http://localhost:3000/subtitle/${item.id}`}><img alt={'img'} src={`http://localhost:3000/${item.cover_image_location}`}/></a>

                            <p>{item.name}</p>
                            {/*<p>Type: {item.type}</p>*/}
                            <p>{item.genre}</p>
                            <p>{item.year}</p>
                            {/*<p>ID: {item.id}</p>*/}

                        </article>
                    ))

                )}


            </div>

        </div>
    );
}

export default Home;