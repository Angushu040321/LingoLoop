import React from 'react';
import { Container, Box, Typography, Button } from "@mui/material";

const ContactSection = () => {
  return (
    <Box sx={{ backgroundColor: '#FFFFFF', py: 8 }}> 
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: '#F59E0B' }} gutterBottom>
            Got More Questions?
          </Typography>
          <Typography variant="body1" sx={{ color: "#464545" }} gutterBottom>
            Get in touch with us, we're here to help.
          </Typography>
          <Button variant="contained" sx={{ backgroundColor: "#8B4513", color: "#FFFFFF" }} size="large">
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;