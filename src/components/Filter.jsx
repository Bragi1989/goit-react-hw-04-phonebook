import React, { useState } from 'react';

const Filter = ({ handleChangeFilter }) => {
  const [filter, setFilter] = useState('');

  const handleInputChange = (e) => {
    setFilter(e.target.value);
    handleChangeFilter(e.target.value);
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={handleInputChange}
        placeholder="Search contacts"
      />
    </div>
  );
};

export default Filter;