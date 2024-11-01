import React, { useState } from 'react';

interface AvatarSelectionProps {
  selectedAvatar: string;
  onSelectAvatar: (avatar: string) => void;
}

const AvatarSelection: React.FC<AvatarSelectionProps> = ({ selectedAvatar, onSelectAvatar }) => {
  const avatars = [
    '/avatars/barbarian_female.png',
    '/avatars/barbarian_men.jpg',
    '/avatars/bard_female.jpg',
    '/avatars/cleric_female.png',
    '/avatars/cleric_men.jpg',
    '/avatars/druid_female.jpg',
    '/avatars/fighter_female.png',
    '/avatars/fighter_men.jpg',
    '/avatars/monk_female.jpg',
    '/avatars/paladin_female.png',
    '/avatars/paladin_men.jpg',
    '/avatars/ranger_female.jpg',
    '/avatars/rogue_female.png',
    '/avatars/rogue_female_alternative.png',
    '/avatars/sorcerer_female.jpg',
    '/avatars/warlock_female.png',
    '/avatars/wizard_female.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextAvatar = () => {
    const newIndex = (currentIndex + 1) % avatars.length;
    setCurrentIndex(newIndex);
    onSelectAvatar(avatars[newIndex]);
  };

  const prevAvatar = () => {
    const newIndex = (currentIndex - 1 + avatars.length) % avatars.length;
    setCurrentIndex(newIndex);
    onSelectAvatar(avatars[newIndex]);
  };

  const handleAvatarClick = () => {
    onSelectAvatar(avatars[currentIndex]);
  };

  if (!avatars) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  return (
    <div className="text-center mb-6">
      <h2 className="text-2xl font-bold text-[#4A3B2A] mb-4">Escolher Avatar</h2>

      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={prevAvatar}
          className="p-2 rounded-full bg-[#4B8B3B] text-white hover:bg-[#3B6831] transition duration-200"
        >
          {'<'}
        </button>

        <img
          src={avatars[currentIndex]}
          alt={`Avatar ${currentIndex + 1}`}
          onClick={handleAvatarClick}
          className={`h-56 w-56 object-cover mask mask-hexagon shadow-lg cursor-pointer ${
            selectedAvatar === avatars[currentIndex] ? 'border-4 border-blue-500' : ''
          }`}
        />

        <button
          onClick={nextAvatar}
          className="p-2 rounded-full bg-[#4B8B3B] text-white hover:bg-[#3B6831] transition duration-200"
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default AvatarSelection;
