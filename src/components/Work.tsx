import React from 'react';

const projects = [
  { id: 1, title: 'Project One', category: 'Web Design' },
  { id: 2, title: 'Project Two', category: 'App Development' },
  { id: 3, title: 'Project Three', category: 'Brand Identity' },
  { id: 4, title: 'Project Four', category: 'UI/UX Design' },
];

const Work: React.FC = () => {
  return (
    <section id="work" className="px-6 py-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Selected Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative aspect-video bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 hover:border-accent/50 transition-all cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-all opacity-0 group-hover:opacity-100">
                <span className="text-accent text-sm font-semibold mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>
              <div className="w-full h-full flex items-center justify-center text-white/5 text-4xl font-bold select-none group-hover:scale-110 transition-transform">
                PROJECT {project.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
