import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Phone, ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/products';

export default function CTA() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600" />
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-8xl">🍓</div>
        <div className="absolute top-20 right-20 text-7xl">🥤</div>
        <div className="absolute bottom-10 left-1/3 text-6xl">🍊</div>
        <div className="absolute bottom-20 right-10 text-8xl">🧊</div>
        <div className="absolute top-1/2 left-20 text-5xl">🥝</div>
      </div>

      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mb-6"
            animate={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img src="/images/logo-vaquero.png" alt="El Vaquero" className="h-20 w-auto mx-auto rounded-2xl shadow-lg" />
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
            ¿Listo Para Probar el{' '}
            <span className="text-brown-900/80">Mejor Licuado</span>{' '}
            de Tu Vida?
          </h2>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Haz tu pedido por WhatsApp al <strong>7044-7864</strong> y lo tendremos listo. ¡Delivery desde $1.00 en Atiquizaya!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white text-orange-600 rounded-2xl text-base font-bold shadow-xl hover:shadow-2xl transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Pedir desde el Menú
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 rounded-2xl text-base font-semibold hover:bg-white/30 transition-all"
            >
              <Phone className="w-5 h-5" />
              WhatsApp: 7044-7864
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
