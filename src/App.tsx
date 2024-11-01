import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CharacterSheet from './pages/CharacterSheet';
import CreateCharacter from './pages/CreateCharacter';
import CharacterList from './pages/CharacterList';
import StatusSummary from './pages/CharacterSummary';
import Sidebar from './components/Sidebar2';
import { CharacterProvider } from './context/CharacterContext';

import './App.css';

const App: React.FC = () => {
  return (
    <CharacterProvider>
      <Router>
        <div className="">
          <Sidebar />

          <div className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<CharacterList />} />
              <Route path="/create-character" element={<CreateCharacter />} />
              <Route path="/character-sheet" element={<CharacterSheet />} />
              <Route path="/status-summary" element={<StatusSummary />} />
            </Routes>
          </div>
        </div>
      </Router>
    </CharacterProvider>
  );
};

export default App;
