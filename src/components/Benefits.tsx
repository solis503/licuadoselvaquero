import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Leaf, Zap, Heart, DollarSign, Clock, Smile } from 'lucide-react';

const benefits = [
  {
    icon: Leaf,
    title: 'Ingredientes Frescos',
    description: 'Usamos frutas frescas del día para garantizar el mejor sabor y nutrición en cada bebida.',
    color: 'from-green-400 to-emerald-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: DollarSign,
    title: 'Precios Accesibles',
    description: 'Calidad premium a precios que todos pueden pagar. Desde $0.75 los pinchos y $1.50 los licuados.',
    color: 'from-amber-400 to-yellow-500',
    bgColor: 'bg-amber-50',
  },
  {
    icon: Zap,
    title: 'Preparación Rápida',
    description: 'Tu licuado listo en minutos. Hecho al momento con la frescura que mereces.',
    color: 'from-orange-400 to-red-500',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Heart,
    title: '100% Natural',
    description: 'Sin conservadores, sin colorantes artificiales. Solo frutas naturales y amor por lo que hacemos.',
    color: 'from-pink-400 to-rose-500',
    bgColor: 'bg-pink-50',
  },
  {
    icon: Clock,
    title: 'Horario Conveniente',
    description: 'Local abierto de 1:15 a 8:30 PM. Delivery de 1:15 a 8:00 PM. De lunes a sábado.',
    color: 'from-blue-400 to-indigo-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Smile,
    title: 'Personalizable + Delivery',
    description: 'Agrega extras a tu gusto y recibe en tu puerta desde $1.00 en Atiquizaya. ¡Pide por WhatsApp o desde la web!',
    color: 'from-purple-400 to-violet-500',
    bgColor: 'bg-purple-50',
  },
];

export default function Benefits() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="beneficios" ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-orange-50/30 to-cream-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            ¿Por Qué Elegirnos?
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brown-800 mb-4">
            Lo Que Nos Hace <span className="gradient-text">Especiales</span>
          </h2>
          <p className="text-lg text-brown-500 max-w-2xl mx-auto">
            No solo vendemos licuados, creamos experiencias frescas con ingredientes de primera calidad.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-brown-50 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/30 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 rounded-2xl ${benefit.bgColor} flex items-center justify-center mb-5 group-hover:shadow-md transition-shadow`}
                >
                  <Icon className="w-7 h-7 text-brown-600 group-hover:text-orange-600 transition-colors" />
                </motion.div>
                <h3 className="text-lg font-bold text-brown-800 mb-2 group-hover:text-orange-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-brown-400 leading-relaxed">{benefit.description}</p>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
