import React from 'react';
import { Box, Typography } from '@mui/material';

interface HikeCardProps {
    id: number;
    trailName: string;
    parkName: string;
    trailElevation: number;
    trailLength: number;
    onClick: (id: number) => void;
}

const HikeCard: React.FC<HikeCardProps> = ({ id, trailName, parkName, trailElevation, trailLength, onClick }) => {
    return (
        <Box
            sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                color: 'white',
                padding: '12px 16px',
                borderRadius: '8px',
                marginBottom: '12px',
                boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': { 
                    transform: 'scale(1.03)',
                    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.25)',
                },
            }}
            onClick={() => onClick(id)}
        >
            <Typography variant="h6" gutterBottom sx={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{trailName}</Typography>
            <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>{parkName}</Typography>
            <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>Length: {trailLength} miles</Typography>
            <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>Elevation: {trailElevation} feet</Typography>
        </Box>
    );
};

export default HikeCard;
