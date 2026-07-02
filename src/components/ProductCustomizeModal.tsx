import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, ShoppingCart, Check } from 'lucide-react';
import {
  extras as allExtras,
  pinchosToppings,
  type Product,
  type Extra,
} from '../data/products';
import { useCart } from '../context/CartContext';

interface Props {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductCustomizeModal({ product, isOpen, onClose }: Props) {
  const { addItem } = useCart();
  const [selectedExtras, setSelectedExtras] = useState<Extra[]>([]);
  const [selectedToppings, setSelectedToppings] = useState<Extra[]>([]);
  const [note, setNote] = useState('');
  const [justAdded, setJustAdded] = useState(false);

  if (!product) return null;

  const isPincho = product.category === 'pinchos';
  const isDrink = product.category === 'licuados' || product.category === 'frozen';

  const toggleExtra = (extra: Extra) => {
    setSelectedExtras((prev) =>
      prev.find((e) => e.id === extra.id)
        ? prev.filter((e) => e.id !== extra.id)
        : [...prev, extra]
    );
  };

  const toggleTopping = (topping: Extra) => {
    setSelectedToppings((prev) =>
      prev.find((t) => t.id === topping.id)
        ? prev.filter((t) => t.id !== topping.id)
        : [...prev, topping]
    );
  };

  const extrasTotal = selectedExtras.reduce((s, e) => s + e.price, 0);
  const itemTotal = product.price + extrasTotal;

  const handleAdd = () => {
    // Combine toppings into note for pinchos (since toppings are free)
    const allSelectedExtras = [...selectedExtras];
    let finalNote = note;

    if (isPincho && selectedToppings.length > 0) {
      const toppingNames = selectedToppings.map((t) => t.name).join(', ');
      finalNote = finalNote
        ? `Toppings: ${toppingNames} | ${finalNote}`
        : `Toppings: ${toppingNames}`;
    }

    addItem(product, allSelectedExtras, finalNote);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      setSelectedExtras([]);
      setSelectedToppings([]);
      setNote('');
      onClose();
    }, 600);
  };

  const handleClose = () => {
    setSelectedExtras([]);
    setSelectedToppings([]);
    setNote('');
    setJustAdded(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-x-4 top-[5%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-lg z-[61] max-h-[90vh] flex flex-col bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className={`relative p-6 flex-shrink-0 ${
              isPincho
                ? 'bg-gradient-to-r from-pink-500 to-rose-500'
                : 'bg-gradient-to-r from-orange-500 to-amber-500'
            }`}>
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-4">
                <motion.span
                  className="text-5xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.1 }}
                >
                  {product.emoji}
                </motion.span>
                <div>
                  <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  <p className="text-white/80 text-sm capitalize">{product.category}</p>
                  <p className="text-2xl font-bold text-white mt-1">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>

            {/* Content - scrollable */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* ====== PINCHOS TOPPINGS ====== */}
              {isPincho && (
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-brown-800 mb-1 flex items-center gap-2">
                    <span className="text-lg">🍫</span>
                    Elige tus Toppings
                  </h4>
                  <p className="text-xs text-brown-400 mb-4">
                    Selecciona los toppings para tu {product.name.toLowerCase()}
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    {pinchosToppings.map((topping) => {
                      const isSelected = selectedToppings.some((t) => t.id === topping.id);
                      return (
                        <motion.button
                          key={topping.id}
                          onClick={() => toggleTopping(topping)}
                          whileTap={{ scale: 0.95 }}
                          className={`flex items-center gap-2 p-3 rounded-xl border-2 text-left transition-all duration-200 ${
                            isSelected
                              ? 'border-pink-400 bg-pink-50 shadow-sm'
                              : 'border-brown-100 bg-white hover:border-pink-200 hover:bg-pink-50/50'
                          }`}
                        >
                          <span className="text-lg flex-shrink-0">{topping.emoji}</span>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-semibold text-brown-700">
                              {topping.name}
                            </p>
                            <p className="text-[10px] text-green-600 font-medium">Incluido</p>
                          </div>
                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0"
                            >
                              <Check className="w-3 h-3 text-white" />
                            </motion.div>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ====== DRINK EXTRAS ====== */}
              {isDrink && (
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-brown-800 mb-1 flex items-center gap-2">
                    <Plus className="w-4 h-4 text-orange-500" />
                    Agregar Extras
                  </h4>
                  <p className="text-xs text-brown-400 mb-4">
                    Personaliza tu{' '}
                    {product.category === 'licuados' ? 'licuado' : 'frozen'} con
                    ingredientes extra
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    {allExtras.map((extra) => {
                      const isSelected = selectedExtras.some((e) => e.id === extra.id);
                      return (
                        <motion.button
                          key={extra.id}
                          onClick={() => toggleExtra(extra)}
                          whileTap={{ scale: 0.95 }}
                          className={`flex items-center gap-2 p-3 rounded-xl border-2 text-left transition-all duration-200 ${
                            isSelected
                              ? 'border-orange-400 bg-orange-50 shadow-sm'
                              : 'border-brown-100 bg-white hover:border-orange-200 hover:bg-orange-50/50'
                          }`}
                        >
                          <span className="text-lg flex-shrink-0">{extra.emoji}</span>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-semibold text-brown-700 truncate">
                              {extra.name}
                            </p>
                            <p className="text-xs text-orange-500 font-bold">
                              +${extra.price.toFixed(2)}
                            </p>
                          </div>
                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0"
                            >
                              <Check className="w-3 h-3 text-white" />
                            </motion.div>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Note */}
              <div>
                <h4 className="text-sm font-bold text-brown-800 mb-2">📝 Nota especial</h4>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Ej: Sin hielo, más dulce, etc."
                  className="w-full px-4 py-3 bg-brown-50 border border-brown-100 rounded-xl text-sm text-brown-700 placeholder:text-brown-300 focus:outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-100 resize-none"
                  rows={2}
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex-shrink-0 border-t border-brown-100 p-6 bg-cream-50">
              {/* Extras price summary */}
              {selectedExtras.length > 0 && (
                <div className="mb-3 space-y-1">
                  <div className="flex justify-between text-xs text-brown-500">
                    <span>Producto base</span>
                    <span>${product.price.toFixed(2)}</span>
                  </div>
                  {selectedExtras.map((e) => (
                    <div key={e.id} className="flex justify-between text-xs text-brown-500">
                      <span className="flex items-center gap-1">
                        <span>{e.emoji}</span>
                        {e.name}
                      </span>
                      <span>+${e.price.toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t border-dashed border-brown-200 pt-1" />
                </div>
              )}

              {/* Toppings summary for pinchos */}
              {isPincho && selectedToppings.length > 0 && (
                <div className="mb-3">
                  <p className="text-xs text-brown-500 flex items-center gap-1">
                    🍫 Toppings:{' '}
                    <span className="font-medium text-brown-700">
                      {selectedToppings.map((t) => t.name).join(', ')}
                    </span>
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-brown-800">Total por unidad:</span>
                <span className="text-2xl font-bold gradient-text">
                  ${itemTotal.toFixed(2)}
                </span>
              </div>

              <motion.button
                onClick={handleAdd}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={justAdded}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-base font-bold transition-all ${
                  justAdded
                    ? 'bg-green-500 text-white'
                    : isPincho
                      ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40'
                      : 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40'
                }`}
              >
                {justAdded ? (
                  <>
                    <Check className="w-5 h-5" />
                    ¡Agregado!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    Agregar a la Cesta — ${itemTotal.toFixed(2)}
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
