import React ,{ useState, useEffect } from 'react';
import './Home.css';
import MoviePic from '../img/wl-op-16se.jpg'
import axios from 'axios'
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

                    data.map((item, index) => (
                        <article key={index} className={`movie`}>

                            <img alt={'car'} src={MoviePic}/>
                            <p>Name: {item.name}</p>
                            <p>Type: {item.type}</p>
                            <p>Genre: {item.genre}</p>
                            {/*<p>Year: {item.year}</p>*/}

                        </article>
                    ))

                )}
                {/*<div className={'movie'}>*/}
                {/*<img src={MoviePic} alt="img"/>*/}
                {/*    <p>Name: Test</p>*/}
                {/*    <p>Genre: Test</p>*/}
                {/*    <p>Year: Test</p>*/}
                {/*    <p>Rating: Test</p>*/}
                {/*</div>*/}
                {/*<div className={'movie'}>*/}
                {/*    <img src={MoviePic} alt="img"/>*/}
                {/*    <p>Name: Test</p>*/}
                {/*    <p>Genre: Test</p>*/}
                {/*    <p>Year: Test</p>*/}
                {/*    <p>Rating: Test</p>*/}
                {/*</div>*/}
                {/*<div className={'movie'}>*/}
                {/*    <img src={MoviePic} alt="img"/>*/}
                {/*    <p>Name: Test</p>*/}
                {/*    <p>Genre: Test</p>*/}
                {/*    <p>Year: Test</p>*/}
                {/*    <p>Rating: Test</p>*/}
                {/*</div>*/}
                {/*<div className={'movie'}>*/}
                {/*    <img src={MoviePic} alt="img"/>*/}
                {/*    <p>Name: Test</p>*/}
                {/*    <p>Genre: Test</p>*/}
                {/*    <p>Year: Test</p>*/}
                {/*    <p>Rating: Test</p>*/}
                {/*</div>*/}
                {/*<div className={'movie'}>*/}
                {/*    <img src={MoviePic} alt="img"/>*/}
                {/*    <p>Name: Test</p>*/}
                {/*    <p>Genre: Test</p>*/}
                {/*    <p>Year: Test</p>*/}
                {/*    <p>Rating: Test</p>*/}
                {/*</div>*/}
                {/*<div className={'movie'}>*/}
                {/*    <img src={MoviePic} alt="img"/>*/}
                {/*    <p>Name: Test</p>*/}
                {/*    <p>Genre: Test</p>*/}
                {/*    <p>Year: Test</p>*/}
                {/*    <p>Rating: Test</p>*/}
                {/*</div>*/}
                {/*<div className={'movie add'}>*/}
                {/*    <img src={MoviePic} alt="img"/>*/}
                {/*    <p>ADDD</p>*/}
                {/*</div>*/}
                {/*<div className={'movie'}>*/}
                {/*    <img src={MoviePic} alt="img"/>*/}
                {/*    <p>Name: Test</p>*/}
                {/*    <p>Genre: Test</p>*/}
                {/*    <p>Year: Test</p>*/}
                {/*    <p>Rating: Test</p>*/}
                {/*</div>*/}

                {/*<div className={'movie'}>*/}
                {/*    <img src={MoviePic} alt="img"/>*/}
                {/*    <p>Name: Test</p>*/}
                {/*    <p>Genre: Test</p>*/}
                {/*    <p>Year: Test</p>*/}
                {/*    <p>Rating: Test</p>*/}
                {/*</div>*/}
                {/*<div className={'movie'}>*/}
                {/*    <img src={MoviePic} alt="img"/>*/}
                {/*    <p>Name: Test</p>*/}
                {/*    <p>Genre: Test</p>*/}
                {/*    <p>Year: Test</p>*/}
                {/*    <p>Rating: Test</p>*/}
                {/*</div>*/}
                {/*<div className={'movie'}>*/}
                {/*    <img src={MoviePic} alt="img"/>*/}
                {/*    <p>Name: Test</p>*/}
                {/*    <p>Genre: Test</p>*/}
                {/*    <p>Year: Test</p>*/}
                {/*    <p>Rating: Test</p>*/}
                {/*</div>*/}


            </div>

        </div>
    );
}

export default Home;