import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import Integrations from '../components/Integration';
import { Cta } from '../components/Cta';
import { Testimonials } from '../components/Testimonials';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Integrations />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
};