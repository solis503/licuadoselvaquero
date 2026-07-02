import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Product, Extra } from '../data/products';
import { WHATSAPP_NUMBER, DELIVERY_URBAN, DELIVERY_RURAL } from '../data/products';

export interface CartItemExtra {
  id: string;
  name: string;
  price: number;
  emoji: string;
}

export interface CartItem {
  cartId: string;
  product: Product;
  extras: CartItemExtra[];
  quantity: number;
  note: string;
}

export type DeliveryZone = 'urban' | 'rural';

export interface CustomerInfo {
  name: string;
  phone: string;
  orderType: 'pickup' | 'delivery';
  deliveryZone: DeliveryZone;
  address: string;
  note: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, extras: Extra[], note: string) => void;
  removeItem: (cartId: string) => void;
  updateQuantity: (cartId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  deliveryFee: number;
  total: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  isCheckoutOpen: boolean;
  openCheckout: () => void;
  closeCheckout: () => void;
  customerInfo: CustomerInfo;
  setCustomerInfo: (info: CustomerInfo) => void;
  sendOrder: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

let cartIdCounter = 0;

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: '',
    phone: '',
    orderType: 'pickup',
    deliveryZone: 'urban',
    address: '',
    note: '',
  });

  const addItem = useCallback((product: Product, extras: Extra[], note: string) => {
    cartIdCounter++;
    const newItem: CartItem = {
      cartId: `cart-${cartIdCounter}-${Date.now()}`,
      product,
      extras: extras.map((e) => ({ id: e.id, name: e.name, price: e.price, emoji: e.emoji })),
      quantity: 1,
      note,
    };
    setItems((prev) => [...prev, newItem]);
    setIsCartOpen(true);
  }, []);

  const removeItem = useCallback((cartId: string) => {
    setItems((prev) => prev.filter((item) => item.cartId !== cartId));
  }, []);

  const updateQuantity = useCallback((cartId: string, quantity: number) => {
    if (quantity < 1) return;
    setItems((prev) =>
      prev.map((item) => (item.cartId === cartId ? { ...item, quantity } : item))
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    setIsCheckoutOpen(false);
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = items.reduce((sum, item) => {
    const extrasTotal = item.extras.reduce((es, e) => es + e.price, 0);
    return sum + (item.product.price + extrasTotal) * item.quantity;
  }, 0);

  const deliveryFee =
    customerInfo.orderType === 'delivery'
      ? customerInfo.deliveryZone === 'urban'
        ? DELIVERY_URBAN
        : DELIVERY_RURAL
      : 0;

  const total = subtotal + deliveryFee;

  const sendOrder = useCallback(() => {
    const orderLines = items.map((item) => {
      const extrasText =
        item.extras.length > 0
          ? ` + ${item.extras.map((e) => e.name).join(', ')}`
          : '';
      const noteText = item.note ? ` (${item.note})` : '';
      const itemTotal =
        (item.product.price + item.extras.reduce((s, e) => s + e.price, 0)) * item.quantity;
      return `• ${item.quantity}x ${item.product.name}${extrasText}${noteText} — $${itemTotal.toFixed(2)}`;
    });

    let deliveryText = '\n🏪 *Pasar a recoger en el local*';
    if (customerInfo.orderType === 'delivery') {
      const zoneName = customerInfo.deliveryZone === 'urban' ? 'Zona urbana Atiquizaya' : 'Fuera de zona urbana';
      deliveryText = `\n🚗 *Entrega a domicilio (${zoneName}):* +$${deliveryFee.toFixed(2)}\n📍 *Dirección:* ${customerInfo.address}`;
    }

    const noteText = customerInfo.note ? `\n📝 *Nota:* ${customerInfo.note}` : '';

    const message = `🤠 *Nuevo Pedido — Licuados El Vaquero*\n\n👤 *Cliente:* ${customerInfo.name}\n📱 *Teléfono:* ${customerInfo.phone}\n\n🛒 *Pedido:*\n${orderLines.join('\n')}\n\n💰 *Subtotal:* $${subtotal.toFixed(2)}${deliveryText}\n💵 *Pago:* Efectivo contra entrega${noteText}\n\n✅ *TOTAL: $${total.toFixed(2)}*`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
  }, [items, customerInfo, subtotal, deliveryFee, total]);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        deliveryFee,
        total,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        isCheckoutOpen,
        openCheckout: () => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        },
        closeCheckout: () => setIsCheckoutOpen(false),
        customerInfo,
        setCustomerInfo,
        sendOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
