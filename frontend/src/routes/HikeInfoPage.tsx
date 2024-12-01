import { ArrowBack, AccessTime, Hiking, LocationOn, Pets, TrendingUp } from '@mui/icons-material';
import { Box, Button, Divider, Grid, Paper, Typography } from '@mui/material';
import { green, grey } from '@mui/material/colors';
import { useLocation, useNavigate } from 'react-router-dom';
import ParkImage from '../components/ParkImage';

interface Hike {
  id: number;
  trail_name: string;
  national_park: string;
  trail_length_miles: number;
  trail_elevation_feet: number;
  hiking_time_hours: number;
  camp_sites: string;
  trail_accessibility: string;
  pets_allowed: boolean;
  link_of_info: string;
}

const HikeInfoPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const hike = location.state?.hike as Hike;

  if (!hike) {
    return (
      <Box sx={{ textAlign: 'center', marginTop: 4, color: green[500] }}>
        <Typography variant="h6">No hike selected. Please return home.</Typography>
      </Box>
    );
  }

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        backgroundColor: `linear-gradient(to bottom, ${green[900]}, ${grey[800]})`,
        minHeight: '100vh',
        padding: 2,
      }}
    >
      {/* Back Button */}
      <Button
        sx={{
          backgroundColor: green[500],
          '&:hover': { backgroundColor: green[700] },
          color: 'white',
          marginBottom: 2,
        }}
        startIcon={<ArrowBack />}
        onClick={handleBack}
      >
        Back
      </Button>

      {/* Main Content */}
      <Paper
        elevation={3}
        sx={{
          width: '75%',
          margin: '0 auto',
          padding: 4,
          borderRadius: 4,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        }}
      >
        {/* Trail Name */}
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{
            color: green[300],
            fontWeight: 'bold',
            fontSize: '2.5rem',  // Larger font size
            letterSpacing: 1,  // Slightly increased letter spacing
          }}
        >
          {hike.trail_name}
        </Typography>

        <Grid container spacing={4}>
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: 'center',
                marginBottom: 2,
              }}
            >
              <ParkImage nationalPark={hike.national_park} />
              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  marginTop: 1,
                  color: grey[300],
                }}
              >
                {hike.national_park}
              </Typography>
            </Box>
          </Grid>

          {/* Details Section */}
          <Grid item xs={12} md={6}>
            {/* Trail Info */}
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: green[200], fontWeight: 'bold', mb: 2 }}
            >
              Trail Info
            </Typography>
            <Typography
              variant="body1"
              sx={{ display: 'flex', alignItems: 'center', color: grey[200], mb: 1 }}
            >
              <LocationOn sx={{ marginRight: 1 }} /> {hike.national_park}
            </Typography>
            <Typography
              variant="body1"
              sx={{ display: 'flex', alignItems: 'center', color: grey[200], mb: 1 }}
            >
              <Hiking sx={{ marginRight: 1 }} /> {hike.trail_length_miles} miles
            </Typography>
            <Typography
              variant="body1"
              sx={{ display: 'flex', alignItems: 'center', color: grey[200], mb: 1 }}
            >
              <TrendingUp sx={{ marginRight: 1 }} /> {hike.trail_elevation_feet} feet elevation
            </Typography>
            <Typography
              variant="body1"
              sx={{ display: 'flex', alignItems: 'center', color: grey[200], mb: 1 }}
            >
              <AccessTime sx={{ marginRight: 1 }} /> {hike.hiking_time_hours} hours
            </Typography>

            <Divider sx={{ my: 2, backgroundColor: grey[500] }} />

            {/* Camping and Accessibility */}
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: green[200], fontWeight: 'bold', mb: 2 }}
            >
              Camping & Accessibility
            </Typography>
            {hike.camp_sites.length > 0 ? (
              <ul style={{ color: grey[200], paddingLeft: '1.5rem', marginTop: 0 }}>
                {JSON.parse(hike.camp_sites).map((camp: string, index: number) => (
                  <li key={index} style={{ marginBottom: '0.1rem' }}>
                    {camp}
                  </li>
                ))}
              </ul>
            ) : (
              <Typography
                variant="body1"
                sx={{ display: 'flex', alignItems: 'center', color: grey[200], mb: 1 }}
              >
                No camping available
              </Typography>
            )}
            <Typography
              variant="body1"
              sx={{ display: 'flex', alignItems: 'center', color: grey[200], mb: 1 }}
            >
              Accessibility: {hike.trail_accessibility}
            </Typography>

            <Divider sx={{ my: 2, backgroundColor: grey[500] }} />

            {/* Additional Details */}
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: green[200], fontWeight: 'bold', mb: 2 }}
            >
              Additional Details
            </Typography>
            <Typography
              variant="body1"
              sx={{ display: 'flex', alignItems: 'center', color: grey[200], mb: 1 }}
            >
              <Pets sx={{ marginRight: 1 }} />
              {hike.pets_allowed ? 'Dogs are welcome' : 'No dogs allowed'}
            </Typography>
            {hike.link_of_info && (
              <Typography variant="body1" gutterBottom>
                <a
                  href={hike.link_of_info}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: green[300],
                    textDecoration: 'underline',
                  }}
                >
                  Click here for more details
                </a>
              </Typography>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default HikeInfoPage;
