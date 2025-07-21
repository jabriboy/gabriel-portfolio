import React from 'react';
import './App.css';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Technology from './components/Technology';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Technology />
        <About />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

