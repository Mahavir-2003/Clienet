import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import type { AppProps } from 'next/app';
import Cursor from '@/components/Cursor';
import Footer from '@/components/HomePage/Footer';

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <div data-scroll-container >
      <Cursor />
      <Navbar />
      <Component {...pageProps}/>
      <Footer />
    </div>
  );
}


 