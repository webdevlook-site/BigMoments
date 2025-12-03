import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Roster from './components/Roster';
import GlobalNetwork from './components/GlobalNetwork';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-lime-300 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Roster />
        <GlobalNetwork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
