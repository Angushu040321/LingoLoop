'use client';
import ResponsiveAppBar from '../app/Components/ResponsiveAppBar';
import HeroSection from '../app/Components/Herosection';
import Features from  '../app/Components/Features';
import Footer from  '../app/Components/Footer';

export default function Home() {
  return (
    <>
      <ResponsiveAppBar />
      <HeroSection />
      <Features />
      <Footer />
    </>
  );
}