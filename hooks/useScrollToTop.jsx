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

  // if (typeof window === 'undefined') {
  //   // Prevent rendering on the server
  //   return null;
  // }

  return (
    <div
      className={`scroll-to-top ${showScroll ? 'show' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <FiChevronUp className="icon" />
    </div>
  );
}

export default ScrollToTopButton;
