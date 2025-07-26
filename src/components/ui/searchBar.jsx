import { useState } from 'react';
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex items-right space-x-2 w-9">
      <input
        type="text"
        // value={searchTerm}
        // onChange={handleSearchChange}
        placeholder="Search..."
        className="p-2 border rounded"
      />
      <button className="p-2 bg-blue-500 text-white rounded">Search</button>
    </div>
  );
}
export default SearchBar;