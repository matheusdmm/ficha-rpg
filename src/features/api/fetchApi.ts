const dndApi = 'https://www.dnd5eapi.co/api/';

export const fetchClasses = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${dndApi}/classes`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data.results.map((cls: { name: string }) => cls.name);
  } catch (error) {
    console.error('Error fetching classes:', error);
    return [];
  }
};

export const fetchRaces = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${dndApi}/races`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data.results.map((race: { name: string }) => race.name);
  } catch (error) {
    console.error('Error fetching races:', error);
    return [];
  }
};

export const fetchSubRaces = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${dndApi}/subraces`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data.results.map((subRace: { name: string }) => subRace.name);
  } catch (error) {
    console.error('Error fetching sub-races:', error);
    return [];
  }
};

export const fetchEquipmentCategories = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${dndApi}/equipment-categories`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data.results.map((equipmentCategories: { name: string }) => equipmentCategories.name);
  } catch (error) {
    console.error('Error fetching equipment categories:', error);
    return [];
  }
};

export const fetchEquipment = async (): Promise<{ name: string; category: string }[]> => {
  try {
    const response = await fetch(`${dndApi}/equipment`);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();

    return data.results.map((equipment: { name: string; category: string }) => ({
      name: equipment.name,
      category: equipment.category,
    }));
  } catch (error) {
    console.error('Error fetching equipment:', error);
    return [];
  }
};
