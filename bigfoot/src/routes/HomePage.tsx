import React, { useState } from 'react';
import { Typography, TextField, Box, Button } from '@mui/material';

const HomePage = () => {
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
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to the BIGFOOT App!
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        This is your home page content.
      </Typography>

      {/* Search Bar */}
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
            }}
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </Box>
    </div>
  );
};

export default HomePage;
