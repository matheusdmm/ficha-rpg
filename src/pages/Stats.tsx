import React, { useContext } from 'react';
import CharacterContext from '../context/CharacterContext';

const Stats: React.FC = () => {
  const { state, dispatch } = useContext(CharacterContext);
  const stats = Object.keys(state.stats) as (keyof typeof state.stats)[];

  const handleStatChange = (stat: keyof typeof state.stats, value: number) => {
    dispatch({ type: 'UPDATE_STAT', payload: { stat, value } });
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat) => (
        <div key={stat} className="p-4 bg-white rounded shadow-md text-center">
          <h2 className="text-xl font-semibold">{stat}</h2>
          <input
            type="number"
            value={state.stats[stat]}
            onChange={(e) => handleStatChange(stat, parseInt(e.target.value))}
            className="mt-2 p-2 border border-gray-300 rounded w-full text-center"
          />
        </div>
      ))}
    </div>
  );
};

export default Stats;
