// StatusSummary.tsx
import React, { useContext } from 'react';
import CharacterContext from '../context/CharacterContext';
import { CharacterStats } from '../types/CharacterStats';

const StatusSummary: React.FC = () => {
  const { state } = useContext(CharacterContext);
  const stats: CharacterStats = state.stats;

  document.title = 'Sumário';

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Resumo dos Status</h1>
      <ul>
        {Object.entries(stats).map(([key, value]) => (
          <li key={key} className="mb-2">
            <span className="font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>{' '}
            {value as string | number} {/* Casting de value para string ou number */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatusSummary;
