import React from 'react';
import { Box, Typography } from '@mui/material';

/**
 * Props for the HikeCard component.
 */
interface HikeCardProps {
    id: number;
    trailName: string;
    parkName: string;
    trailElevation: number;
    trailLength: number;
    onClick: (id: number) => void;
}

/**
 * A functional React component that displays basic details about a hike.
 * Provides an interactive card UI that highlights on hover and triggers a callback when clicked.
 * 
 * @param id - Unique identifier for the hike.
 * @param trailName - Name of the trail.
 * @param parkName - Name of the national park.
 * @param trailElevation - Elevation of the trail in feet.
 * @param trailLength - Length of the trail in miles.
 * @param onClick - Callback function to handle click events.
 */
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
            {/* Trail Name */}
            <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ fontSize: '1.1rem', fontWeight: 'bold' }}
            >
                {trailName}
            </Typography>

            {/* Park Name */}
            <Typography 
                variant="body2" 
                sx={{ fontSize: '0.9rem' }}
            >
                {parkName}
            </Typography>

            {/* Trail Length */}
            <Typography 
                variant="body2" 
                sx={{ fontSize: '0.9rem' }}
            >
                Length: {trailLength} miles
            </Typography>

            {/* Trail Elevation */}
            <Typography 
                variant="body2" 
                sx={{ fontSize: '0.9rem' }}
            >
                Elevation: {trailElevation} feet
            </Typography>
        </Box>
    );
};

export default HikeCard;
