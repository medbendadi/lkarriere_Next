import { useEffect, useState } from 'react';

function useMobileOrResponsive() {
  const [isMobileOrResponsive, setIsMobileOrResponsive] = useState(false);

  const checkIsMobileOrResponsive = () => {
    // Define the screen width threshold for mobile devices
    const mobileWidthThreshold = 768; // You can adjust this value as needed
    setIsMobileOrResponsive(
      typeof window !== 'undefined' && window.innerWidth <= mobileWidthThreshold
    );
  };

  useEffect(() => {
    checkIsMobileOrResponsive();
    
    // Listen to window resize events to update the state
    const handleResize = () => {
      checkIsMobileOrResponsive();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      // Remove the resize event listener when the component unmounts
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobileOrResponsive;
}

export default useMobileOrResponsive;