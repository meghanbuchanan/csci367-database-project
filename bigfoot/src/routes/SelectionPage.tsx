import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import HikeCard from '../components/HikeCard';
import SearchBar from '../components/SearchBar';

interface Hike {
    id: number;
    trail_name: string;
    national_park: string;
    trail_length_miles: number;
    trail_elevation_feet: number;
    hiking_time_hours: number;
    camp_sites: string[];
    trail_accessibility: string;
    pets_allowed: boolean;
    link_of_info: boolean;
  }

const SelectionPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [results, setResults] = useState<Hike[]>([]);
    const [trailName, setTrailName] = useState('');
    
    useEffect(() => {
        if (location.state && location.state.results) {
            setResults(location.state.results);
        }
    }, [location.state]);

    const handleHikeClick = (hikeId: number) => {
        const selectedHike = results.find((hike) => hike.id === hikeId);
        if (selectedHike) {
            navigate(`/HikeInfo/${hikeId}`, { state: { hike: selectedHike } });
        }
    };

    const handleSearch = async () => {
        const response = await fetch(`http://localhost:5001/names/search?name=${trailName}`);
        const data = await response.json();
        navigate('/selection', { state: { results: data } });
    };

    return (
        <div>
            <SearchBar
                searchQuery={trailName}
                setSearchQuery={setTrailName}
                onSearch={handleSearch}
            />
            <Box sx={{ marginTop: 4, padding: 2 }}>
                <Typography variant="h6" sx={{ color: 'green', fontWeight: 'bold' }}>
                    {results.length > 0 ? `${results.length} hike(s) found` : 'No hikes found. Try searching for another trail.'}
                </Typography>

                {/* Show hikes or no result message */}
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
                ) : null}
            </Box>
        </div>
    );
};

export default SelectionPage;
