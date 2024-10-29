import React from 'react';

interface ClassSelectorProps {
  selectedClass: string;
  setSelectedClass: (classe: string) => void;
  classOptions: string[];
}

const ClassSelector: React.FC<ClassSelectorProps> = ({
  selectedClass,
  setSelectedClass,
  classOptions,
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#4A3B2A] mb-4">Escolher Classe</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {classOptions.map(classe => (
          <button
            key={classe}
            onClick={() => setSelectedClass(classe)}
            className={`p-4 border rounded-lg transition duration-200 ${
              selectedClass === classe
                ? 'border-[#4B8B3B] bg-[#D1B790] shadow-lg'
                : 'border-[#D1D5DB]'
            }`}
          >
            {classe}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ClassSelector;
