import React, { useState } from 'react';

const Filter = ({ handleChangeFilter }) => {
  const [filter, setFilter] = useState('');

  const handleInputChange = (e) => {
    setFilter(e.target.value);
    handleChangeFilter(e.target.value); // Тут ви передаєте значення e.target.value до функції handleChangeFilter
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={handleInputChange} // Тут ви передаєте функцію handleInputChange для обробки події onChange
        placeholder="Search contacts"
      />
    </div>
  );
};