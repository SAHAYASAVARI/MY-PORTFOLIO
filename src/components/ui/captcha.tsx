import React, { forwardRef, useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface CaptchaProps {
  sitekey: string;
  onChange?: (token: string | null) => void;
  onExpired?: () => void;
  onError?: () => void;
}

export const Captcha = forwardRef<ReCAPTCHA, CaptchaProps>(
  ({ sitekey, onChange, onExpired, onError }, ref) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
      // Check for dark mode
      const isDark = document.documentElement.classList.contains('dark') ||
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(isDark ? 'dark' : 'light');

      // Listen for theme changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'class') {
            const isDark = document.documentElement.classList.contains('dark');
            setTheme(isDark ? 'dark' : 'light');
          }
        });
      });

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      });

      return () => observer.disconnect();
    }, []);

    return (
      <div className="flex justify-center">
        <ReCAPTCHA
          ref={ref}
          sitekey={sitekey}
          theme={theme}
          size="normal"
          onChange={onChange}
          onExpired={onExpired}
          onError={onError}
        />
      </div>
    );
  }
);

Captcha.displayName = 'Captcha';
