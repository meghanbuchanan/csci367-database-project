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
      <Typography 
        variant="h4" 
        align="center" 
        color="black" 
        sx={{ fontFamily: 'Montserrat', fontWeight: 'bold', mb: 4 }}
      >
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
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
            },
            position: 'absolute',
            zIndex: 10,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '12px 24px',
            fontSize: '3rem',
            fontFamily: 'Montserrat',
            width: '500px',
            height: '125px',
            borderRadius: '12px',
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
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
            },
            position: 'absolute',
            zIndex: 10,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '12px 24px',
            fontSize: '3rem',
            fontFamily: 'Montserrat',
            width: '475px',
            height: '125px',
            borderRadius: '12px',
          }}
        >
          Trail Name
        </Button>
      </Box>

      {/* Images of Bigfoot */}
      <img
        src="searchTrail.png"
        alt="Bigfoot"
        style={{
          position: 'absolute', 
          bottom: '0px', 
          left: '40px',
          width: '450px',
          height: '400px',
          objectFit: 'cover',
        }}
      />
      <img
        src="searchDetails.png"
        alt="Bigfoot"
        style={{
          position: 'absolute', 
          bottom: '300px', 
          right: '0px',
          width: '475px',
          height: '375px',
          objectFit: 'cover',
          borderRadius: '8px',
        }}
      />
    </div>
  );
};

export default HomePage;
