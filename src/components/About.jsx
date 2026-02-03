import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-24 px-8 bg-[#D6C3B3]">
      <motion.h3
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl font-bold text-center mb-6"
      >
        About Tanvox
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-3xl mx-auto text-center text-[#2B1B12]"
      >
        Tanvox Technology is a forward-thinking software company delivering secure, scalable, and innovative digital solutions.
      </motion.p>
    </section>
  );
}
