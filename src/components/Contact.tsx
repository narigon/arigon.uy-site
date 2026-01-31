import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="px-6 py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Talk</h2>
          <p className="text-zinc-400 text-lg mb-8">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Mail className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-zinc-500">Email</p>
                <p className="font-semibold">hello@designer.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Phone className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-zinc-500">Phone</p>
                <p className="font-semibold">+1 (555) 000-0000</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <MapPin className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-zinc-500">Location</p>
                <p className="font-semibold">New York, NY</p>
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-6 bg-zinc-900 p-8 rounded-3xl border border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <input type="text" className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-all" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input type="email" className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-all" placeholder="john@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <textarea className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-all h-32" placeholder="Tell me about your project..."></textarea>
          </div>
          <button className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-xl transition-all">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
