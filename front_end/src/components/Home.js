import React, {useState, useEffect} from 'react';

function Home() {

    const [results, setResults] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);

    useEffect(() => {
        fetchData('http://localhost:8000/subtitles/pagination/');
    }, []);

    const fetchData = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setResults(data.results);
                setNextPage(data.next);
                setPrevPage(data.previous);
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    const handleNextPage = () => {
        if (nextPage) {
            fetchData(nextPage);
        }
    };

    const handlePrevPage = () => {
        if (prevPage) {
            fetchData(prevPage);
        }
    };

    return (
        <div className="mainPage">
            <div className={'movies'}>
                {results.map((movie, index) => (
                    <article key={index} className="movie">
                        <a href={`http://localhost:3000/subtitle/${movie.id}`}>
                            <img alt="img" src={`http://localhost:3000/${movie.cover_image_location}`}/>
                        </a>
                        <p>{movie.name}</p>
                        <p>{movie.genre}</p>
                        <p>{movie.year}</p>
                    </article>
                ))}

            </div>
            <div className={'pageButtons'}>
                <button onClick={handlePrevPage} disabled={!prevPage}>Previous</button>
                <button onClick={handleNextPage} disabled={!nextPage}>Next</button>
            </div>
        </div>
    );
};

export default Home;