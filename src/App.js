import React from 'react';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';


import profileImage from './profile.jpg'; 

function App() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      
      
      <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 px-6 shadow-lg">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          
          
          <div className="relative">
            <img 
              src={profileImage} 
              alt="Leonides Dela Paz Profile" 
              className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-white shadow-2xl scale-100 hover:scale-105 transition-transform duration-300"
            />
          </div>

        
          <div className="text-center md:text-left flex-1">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-2">Leonides Dela Paz</h1>
            <p className="text-xl md:text-2xl font-mono tracking-widest opacity-80 underline decoration-white decoration-2 underline-offset-8">
              ASPIRING NETWORK ENGINEER
            </p>
            <p className="mt-6 text-blue-100 text-lg max-w-lg mx-auto md:mx-0">
              Passionate about building secure networks, managing digital infrastructure, and deploying innovative IT solutions.
            </p>
          </div>

        </div>
      </header>

      
      <main className="max-w-4xl mx-auto p-6 md:p-12">
        <AboutMe />
        <Skills />
        <Education />
        <Experience />
        <Contact />
      </main>

      
      <footer className="text-center py-10 border-t border-slate-200 text-slate-400 text-sm">
        <p>Student ID: 24-2620-600 | Portfolio Project 2026</p>
      </footer>
    </div>
  );
}

export default App;