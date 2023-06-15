import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import gsap from 'gsap';
import CompanyLogo from '../public/svg/Company_Logo.svg';

// Create an array of 10 random light & bright color codes
const colors = ['#eae4e9', '#fff1e6', '#fde2e4', '#fad2e1', '#e2ece9', '#bee1e6', '#f0efeb', '#dfe7fd', '#cddafd', '#d7e1fd'];

const PageTransition: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      // Pick a random color from the array
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      const tl = gsap.timeline();

      // Animation duration in milliseconds
      const animationDuration = 1000;

      // Animation configuration
      const animationConfig = {
        duration: 0.5,
        ease: 'expo.inOut',
      };

      // Show the loading page animation
      tl.set('.loading-page', { backgroundColor: randomColor })
        .set('.loading-container', { display: 'flex' })
        .to('.loading-page', { height: '100%', ...animationConfig })
        .to('.loading-container', { alignItems: 'flex-start' });

      // Hide the loading page after the animation duration and when the page loaded completely
      if (document.readyState === 'complete') {
        setTimeout(() => {
          tl.to('.loading-page', { height: 0, ...animationConfig })
            .to('.loading-container', { alignItems: 'flex-end' })
            .set('.loading-container', { display: 'none' });
        }, animationDuration);
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <div className='loading-container w-screen hidden justify-center items-end h-screen fixed top-0 left-0 z-50'>
      <div className='flex loading-page bg-light-pink justify-center items-center h-0 overflow-hidden w-full'>
        <CompanyLogo className='w-28' />
      </div>
    </div>
  );
};

export default PageTransition;
