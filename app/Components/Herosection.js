// the real 'landing page', this is where the CTA button is located

import { Box, Container, Typography, Button } from '@mui/material';

export default function HeroSection() {
  return (
    <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom>
          LingoLoop: The Language Learning Maestro
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Master new languages with AI-driven flashcards.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Join Early Access
        </Button>
      </Container>
    </Box>
  );
}