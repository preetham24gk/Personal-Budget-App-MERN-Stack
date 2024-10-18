import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import TransactionForm from './components/TransactionForm';
import Categories from './components/Categories';
import Reports from './components/Reports';
import BudgetGoals from './components/BudgetGoals';
import Login from './components/Login';
import Register from './components/Register';

const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<PrivateRoute element={<Dashboard />} />} />
              <Route path="/add-transaction" element={<PrivateRoute element={<TransactionForm />} />} />
              <Route path="/categories" element={<PrivateRoute element={<Categories />} />} />
              <Route path="/reports" element={<PrivateRoute element={<Reports />} />} />
              <Route path="/budget-goals" element={<PrivateRoute element={<BudgetGoals />} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;