import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const BudgetGoals: React.FC = () => {
  const [goals, setGoals] = useState([
    { category: 'Food', limit: 500, spent: 350 },
    { category: 'Utilities', limit: 300, spent: 280 },
    { category: 'Rent', limit: 1000, spent: 1000 },
    { category: 'Transportation', limit: 200, spent: 150 },
    { category: 'Entertainment', limit: 300, spent: 200 },
  ]);

  const [newGoal, setNewGoal] = useState({ category: '', limit: '' });

  const handleAddGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (newGoal.category && newGoal.limit) {
      setGoals([...goals, { ...newGoal, limit: Number(newGoal.limit), spent: 0 }]);
      setNewGoal({ category: '', limit: '' });
    }
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Budget Goals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Current Goals</h3>
          <ul className="space-y-4">
            {goals.map((goal, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{goal.category}</span>
                <div>
                  <span className={`font-bold ${goal.spent > goal.limit ? 'text-red-500' : 'text-green-500'}`}>
                    ${goal.spent}
                  </span>
                  <span className="text-gray-500"> / ${goal.limit}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Budget Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={goals}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="limit"
              >
                {goals.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Add New Budget Goal</h3>
        <form onSubmit={handleAddGoal} className="space-y-4">
          <div>
            <label htmlFor="category" className="block mb-1">Category</label>
            <input
              type="text"
              id="category"
              value={newGoal.category}
              onChange={(e) => setNewGoal({ ...newGoal, category: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="limit" className="block mb-1">Monthly Limit</label>
            <input
              type="number"
              id="limit"
              value={newGoal.limit}
              onChange={(e) => setNewGoal({ ...newGoal, limit: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Add Goal
          </button>
        </form>
      </div>
    </div>
  );
};

export default BudgetGoals;