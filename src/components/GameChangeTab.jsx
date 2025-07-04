import React from 'react';

const GameTab = () => (
  <div>
    <h2>Il mio Videogioco</h2>
    <p>Gioca al mio videogioco direttamente qui!</p>
    <iframe
      src="/gioco/index.html"
      title="Il mio Gioco"
      width="800"
      height="600"
      style={{ border: 'none' }}
    ></iframe>
  </div>
);

export default GameTab;