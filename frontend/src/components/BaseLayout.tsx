import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { green } from "@mui/material/colors";
import { useNavigate } from 'react-router-dom';
import { Home } from '@mui/icons-material';

interface BaseLayoutProps {
  title: string;
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ title, children }) => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',   
      }}
    >
      <Box
        //Top bar
        sx={{
          backgroundColor: green[900], 
          padding: '16px',
          flexShrink: 0,
          textAlign: 'center', 
        }}
      >
        <Typography variant="h2" color="white">
          {title}
        </Typography>
        <Button
          sx={{ backgroundColor: green[500], '&:hover': { backgroundColor: green[700] }, color: 'white' }}
          startIcon={<Home />}
          onClick={handleHome}
        >
          Home
        </Button>
      </Box>
      <Box
        sx={{
          backgroundImage: 'url(/url2.jpeg)',
          backgroundSize: 'cover',                 
          backgroundPosition: 'center',
          flexGrow: 1, 
          color: 'white', 
          padding: '16px',
          overflowY: 'auto',
          position: 'relative'
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default BaseLayout;
