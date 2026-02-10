import React from 'react';
import Hero from './Hero';
import Feature from './Feature';
import Additional from './Additional';

function App() {
  return (
    <div>
      <Hero />
      <Feature />
      <Additional /> {/* Remove this line if you’re doing Base tier */}
    </div>
  );
}

export default App;
