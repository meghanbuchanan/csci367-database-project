import { Box, Button } from '@mui/material';
import { green } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const SelectionPage = () => {
     const navigate = useNavigate();

    const handleClick = () => {
        navigate('/HikeInfo');
      };

  return (
    <div>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <Button
                variant="contained"
                color="primary"
                onClick={handleClick}
                sx={{
                backgroundColor: green[500], // Set button background to green
                '&:hover': {
                    backgroundColor: green[700], // Darker green on hover
                },
                }}
            >
                Selection Page
            </Button>
        </Box>
    </div>
  );
};

export default SelectionPage;