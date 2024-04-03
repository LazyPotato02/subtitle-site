import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './Home.css';
import axios from "axios";
import {logDOM} from "@testing-library/react";

function SearchView() {
    const { searchValue } = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)

        axios.get(`http://localhost:8000/subtitles/search/?search_query=${searchValue}`)
            .then(response => setData(response.data.subtitles))
            // .then(response => console.log(response.data))
            .catch(error => console.log(error))
        setLoading(false);
    }, []);



    //
    // useEffect(() => {
    //     const fetchData = async () => {
    //         setLoading(true);
    //
    //         try {
    //             const response = await axios.get(`http://localhost:8000/subtitles/search/?search_query=${searchValue}`);
    //             // console.log("Response data:", response.data);
    //
    //             // Access the 'subtitles' property of the response object
    //             const subtitles = response.data;
    //
    //             // Check if 'subtitles' is an array and not empty before setting data
    //             if (Array.isArray(subtitles) && subtitles.length > 0) {
    //                 setData(subtitles);
    //             } else {
    //                 console.log("No subtitles found.");
    //             }
    //         } catch (error) {
    //             // console.log("Error fetching data:", error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //
    //     fetchData();
    // }, []);
    return (
        <div className="mainPage">
            <div className={'movies'}>
                {loading && <div>Loading</div>}
                {!loading && (
                    // Object.entries()
                    data.map((item, index) => (
                        <article key={index} className={`movie`}>
                            <a href={`http://localhost:3000/${item.id}`}><img alt={'img'} src={`http://localhost:3000/${item.cover_image_location}`}/></a>

                            <p>{item.name}</p>
                            <p>{item.genre}</p>
                            <p>{item.year}</p>

                        </article>
                    ))
                )}

            </div>
        </div>
    );
}

export default SearchView;