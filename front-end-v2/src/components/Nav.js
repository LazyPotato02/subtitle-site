// import logo from '../img/logo.svg';
// import './nav.css';
// import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios';
//
// function Nav() {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [results, setResults] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [showResults, setShowResults] = useState(false);
//     const searchRef = useRef(null);
//
//     // Fetch search results from the API
//     const fetchResults = async () => {
//         if (searchQuery.trim() === '') {
//             setResults([]);
//             setShowResults(false);
//             return;
//         }
//         setLoading(true);
//         try {
//             const response = await axios.get(`http://localhost:8080/subtitles/search/?search_query=${searchQuery}`);
//             setResults(Array.isArray(response.data.subtitles) ? response.data.subtitles : []);
//             setShowResults(true);
//         } catch (error) {
//             console.error('Error fetching search results:', error);
//             setResults([]);
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     // Handle search input change
//     const handleSearchChange = (e) => {
//         setSearchQuery(e.target.value);
//     };
//
//     // Handle key press in search input
//     const handleKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             fetchResults();
//         }
//     };
//
//     // Hide search results if clicked outside of search area
//     const handleClickOutside = (event) => {
//         if (searchRef.current && !searchRef.current.contains(event.target)) {
//             setShowResults(false);
//         }
//     };
//
//     // Add event listeners for clicks outside the search area
//     useEffect(() => {
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);
//
//     return (
//         <div className={'Nav'} ref={searchRef}>
//             <div className={'leftPartNav'}>
//                 <a href="/"><img className={'logo'} src={logo} alt=""/></a>
//                 <div className={'anchors'}>
//                     <a href="/">Home</a>
//                     <a href="https://discord.gg/pnzc5FRRxA">Community</a>
//                 </div>
//             </div>
//             <div className={'search'}>
//                 <input
//                     className={'searchInp'}
//                     type="text"
//                     value={searchQuery}
//                     onChange={handleSearchChange}
//                     onKeyDown={handleKeyPress} // Added key handler here
//                     placeholder="Search..."
//                     onFocus={() => setShowResults(true)}
//                 />
//                 <button onClick={fetchResults} className={'searchBtn'}>Search</button>
//                 {loading && <div>Loading...</div>}
//                 {showResults && results.length > 0 && (
//                     <ul className={'searchResults'}>
//                         {results.map((item, index) => (
//                             <li key={index} onClick={() => {
//                                 window.location.href = `/subtitle/${item.id}`;
//                                 setShowResults(false);
//                             }}>
//                                 {item.name}
//                             </li>
//                         ))}
//                     </ul>
//                 )}
//             </div>
//         </div>
//     )
// }
//
// export default Nav;


import logo from '../img/logo.svg';
import './nav.css';
import React, { useState } from 'react';
import axios from 'axios';

function Nav() {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);

    // Fetch search results from the API
    const fetchResults = async () => {
        if (searchQuery.length === 0) {
            setResults([]);
            return;
        }
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:8080/subtitles/search/?search_query=${searchQuery}`);
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

    // Handle input focus
    const handleInputFocus = () => {
        setShowResults(true);
    };

    // Handle input blur
    const handleInputBlur = () => {
        // Delay hiding to allow click event on result item
        setTimeout(() => setShowResults(false), 200);
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
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    placeholder="Search..."
                />
                {/*<button onClick={fetchResults} className={'searchBtn'}>Search</button>*/}
                {loading && <div>Loading...</div>}
                {showResults && results.length > 0 && (
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
    );
}

export default Nav;