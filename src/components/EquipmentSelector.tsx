import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { fetchEquipmentCategories, fetchEquipment } from '../features/api/fetchApi';

interface EquipmentSelectorProps {
  selectedCategories: any[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<any[]>>;
  selectedEquipments: any[];
  setSelectedEquipments: React.Dispatch<React.SetStateAction<any[]>>;
}

const EquipmentSelector: React.FC<EquipmentSelectorProps> = ({
  selectedCategories,
  setSelectedCategories,
  selectedEquipments,
  setSelectedEquipments,
}) => {
  const [categoryOptions, setCategoryOptions] = useState<any[]>([]);
  const [equipmentOptions, setEquipmentOptions] = useState<any[]>([]);

  useEffect(() => {
    const loadCategories = async () => {
      const categories = await fetchEquipmentCategories();
      const formattedOptions = categories.map(category => ({
        value: category,
        label: category,
      }));
      setCategoryOptions(formattedOptions);
    };

    const loadEquipments = async () => {
      const equipments = await fetchEquipment();
      const formattedOptions = equipments.map(equipment => ({
        value: equipment,
        label: equipment,
      }));
      setEquipmentOptions(formattedOptions);
    };

    loadCategories();
    loadEquipments();
  }, []);

  const handleCategoryChange = (selected: any) => {
    setSelectedCategories(selected || []);
  };

  const handleEquipmentChange = (selected: any) => {
    setSelectedEquipments(selected || []);
  };

  return (
    <div>
      <label className="block mb-2 text-lg font-semibold text-[#4A3B2A]">
        Selecione as Categorias de Equipamento
      </label>
      <Select
        isMulti
        options={categoryOptions}
        value={selectedCategories}
        onChange={handleCategoryChange}
        className="basic-multi-select"
        classNamePrefix="select"
      />

      <label className="block mb-2 text-lg font-semibold text-[#4A3B2A] mt-6">
        Selecione os Equipamentos
      </label>
      <Select
        isMulti
        options={equipmentOptions}
        value={selectedEquipments}
        onChange={handleEquipmentChange}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </div>
  );
};

export default EquipmentSelector;
