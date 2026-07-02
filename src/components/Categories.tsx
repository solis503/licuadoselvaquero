import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { categories } from '../data/products';
import { ArrowRight } from 'lucide-react';

export default function Categories() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="categorias" ref={ref} className="py-20 md:py-28 bg-cream-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
            Nuestro Menú
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brown-800 mb-4">
            Categorías para Todos los <span className="gradient-text">Gustos</span>
          </h2>
          <p className="text-lg text-brown-500 max-w-2xl mx-auto">
            Desde licuados cremosos hasta pinchos refrescantes, tenemos algo especial para cada momento del día.
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.id}
              href="#menu"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-orange-100/50 border border-brown-50 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-t-3xl`} />
              
              {/* Emoji icon */}
              <motion.div
                className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-5 group-hover:scale-110 transition-transform"
                whileHover={{ rotate: [0, -5, 5, 0] }}
              >
                {cat.emoji}
              </motion.div>

              <h3 className="text-base md:text-xl font-bold text-brown-800 mb-1 md:mb-2 group-hover:text-orange-600 transition-colors">
                {cat.name}
              </h3>
              <p className="text-xs md:text-sm text-brown-400 mb-3 md:mb-4 leading-relaxed hidden sm:block">
                {cat.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs md:text-sm font-semibold text-orange-500">{cat.priceRange}</span>
                <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-500 group-hover:text-white transition-colors" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
