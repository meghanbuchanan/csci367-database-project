import { useState } from 'react';
import {  Box, Button, FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, Typography, Slider } from '@mui/material';
import { green } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const SearchDetailsPage = () => {
  const navigate = useNavigate(); 
  const [selectedParks, setSelectedParks] = useState<string[]>([]);
  const [lengthRange, setLengthRange] = useState<number>(0);
  const [elevationRange, setElevationRange] = useState<number>(0);
  const [timeRange, setTimeRange] = useState<number>(0);
  const [selectedPets, setSelectedPets] = useState<string[]>([]);
  const [selectedCamping, setSelectedCamping] = useState<string[]>([]);

  const handleParkSelectionChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
    setSelectedParks(typeof value === 'string' ? value.split(',') : value);
  };

  const handleLengthChange = (_: Event, newValue: number | number[]) => {
    setLengthRange(newValue as number);
  };

  const handleElevationChange = (_: Event, newValue: number | number[]) => {
    setElevationRange(newValue as number);
  };

  const handleTimeChange = (_: Event, newValue: number | number[]) => {
    setTimeRange(newValue as number);
  };

  const handlePetSelectionChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
    setSelectedPets(typeof value === 'string' ? value.split(',') : value);
  };

  const handleCampingSelectionChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
    setSelectedCamping(typeof value === 'string' ? value.split(',') : value);
  };

  const handleSearch = () => {
    navigate('/selection');
  };

  return (
    <div>
        {/* Park */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <FormControl sx={{ width: '300px', marginRight: 1 }}>
            <InputLabel sx={{color: green[500], '&.Mui-focused': {color: green[700],},}}>Park</InputLabel>
                <Select
                    value={selectedParks}
                    onChange={handleParkSelectionChange}
                    label="Park"
                    multiple
                    renderValue={(selected) => (
                      <Box>
                        {selected.map((value) => (
                          <Box key={value} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Checkbox checked />
                            <ListItemText primary={ value === 'onp' ? 'Olympic Nstional Park' : value === 'mrnp' ? 'Mount Rainer National Park' : 'North Cascades National Park'} />
                          </Box>
                        ))}
                      </Box>
                    )}
                    sx={{ 
                        backgroundColor: 'white', 
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: green[500],
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: green[700],
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: green[700],
                        },
                    }}>  
                    <MenuItem value="onp">
                      <Checkbox checked={selectedParks.includes("onp")} />
                      <ListItemText primary="Olympic National Park" />
                    </MenuItem>
                    <MenuItem value="mrnp">
                      <Checkbox checked={selectedParks.includes("mrnp")} />
                      <ListItemText primary="Mount Rainer National Park" />
                    </MenuItem>
                    <MenuItem value="ncnp">
                      <Checkbox checked={selectedParks.includes("ncnp")} />
                      <ListItemText primary="North Cascades National Park" />
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
        {/* Length , Elevation, Time */}
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
                  max={35}
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
                Length: {lengthRange} mi
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
                Elevation: {elevationRange} ft
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
                  max={50}
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
                Time: {timeRange} hrs
              </Typography>
            </Box>
        </Box>
        
        {/* Pets, Camping */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <FormControl sx={{ width: '300px', marginRight: 1 }}>
            <InputLabel sx={{color: green[500], '&.Mui-focused': {color: green[700],},}}>Pets</InputLabel>
                <Select
                    value={selectedPets}
                    onChange={handlePetSelectionChange}
                    label="Pets"
                    multiple
                    renderValue={(selected) => (
                      <Box>
                        {selected.map((value) => (
                          <Box key={value} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Checkbox checked />
                            <ListItemText primary={ value === 'allowed' ? 'Allowed' : value === 'notAllowed' ? 'Not Allowed' : 'No Preference'} />
                          </Box>
                        ))}
                      </Box>
                    )}
                    sx={{ 
                        backgroundColor: 'white', 
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: green[500],
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: green[700],
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: green[700],
                        },
                    }}>  
                    <MenuItem value="allowed">
                      <Checkbox checked={selectedPets.includes("allowed")} />
                      <ListItemText primary="Allowed" />
                    </MenuItem>
                    <MenuItem value="notAllowed">
                      <Checkbox checked={selectedPets.includes("notAllowed")} />
                      <ListItemText primary="Not Allowed" />
                    </MenuItem>
                    <MenuItem value="noPreference">
                      <Checkbox checked={selectedPets.includes("noPreference")} />
                      <ListItemText primary="No Preference" />
                    </MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ width: '300px', marginRight: 1 }}>
              <InputLabel sx={{color: green[500], '&.Mui-focused': {color: green[700],},}}>Camping</InputLabel>
                <Select
                    value={selectedCamping}
                    onChange={handleCampingSelectionChange}
                    label="Camping"
                    multiple
                    renderValue={(selected) => (
                      <Box>
                        {selected.map((value) => (
                          <Box key={value} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Checkbox checked />
                            <ListItemText primary={ value === 'yes' ? 'Yes' : value === 'no' ? 'No' : 'No Preference'} />
                          </Box>
                        ))}
                      </Box>
                    )}
                    sx={{ 
                        backgroundColor: 'white', 
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: green[500],
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: green[700],
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: green[700],
                        },
                    }}>  
                    <MenuItem value="yes">
                      <Checkbox checked={selectedCamping.includes("yes")} />
                      <ListItemText primary="Yes" />
                    </MenuItem>
                    <MenuItem value="no">
                      <Checkbox checked={selectedCamping.includes("no")} />
                      <ListItemText primary="No" />
                    </MenuItem>
                    <MenuItem value="noPreference">
                      <Checkbox checked={selectedCamping.includes("noPreference")} />
                      <ListItemText primary="No Preference" />
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>

        {/* Search */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2, height: '50px', }}>
          <Button
                variant="contained"
                color="primary"
                onClick={handleSearch}
                sx={{
                    backgroundColor: green[500],
                    '&:hover': {
                        backgroundColor: green[700],
                    },
                    fontSize: '2rem',
                    width: '40%',
                }}
            >
              Search
          </Button>
        </Box>
    </div>
  );
};

export default SearchDetailsPage;
