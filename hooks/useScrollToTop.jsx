import { useState, useEffect } from 'react';
import { FiChevronUp } from 'react-icons/fi';

function ScrollToTopButton() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (typeof window === 'undefined') {
    // Prevent rendering on the server
    return null;
  }

  return (
    <FiChevronUp
      className="scrollToTop"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        height: 40,
        width: 40,
        padding: 7,
        borderRadius: 50,
        right: 50,
        bottom: 50,
        position: 'fixed',
        cursor: 'pointer',
        backgroundColor: '#333',
        color: '#fff',
        display: showScroll ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    />
  );
}

export default ScrollToTopButton;
