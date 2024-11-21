import { ArrowBack } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { green } from '@mui/material/colors';
import { useLocation, useNavigate } from 'react-router-dom';

interface Hike {
  id: number;
  trail_name: string;
  national_park: string;
  trail_length_miles: number;
  trail_elevation_feet: number;
  hiking_time_hours: number;
  camp_sites: string;
  trail_accessibility: string;
  pets_allowed: boolean;
  link_of_info: string;
}

const HikeInfoPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const hike = location.state?.hike as Hike;

  console.log(hike.camp_sites, hike.camp_sites.length)

  if (!hike) {
    return <p color="green">No hike selected. Please return home.</p>;
  }

  const handleBack = () => {
    navigate(-1)
  }
  
  return (
    <div>
       <Button
          sx={{ backgroundColor: green[500], '&:hover': { backgroundColor: green[700] }, color: 'white' }}
          startIcon={<ArrowBack />}
          onClick={handleBack}
        >
          Back
        </Button>
        <Box 
        sx={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.6)', 
          display: 'flex', 
          width: '75%',  
          margin: '16px auto', 
          borderRadius: '8px', 
          justifyContent: 'center', 
          marginTop: 2, 
          padding: 2,
          color: 'white'}}>
            <h2>{hike.trail_name}</h2>
        </Box>
        <Box 
        sx={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.6)', 
          display: 'flex', 
          width: '75%',  
          margin: '16px auto', 
          borderRadius: '8px', 
          justifyContent: 'center', 
          marginTop: 2, 
          padding: 2,
          color: 'white'}}>
            <p color="white">
              <strong>Park: </strong> {hike.national_park} <br />
              <strong>Length: </strong> {hike.trail_length_miles} miles <br />
              <strong>Elevation: </strong>{hike.trail_elevation_feet} feet <br />
              <strong>Time: </strong>{hike.hiking_time_hours} hours <br />
              <strong>Camping: </strong>{hike.camp_sites.length > 0
                        ? hike.camp_sites 
                        : "There is no camping available"}<br />
              <strong>Access: </strong>{hike.trail_accessibility} <br />
              <strong>Pets: </strong>{hike.pets_allowed 
                        ? 'Pets are welcome at this park.'
                        : 'Pets are not allowed at this park.'} <br />
              {hike.link_of_info ? 
                        (<a href={hike.link_of_info} target="_blank" rel="noopener noreferrer" style={{ color: 'green', textDecoration: 'underline' }}>Click here for more details</a>) 
                        : ('No additional information available.')}
            </p>
        </Box>
    </div>
  );
};

export default HikeInfoPage;
