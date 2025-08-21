// Extend Window interface for easter egg property
declare global {
  interface Window {
    __sahayasavari_console_easter_egg?: boolean;
  }
}
import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Layout } from "./components/Layout";
import { PortfolioHome } from "./pages/PortfolioHome";
import { EntryGate } from "./components/EntryGate";
import { toast } from "@/hooks/use-toast";

const queryClient = new QueryClient();

const App = () => {
  const [isVerified, setIsVerified] = useState(false);

  // Console easter egg for developers
  useEffect(() => {
    // Only show once per session
    if (!window.__sahayasavari_console_easter_egg) {
      window.__sahayasavari_console_easter_egg = true;
      console.log('%cHey developer! 🚀', 'color: #6c63ff; font-size: 2em; font-weight: bold;');
      console.log('%cYou found the secret console message! Want to collaborate? Reach out at sahayasavari@gmail.com', 'color: #00b894; font-size: 1.2em;');
    }
  }, []);

  // Easter egg: Show toast when user types 'sahayasavari'
  useEffect(() => {
    let buffer = '';
    const handler = (e: KeyboardEvent) => {
      buffer += e.key.toLowerCase();
      if (buffer.length > 12) buffer = buffer.slice(-12);
      if (buffer === 'sahayasavari') {
        toast({
          title: '🎉 Easter Egg!',
          description: 'You found the secret! 🚀',
        });
        buffer = '';
      }
      if (buffer.endsWith('lovable')) {
        toast({
          title: '💖 Lovable Easter Egg!',
          description: 'You discovered another secret! 🌈',
        });
        // Optionally, add more effects here (e.g., confetti)
        buffer = '';
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    // Check if user was previously verified (within last 24 hours)
    const verified = localStorage.getItem('portfolio_verified');
    const verifiedTime = localStorage.getItem('portfolio_verified_time');
    
    if (verified && verifiedTime) {
      const timeElapsed = Date.now() - parseInt(verifiedTime);
      const hoursElapsed = timeElapsed / (1000 * 60 * 60);
      
      // Verification expires after 24 hours
      if (hoursElapsed < 24) {
        setIsVerified(true);
      } else {
        // Clear expired verification
        localStorage.removeItem('portfolio_verified');
        localStorage.removeItem('portfolio_verified_time');
      }
    }
  }, []);

  const handleVerified = () => {
    setIsVerified(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {!isVerified ? (
            <EntryGate onVerified={handleVerified} />
          ) : (
            <Layout>
              <PortfolioHome />
            </Layout>
          )}
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;