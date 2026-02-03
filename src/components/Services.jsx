import { motion } from 'framer-motion';

const services = ['Web Development', 'Mobile Applications', 'UI/UX Design'];

export default function Services() {
  return (
    <section className="py-24 px-8">
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-center mb-14"
      >
        Our Expertise
      </motion.h3>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.7 }}
            className="p-8 bg-white rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <h4 className="font-semibold text-xl mb-3">{s}</h4>
            <p className="text-[#5A4633]">Business-driven solutions built with modern technologies.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
