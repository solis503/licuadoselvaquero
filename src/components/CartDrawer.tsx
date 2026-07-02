import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    subtotal,
    isCartOpen,
    closeCart,
    openCheckout,
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[70]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md z-[71] bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-brown-100 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-brown-800">Tu Cesta</h2>
                  <p className="text-xs text-brown-400">
                    {totalItems} {totalItems === 1 ? 'producto' : 'productos'}
                  </p>
                </div>
              </div>
              <button
                onClick={closeCart}
                className="w-8 h-8 rounded-full bg-brown-50 hover:bg-brown-100 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-brown-500" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-5">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <motion.span
                    className="text-6xl mb-4"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🛒
                  </motion.span>
                  <h3 className="text-lg font-bold text-brown-700 mb-2">
                    Tu cesta está vacía
                  </h3>
                  <p className="text-sm text-brown-400 mb-6">
                    Agrega productos del menú para empezar tu pedido
                  </p>
                  <button
                    onClick={closeCart}
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl text-sm font-semibold"
                  >
                    Ver Menú
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => {
                    const extrasTotal = item.extras.reduce((s, e) => s + e.price, 0);
                    const lineTotal = (item.product.price + extrasTotal) * item.quantity;

                    return (
                      <motion.div
                        key={item.cartId}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="bg-cream-50 rounded-2xl p-4 border border-brown-50"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-2xl mt-0.5">{item.product.emoji}</span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <h4 className="text-sm font-bold text-brown-800">
                                  {item.product.name}
                                </h4>
                                <p className="text-xs text-brown-400 capitalize">
                                  {item.product.category} — ${item.product.price.toFixed(2)}
                                </p>
                              </div>
                              <button
                                onClick={() => removeItem(item.cartId)}
                                className="w-7 h-7 rounded-full bg-red-50 hover:bg-red-100 flex items-center justify-center flex-shrink-0 transition-colors"
                              >
                                <Trash2 className="w-3.5 h-3.5 text-red-400" />
                              </button>
                            </div>

                            {/* Extras */}
                            {item.extras.length > 0 && (
                              <div className="mt-2 space-y-0.5">
                                {item.extras.map((e) => (
                                  <p
                                    key={e.id}
                                    className="text-xs text-brown-500 flex items-center gap-1"
                                  >
                                    <span>{e.emoji}</span>
                                    <span>+ {e.name}</span>
                                    <span className="text-orange-500 font-medium ml-auto">
                                      +${e.price.toFixed(2)}
                                    </span>
                                  </p>
                                ))}
                              </div>
                            )}

                            {/* Note */}
                            {item.note && (
                              <p className="mt-1 text-xs text-brown-400 italic">
                                📝 {item.note}
                              </p>
                            )}

                            {/* Quantity + total */}
                            <div className="flex items-center justify-between mt-3">
                              <div className="flex items-center gap-2 bg-white rounded-xl border border-brown-100">
                                <button
                                  onClick={() =>
                                    updateQuantity(item.cartId, item.quantity - 1)
                                  }
                                  disabled={item.quantity <= 1}
                                  className="w-8 h-8 flex items-center justify-center text-brown-500 hover:text-orange-500 disabled:opacity-30 transition-colors"
                                >
                                  <Minus className="w-3.5 h-3.5" />
                                </button>
                                <span className="text-sm font-bold text-brown-800 w-6 text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() =>
                                    updateQuantity(item.cartId, item.quantity + 1)
                                  }
                                  className="w-8 h-8 flex items-center justify-center text-brown-500 hover:text-orange-500 transition-colors"
                                >
                                  <Plus className="w-3.5 h-3.5" />
                                </button>
                              </div>
                              <span className="text-base font-bold gradient-text">
                                ${lineTotal.toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="flex-shrink-0 border-t border-brown-100 p-5 bg-cream-50 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-brown-500">Subtotal ({totalItems} productos)</span>
                  <span className="font-bold text-brown-800">${subtotal.toFixed(2)}</span>
                </div>

                <motion.button
                  onClick={openCheckout}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl font-bold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-shadow"
                >
                  Completar Pedido
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <button
                  onClick={clearCart}
                  className="w-full text-center text-xs text-brown-400 hover:text-red-500 transition-colors py-1"
                >
                  Vaciar cesta
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
