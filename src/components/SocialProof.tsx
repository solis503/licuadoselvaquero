import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const stats = [
  { number: '60+', label: 'Productos', emoji: '🥤' },
  { number: '4', label: 'Categorías', emoji: '📋' },
  { number: '5★', label: 'Calificación', emoji: '⭐' },
  { number: '$1.00', label: 'Envío desde', emoji: '🚗' },
];

export default function SocialProof() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section ref={ref} className="relative py-16 md:py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="text-center p-6 md:p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-brown-100/50 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/50 transition-all duration-300 hover:-translate-y-1">
                <motion.span
                  className="text-3xl md:text-4xl block mb-3"
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  {stat.emoji}
                </motion.span>
                <p className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.number}</p>
                <p className="text-sm text-brown-500 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
