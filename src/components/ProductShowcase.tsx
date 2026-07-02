import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, categories, type Product } from '../data/products';
import { Sparkles, Star, Search, Plus, X } from 'lucide-react';
import ProductCustomizeModal from './ProductCustomizeModal';

type CategoryId = 'licuados' | 'frozen' | 'pinchos' | 'comida';

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('licuados');
  const [searchQuery, setSearchQuery] = useState('');
  const [customizeProduct, setCustomizeProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isSearching = searchQuery.trim().length > 0;

  const filteredProducts = useMemo(() => {
    if (isSearching) {
      const q = searchQuery.toLowerCase().trim();
      return products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.emoji && p.emoji.includes(q))
      );
    }
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory, searchQuery, isSearching]);

  const handleAddProduct = useCallback((product: Product) => {
    setCustomizeProduct(product);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setCustomizeProduct(null);
  }, []);

  return (
    <section id="menu" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-white to-cream-50" />
      <div className="absolute top-20 left-0 w-80 h-80 bg-orange-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Menú Completo
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brown-800 mb-3">
            Nuestros <span className="gradient-text">Productos</span>
          </h2>
          <p className="text-base text-brown-500 max-w-xl mx-auto">
            Elige, personaliza y agrega a tu cesta. ¡Pedir es muy fácil!
          </p>
        </div>

        {/* Search bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brown-300 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="🔍 Buscar... ej: fresa, frozen, nachos, galleta"
              className="w-full pl-12 pr-12 py-4 bg-white border-2 border-brown-100 rounded-2xl text-sm text-brown-800 placeholder:text-brown-300 focus:outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100 shadow-sm hover:border-brown-200 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 bg-brown-100 hover:bg-red-100 hover:text-red-500 rounded-full flex items-center justify-center transition-colors text-brown-500"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category tabs - hidden when searching */}
        {!isSearching && (
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as CategoryId)}
                className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 active:scale-95 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25'
                    : 'bg-white text-brown-600 border border-brown-100 hover:border-orange-200 hover:text-orange-600 hover:shadow-sm'
                }`}
              >
                <span className="text-base sm:text-lg">{cat.emoji}</span>
                {cat.name}
              </button>
            ))}
          </div>
        )}

        {/* Search results count */}
        {isSearching && (
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-medium">
              <Search className="w-4 h-4" />
              {filteredProducts.length > 0
                ? `${filteredProducts.length} resultado${filteredProducts.length !== 1 ? 's' : ''} para "${searchQuery}"`
                : `Sin resultados para "${searchQuery}"`}
            </span>
          </div>
        )}

        {/* Products grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={isSearching ? `s-${searchQuery}` : `c-${activeCategory}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4"
          >
            {filteredProducts.length === 0 ? (
              <div className="col-span-full text-center py-16">
                <span className="text-5xl block mb-4">🔍</span>
                <h3 className="text-lg font-bold text-brown-700 mb-2">No encontramos "{searchQuery}"</h3>
                <p className="text-sm text-brown-400 mb-4">Intenta con otro nombre como: fresa, chocolate, frozen</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-6 py-2.5 bg-orange-500 text-white rounded-xl text-sm font-semibold hover:bg-orange-600 transition-colors"
                >
                  Ver todo el menú
                </button>
              </div>
            ) : (
              filteredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(i * 0.02, 0.4), duration: 0.3 }}
                  className="group relative bg-white rounded-2xl p-4 sm:p-5 border border-brown-50 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/50 transition-all duration-300 hover:-translate-y-1"
                >
                  {product.popular && (
                    <div className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full">
                      <Star className="w-3 h-3 text-white fill-white" />
                      <span className="text-[10px] font-bold text-white">Popular</span>
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      {product.emoji}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs sm:text-sm font-semibold text-brown-800 group-hover:text-orange-600 transition-colors leading-tight">
                        {product.name}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-brown-400 capitalize">{product.category}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-base sm:text-lg font-bold gradient-text">
                        ${product.price.toFixed(2)}
                      </span>
                      <button
                        onClick={() => handleAddProduct(product)}
                        className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center text-white shadow-md shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-110 active:scale-95 transition-all"
                        aria-label={`Agregar ${product.name}`}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Customizable hint */}
                  {(product.category === 'licuados' || product.category === 'frozen') && (
                    <p className="text-[10px] text-brown-300 mt-2 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Toca + para personalizar con extras
                    </p>
                  )}
                  {product.category === 'pinchos' && (
                    <p className="text-[10px] text-brown-300 mt-2 flex items-center gap-1">
                      🍫 Toca + para elegir toppings
                    </p>
                  )}
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>

        {/* Product count */}
        {!isSearching && (
          <p className="text-center mt-8 text-sm text-brown-400">
            {filteredProducts.length} productos en{' '}
            <span className="font-semibold text-brown-600">
              {categories.find((c) => c.id === activeCategory)?.name}
            </span>
            {' '}· Toca <span className="text-orange-500 font-bold">+</span> para agregar
          </p>
        )}
      </div>

      {/* Customization Modal */}
      <ProductCustomizeModal
        product={customizeProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
