import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DollarSign, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <DollarSign size={24} />
          <span className="text-xl font-bold">Budget Buddy</span>
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            {isAuthenticated ? (
              <>
                <li><Link to="/" className="hover:text-blue-200">Dashboard</Link></li>
                <li><Link to="/add-transaction" className="hover:text-blue-200">Add Transaction</Link></li>
                <li><Link to="/categories" className="hover:text-blue-200">Categories</Link></li>
                <li><Link to="/reports" className="hover:text-blue-200">Reports</Link></li>
                <li><Link to="/budget-goals" className="hover:text-blue-200">Budget Goals</Link></li>
                <li>
                  <button onClick={handleLogout} className="flex items-center hover:text-blue-200">
                    <LogOut size={18} className="mr-1" />
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li><Link to="/login" className="hover:text-blue-200">Login</Link></li>
                <li><Link to="/register" className="hover:text-blue-200">Register</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;