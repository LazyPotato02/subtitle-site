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

                    data.slice(0,9).map((item, index) => (
                        <article key={index} className={`movie`}>

                            <a href=""><img alt={'car'} src={MoviePic}/></a>

                            <p>Name: {item.name}</p>
                            <p>Type: {item.type}</p>
                            <p>Genre: {item.genre}</p>
                            <p>Year: {item.year}</p>
                            <p>ID: {item.id}</p>

                        </article>
                    ))

                )}
                <div className={'movie'}>
                    <img src={MoviePic} alt="img"/>
                    <p>ADDD</p>
                    <p>ADDD</p>
                    <p>ADDD</p>
                    <p>ADDD</p>
                </div>

            </div>

        </div>
    );
}

export default Home;