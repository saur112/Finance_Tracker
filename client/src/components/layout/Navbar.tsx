import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate(); // Add this line

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    navigate('/'); // This will redirect to your landing page (root route)
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between h-20 items-center min-w-0">
          {/* Logo and App Name - Responsive sizing */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink min-w-0">
            {/* <Link to="/" className="flex items-center space-x-2 sm:space-x-3 no-underline"> */}
              <div className="relative group flex-shrink-0">
               
                
              </div>
              <div className="flex flex-col items-start justify-center flex-shrink min-w-0">
                <span className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-yellow-500 via-green-600 to-emerald-500 bg-clip-text text-transparent whitespace-nowrap">
                  Financia
                </span>
                <span className="text-xs text-gray-500 tracking-wide whitespace-nowrap hidden sm:block">
                  "Simplify Spending. Amplify Success."
                </span>
              </div>
            {/* </Link> */}
          </div>

          {/* Auth Section - Mobile Optimized */}
          <div className="flex items-center flex-shrink-0 ml-2">
            {isAuthenticated ? (
              <div className="relative z-50" ref={dropdownRef}>
                {/* User Profile Dropdown */}
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {/* User Avatar Icon with Circular Border */}
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-semibold text-sm ring-2 ring-green-500 ring-offset-2 ring-offset-white">
                      {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                  </div>
                  {/* User Name (hidden on mobile) */}
                  <span className="hidden sm:inline text-gray-700 font-medium whitespace-nowrap">
                    {user?.name || 'User'}
                  </span>
                  {/* Dropdown Arrow - Hidden on mobile screens */}
                  <svg 
                    className={`hidden sm:block w-4 h-4 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu - Fixed positioning and z-index */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-[9999] border border-gray-200">
                    <div className="py-1">
                      {/* User Info Section (visible on mobile) */}
                      <div className="sm:hidden px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">{user?.name || 'User'}</p>
                        <p className="text-xs text-gray-500">{user?.email || 'user@example.com'}</p>
                      </div>
                      
                      {/* Logout Option */}
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      >
                        <svg className="w-4 h-4 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2 sm:space-x-3">
                {/* Login Icon - Mobile Optimized */}
                <Link to="/login">
                  <div className="group relative cursor-pointer">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-400/20 via-red-500/30 to-cyan-600/20 backdrop-blur-sm border border-white/30 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex items-center justify-center overflow-hidden hover:scale-105">
                      {/* Glass morphism background layers */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent rounded-2xl"></div>
                      <div className="absolute inset-0 bg-gradient-to-tl from-emerald-500/20 via-transparent to-cyan-400/20 rounded-2xl"></div>
                      
                      {/* Floating orbs for depth */}
                      <div className="absolute top-1 right-1 sm:top-2 sm:right-2 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-br from-white/60 to-emerald-300/40 rounded-full blur-[1px] animate-pulse"></div>
                      <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-br from-cyan-300/50 to-white/30 rounded-full blur-[0.5px]"></div>
                      
                      {/* Elegant Key Icon - Responsive sizing */}
                      <svg 
                        width="18" 
                        height="18" 
                        className="sm:w-6 sm:h-6 relative z-10 text-red-800 drop-shadow-sm group-hover:text-red-600 transition-colors duration-300"
                        viewBox="0 0 24 24" 
                        fill="none"
                      >
                        {/* Key body */}
                        <circle 
                          cx="9" 
                          cy="9" 
                          r="4" 
                          stroke="currentColor" 
                          strokeWidth="2.2" 
                          strokeLinecap="round" 
                          fill="none"
                          className="group-hover:stroke-red-600 transition-colors duration-300"
                        />
                        {/* Key shaft */}
                        <path 
                          d="M13 13L20 20" 
                          stroke="currentColor" 
                          strokeWidth="2.2" 
                          strokeLinecap="round" 
                          className="group-hover:stroke-red-600 transition-colors duration-300"
                        />
                        {/* Key teeth */}
                        <path 
                          d="M17 17L19 19" 
                          stroke="currentColor" 
                          strokeWidth="2.2" 
                          strokeLinecap="round" 
                          className="group-hover:stroke-red-600 transition-colors duration-300"
                        />
                        <path 
                          d="M18 16L20 18" 
                          stroke="currentColor" 
                          strokeWidth="2.2" 
                          strokeLinecap="round" 
                          className="group-hover:stroke-red-600 transition-colors duration-300"
                        />
                      </svg>
                      
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
                    </div>
                    
                    {/* Floating ring animation */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-emerald-400/30 animate-ping opacity-20"></div>
                    
                    {/* Elegant tooltip - Hidden on mobile */}
                    <div className="hidden sm:block absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-sm px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl backdrop-blur-sm border border-gray-700/50">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-800"></div>
                      <span className="font-medium">Login</span>
                    </div>
                  </div>
                </Link>
                
                {/* Register Button - Text Button - Only visible on desktop */}
                <Link to="/register" className="hidden sm:block">
                  <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-green-600 hover:from-green-600 hover:to-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
