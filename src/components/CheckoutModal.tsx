import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  MapPin,
  User,
  Phone,
  Truck,
  Store,
  Send,
  MessageSquare,
  MapPinned,
  Globe,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
// delivery fees come from CartContext calculations

export default function CheckoutModal() {
  const {
    items,
    subtotal,
    deliveryFee,
    total,
    isCheckoutOpen,
    closeCheckout,
    customerInfo,
    setCustomerInfo,
    sendOrder,
    totalItems,
  } = useCart();

  const canSubmit =
    customerInfo.name.trim() &&
    customerInfo.phone.trim() &&
    (customerInfo.orderType === 'pickup' || customerInfo.address.trim());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (canSubmit) sendOrder();
  };

  return (
    <AnimatePresence>
      {isCheckoutOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCheckout}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[80]"
          />

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-x-3 top-[2%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-lg z-[81] max-h-[96vh] flex flex-col bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-brown-800 to-brown-900 p-5 flex-shrink-0">
              <button
                onClick={closeCheckout}
                className="absolute top-4 right-4 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-3">
                <img src="/images/logo-vaquero.png" alt="El Vaquero" className="h-10 w-auto rounded-lg" />
                <div>
                  <h2 className="text-lg font-bold text-white">Finalizar Pedido</h2>
                  <p className="text-brown-300 text-xs">
                    {totalItems} {totalItems === 1 ? 'producto' : 'productos'} — ${subtotal.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-5 space-y-5">
              {/* ====== DATOS DEL CLIENTE ====== */}
              <div>
                <h3 className="text-sm font-bold text-brown-800 mb-3 flex items-center gap-2">
                  <User className="w-4 h-4 text-orange-500" />
                  Tus Datos
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-brown-600 mb-1">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                      placeholder="¿Cómo te llamas?"
                      className="w-full px-4 py-3 bg-cream-50 border border-brown-100 rounded-xl text-sm text-brown-800 placeholder:text-brown-300 focus:outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-100"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-brown-600 mb-1">
                      Teléfono *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brown-300" />
                      <input
                        type="tel"
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                        placeholder="Tu número para contactarte"
                        className="w-full pl-10 pr-4 py-3 bg-cream-50 border border-brown-100 rounded-xl text-sm text-brown-800 placeholder:text-brown-300 focus:outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-100"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ====== ¿CÓMO LO QUIERES? ====== */}
              <div>
                <h3 className="text-sm font-bold text-brown-800 mb-3 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-orange-500" />
                  ¿Cómo lo quieres?
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {/* Recoger */}
                  <motion.button
                    type="button"
                    onClick={() =>
                      setCustomerInfo({ ...customerInfo, orderType: 'pickup', address: '' })
                    }
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center gap-1.5 p-4 rounded-2xl border-2 transition-all ${
                      customerInfo.orderType === 'pickup'
                        ? 'border-green-400 bg-green-50 shadow-sm'
                        : 'border-brown-100 bg-white hover:border-green-200'
                    }`}
                  >
                    <Store className={`w-7 h-7 ${customerInfo.orderType === 'pickup' ? 'text-green-500' : 'text-brown-400'}`} />
                    <span className="text-sm font-bold text-brown-700">Paso a Recoger</span>
                    <span className="text-xs text-green-600 font-bold">GRATIS</span>
                    <span className="text-[10px] text-brown-400">1:15 - 8:30 PM</span>
                  </motion.button>

                  {/* Delivery */}
                  <motion.button
                    type="button"
                    onClick={() =>
                      setCustomerInfo({ ...customerInfo, orderType: 'delivery' })
                    }
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center gap-1.5 p-4 rounded-2xl border-2 transition-all ${
                      customerInfo.orderType === 'delivery'
                        ? 'border-orange-400 bg-orange-50 shadow-sm'
                        : 'border-brown-100 bg-white hover:border-orange-200'
                    }`}
                  >
                    <Truck className={`w-7 h-7 ${customerInfo.orderType === 'delivery' ? 'text-orange-500' : 'text-brown-400'}`} />
                    <span className="text-sm font-bold text-brown-700">Que me lo lleven</span>
                    <span className="text-xs text-orange-600 font-bold">Desde $1.00</span>
                    <span className="text-[10px] text-brown-400">1:15 - 8:00 PM</span>
                  </motion.button>
                </div>

                {/* Delivery zone + address */}
                <AnimatePresence>
                  {customerInfo.orderType === 'delivery' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 space-y-3">
                        {/* Zone selection */}
                        <div>
                          <label className="block text-xs font-bold text-brown-700 mb-2">
                            📍 ¿Dónde te encuentras?
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            <motion.button
                              type="button"
                              onClick={() =>
                                setCustomerInfo({ ...customerInfo, deliveryZone: 'urban' })
                              }
                              whileTap={{ scale: 0.95 }}
                              className={`flex items-center gap-2 p-3 rounded-xl border-2 transition-all ${
                                customerInfo.deliveryZone === 'urban'
                                  ? 'border-orange-400 bg-orange-50'
                                  : 'border-brown-100 bg-white hover:border-orange-200'
                              }`}
                            >
                              <MapPinned className={`w-4 h-4 flex-shrink-0 ${customerInfo.deliveryZone === 'urban' ? 'text-orange-500' : 'text-brown-400'}`} />
                              <div className="text-left">
                                <p className="text-xs font-bold text-brown-700">Atiquizaya</p>
                                <p className="text-xs text-orange-600 font-bold">$1.00</p>
                              </div>
                            </motion.button>
                            <motion.button
                              type="button"
                              onClick={() =>
                                setCustomerInfo({ ...customerInfo, deliveryZone: 'rural' })
                              }
                              whileTap={{ scale: 0.95 }}
                              className={`flex items-center gap-2 p-3 rounded-xl border-2 transition-all ${
                                customerInfo.deliveryZone === 'rural'
                                  ? 'border-orange-400 bg-orange-50'
                                  : 'border-brown-100 bg-white hover:border-orange-200'
                              }`}
                            >
                              <Globe className={`w-4 h-4 flex-shrink-0 ${customerInfo.deliveryZone === 'rural' ? 'text-orange-500' : 'text-brown-400'}`} />
                              <div className="text-left">
                                <p className="text-xs font-bold text-brown-700">Fuera de zona</p>
                                <p className="text-xs text-orange-600 font-bold">$1.50</p>
                              </div>
                            </motion.button>
                          </div>
                        </div>

                        {/* Address */}
                        <div>
                          <label className="block text-xs font-medium text-brown-600 mb-1">
                            Dirección de entrega *
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-3 w-4 h-4 text-brown-300" />
                            <textarea
                              value={customerInfo.address}
                              onChange={(e) =>
                                setCustomerInfo({ ...customerInfo, address: e.target.value })
                              }
                              placeholder="Calle, casa, punto de referencia..."
                              className="w-full pl-10 pr-4 py-3 bg-cream-50 border border-brown-100 rounded-xl text-sm text-brown-800 placeholder:text-brown-300 focus:outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-100 resize-none"
                              rows={2}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ====== NOTA ====== */}
              <div>
                <h3 className="text-sm font-bold text-brown-800 mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-orange-500" />
                  ¿Algo más? (opcional)
                </h3>
                <textarea
                  value={customerInfo.note}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, note: e.target.value })}
                  placeholder="Ej: Llegar a las 3 PM, tocar timbre, etc."
                  className="w-full px-4 py-3 bg-cream-50 border border-brown-100 rounded-xl text-sm text-brown-800 placeholder:text-brown-300 focus:outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-100 resize-none"
                  rows={2}
                />
              </div>

              {/* ====== PAGO ====== */}
              <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">💵</span>
                  <h3 className="text-sm font-bold text-brown-800">Pago en Efectivo</h3>
                </div>
                <p className="text-xs text-brown-500">
                  {customerInfo.orderType === 'pickup'
                    ? 'Pagas al recoger tu pedido en el local.'
                    : 'Pagas al recibir tu pedido en la puerta de tu casa.'}
                </p>
              </div>

              {/* ====== RESUMEN ====== */}
              <div className="bg-cream-50 rounded-2xl p-4 border border-brown-100">
                <h3 className="text-sm font-bold text-brown-800 mb-3">📋 Tu Pedido</h3>
                <div className="space-y-2 mb-3 max-h-36 overflow-y-auto">
                  {items.map((item) => {
                    const extrasTotal = item.extras.reduce((s, e) => s + e.price, 0);
                    const lineTotal = (item.product.price + extrasTotal) * item.quantity;
                    return (
                      <div key={item.cartId} className="flex justify-between text-xs text-brown-600">
                        <span className="flex-1 min-w-0">
                          {item.quantity}x {item.product.emoji} {item.product.name}
                          {item.extras.length > 0 && (
                            <span className="text-brown-400">
                              {' '}+ {item.extras.map((e) => e.name).join(', ')}
                            </span>
                          )}
                          {item.note && (
                            <span className="text-brown-300 italic"> ({item.note})</span>
                          )}
                        </span>
                        <span className="font-semibold ml-2 flex-shrink-0">${lineTotal.toFixed(2)}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="border-t border-brown-200 pt-2 space-y-1.5">
                  <div className="flex justify-between text-xs text-brown-500">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  {customerInfo.orderType === 'delivery' && (
                    <div className="flex justify-between text-xs text-brown-500">
                      <span>
                        🚗 Envío ({customerInfo.deliveryZone === 'urban' ? 'Atiquizaya' : 'Fuera de zona'})
                      </span>
                      <span>+${deliveryFee.toFixed(2)}</span>
                    </div>
                  )}
                  {customerInfo.orderType === 'pickup' && (
                    <div className="flex justify-between text-xs text-green-600">
                      <span>🏪 Recoger en local</span>
                      <span>Gratis</span>
                    </div>
                  )}
                  <div className="flex justify-between text-xs text-brown-500">
                    <span>💵 Pago en efectivo</span>
                  </div>
                  <div className="border-t border-dashed border-brown-200 pt-2 flex justify-between text-lg font-bold text-brown-800">
                    <span>Total a pagar</span>
                    <span className="gradient-text">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </form>

            {/* ====== ENVIAR ====== */}
            <div className="flex-shrink-0 border-t border-brown-100 p-4 bg-cream-50">
              <motion.button
                type="submit"
                onClick={handleSubmit}
                whileHover={{ scale: canSubmit ? 1.02 : 1 }}
                whileTap={{ scale: canSubmit ? 0.98 : 1 }}
                disabled={!canSubmit}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-base transition-all ${
                  canSubmit
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40'
                    : 'bg-brown-100 text-brown-400 cursor-not-allowed'
                }`}
              >
                <Send className="w-5 h-5" />
                {canSubmit
                  ? `Enviar Pedido — $${total.toFixed(2)}`
                  : 'Completa tus datos para continuar'}
              </motion.button>
              <p className="text-center text-xs text-brown-400 mt-2">
                Se abrirá WhatsApp para confirmar tu pedido 📱
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
