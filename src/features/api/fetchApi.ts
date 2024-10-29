export const fetchClasses = async (): Promise<string[]> => {
  try {
    const response = await fetch('https://www.dnd5eapi.co/api/classes');
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
