import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterSheet from './components/CharacterSheet';
import CreateCharacter from './components/CreateCharacter';
import { CharacterProvider } from './context/CharacterContext';
import './App.css';

const App: React.FC = () => {
  return (
    <CharacterProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CreateCharacter />} />
          <Route path="/character-sheet" element={<CharacterSheet />} />
        </Routes>
      </Router>
    </CharacterProvider>
  );
};

export default App;
