import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([
    'Food', 'Utilities', 'Rent', 'Transportation', 'Entertainment'
  ]);
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  const handleRemoveCategory = (category: string) => {
    setCategories(categories.filter(c => c !== category));
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Expense Categories</h2>
      <div className="mb-4 flex">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="flex-grow p-2 border rounded-l"
          placeholder="New category"
        />
        <button
          onClick={handleAddCategory}
          className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600 flex items-center"
        >
          <Plus size={20} />
          <span className="ml-1">Add</span>
        </button>
      </div>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index} className="flex justify-between items-center bg-white p-3 rounded shadow">
            <span>{category}</span>
            <button
              onClick={() => handleRemoveCategory(category)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;