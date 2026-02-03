import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="bg-[#F5EFE6] text-[#2B1B12] overflow-x-hidden"
    >
      <Cursor />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Footer />
    </motion.div>
  );
}
