import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

const SearchTrailNamePage = () => {
    const [trailName, setTrailName] = useState('');
    const navigate = useNavigate();

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
