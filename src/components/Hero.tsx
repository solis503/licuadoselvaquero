import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/products';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-orange-50/50 to-amber-50/30" />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-amber-200/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-amber-200/20 to-orange-100/30 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-orange-100/20 to-yellow-100/20 rounded-full blur-2xl" />

      {/* Floating fruit emojis */}
      <motion.div className="absolute top-32 left-[10%] text-4xl md:text-5xl" animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>🍓</motion.div>
      <motion.div className="absolute top-48 right-[15%] text-3xl md:text-4xl" animate={{ y: [10, -15, 10], rotate: [5, -5, 5] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>🍊</motion.div>
      <motion.div className="absolute bottom-32 left-[20%] text-3xl md:text-4xl" animate={{ y: [-15, 5, -15], rotate: [-3, 3, -3] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}>🥝</motion.div>
      <motion.div className="absolute bottom-48 right-[10%] text-3xl md:text-5xl hidden md:block" animate={{ y: [5, -10, 5], rotate: [3, -3, 3] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}>🍌</motion.div>
      <motion.div className="absolute top-[40%] right-[5%] text-2xl md:text-3xl hidden lg:block" animate={{ y: [-8, 12, -8] }} transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}>🥭</motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-orange-100 rounded-full text-sm text-brown-600 mb-6 shadow-sm"
            >
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              </span>
              <span className="font-medium">El favorito del barrio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-brown-800 leading-[1.1] mb-6"
            >
              Frescura{' '}
              <span className="gradient-text">Natural</span>
              <br />
              en Cada Sorbo
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-brown-500 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Más de 60 sabores de licuados, frozen, frappuccinos, pinchos y comida preparados con las frutas más frescas. ¡Pide en línea y personaliza tu bebida!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl text-base font-semibold shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all animate-pulse-glow"
              >
                Ver Menú y Pedir
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-brown-200 text-brown-700 rounded-2xl text-base font-semibold hover:border-orange-300 hover:bg-orange-50 transition-all"
              >
                <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp: 7044-7864
              </motion.a>
            </motion.div>

            {/* Schedule info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mt-8 text-sm text-brown-400 justify-center lg:justify-start"
            >
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-orange-400" />
                <span>Local: 1:15 - 8:30 PM</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-base">🚗</span>
                <span>Delivery: 1:15 - 8:00 PM</span>
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-3xl blur-2xl scale-105" />

              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brown-900/10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="/images/hero-smoothie.jpg"
                  alt="Licuados frescos de El Vaquero"
                  className="w-full h-[400px] md:h-[500px] lg:h-[550px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/20 via-transparent to-transparent" />
              </motion.div>

              {/* Floating price card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -left-4 md:-left-8 glass rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center text-2xl">
                    🥤
                  </div>
                  <div>
                    <p className="text-xs text-brown-400 font-medium">Desde solo</p>
                    <p className="text-2xl font-bold gradient-text">$1.50</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating delivery card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute -top-4 -right-4 md:-right-8 glass rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚗</span>
                  <div>
                    <p className="text-xs text-brown-400 font-medium">Delivery</p>
                    <p className="text-lg font-bold text-brown-700">Desde $1</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full">
          <path d="M0,60 C360,100 720,20 1440,60 L1440,100 L0,100 Z" fill="#FFFDF7" />
        </svg>
      </div>
    </section>
  );
}
