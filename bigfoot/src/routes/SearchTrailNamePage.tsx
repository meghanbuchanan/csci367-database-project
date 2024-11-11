import React, { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';
import { green } from '@mui/material/colors';

const SearchTrailNamePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    console.log("Search query:", searchQuery); 
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
                backgroundColor: green[500], // Set button background to green
                '&:hover': {
                    backgroundColor: green[700], // Darker green on hover
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
