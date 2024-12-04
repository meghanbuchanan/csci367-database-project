import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { green } from "@mui/material/colors";
import { useNavigate } from 'react-router-dom';
import { Home } from '@mui/icons-material';

interface BaseLayoutProps {
  title: string;
  children: React.ReactNode;
}

/**
 * BaseLayout Component
 * 
 * A reusable layout component that provides a consistent structure for pages in the app. 
 * It includes a header with a title, a home button, and a main content area styled with a background image.
 * 
 * Props:
 * - `title`: The title displayed in the header.
 * - `children`: The content to render inside the main content area.
 */
const BaseLayout: React.FC<BaseLayoutProps> = ({ title, children }) => {
  const navigate = useNavigate();

  /**
   * Handles navigation to the home page when the "Home" button is clicked.
   */
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

      {/* Header Section */}
      <Box
        sx={{
          backgroundColor: green[900], 
          padding: '16px',
          flexShrink: 0,
          textAlign: 'center', 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Typography variant="h2" color="white" sx={{ fontFamily: 'Freckle Face, sans-serif', fontWeight: 'bold' }}>
          {title}
        </Typography>

        {/* Home Button */}
        <Button
          sx={{ 
            backgroundColor: green[500], 
            '&:hover': { backgroundColor: green[700] }, 
            color: 'white',
            mt: '8px',
            px: '16px',
          }}
          startIcon={<Home />}
          onClick={handleHome}
        >
          Home
        </Button>
      </Box>

      {/* Main Content Area */}
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
