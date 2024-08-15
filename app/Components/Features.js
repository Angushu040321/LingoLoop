// This component is used in the landing page to display the features of the applications we're about to build

import { Box, Container, Grid, Typography } from '@mui/material';
import { School, Language, AccessTime } from '@mui/icons-material';

const features = [
  {
    icon: <School fontSize="large" />,
    title: 'AI-Powered Learning',
    description: 'Advanced AI-driven algorithms to help you master new languages efficiently.',
  },
  {
    icon: <Language fontSize="large" />,
    title: 'Customizable Flashcards',
    description: 'Tailor your learning experience with flashcards that suit your style.',
  },
  {
    icon: <AccessTime fontSize="large" />,
    title: 'Learn at Your Own Pace',
    description: 'Flexible learning schedules designed around your availability.',
  },
];

export default function Features() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Why LingoLoop?
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box textAlign="center">
                {feature.icon}
                <Typography variant="h6" component="h3" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body1">
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