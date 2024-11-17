import React from 'react';
import { Box, Typography } from '@mui/material';

interface HikeCardProps {
    id: number;
    trailName: string;
    trailLength: number;
    onClick: (id: number) => void;
}

const HikeCard: React.FC<HikeCardProps> = ({ id, trailName, trailLength, onClick }) => {
    return (
        <Box
            sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                color: 'white',
                padding: '16px',
                borderRadius: '8px',
                marginBottom: '16px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                cursor: 'pointer',
                '&hover': { 
                    transform: 'scale(1.02)',
                    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
                },
            }}
            onClick={() => onClick(id)}
        >
            <Typography variant="h6" gutterBottom>{trailName}</Typography>
            <Typography variant="body2">Length: {trailLength} miles</Typography>
        </Box>
    );
};

export default HikeCard;