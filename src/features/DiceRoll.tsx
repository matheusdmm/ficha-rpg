import React from 'react';

interface DiceProps {
  result: number;
  onClose: () => void;
}

const DiceRoll: React.FC<DiceProps> = ({ result, onClose }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="dice">
        <div className="face face1">1</div>
        <div className="face face2">2</div>
        <div className="face face3">3</div>
        <div className="face face4">4</div>
        <div className="face face5">5</div>
        <div className="face face6">6</div>
        <div className="face face7">7</div>
        <div className="face face8">8</div>
        <div className="face face9">9</div>
        <div className="face face10">10</div>
        <div className="face face11">11</div>
        <div className="face face12">12</div>
        <div className="face face13">13</div>
        <div className="face face14">14</div>
        <div className="face face15">15</div>
        <div className="face face16">16</div>
        <div className="face face17">17</div>
        <div className="face face18">18</div>
        <div className="face face19">19</div>
        <div className="face face20">20</div>
      </div>
      <p className="text-lg font-semibold">Resultado: {result}</p>
      <button
        onClick={onClose}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Fechar
      </button>
    </div>
  );
};

export default DiceRoll;
