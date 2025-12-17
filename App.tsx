import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Roster from './components/Roster';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onFinish={() => setIsLoading(false)} />}
      
      {/* 
        Main content is always rendered at full opacity. 
        The loader sits on top (z-100) and slides away to reveal this content.
      */}
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-200 selection:text-teal-900">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Roster />
          <News />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;