'use client';
import ResponsiveAppBar from '../app/Components/ResponsiveAppBar';
import HeroSection from '../app/Components/Herosection';
import Features from  '../app/Components/Features';
import Footer from  '../app/Components/Footer';
import PaymentPlan from '../app/Components/PaymentPlan';
import ContactSection from '../app/Components/ContactSection';
import styles from '../app/page.module.css';

export default function Home() {
  return (
    <>
      <ResponsiveAppBar />
      <HeroSection />
      <Features />
      <PaymentPlan />
      <ContactSection />
      <Footer />

    </>
  );
}