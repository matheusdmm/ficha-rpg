// CharacterContext.tsx

import React, { createContext, useReducer, ReactNode } from 'react';

interface CharacterState {
  name: string;
  avatar: string;
  class: string;
  race: string;
  subrace: string;
  stats: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  equipments: any[]; // Pode ser mais específico se você tiver uma interface para equipamentos
}

const initialState: CharacterState = {
  name: '',
  avatar: '',
  class: '',
  race: '',
  subrace: '',
  stats: {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  },
  equipments: [],
};

type Action =
  | { type: 'SET_NAME'; payload: string }
  | { type: 'SET_AVATAR'; payload: string }
  | { type: 'SET_CLASS'; payload: string }
  | { type: 'SET_RACE'; payload: string }
  | { type: 'SET_SUBRACE'; payload: string }
  | { type: 'UPDATE_STAT'; payload: { stat: keyof typeof initialState.stats; value: number } }
  | { type: 'SET_EQUIPMENTS'; payload: any[] };

const CharacterReducer = (state: CharacterState, action: Action): CharacterState => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_AVATAR':
      return { ...state, avatar: action.payload };
    case 'SET_CLASS':
      return { ...state, class: action.payload };
    case 'SET_RACE':
      return { ...state, race: action.payload };
    case 'SET_SUBRACE':
      return { ...state, subrace: action.payload };
    case 'UPDATE_STAT':
      return { ...state, stats: { ...state.stats, [action.payload.stat]: action.payload.value } };
    case 'SET_EQUIPMENTS':
      return { ...state, equipments: action.payload };
    default:
      return state;
  }
};

const CharacterContext = createContext<CharacterState | null>(null);

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(CharacterReducer, initialState);

  const handleCreateCharacter = (characterData: CharacterState) => {
    setCharacter(characterData);
  };

  return (
    <CharacterContext.Provider value={{ state, dispatch }}>{children}</CharacterContext.Provider>
  );
};

export default CharacterContext;
