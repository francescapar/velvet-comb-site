import React from 'react';
import HeroImage from './assets/hero.png';

function Hero() {
  return (
    <section>
      <img src={HeroImage} alt="Hero Banner" style={{ width: '100%', height: 'auto' }} />
      <h1>Welcome to The Velvet Comb</h1>
    </section>
  );
}

export default Hero;
