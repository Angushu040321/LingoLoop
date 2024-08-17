// the real 'landing page', this is where the CTA button is located

import { Box, Container, Typography, Button } from '@mui/material';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #ea580c, #d97706)', // Darker orange gradient
        color: 'white',
        position: 'relative',
        zIndex: 50,
        py: 16, // Adjust padding to match the desired size
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '80vh', // Adjust to your needs
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(https://www.transparenttextures.com/patterns/diagmonds.png)', // Example pattern
          opacity: 0.3, // Adjust the opacity of the pattern to make it more subtle
        },
      }}
    >
      <Container maxWidth="lg" sx={{ zIndex: 10, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 6 }}>
            The Language Learning Maestro
          </Typography>
          <Typography variant="h5" component="p" sx={{ color: '#FDE68A', mb: 6 }}> {/* text-yellow-200 */}
            Master new languages with AI-driven flashcards.
          </Typography>
          <Button variant="contained" color="secondary" size="large">
            Join Early Access
          </Button>
        </Box>
        <Box 
  sx={{ 
    width: '30%', 
    marginLeft: 'auto', 
    marginRight: '20px', 
    marginBottom: '-40px', 
    animation: 'float 3s ease-in-out infinite', // Add the animation here
  }}
>
  <Image 
    src="/file.png" // Correct path
    alt="LearningImage" 
    layout="responsive" 
    width={500} 
    height={300} 
    priority 
  />
</Box>
      </Container>
    </Box>
  );
}