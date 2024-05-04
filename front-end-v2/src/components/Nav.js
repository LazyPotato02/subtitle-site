import logo from '../img/logo.svg'
import './nav.css'
import React, { useState } from 'react';
import axios from 'axios';

function Nav(){

    //
    // function search(e) {
    //     const searchValues = document.querySelector('input').value
    //     window.location.href = `/search/${searchValues}`;
    // }

    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch search results from the API
    const fetchResults = async () => {
        if (searchQuery.length === 0) {
            setResults([]);
            return;
        }
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:8000/subtitles/search/?search_query=${searchQuery}`);
            setResults(Array.isArray(response.data.subtitles) ? response.data.subtitles : []);
        } catch (error) {
            console.error('Error fetching search results:', error);
            setResults([]);
        }
        setLoading(false);
    };

    // Handle search query change
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        fetchResults();
    };

    // Function to handle search result selection
    const handleResultSelect = (searchValue) => {
        window.location.href = `/subtitle/${searchValue}`;
    };

    return (
        <div className={'Nav'}>
            <div className={'leftPartNav'}>
                <a href="/"><img className={'logo'} src={logo} alt=""/></a>
                <div className={'anchors'}>
                    <a href="/">Home</a>
                    <a href="https://discord.gg/pnzc5FRRxA">Community</a>
                </div>
            </div>
            <div className={'search'}>
                <input
                    className={'searchInp'}
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search..."
                />
                <button onClick={fetchResults} className={'searchBtn'}>Search</button>
                {loading && <div></div>}
                {results.length > 0 && (
                    <ul className={'searchResults'}>
                        {results.map((item, index) => (
                            <li key={index} onClick={() => handleResultSelect(item.id)}>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )

}

export default Nav