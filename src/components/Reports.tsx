import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Reports: React.FC = () => {
  const [reportType, setReportType] = useState<'weekly' | 'monthly'>('monthly');

  // Mock data for demonstration
  const weeklyData = [
    { name: 'Mon', income: 300, expenses: 200 },
    { name: 'Tue', income: 500, expenses: 300 },
    { name: 'Wed', income: 200, expenses: 250 },
    { name: 'Thu', income: 400, expenses: 350 },
    { name: 'Fri', income: 600, expenses: 400 },
    { name: 'Sat', income: 100, expenses: 150 },
    { name: 'Sun', income: 50, expenses: 100 },
  ];

  const monthlyData = [
    { name: 'Jan', income: 3000, expenses: 2500 },
    { name: 'Feb', income: 3500, expenses: 2800 },
    { name: 'Mar', income: 3200, expenses: 2600 },
    { name: 'Apr', income: 3800, expenses: 3000 },
    { name: 'May', income: 3600, expenses: 2900 },
    { name: 'Jun', income: 4000, expenses: 3200 },
  ];

  const data = reportType === 'weekly' ? weeklyData : monthlyData;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Financial Reports</h2>
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => setReportType('weekly')}
          className={`px-4 py-2 rounded ${
            reportType === 'weekly' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Weekly
        </button>
        <button
          onClick={() => setReportType('monthly')}
          className={`px-4 py-2 rounded ${
            reportType === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Monthly
        </button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">
          {reportType === 'weekly' ? 'Weekly' : 'Monthly'} Income vs Expenses
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="income" fill="#8884d8" name="Income" />
            <Bar dataKey="expenses" fill="#82ca9d" name="Expenses" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Summary</h3>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Period</th>
              <th className="p-2 text-right">Total Income</th>
              <th className="p-2 text-right">Total Expenses</th>
              <th className="p-2 text-right">Net</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{item.name}</td>
                <td className="p-2 text-right">${item.income}</td>
                <td className="p-2 text-right">${item.expenses}</td>
                <td className="p-2 text-right">${item.income - item.expenses}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;