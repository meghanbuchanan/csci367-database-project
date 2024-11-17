import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

const SearchTrailNamePage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    // Handle search button click
    const handleSearch = () => {
        if (searchQuery.trim() !== '') {
            navigate(`/search?name=${encodeURIComponent(searchQuery)}`);
        } else {
              console.log('Please enter a valid search query');
        }
    };

    return (
        <div>
            <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onSearch={handleSearch}
            />
        </div>

    );
};

export default SearchTrailNamePage;
