"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';  
import { Container, Grid, Box, Typography, Paper, Button } from "@mui/material";
import { loadStripe } from '@stripe/stripe-js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { SignInButton,SignUpButton } from '@clerk/clerk-react'
import { SignedIn, UserButton } from '@clerk/nextjs';


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

export default function Pricing() {
  const [loading, setLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubscribe = async (priceId) => {
    setLoading(true);
    const stripe = await stripePromise;

    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceId }),
    });

    const { sessionId } = await res.json();
    await stripe.redirectToCheckout({ sessionId });
    setLoading(false);
  };

  const handleFreePlan = () => {
    if (isClient) {
      router.push('/signup');
    }
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#FF8C00', // Your orange color
      },
      secondary: {
        main: '#8B0000', // Secondary color (optional)
      },
      text: {
        primary: '#FFFFFF', // Primary text color
        secondary: '#000000', // Secondary text color
      },
      background: {
        paper: '#fffefe', // Background color for cards
      }
    }
  });

  if (!isClient) return null;

  return (
        <Box sx={{ backgroundColor: '#fff8f7 ', py: 8 }}> 
          <Container maxWidth="md">
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="h3" color='#F59E0B' gutterBottom> 
                <b>Pricing Plans</b>
              </Typography>
              <Typography variant="h6" color="#464545" gutterBottom>
                Choose the plan that fits your needs
              </Typography>
            </Box>
      
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ p: 4, textAlign: 'center', backgroundColor: ' #fffefe ' }}> {/* Light background for card */}
                  <Typography variant="h5" color="primary" gutterBottom>
                   <b> Free Plan 😊</b>
                  </Typography>
                  <Typography variant="h6" color="textSecondary" gutterBottom>
                    10 Flashcards
                  </Typography>
                  <Typography variant="body1" color="textPrimary" gutterBottom>
                    Perfect for beginners. Get started with creating flashcards.
                  </Typography>
                  <Typography variant="h4" color="primary" gutterBottom>
                    $0
                  </Typography>
                   <SignInButton> 
                    <Button variant="contained" color="secondary" fullWidth >
                      Get Started
                    </Button>
                  </SignInButton> 
                </Paper>
              </Grid>
      
              {/* <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ p: 4, textAlign: 'center', backgroundColor: ' #fffefe ' }}>
                  <Typography variant="h5" color="primary" gutterBottom>
                    <b>Pro Plan 🚀</b>
                  </Typography>
                  <Typography variant="h6" color="textSecondary" gutterBottom>
                    Unlimited Flashcards & Text-to-Speech
                  </Typography>
                  <Typography variant="body1" color="textPrimary" gutterBottom>
                    Ideal for advanced users. Unlock unlimited flashcards and use text-to-speech.
                  </Typography>
                  <Typography variant="h4" color="primary" gutterBottom>
                    $5/month
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary" 
                    fullWidth
                    onClick={() => handleSubscribe('your_stripe_price_id')}
                    disabled={loading}
                  >
                    {loading ? 'Loading...' : 'Upgrade to Pro'}
                  </Button>
                </Paper>
              </Grid> */}

            </Grid>

          </Container>
        </Box>
  );
}