import { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import HikeCard from '../components/HikeCard';

interface Hike {
    id: number;
    trail_name: string;
    trail_length_miles: number;
}

const SelectionPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [results, setResults] = useState<Hike[]>([]);

    useEffect(() => {
        if (location.state && location.state.results) {
            setResults(location.state.results);
        }
    }, [location.state]);

    const handleHikeClick = (hikeId: number) => {
        navigate(`/HikeInfo/${hikeId}`);
    };

    const handleGoToSearchName = () => {
        navigate('/name');
    };

    const handleGoToSearchDetail = () => {
        navigate('/details')
    }

    return (
        <div>
            <Box sx={{display: 'flex', justifyContent: 'space-between', marginTop: 2, padding: 2 }}>
                <Button variant="contained" color="primary" onClick={handleGoToSearchName}>
                    Back to Name Search
                </Button>
                <Button variant="contained" color="secondary" onClick={handleGoToSearchDetail}>
                    Back to Detail Search
                </Button>
            </Box>

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
