import { Typography, Box, Button } from '@mui/material';
import { green } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate(); 

  const handleTrailName = () => {
    navigate('/trail');
  };

  const handleDetails = () => {
    navigate('/details');
  };

  return (
    <div>
      <Typography variant="h4" align="center" color="black" gutterBottom>
        Search Hikes by:
      </Typography>
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
    </div>
  );
};

export default HomePage;
