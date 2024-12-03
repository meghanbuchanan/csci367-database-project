import { Typography, Box, Button } from '@mui/material';
import { green } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

/**
 * HomePage is the main landing page of the application where users can select 
 * how they would like to search for hikes. It provides options to search by 
 * trail name or by trail details.
 */
const HomePage = () => {
  const navigate = useNavigate(); 

  /**
   * Handles the navigation to the trail search page by trail name.
   */
  const handleTrailName = () => {
    navigate('/name');
  };

  /**
   * Handles the navigation to the trail search page by trail details.
   */
  const handleDetails = () => {
    navigate('/details');
  };

  return (
    <div>
      {/* Heading for the page */}
      <Typography variant="h4" align="center" color="black" gutterBottom>
        Search Hikes by:
      </Typography>

      {/* Button for searching by trail details */}
      <Box sx={{ position: 'relative', height: '200px', marginBottom: '20px' }}>
        <Button
          variant="contained"
          onClick={handleDetails}
          sx={{
            backgroundColor: green[500],
            '&:hover': {
              backgroundColor: green[700],
            },
            position: 'absolute',
            zIndex: 10,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '12px 24px',
            fontSize: '3rem',
            width: '500px',
            height: '150px',
          }}
        >
          Trail Details
        </Button>
      </Box>

      {/* Button for searching by trail name */}
      <Box sx={{ position: 'relative', height: '200px', marginBottom: '20px' }}>
        <Button
          variant="contained"
          onClick={handleTrailName}
          sx={{
            backgroundColor: green[500],
            '&:hover': {
              backgroundColor: green[700],
            },
            position: 'absolute',
            zIndex: 10,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '12px 24px',
            fontSize: '3rem',
            width: '500px',
            height: '150px',
          }}
        >
          Trail Name
        </Button>
      </Box>

      {/* Image of Bigfoot at the bottom right of the page */}
      <img
        src="searchTrail.png"
        alt="Bigfoot"
        style={{
          position: 'absolute', 
          bottom: '10px', 
          left: '10px',
          width: '425px',
          height: '400px',
          objectFit: 'cover',
          borderRadius: '8px',
        }}
      />
      <img
        src="searchDetails.png"
        alt="Bigfoot"
        style={{
          position: 'absolute', 
          bottom: '275px', 
          right: '1px',
          width: '450px',
          height: '400px',
          objectFit: 'cover',
          borderRadius: '8px',
        }}
      />
    </div>
  );
};

export default HomePage;
