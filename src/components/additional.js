import React from 'react';
import AdditionalImage from './assets/additional.png';

function Additional() {
  return (
    <section>
      <img src={AdditionalImage} alt="Salon in Action" style={{ width: '100%', height: 'auto' }} />
      <p>Experience a warm, welcoming atmosphere with every visit.</p>
    </section>
  );
}

export default Additional;
