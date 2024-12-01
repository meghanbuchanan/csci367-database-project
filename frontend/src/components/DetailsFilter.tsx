import React from 'react';
import { Box, FormControl, Typography, Slider, RadioGroup, Radio, FormControlLabel, Button } from '@mui/material';
import { green } from '@mui/material/colors';

interface DetailsFilterProps {
    selectedPark: string;
    setSelectedPark: (value: string) => void;
    lengthRange: number[];
    setLengthRange: (value: number[]) => void;
    elevationRange: number[];
    setElevationRange: (value: number[]) => void;
    timeRange: number[];
    setTimeRange: (value: number[]) => void;
    pets: string;
    setPets: (value: string) => void;
    camping: string;
    setCamping: (value: string) => void;
    onSearch: () => void;
}

const DetailsFilter: React.FC<DetailsFilterProps> = ({
    selectedPark,
    setSelectedPark,
    lengthRange,
    setLengthRange,
    elevationRange,
    setElevationRange,
    timeRange,
    setTimeRange,
    pets,
    setPets,
    camping,
    setCamping,
    onSearch,
}) => {

    return (
        <div>
            {/* Submit Button */}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
                <Button
                    variant="contained"
                    sx={{
                    backgroundColor: green[500],
                    padding: '12px 24px',
                    fontSize: '1.2rem',
                    color: 'white',
                    '&:hover': { backgroundColor: green[700] },
                    }}
                    onClick={onSearch}
                >
                    Submit
                </Button>
            </Box>

            {/*Park*/}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                <FormControl sx={{ width: '300px', backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: '8px', padding: '16px' }}>
                    <Typography sx={{ color: '#FFFFFF', fontWeight: 'bold', marginBottom: '8px' }}>
                        National Park
                    </Typography>
                    <RadioGroup row value={selectedPark} onChange={(e) => setSelectedPark(e.target.value)}>
                        <FormControlLabel 
                            value="Olympic National Park"
                            control={<Radio sx={{ color: 'white' }} />} 
                            label="Olympic National Park" 
                        />
                        <FormControlLabel 
                            value="Mount Rainier National Park" 
                            control={<Radio sx={{ color: 'white' }} />} 
                            label="Mount Rainier National Park" 
                        />
                        <FormControlLabel 
                            value="North Cascades National Park" 
                            control={<Radio sx={{ color: 'white' }} />} 
                            label="North Cascades National Park" 
                        />
                        <FormControlLabel 
                            value="all" 
                            control={<Radio sx={{ color: 'white' }} />} 
                            label="Any Park" 
                        />
                    </RadioGroup>
                </FormControl>
            </Box>

            {/* Length, Elevation, Time */}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2, gap: 1.5 }}>
                {/* Length Slider */}
                <Box sx={{ width: '200px', backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '16px', borderRadius: '8px' }}>
                    <Slider
                        value={lengthRange}
                        onChange={(_, newValue) => setLengthRange(newValue as number[])}
                        min={0}
                        max={45}
                        step={5}
                        valueLabelDisplay="auto"
                        sx={{ color: green[500] }}
                    />
                    <Typography sx={{ color: 'white' }}>Length: {lengthRange[0]} - {lengthRange[1]} mi</Typography>
                </Box>
            
                {/* Elevation Slider */}
                <Box sx={{ width: '200px', backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '16px', borderRadius: '8px' }}>
                    <Slider
                        value={elevationRange}
                        onChange={(_, newValue) => setElevationRange(newValue as number[])}
                        min={0}
                        max={12000}
                        step={100}
                        valueLabelDisplay="auto"
                        sx={{ color: green[500] }}
                    />
                    <Typography sx={{ color: 'white' }}>Elevation: {elevationRange[0]} - {elevationRange[1]} ft</Typography>
                </Box>

                {/* Time Slider */}
                <Box sx={{ width: '200px', backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '16px', borderRadius: '8px' }}>
                    <Slider
                        value={timeRange}
                        onChange={(_, newValue) => setTimeRange(newValue as number[])}
                        min={0}
                        max={48}
                        step={1}
                        valueLabelDisplay="auto"
                        sx={{ color: green[500] }}
                    />
                    <Typography sx={{ color: 'white' }}>Hike Duration: {timeRange[0]} - {timeRange[1]} hrs</Typography>
                </Box>
            </Box>

            {/* Pets */}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                <FormControl sx={{ width: '300px', backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: '8px', padding: '16px' }}>
                    <Typography sx={{ color: '#FFFFFF', fontWeight: 'bold', marginBottom: '8px' }}>Dogs Allowed</Typography>
                    <RadioGroup row value={pets} onChange={(e) => setPets(e.target.value)}>
                        <FormControlLabel 
                            value="true" 
                            control={<Radio sx={{ color: 'white' }} />} 
                            label="Yes" 
                        />
                        <FormControlLabel 
                            value="false" 
                            control={<Radio sx={{ color: 'white' }} />} 
                            label="No" 
                        />
                        <FormControlLabel 
                            value="all" 
                            control={<Radio sx={{ color: 'white' }} />} 
                            label="No Preference" 
                        />
                    </RadioGroup>
                </FormControl>
            </Box>

            {/* Camping */}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                <FormControl sx={{ width: '300px', backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: '8px', padding: '16px' }}>
                    <Typography sx={{ color: '#FFFFFF', fontWeight: 'bold', marginBottom: '8px' }}>Camping Available</Typography>
                    <RadioGroup row value={camping} onChange={(e) => setCamping(e.target.value)}>
                        <FormControlLabel 
                            value="true" 
                            control={<Radio sx={{ color: 'white' }} />} 
                            label="Yes" 
                        />
                        <FormControlLabel 
                            value="false" 
                            control={<Radio sx={{ color: 'white' }} />} 
                            label="No" 
                        />
                        <FormControlLabel 
                            value="all" 
                            control={<Radio sx={{ color: 'white' }} />} 
                            label="No Preference" 
                        />
                    </RadioGroup>
                </FormControl>
            </Box>
        </div>
    );
};

export default DetailsFilter;