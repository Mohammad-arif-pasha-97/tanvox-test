import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#2B1B12] to-[#F5EFE6] text-[#F5EFE6]">
      <motion.h2
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-5xl font-bold mb-4"
      >
        Tanvox Technology
      </motion.h2>

      <motion.p
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.9 }}
        className="max-w-xl text-[#D6C3B3]"
      >
        We craft high-performance digital products, modern software, and scalable solutions.
      </motion.p>

      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8 px-8 py-4 bg-[#C19A6B] text-[#2B1B12] rounded-full font-semibold"
      >
        Explore Solutions
      </motion.button>
    </section>
  );
}
