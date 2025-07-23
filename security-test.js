// Security System Verification Script
// Run this in browser console to test all security features

console.log('🔒 Portfolio Security System Verification');
console.log('==========================================');

// Test 1: SecureAdmin Password Verification
console.log('\n1. Testing Admin Password Verification:');
try {
  // This should be available if SecureAdmin is imported
  if (typeof SecureAdmin !== 'undefined') {
    console.log('✅ SecureAdmin class available');
    console.log('   - Correct password test:', SecureAdmin.verifyPassword('Santhosh@007'));
    console.log('   - Wrong password test:', SecureAdmin.verifyPassword('wrongpassword'));
    console.log('   - Admin access enabled:', SecureAdmin.isAdminAccessEnabled());
  } else {
    console.log('ℹ️  SecureAdmin not in global scope (normal for React app)');
  }
} catch (error) {
  console.log('❌ SecureAdmin test failed:', error.message);
}

// Test 2: Local Storage Security Data
console.log('\n2. Checking Security Storage:');
const adminAttempts = localStorage.getItem('admin_attempts') || '0';
const lastAttempt = localStorage.getItem('admin_last_attempt');
const portfolioVerified = localStorage.getItem('portfolio_verified');
const adminBypass = localStorage.getItem('admin_bypass');

console.log('   - Admin attempts:', adminAttempts);
console.log('   - Last attempt time:', lastAttempt ? new Date(parseInt(lastAttempt)).toLocaleString() : 'None');
console.log('   - Portfolio verified:', portfolioVerified);
console.log('   - Admin bypass active:', adminBypass);

// Test 3: Rate Limiting Status
console.log('\n3. Rate Limiting Status:');
const attempts = parseInt(adminAttempts);
if (attempts >= 3 && lastAttempt) {
  const timeElapsed = Date.now() - parseInt(lastAttempt);
  const blockDuration = 30 * 60 * 1000; // 30 minutes
  
  if (timeElapsed < blockDuration) {
    const remainingMinutes = Math.ceil((blockDuration - timeElapsed) / 60000);
    console.log('🚫 Rate limited! Remaining:', remainingMinutes, 'minutes');
  } else {
    console.log('✅ Rate limit expired, access restored');
  }
} else {
  console.log('✅ No rate limiting active');
}

// Test 4: Security Logs
console.log('\n4. Security Analytics:');
const securityLogs = JSON.parse(localStorage.getItem('security_logs') || '[]');
const adminLogs = JSON.parse(localStorage.getItem('admin_security_logs') || '[]');

console.log('   - Security logs:', securityLogs.length, 'entries');
console.log('   - Admin logs:', adminLogs.length, 'entries');

if (adminLogs.length > 0) {
  console.log('   - Recent admin activity:');
  adminLogs.slice(-3).forEach((log, index) => {
    const time = new Date(log.timestamp).toLocaleTimeString();
    const status = log.success ? '✅ Success' : '❌ Failed';
    console.log(`     ${index + 1}. ${time} - ${status}`);
  });
}

// Test 5: Environment Detection
console.log('\n5. Environment Analysis:');
console.log('   - Hostname:', window.location.hostname);
console.log('   - Protocol:', window.location.protocol);
console.log('   - Environment:', window.location.hostname === 'localhost' ? 'Development' : 'Production');
console.log('   - User Agent:', navigator.userAgent.substring(0, 50) + '...');

// Test 6: CAPTCHA Integration
console.log('\n6. CAPTCHA Integration:');
const recaptchaLoaded = typeof grecaptcha !== 'undefined';
console.log('   - reCAPTCHA loaded:', recaptchaLoaded);

if (recaptchaLoaded) {
  console.log('   - reCAPTCHA ready:', typeof grecaptcha.ready === 'function');
} else {
  console.log('   - reCAPTCHA script may not be loaded yet');
}

// Utility Functions for Testing
console.log('\n📋 Utility Functions Available:');
console.log('   - clearSecurityData() - Clear all security localStorage');
console.log('   - simulateFailedAttempt() - Add a failed admin attempt');
console.log('   - checkSecurityStatus() - Full security status check');

// Define utility functions
window.clearSecurityData = function() {
  const keys = ['admin_attempts', 'admin_last_attempt', 'portfolio_verified', 
                'portfolio_verified_time', 'admin_bypass', 'admin_verified', 
                'admin_session', 'security_logs', 'admin_security_logs'];
  
  keys.forEach(key => localStorage.removeItem(key));
  console.log('🗑️ All security data cleared');
};

window.simulateFailedAttempt = function() {
  const currentAttempts = parseInt(localStorage.getItem('admin_attempts') || '0');
  const newAttempts = currentAttempts + 1;
  
  localStorage.setItem('admin_attempts', newAttempts.toString());
  localStorage.setItem('admin_last_attempt', Date.now().toString());
  
  console.log(`❌ Simulated failed attempt #${newAttempts}`);
  
  if (newAttempts >= 3) {
    console.log('🚫 Admin access now blocked for 30 minutes');
  }
};

window.checkSecurityStatus = function() {
  console.log('\n🔍 Current Security Status:');
  console.log('   - Admin attempts:', localStorage.getItem('admin_attempts') || '0');
  console.log('   - Portfolio verified:', localStorage.getItem('portfolio_verified') || 'false');
  console.log('   - Admin bypass:', localStorage.getItem('admin_bypass') || 'false');
  
  const rateLimited = parseInt(localStorage.getItem('admin_attempts') || '0') >= 3;
  console.log('   - Rate limited:', rateLimited);
  
  if (rateLimited) {
    const lastAttempt = localStorage.getItem('admin_last_attempt');
    if (lastAttempt) {
      const timeElapsed = Date.now() - parseInt(lastAttempt);
      const remaining = Math.ceil((30 * 60 * 1000 - timeElapsed) / 60000);
      console.log('   - Block remaining:', Math.max(0, remaining), 'minutes');
    }
  }
};

console.log('\n✅ Security System Verification Complete');
console.log('   Run utility functions to test different scenarios');
console.log('   Check browser Network tab for reCAPTCHA requests');
console.log('   Verify admin panel visibility in development mode');
