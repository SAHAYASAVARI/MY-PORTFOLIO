import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Captcha } from './ui/captcha';
import { AdminBypass } from './AdminBypass';
import { SecurityUtils } from '../utils/security';

interface EntryGateProps {
  onVerified: () => void;
}

export const EntryGate: React.FC<EntryGateProps> = ({ onVerified }) => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState<'idle' | 'success' | 'error' | 'blocked'>('idle');
  const [blockInfo, setBlockInfo] = useState<{ blocked: boolean; timeLeft?: number }>({ blocked: false });
  const recaptchaRef = useRef<any>(null);

  useEffect(() => {
    // Check if user is blocked on component mount
    const blockStatus = SecurityUtils.isBlocked();
    setBlockInfo(blockStatus);
    if (blockStatus.blocked) {
      setVerificationStatus('blocked');
    }
  }, []);

  const handleVerification = async () => {
    // Check if blocked
    const blockStatus = SecurityUtils.isBlocked();
    if (blockStatus.blocked) {
      setBlockInfo(blockStatus);
      setVerificationStatus('blocked');
      return;
    }

    const captchaValue = recaptchaRef.current?.getValue();
    
    if (!captchaValue) {
      SecurityUtils.trackFailedAttempt();
      SecurityUtils.logAccess('failure', 'captcha');
      setVerificationStatus('error');
      setTimeout(() => setVerificationStatus('idle'), 3000);
      return;
    }

    setIsVerifying(true);

    try {
      // Simulate verification process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Clear any failed attempts
      SecurityUtils.clearFailedAttempts();
      SecurityUtils.logAccess('success', 'captcha');
      
      setVerificationStatus('success');
      
      // Store verification in localStorage to remember user
      localStorage.setItem('portfolio_verified', 'true');
      localStorage.setItem('portfolio_verified_time', Date.now().toString());
      
      // Wait a moment to show success, then grant access
      setTimeout(() => {
        onVerified();
      }, 1000);
      
    } catch (error) {
      SecurityUtils.trackFailedAttempt();
      SecurityUtils.logAccess('failure', 'captcha');
      setVerificationStatus('error');
      setTimeout(() => setVerificationStatus('idle'), 3000);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20 p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
      
      {/* Admin Bypass (Development Only - Hidden in Production) */}
      {process.env.NODE_ENV === 'development' && import.meta.env.DEV && (
        <AdminBypass onBypass={onVerified} />
      )}
      
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <Card className="glass-card w-full max-w-md mx-auto">
          <CardHeader className="text-center pb-2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center"
            >
              <Shield className="w-8 h-8 text-primary" />
            </motion.div>
            
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Secure Access
            </CardTitle>
            <CardDescription className="text-base mt-2">
              Welcome to Sahaya Savari F's Portfolio
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-4">
            <div className="text-center mb-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                To ensure security and prevent automated access, please complete the verification below to enter the portfolio.
              </p>
            </div>

            {/* CAPTCHA */}
            <div className="mb-6">
              <Captcha
                ref={recaptchaRef}
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
              />
            </div>

            {/* Verification Status */}
            <AnimatePresence mode="wait">
              {verificationStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center justify-center text-green-600 mb-4"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Verification successful!</span>
                </motion.div>
              )}

              {verificationStatus === 'blocked' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center justify-center text-orange-600 mb-4"
                >
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">
                    Access temporarily blocked. Try again in {blockInfo.timeLeft} minutes.
                  </span>
                </motion.div>
              )}

              {verificationStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center justify-center text-red-600 mb-4"
                >
                  <AlertCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Please complete the CAPTCHA</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Enter Button */}
            <motion.div
              whileHover={{ scale: verificationStatus === 'success' ? 1 : 1.02 }}
              whileTap={{ scale: verificationStatus === 'success' ? 1 : 0.98 }}
            >
              <Button
                onClick={handleVerification}
                disabled={isVerifying || verificationStatus === 'success' || verificationStatus === 'blocked'}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
                size="lg"
              >
                {isVerifying ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent mr-2"></div>
                    Verifying...
                  </div>
                ) : verificationStatus === 'success' ? (
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Access Granted
                  </div>
                ) : verificationStatus === 'blocked' ? (
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Access Blocked
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    Enter Portfolio
                  </div>
                )}
              </Button>
            </motion.div>

            {/* Security Notice */}
            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground">
                🔒 This verification helps protect against automated access and ensures genuine visitors.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};
