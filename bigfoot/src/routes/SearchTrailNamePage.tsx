import React, { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';
import { green } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const SearchTrailNamePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      navigate(`/results?name=${encodeURIComponent(searchQuery)}`);
    } else {
      console.log('Please enter a valid search query');
    }
  };

  return (
    <div>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <TextField
                label="Search"
                variant="outlined"
                value={searchQuery}
                onChange={handleSearchChange}
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
                onClick={handleSearch}
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
    </div>
  );
};

export default SearchTrailNamePage;
