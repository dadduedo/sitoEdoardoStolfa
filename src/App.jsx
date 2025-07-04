import React from 'react';
import Tabs from './components/Tabs';
import CvTab from './components/CvTab';
import BooksTab from './components/BooksTab';
import GameTab from './components/GameChangeTab';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Edoardo Stolfa</h1>
      <Tabs>
        <CvTab title="Curriculum" />
        <BooksTab title="Libri" />
        <GameTab title="Giochi" />
      </Tabs>
    </div>
  );
}

export default App;
