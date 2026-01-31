import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-bold tracking-tighter">LOGO</div>

        <div className="flex items-center space-x-6">
          <a href="#" className="text-zinc-400 hover:text-white transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-zinc-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-zinc-400 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-zinc-400 hover:text-white transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        <p className="text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} Designer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
