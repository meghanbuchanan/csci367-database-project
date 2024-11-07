import React from 'react';
import { Box, Typography } from '@mui/material';
import { green } from "@mui/material/colors";

interface BaseLayoutProps {
  title: string;
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ title, children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw'
      }}
    >
      <Box
        //Top bar
        sx={{
          backgroundColor: green[400], 
          padding: '16px',
          flexShrink: 0,
          textAlign: 'center', 
        }}
      >
        <Typography variant="h2" color="white">
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
            
            backgroundColor: 'black', 
            flexGrow: 1, 
            color: 'white', 
            padding: '16px',
            overflowY: 'auto', 
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default BaseLayout;
