import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

// Add custom animation for zooming effect
const customStyles = `
@keyframes zoomInOut {
  0% { transform: scale(0.8); }
  50% { transform: scale(1.2); }
  100% { transform: scale(0.8); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-zoom {
  animation: zoomInOut 2.5s ease-in-out infinite;
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

/* Custom responsive button styles */
.hero-button {
  min-height: 48px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .hero-button {
    width: auto;
    max-width: none;
    margin: 0;
  }
}

.cta-button {
  min-height: 48px;
  padding: 12px 32px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 8px;
  display: allow;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
}

@media (min-width: 600px) {
  .cta-button {
    width: auto;
    max-width: none;
  }
}

/* Footer link improvements */
.footer-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

@media (min-width: 768px) {
  .footer-links {
    flex-direction: row;
    gap: 24px;
  }
}

.footer-link {
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.3s ease;
  min-width: 100px;
  text-align: center;
}

.footer-link:hover {
  background-color: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
}
`;

const LandingPage = () => {
  const [arrowPosition, setArrowPosition] = useState(0);
  
  // Effect for arrow animation
  useEffect(() => {
    const interval = setInterval(() => {
      setArrowPosition(prev => prev === 0 ? 5 : 0);
    }, 400);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <style>{customStyles}</style>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-pink-100 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2 text-center md:text-left">
             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Build The Life You Want</span> <span className="text-pink-600"> One Rupee at a Time</span>
</h1>

              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
                Easily track your income, expenses, and savings with our intuitive Expensia.
                Visualize your spending habits and make informed decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
                <Button 
                  size="lg" 
                  className="hero-button bg-gradient-to-r from-red-600 to-blue-700 hover:from-blue-700 hover:to-red-700 text-white animate-zoom" 
                  asChild
                >
                  <Link to="/register" className="flex items-center justify-center gap-2">
                    Get Started
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="transition-transform duration-300"
                      style={{ transform: `translateX(${arrowPosition}px)` }}
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-sm md:max-w-lg mx-auto">
                <img 
                  src="/financial-literacy-workshop-teens-fun-3d-scene-with-financial-advisor-teaching-budgeting-s_980716-151020.avif" 
                  alt="Finance Tracking" 
                  className="w-full h-auto rounded-full shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

   

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-gradient mb-2">Financia</h3>
              <p className="text-gray-400 text-lg">Your partner in smarter money decisions.</p>
              <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
                <span className="px-3 py-1 bg-green-600 text-white text-xs rounded-full">🔒 Secure</span>
                <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full">🚀 Fast</span>
                <span className="px-3 py-1 bg-orange-600 text-white text-xs rounded-full">🎯 Smart</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link 
                to="/login" 
                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover-lift font-medium"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 rounded-xl transition-all duration-300 hover-lift font-medium"
              >
                Register
              </Link>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Financia. All rights reserved. Made with ❤ for your financial success.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;