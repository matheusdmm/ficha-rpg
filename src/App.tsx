import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CharacterSheet from './components/CharacterSheet';
import CreateCharacter from './components/CreateCharacter';
import CharacterList from './components/CharacterList';
import StatusSummary from './components/CharacterSummary';
import Sidebar from './components/Sidebar';
import { CharacterProvider } from './context/CharacterContext';

import './App.css';

const App: React.FC = () => {
  return (
    <CharacterProvider>
      <Router>
        <div className="flex min-h-screen bg-gray-100">
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
