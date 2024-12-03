import React from 'react';
import { Box, FormControl, Typography, Slider, RadioGroup, Radio, FormControlLabel, Button } from '@mui/material';
import { green } from '@mui/material/colors';

/**
 * Props for the DetailsFilter component.
 */
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

/**
 * A filter component for narrowing down hike options by park, trail characteristics, and additional amenities.
 * 
 * This component includes sliders for length, elevation, and time; radio buttons for pets and camping preferences;
 * and a park selector. All filters are managed through controlled props.
 * 
 * @param {DetailsFilterProps} props - The props for the component.
 */
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
            {/* Park Selector */}
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

            {/* Sliders for Length, Elevation, Time */}
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
                    <Typography sx={{ color: 'white', fontWeight: 'bold' }}>Length: {lengthRange[0]} - {lengthRange[1]} mi</Typography>
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
                    <Typography sx={{ color: 'white', fontWeight: 'bold' }}>Elevation: {elevationRange[0]} - {elevationRange[1]} ft</Typography>
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
                    <Typography sx={{ color: 'white', fontWeight: 'bold' }}>Hike Duration: {timeRange[0]} - {timeRange[1]} hrs</Typography>
                </Box>
            </Box>

            {/* Pets and Camping Filters */}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 1, gap: 1.5 }}>
                {/* Pets */}
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 1 }}>
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
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 1 }}>
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
            </Box>

             {/* Submit Button */}
             <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                <Button
                    variant="contained"
                    sx={{
                    backgroundColor: green[500],
                    padding: '6px 20px',
                    fontSize: '2rem',
                    color: 'white',
                    width: '300px',
                    height: 'auto',
                    lineHeight: '1.2', 
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 'bold',
                    '&:hover': { backgroundColor: green[700] },
                    }}
                    onClick={onSearch}
                >
                    Submit
                </Button>
            </Box>
        </div>
    );
};

export default DetailsFilter;