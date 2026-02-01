import React from 'react';
import { Layout, Code, Smartphone, Globe } from 'lucide-react';

const services = [
  {
    title: 'Engineering Leadership',
    description: 'Strategic initiatives and high-performance teams.',
    icon: <Layout className="w-8 h-8 text-accent" />,
  },
  {
    title: 'Cloud & DevOps',
    description: 'Scalable web solutions and advanced cloud systems.',
    icon: <Globe className="w-8 h-8 text-accent" />,
  },
  {
    title: 'Security & Compliance',
    description: 'VAPT, NIST, HIPAA, and GDPR standards.',
    icon: <Smartphone className="w-8 h-8 text-accent" />,
  },
  {
    title: 'AI & ML Experimentation',
    description: 'RAG, AI agents, and LLM implementation.',
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
