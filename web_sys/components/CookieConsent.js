// components/CookieConsent.js
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieConsent = ({ onAccept, onDecline }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('user-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    console.log('accepted');
    Cookies.set('user-consent', 'accepted', { expires: 365 });
    setVisible(false);
    onAccept();
  };

  const handleDecline = () => {
    setVisible(false);
    onDecline();
  };

  if (!visible) return null;

  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#f8f8f8', padding: '20px', textAlign: 'center', zIndex: 1000 }}>
      <p>We use cookies to improve your experience. Do you accept?</p>
      <button onClick={handleAccept}>Accept</button>
      <button onClick={handleDecline}>Decline</button>
    </div>
  );
};

export default CookieConsent;
