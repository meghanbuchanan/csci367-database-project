import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import { green } from '@mui/material/colors';

/**
 * Props for SearchBar component
 */
interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query:string) => void;
    onSearch: () => void;
}

/**
 * SearchBar component provides a search input field with a button.
 * It allows users to type a search query and initiate a search either by pressing Enter
 * or by clicking the search button.
 *
 * @param searchQuery - The current value of the search input.
 * @param setSearchQuery - A function to update the search query state.
 * @param onSearch - A function that triggers the search when called.
 * @returns JSX element representing the search bar with a text input and button.
 */
const SearchBar: React.FC<SearchBarProps> = ({
    searchQuery,
    setSearchQuery,
    onSearch,
}) => {

    /**
     * Handles keydown events for the search input field.
     * Triggers the search when the Enter key is pressed.
     *
     * @param e - The keyboard event triggered when a key is pressed.
     */
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            onSearch(); 
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2}}>
            {/* Search input field */}
            <TextField
                variant="outlined"
                label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                sx={{
                    width: '300px',
                    marginRight: 1,
                    backgroundColor: 'white',
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: green[500],
                        },
                        '&:hover fieldset': {
                            borderColor: green[700],
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: green[700],
                        },
                        '& input': {
                            backgroundColor: 'white', 
                        },
                    },
                }}
            />
            {/* Search button */}
            <Button
                variant="contained"
                color="primary"
                onClick={onSearch}

                sx={{
                    backgroundColor: green[500],
                    '&:hover': {
                        backgroundColor: green[700],
                    },
                }}
            >
                Search
            </Button>
        </Box>
    );
};

export default SearchBar;