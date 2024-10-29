import React, { useContext } from 'react';
import CharacterContext from '../context/CharacterContext';

const Stats: React.FC = () => {
  const { state, dispatch } = useContext(CharacterContext);
  const stats = Object.keys(state.stats) as Array<keyof typeof state.stats>;

  document.title = 'Status';

  const handleStatChange = React.useCallback(
    (stat: keyof typeof state.stats) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value);
      dispatch({ type: 'UPDATE_STAT', payload: { stat, value } });
    },
    [dispatch],
  );

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map(stat => (
        <div key={stat} className="p-4 bg-white rounded shadow-md text-center">
          <h2 className="text-xl font-semibold">{stat}</h2>
          <input
            type="number"
            value={state.stats[stat]}
            onChange={handleStatChange(stat)}
            className="mt-2 p-2 border border-gray-300 rounded w-full text-center"
          />
        </div>
      ))}
    </div>
  );
};

export default Stats;
