import React, { createContext, useReducer, ReactNode } from 'react';

interface State {
  name: string;
  stats: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  avatar: string;
  class: string;
}

const initialState: State = {
  name: '',
  stats: {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  },
  avatar: '',
  class: '',
};

type Action =
  | { type: 'SET_NAME'; payload: string }
  | { type: 'SET_AVATAR'; payload: string }
  | { type: 'SET_CLASS'; payload: string }
  | { type: 'UPDATE_STAT'; payload: { stat: string; value: number } };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_AVATAR':
      return { ...state, avatar: action.payload };
    case 'SET_CLASS':
      return { ...state, class: action.payload };
    case 'UPDATE_STAT':
      return {
        ...state,
        stats: { ...state.stats, [action.payload.stat]: action.payload.value },
      };
    default:
      return state;
  }
};

const CharacterContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const CharacterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CharacterContext.Provider value={{ state, dispatch }}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContext;
