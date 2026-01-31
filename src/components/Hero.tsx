import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
          Crafting the next <br />
          <span className="text-accent italic">digital masterpiece</span>
        </h1>

        <div className="mt-12 relative inline-block">
          <div className="w-64 h-80 bg-zinc-800 rounded-2xl overflow-hidden border-2 border-white/5 shadow-2xl">
            {/* Placeholder for portrait image */}
            <div className="w-full h-full bg-gradient-to-b from-accent/10 to-transparent flex items-end justify-center pb-8 text-white/20 text-xs font-mono">
              PORTRAIT IMAGE
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent rounded-full -z-10 blur-xl opacity-50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
