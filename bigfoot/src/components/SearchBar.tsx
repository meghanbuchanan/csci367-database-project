import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import { green } from '@mui/material/colors';

// Defining the structure of the API response
interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query:string) => void;
    onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
    searchQuery,
    setSearchQuery,
    onSearch,
}) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2}}>
            <TextField
                variant="outlined"
                label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
                    },
                }}
            />
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