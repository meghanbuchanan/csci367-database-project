import React, { useState } from 'react';
import { Box, Button, FormControl, Typography, Slider, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import { green } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const SearchDetailsPage = () => {
  const navigate = useNavigate();
  const [selectedPark, setSelectedPark] = useState<string>('all');
  const [lengthRange, setLengthRange] = useState([0, 45]);
  const [elevationRange, setElevationRange] = useState([0, 12000]);
  const [timeRange, setTimeRange] = useState([0, 48]);
  const [pets, setPets] = useState<string>('all'); 
  const [camping, setCamping] = useState<string>('all'); 

  const handleParkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPark(event.target.value);
  };

  const handleLengthChange = (_: Event, newValue: number | number[]) => {
    setLengthRange(newValue as number[]);
  };

  const handleElevationChange = (_: Event, newValue: number | number[]) => {
    setElevationRange(newValue as number[]);
  };

  const handleTimeChange = (_: Event, newValue: number | number[]) => {
    setTimeRange(newValue as number[]);
  };

  const handlePetsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPets(event.target.value);
    console.log("Pets Clicked: ", pets);
  };

  const handleCampingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCamping(event.target.value);
  };

  const handleSearch = async () => {
    const queryParams = new URLSearchParams();

    if (selectedPark !== 'all') {
      queryParams.append("park", selectedPark);
    }

    if (lengthRange) {
      queryParams.append("lengthMin", lengthRange[0].toString());
      queryParams.append("lengthMax", lengthRange[1].toString());
    }
    
    if (elevationRange) {
      queryParams.append("elevationMin", elevationRange[0].toString());
      queryParams.append("elevationMax", elevationRange[1].toString());
    }

    if (timeRange) {
      queryParams.append("timeMin", timeRange[0].toString());
      queryParams.append("timeMax", timeRange[1].toString());
    }

    if (pets !== 'all') {
      queryParams.append("pets", pets); // Only append if not "all"
    }

    if (camping !== 'all') {
      queryParams.append("camping", camping); // Only append if not "all"
    }

    console.log(queryParams.toString());
    const response = await fetch(`http://localhost:5001/details/search?${queryParams.toString()}`);
    const data = await response.json();
    navigate('/selection', { state: { results: data } });
  
  };

  return (
    <div>
        {/* Park */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <FormControl 
            sx={{ 
              width: '300px', 
              backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black for higher contrast
              borderRadius: '8px', 
              padding: '16px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)', // Subtle shadow for depth
            }}
          >
            <Typography sx={{ color: '#FFFFFF', fontWeight: 'bold', marginBottom: '8px' }}>
              National Park
            </Typography>
            <RadioGroup row value={selectedPark} onChange={handleParkChange}>
              <FormControlLabel 
                value="Olympic National Park" 
                control={<Radio sx={{ color: '#4CAF50', '&.Mui-checked': { color: '#FFFFFF' } }} />} 
                label={<Typography sx={{ color: '#FFFFFF' }}>Olympic National Park</Typography>} 
              />
              <FormControlLabel 
                value="Mount Rainier National Park" 
                control={<Radio sx={{ color: '#4CAF50', '&.Mui-checked': { color: '#FFFFFF' } }} />} 
                label={<Typography sx={{ color: '#FFFFFF' }}>Mount Rainier National Park</Typography>} 
              />
              <FormControlLabel 
                value="North Cascades National Park" 
                control={<Radio sx={{ color: '#4CAF50', '&.Mui-checked': { color: '#FFFFFF' } }} />} 
                label={<Typography sx={{ color: '#FFFFFF' }}>North Cascades National Park</Typography>} 
              />
              <FormControlLabel 
                value="all" 
                control={<Radio sx={{ color: '#4CAF50', '&.Mui-checked': { color: '#FFFFFF' } }} />} 
                label={<Typography sx={{ color: '#FFFFFF' }}>Any Park</Typography>} 
              />
            </RadioGroup>
          </FormControl>
        </Box>

        {/* Length, Elevation, Time */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2, gap: 1.5 }}>
              <Box
                sx={{
                  width: '200px', 
                  backgroundColor: 'white',
                  padding: '16px', 
                  borderRadius: '8px',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', 
                }}
              >
                <Slider
                  value={lengthRange}
                  onChange={handleLengthChange}
                  min={0}
                  max={45}
                  step={5}
                  valueLabelDisplay="auto" 
                  sx={{
                    color: green[500],
                    '& .MuiSlider-thumb': {
                      color: green[700],
                    },
                    '& .MuiSlider-track': {
                      backgroundColor: green[500],
                    },
                    '& .MuiSlider-rail': {
                      backgroundColor: green[300],
                    },}}/>
              <Typography variant="body2" align="center" sx={{ color: green[500], fontSize: '20px' }}>
                Length: {lengthRange[0]} - {lengthRange[1]} mi
              </Typography>
            </Box>
            <Box
                sx={{
                  width: '200px', 
                  backgroundColor: 'white',
                  padding: '16px', 
                  borderRadius: '8px',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Slider
                  value={elevationRange}
                  onChange={handleElevationChange}
                  min={0}
                  max={12000}
                  step={100}
                  valueLabelDisplay="auto" 
                  sx={{
                    color: green[500],
                    '& .MuiSlider-thumb': {
                      color: green[700],
                    },
                    '& .MuiSlider-track': {
                      backgroundColor: green[500],
                    },
                    '& .MuiSlider-rail': {
                      backgroundColor: green[300],
                    },}}/>
              <Typography variant="body2" align="center" sx={{ color: green[500], fontSize: '20px' }}>
                Elevation: {elevationRange[0]} - {elevationRange[1]} ft
              </Typography>
            </Box>
            <Box
                sx={{
                  width: '200px', 
                  backgroundColor: 'white',
                  padding: '16px', 
                  borderRadius: '8px',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', 
                }}
              >
                <Slider
                  value={timeRange}
                  onChange={handleTimeChange}
                  min={0}
                  max={48}
                  step={1}
                  valueLabelDisplay="auto" 
                  sx={{
                    color: green[500],
                    '& .MuiSlider-thumb': {
                      color: green[700],
                    },
                    '& .MuiSlider-track': {
                      backgroundColor: green[500],
                    },
                    '& .MuiSlider-rail': {
                      backgroundColor: green[300],
                    },}}/>
              <Typography variant="body2" align="center" sx={{ color: green[500], fontSize: '20px' }}>
                Time: {timeRange[0]} - {timeRange[1]} hrs
              </Typography>
            </Box>
          </Box>

        {/* Pets */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <FormControl 
            sx={{ 
              width: '300px', 
              backgroundColor: 'rgba(0, 0, 0, 0.6)', 
              borderRadius: '8px', 
              padding: '16px', 
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)', 
              marginBottom: 2
            }}>
            <Typography sx={{ color: '#FFFFFF', fontWeight: 'bold', marginBottom: '8px' }}>
              Dogs Allowed
            </Typography>
            <RadioGroup row value={pets} onChange={handlePetsChange}>
              <FormControlLabel 
                value="true" 
                control={<Radio sx={{ color: '#4CAF50', '&.Mui-checked': { color: '#FFFFFF' } }} />} 
                label={<Typography sx={{ color: '#FFFFFF' }}>Yes</Typography>} 
              />
              <FormControlLabel 
                value="false" 
                control={<Radio sx={{ color: '#4CAF50', '&.Mui-checked': { color: '#FFFFFF' } }} />} 
                label={<Typography sx={{ color: '#FFFFFF' }}>No</Typography>} 
              />
              <FormControlLabel 
                value="all" 
                control={<Radio sx={{ color: '#4CAF50', '&.Mui-checked': { color: '#FFFFFF' } }} />} 
                label={<Typography sx={{ color: '#FFFFFF' }}>No Preference</Typography>} 
              />
            </RadioGroup>
          </FormControl>
        </Box>

        {/* Camping */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <FormControl 
            sx={{ 
              width: '300px', 
              backgroundColor: 'rgba(0, 0, 0, 0.6)', 
              borderRadius: '8px', 
              padding: '16px', 
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)', 
              marginBottom: 2
            }}
          >
            <Typography sx={{ color: '#FFFFFF', fontWeight: 'bold', marginBottom: '8px' }}>
              Camping Available
            </Typography>
            <RadioGroup row value={camping} onChange={handleCampingChange}>
              <FormControlLabel 
                value="true" 
                control={<Radio sx={{ color: '#4CAF50', '&.Mui-checked': { color: '#FFFFFF' } }} />} 
                label={<Typography sx={{ color: '#FFFFFF' }}>Yes</Typography>} 
              />
              <FormControlLabel 
                value="false" 
                control={<Radio sx={{ color: '#4CAF50', '&.Mui-checked': { color: '#FFFFFF' } }} />} 
                label={<Typography sx={{ color: '#FFFFFF' }}>No</Typography>} 
              />
              <FormControlLabel 
                value="all" 
                control={<Radio sx={{ color: '#4CAF50', '&.Mui-checked': { color: '#FFFFFF' } }} />} 
                label={<Typography sx={{ color: '#FFFFFF' }}>No Preference</Typography>} 
              />
            </RadioGroup>
          </FormControl>
        </Box>

        {/* Submit Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: green[500],
              color: 'white',
              '&:hover': { backgroundColor: green[700] },
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
    </div>
  );
};

export default SearchDetailsPage;
