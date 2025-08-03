import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Load Mario 404 CSS and JS
    const loadMarioAssets = () => {
      // Load CSS
      const cssLink = document.createElement('link');
      cssLink.rel = 'stylesheet';
      cssLink.href = '/mario-404.css';
      document.head.appendChild(cssLink);

      // Load JS
      const script = document.createElement('script');
      script.src = '/mario-404.js';
      script.async = true;
      document.body.appendChild(script);

      // Cleanup function
      return () => {
        document.head.removeChild(cssLink);
        document.body.removeChild(script);
      };
    };

    const cleanup = loadMarioAssets();
    return cleanup;
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      {/* Mario 404 Animation */}
      <div className="container" id="container">
        <div className="block" id="block"></div>
        <div className="mario" id="mario"></div>
      </div>
      
      {/* Fallback content with return home button */}
      <div className="absolute top-4 left-4 z-50">
        <a 
          href="/" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
        >
          ← Return to Home
        </a>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center z-50">
        <h1 className="text-white text-2xl font-bold mb-2">404 - Page Not Found</h1>
        <p className="text-white/80">Looks like Mario couldn't find this page!</p>
      </div>
    </div>
  );
};

export default NotFound;
