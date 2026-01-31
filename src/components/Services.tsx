import React from 'react';
import { Layout, Code, Smartphone, Globe } from 'lucide-react';

const services = [
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging digital interfaces.',
    icon: <Layout className="w-8 h-8 text-accent" />,
  },
  {
    title: 'Web Development',
    description: 'Building fast and responsive websites with modern tools.',
    icon: <Globe className="w-8 h-8 text-accent" />,
  },
  {
    title: 'App Development',
    description: 'Developing high-quality mobile applications.',
    icon: <Smartphone className="w-8 h-8 text-accent" />,
  },
  {
    title: 'Code Review',
    description: 'Ensuring your codebase is clean, efficient, and scalable.',
    icon: <Code className="w-8 h-8 text-accent" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="px-6 py-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 bg-zinc-900 rounded-3xl border border-white/5 hover:border-accent/30 transition-all group">
              <div className="mb-6 group-hover:scale-110 transition-transform inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-zinc-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
