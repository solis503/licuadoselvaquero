import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Check, Star, Sparkles } from 'lucide-react';
// pricing info shown inline

const pricingTiers = [
  {
    name: 'Pinchos',
    emoji: '🍡',
    price: '0.75',
    suffix: 'desde',
    description: 'El snack perfecto para cualquier momento',
    features: [
      'Chocobananos clásicos',
      'Frutas frescas en palito',
      '8 variedades disponibles',
      'Ideal para niños',
      'Llevar y disfrutar',
    ],
    popular: false,
    cta: 'Pedir Pinchos',
  },
  {
    name: 'Licuados',
    emoji: '🥤',
    price: '1.50',
    suffix: 'desde',
    description: 'Nuestras bebidas cremosas con leche y frutas',
    features: [
      '26 sabores únicos',
      'Frutas frescas del día',
      'Personaliza con extras',
      'Convierte a frozen +$0.25',
      'Porciones generosas',
      'Combinaciones especiales',
    ],
    popular: true,
    cta: 'Pedir Licuado',
  },
  {
    name: 'Frozen',
    emoji: '🧊',
    price: '1.75',
    suffix: 'desde',
    description: 'Bebidas heladas, yogurt y frappuccinos',
    features: [
      '22 sabores helados',
      'Frappuccinos premium',
      'Limonadas refrescantes',
      'Yogurt frozen',
      'Perfecto para el calor',
    ],
    popular: false,
    cta: 'Pedir Frozen',
  },
];

export default function Pricing() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-white to-cream-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Precios
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brown-800 mb-4">
            Sabor Premium, <span className="gradient-text">Precio Accesible</span>
          </h2>
          <p className="text-lg text-brown-500 max-w-2xl mx-auto">
            Disfruta de bebidas y snacks de la más alta calidad sin vaciar tu bolsillo.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className={`relative bg-white rounded-3xl p-8 border transition-all duration-300 ${
                tier.popular
                  ? 'border-orange-200 shadow-xl shadow-orange-100/50 scale-105 md:scale-110'
                  : 'border-brown-100 hover:border-orange-200 hover:shadow-lg'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full text-xs font-bold shadow-lg shadow-orange-500/25">
                    <Star className="w-3 h-3 fill-white" />
                    Más Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <motion.span className="text-4xl block mb-3" whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}>
                  {tier.emoji}
                </motion.span>
                <h3 className="text-xl font-bold text-brown-800">{tier.name}</h3>
                <p className="text-xs text-brown-400 mt-1">{tier.description}</p>
              </div>

              <div className="text-center mb-6">
                <span className="text-xs text-brown-400 uppercase tracking-wider">{tier.suffix}</span>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm font-medium text-brown-500">$</span>
                  <span className="text-5xl font-bold gradient-text">{tier.price}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-brown-600">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <motion.a
                href="#menu"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`block text-center py-3.5 rounded-2xl font-semibold text-sm transition-all ${
                  tier.popular
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25'
                    : 'bg-brown-50 text-brown-700 hover:bg-orange-50 hover:text-orange-700'
                }`}
              >
                {tier.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Extra info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-white/80 backdrop-blur-sm border border-brown-100 rounded-2xl text-sm text-brown-500">
            <span className="text-lg">🍽️</span>
            <strong className="text-brown-700">Comida: Nachos $2.50</strong>
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-white/80 backdrop-blur-sm border border-brown-100 rounded-2xl text-sm text-brown-500">
            <span className="text-lg">✨</span>
            <strong className="text-brown-700">Extras desde $0.25</strong>
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-white/80 backdrop-blur-sm border border-brown-100 rounded-2xl text-sm text-brown-500">
            <span className="text-lg">🚗</span>
            <span><strong className="text-brown-700">Envío: $1.00</strong> zona urbana · <strong className="text-brown-700">$1.50</strong> fuera</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
