import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Defining the structure of the API response, was getting errors without this
interface Hike {
    trail_name: string;
}

const ResultsPage = () => {
    const [results, setResults] = useState<Hike[]>([]);
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const trailName = queryParams.get('name') || '';

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await fetch(`http://localhost:5000/search?name=${encodeURIComponent(trailName)}`);
                const data: Hike[] = await response.json();
                setResults(data);
            } catch (error) {
                console.error('Error fetching serach results:', error);
            }
        };

        if (trailName) {
            fetchResults();
        }
    }, [trailName]);

    return (
        <div>
            <h1>Search Results</h1>
            {results.length > 0 ? (
                <ul>
                    {results.map((result, index) => (
                        <li key={index}>{result.trail_name}</li>
                    ))}
                </ul>
            ) : (
                <p>No results found for "{trailName}".</p>
            )}
        </div>
    );
};

export default ResultsPage;