import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { testimonials } from '../data/products';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="opiniones" ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brown-800 via-brown-900 to-brown-800" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-300 rounded-full text-sm font-semibold mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Lo Que Dicen Nuestros{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
              Clientes
            </span>
          </h2>
          <p className="text-lg text-brown-300 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group glass-dark rounded-3xl p-8 hover:bg-brown-700/50 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-orange-400/30 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-brown-200 text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <span className="text-2xl">{testimonial.avatar}</span>
                <div>
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-brown-400 text-xs">Cliente frecuente</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
