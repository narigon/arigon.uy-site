import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
