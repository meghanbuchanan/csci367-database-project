import { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { green } from '@mui/material/colors';
import { useNavigate, useLocation } from 'react-router-dom';
import HikeCard from '../components/HikeCard';
import SearchBar from '../components/SearchBar';
import FilterListIcon from "@mui/icons-material/FilterList";

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
    const [searchType, setSearchType] = useState('');

    // These are the constants if it was a search by name
    const [trailName, setTrailName] = useState('');


    useEffect(() => {
        if (location.state) {
            if (location.state.results) {
                setResults(location.state.results);
            }

            if (location.state.trailName) {
                setTrailName(location.state.trailName);
            }

            if (location.state.searchType) {
                setSearchType(location.state.searchType);
            }
        }
    }, [location.state]);

    const handleHikeClick = (hikeId: number) => {
        const selectedHike = results.find((hike) => hike.id === hikeId);
        if (selectedHike) {
            navigate(`/HikeInfo/${hikeId}`, { state: { hike: selectedHike } });
        }
    };

    const handleNameSearch = async () => {
        const response = await fetch(`http://localhost:5001/names/search?name=${trailName}`);
        const data = await response.json();
        navigate('/selection', { state: { results: data, trailName, searchType: 'name' } });
    };

    const handleModifyDetails = async () => {
        navigate(-1);
    };

    return (
        <div>
            {/* Conditionally render the components based on searchType */}
            {searchType === 'name' && (
                <SearchBar
                    searchQuery={trailName}
                    setSearchQuery={setTrailName}
                    onSearch={handleNameSearch}
                />
            )}
            {searchType === 'details' && (
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
                    <Button
                        variant="contained"
                        sx={{
                        backgroundColor: green[500],
                        color: 'white',
                        '&:hover': { backgroundColor: green[700] },
                        }}
                        startIcon={<FilterListIcon />}
                        onClick={handleModifyDetails}
                    >
                        Filters
                </Button>
            </Box>
            )}

            <Box sx={{ marginTop: 4, padding: 2, justifyContent: 'center', }}>
                <Typography variant="h6" sx={{ color: 'green', fontWeight: 'bold', justifyContent: 'center', display: 'flex' }}>
                    {results.length > 0 ? `${results.length} hike(s) found` : 'No hikes found. Try searching for another trail.'}
                </Typography>

                {/* Show hikes or fallback image */}
                {results.length > 0 ? (
                    results.map((hike) => (
                        <HikeCard
                            key={hike.id}
                            id={hike.id}
                            trailName={hike.trail_name}
                            parkName={hike.national_park}
                            trailElevation={hike.trail_elevation_feet}
                            trailLength={hike.trail_length_miles}
                            onClick={handleHikeClick}
                        />
                    ))
                ) : (
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 4,
                        }}
                    >
                        <img
                            src="log_bigfoot.png"
                            alt="No hikes found"
                            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                        />
                    </Box>
                )}
            </Box>
        </div>
    );
};

export default SelectionPage;