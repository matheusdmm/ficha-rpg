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
            className={`btn btn-outline btn ${
              selectedClass === classe ? 'shadow-lg scale-95' : ''
            } hover:scale-105 active:scale-90 focus:outline-none focus:ring-2 focus:btn-primary focus:btn-primary`}
          >
            {classe}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ClassSelector;
