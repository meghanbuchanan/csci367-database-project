import React, { useState } from 'react';

// Defining the structure of the API response, was getting errors without this
interface Hike {
    trail_name: string;
}

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState<Hike[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:5000/search?name=${encodeURIComponent(searchQuery)}`);
            const data: Hike[] = await response.json();
            setResults(data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search for a hike..."
                value={searchQuery}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {results.map((result, index) => (
                    <li key={index}>{result.trail_name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBar;