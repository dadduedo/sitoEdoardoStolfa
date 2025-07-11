import Tabs from './components/Tabs';
import CvTab from './components/CvTab';
import BooksTab from './components/BooksTab';
import GameTab from './components/GameChangeTab';
import PiattaformaTab from './components/PlatformProject';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Edoardo Stolfa</h1>
      <Tabs>
        <CvTab title="Curriculum" />
        <BooksTab title="Libri" />
        <GameTab title="Giochi" />
        <PiattaformaTab title="Platform Project" />
      </Tabs>
    </div>
  );
}

export default App;
