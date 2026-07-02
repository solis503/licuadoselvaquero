import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { TrendingUp, Plus } from 'lucide-react';
import { products, type Product } from '../data/products';
import ProductCustomizeModal from './ProductCustomizeModal';

const featured = [
  {
    productId: 'lic-5',
    name: 'Galleta con Leche',
    image: 'https://images.pexels.com/photos/9066088/pexels-photo-9066088.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500',
  },
  {
    productId: 'lic-9',
    name: 'Licuado de Fresa',
    image: 'https://images.pexels.com/photos/33039184/pexels-photo-33039184.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500',
  },
  {
    productId: 'lic-12',
    name: 'Licuado de Guineo',
    image: 'https://images.pexels.com/photos/14994697/pexels-photo-14994697.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500',
  },
  {
    productId: 'lic-8',
    name: 'Licuado de Chocolate',
    image: 'https://images.pexels.com/photos/7491905/pexels-photo-7491905.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500',
  },
  {
    productId: 'frz-2',
    name: 'Frappuccino Carmelo',
    image: 'https://images.pexels.com/photos/15086187/pexels-photo-15086187.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500',
  },
];

export default function FeaturedProducts() {
  const { ref, isInView } = useScrollReveal();
  const [customizeProduct, setCustomizeProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePedir = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      setCustomizeProduct(product);
      setIsModalOpen(true);
    }
  };

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-cream-50 to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            Los Más Vendidos
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brown-800 mb-4">
            Favoritos de Nuestros <span className="gradient-text">Clientes</span>
          </h2>
          <p className="text-lg text-brown-500 max-w-2xl mx-auto">
            Los sabores que enamoran a todos. ¡Pruébalos y descubre tu favorito!
          </p>
        </motion.div>

        {/* Featured grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {featured.map((item, i) => (
            <motion.div
              key={item.productId}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl overflow-hidden border border-brown-50 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/60 via-brown-900/10 to-transparent" />

                {/* Add button overlay */}
                <motion.button
                  onClick={() => handlePedir(item.productId)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white shadow-lg transition-all duration-300"
                  aria-label={`Agregar ${item.name}`}
                >
                  <Plus className="w-5 h-5" />
                </motion.button>

                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-sm md:text-base leading-tight drop-shadow-lg">
                    {item.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Customization Modal */}
      <ProductCustomizeModal
        product={customizeProduct}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setCustomizeProduct(null);
        }}
      />
    </section>
  );
}
