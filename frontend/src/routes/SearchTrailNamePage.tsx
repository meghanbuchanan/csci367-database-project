import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

/**
 * The SearchTrailNamePage component allows users to search for trails by name. 
 * It manages the state of the search query (trail name) and performs a fetch request 
 * to the backend to retrieve trail data based on the entered name.
 * Once the data is retrieved, it navigates to the results page with the search results.
 */
const SearchTrailNamePage = () => {
    const [trailName, setTrailName] = useState('');
    const navigate = useNavigate();

    /**
     * Handles the search functionality by sending a request to the backend with the 
     * entered trail name and navigating to the results page with the search data.
     */
    const handleSearch = async () => {
        const response = await fetch(`http://localhost:5001/names/search?name=${trailName}`);
        const data = await response.json();
        navigate('/selection', { state: { results: data, trailName, searchType: 'name' } });
    };

    return (
        <div>
            <SearchBar
                searchQuery={trailName}
                setSearchQuery={setTrailName}
                onSearch={handleSearch}
            />
        </div>

    );
};

export default SearchTrailNamePage;
