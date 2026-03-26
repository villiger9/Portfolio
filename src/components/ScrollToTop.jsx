import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="btn btn-accent rounded-circle shadow-lg position-fixed"
          style={{
            bottom: '40px',
            right: '40px',
            zIndex: 1000,
            width: '50px',
            height: '50px',
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
}
