import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { faqs } from '../data/products';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="faq" ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-orange-50/20 to-cream-50" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brown-800 mb-4">
            ¿Tienes <span className="gradient-text">Preguntas?</span>
          </h2>
          <p className="text-lg text-brown-500">
            Aquí encontrarás las respuestas a las preguntas más comunes.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                  openIndex === i
                    ? 'bg-white shadow-lg shadow-orange-100/30 border border-orange-100'
                    : 'bg-white/60 hover:bg-white hover:shadow-md border border-transparent hover:border-brown-100'
                }`}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3
                    className={`text-base font-semibold transition-colors ${
                      openIndex === i ? 'text-orange-600' : 'text-brown-800'
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      openIndex === i ? 'bg-orange-100' : 'bg-brown-50'
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 ${
                        openIndex === i ? 'text-orange-600' : 'text-brown-400'
                      }`}
                    />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-brown-500 leading-relaxed mt-4 pr-12">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
