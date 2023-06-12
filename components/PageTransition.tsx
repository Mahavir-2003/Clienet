import React,{useEffect ,useState} from 'react'
import { useRouter } from 'next/router';
import gsap from 'gsap';
import CompanyLogo from '../public/svg/Company_Logo.svg'

const PageTransition = () => {
  
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      const tl = gsap.timeline();

      // Animation duration in milliseconds
      const animationDuration = 1000;

      // Animation configuration
      const animationConfig = {
        duration: 0.5,
        ease: 'expo.inOut',
      };

      // Show the loading page animation
      tl.set('.loading-container', { display: 'flex' })
        .to('.loading-page', { height: '100%', ...animationConfig })
        .to('.loading-container', { alignItems: 'flex-start' });

      // Hide the loading page after the animation duration
      setTimeout(() => {
        tl.to('.loading-page', { height: 0, ...animationConfig })
          .to('.loading-container', { alignItems: 'flex-end' })
          .set('.loading-container', { display: 'none' });
      }, animationDuration);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);
  
  return (
    <div className='loading-container w-screen hidden justify-center items-end h-screen fixed top-0 left-0 z-20 '>
        <div className='flex loading-page bg-light-pink justify-center items-center h-0 overflow-hidden w-full '>
            <CompanyLogo className="w-28"/>
        </div>
    </div>
  )
}

export default PageTransition