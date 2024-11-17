import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import HikeCard from '../components/HikeCard';

interface Hike {
    id: number;
    trail_name: string;
    trail_length_miles: number;
}

const SelectionPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState<Hike[]>([]);

    // Get the 'name' query parameter from the URL
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const queryName = queryParams.get('name');
        if (queryName) {
            setSearchQuery(queryName); 
            fetchSearchResults(queryName); 
        }
    }, [location.search]);


    const fetchSearchResults = async (query: string) => {
        try {
            const response = await fetch(`http://localhost:5001/search?name=${encodeURIComponent(query)}`);
            const data: Hike[] = await response.json();
            setResults(data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    const handleHikeClick = (hikeId: number) => {
        navigate(`/HikeInfo/${hikeId}`);
    };

    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                <SearchBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    onSearch={() => fetchSearchResults(searchQuery)}
                />
            </Box>

            <Box sx={{ marginTop: 4, padding: 2 }}>
                {results.length > 0 ? (
                    results.map((hike) => (
                        <HikeCard
                            key={hike.id}
                            id={hike.id}
                            trailName={hike.trail_name}
                            trailLength={hike.trail_length_miles}
                            onClick={handleHikeClick}
                        />
                    ))
                ) : (
                    <Typography>No hikes found. Try searching for another trail.</Typography>
                )}
            </Box>
        </div>
    );
};

export default SelectionPage;
