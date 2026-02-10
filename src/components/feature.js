import React from 'react';
import FeatureImage from './assets/feature.png';

function Feature() {
  return (
    <section>
      <img src={FeatureImage} alt="Salon Feature" style={{ width: '100%', height: 'auto' }} />
      <p>Our services bring vintage charm to every haircut.</p>
    </section>
  );
}

export default Feature;
