// This component is used in the landing page to display the features of the applications we're about to build
import { Box, Container, Grid, Typography } from '@mui/material';
import { Language, School, AccessTime } from '@mui/icons-material';

const features = [
  {
    icon: <Language fontSize="large" sx={{ color: '#F97316' }} />, // Orange icon
    title: 'AI-Powered Learning',
    description: 'Advanced AI algorithms to help you master new languages efficiently.',
  },
  {
    icon: <School fontSize="large" sx={{ color: '#F97316' }} />, // Orange icon
    title: 'Customizable Flashcards',
    description: 'Tailor your learning experience with flashcards that match your style.',
  },
  {
    icon: <AccessTime fontSize="large" sx={{ color: '#F97316' }} />, // Orange icon
    title: 'Learn at Your Own Pace',
    description: 'Flexible learning schedules designed around your availability.',
  },
];

export default function FeaturesSection() {
  return (
    <Box sx={{ py: 10, backgroundColor: '#fff0ec', color: 'white' }}> {/* Dark background */}
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ color: '#F59E0B' }}>
          <b>Why LingoLoop?</b>
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  backgroundColor: ' #fffaf9 ',
                  padding: 6,
                  borderRadius: 3,
                  textAlign: 'center',
                  boxShadow: 2,
                }}
              >
                {feature.icon}
                <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 2, color: '#F59E0B' }}>
                  <b>{feature.title}</b>
                </Typography>
                <Typography variant="body1" sx={{ color: '#464545' }}>
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}