import { createContext, useReducer, ReactNode, Dispatch } from 'react';

interface Stats {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

interface InventoryItem {
  item: string;
  quantity: number;
}

interface Character {
  name: string;
  stats: Stats;
  abilities: string[];
  inventory: InventoryItem[];
}

interface CharacterAction {
  type: string;
  payload?: any;
}

const initialCharacter: Character = {
  name: '',
  stats: {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  },
  abilities: [],
  inventory: [],
};

// Definindo o reducer para as ações
const characterReducer = (
  state: Character,
  action: CharacterAction
): Character => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'UPDATE_STAT':
      return {
        ...state,
        stats: { ...state.stats, [action.payload.stat]: action.payload.value },
      };
    case 'ADD_ABILITY':
      return { ...state, abilities: [...state.abilities, action.payload] };
    case 'ADD_ITEM':
      return { ...state, inventory: [...state.inventory, action.payload] };
    default:
      return state;
  }
};

// Criando contexto e provedor
const CharacterContext = createContext<{
  state: Character;
  dispatch: Dispatch<CharacterAction>;
}>({
  state: initialCharacter,
  dispatch: () => null,
});

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(characterReducer, initialCharacter);

  return (
    <CharacterContext.Provider value={{ state, dispatch }}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContext;
