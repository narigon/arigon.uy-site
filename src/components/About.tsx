import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="px-6 py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            I am a passionate designer dedicated to creating digital experiences that are not only visually stunning but also highly functional and user-centric.
            With over 5 years of experience in the industry, I have worked with brands ranging from startups to Fortune 500 companies.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed">
            My approach combines strategic thinking with creative excellence, ensuring that every project I undertake delivers measurable results and a lasting impact.
          </p>
        </div>
        <div className="flex-1">
          <div className="aspect-square bg-zinc-800 rounded-3xl overflow-hidden border border-white/5 flex items-center justify-center text-white/5 text-2xl font-bold">
            ABOUT IMAGE
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
