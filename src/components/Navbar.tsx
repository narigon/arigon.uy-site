import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
      <div className="text-xl font-bold tracking-tighter uppercase">Nicolas Arigon</div>

      <div className="hidden md:flex items-center space-x-8">
        <a href="#work" className="text-sm font-medium hover:text-accent transition-colors">Work</a>
        <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">About</a>
        <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">Services</a>
      </div>

      <button className="bg-accent hover:bg-accent/90 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all">
        Let's Talk
      </button>
    </nav>
  );
};

export default Navbar;
