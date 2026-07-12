export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'licuados' | 'frozen' | 'pinchos' | 'comida';
  popular?: boolean;
  emoji?: string;
}

export interface Extra {
  id: string;
  name: string;
  price: number;
  emoji: string;
}

export const extras: Extra[] = [
  { id: 'ex-avena', name: 'Avena Extra', price: 0.25, emoji: '🌾' },
  { id: 'ex-apio', name: 'Extra de Apio', price: 0.25, emoji: '🥬' },
  { id: 'ex-coco', name: 'Extra de Coco', price: 0.25, emoji: '🥥' },
  { id: 'ex-crispy', name: 'Extra de Crispy', price: 0.25, emoji: '🍪' },
  { id: 'ex-fresa', name: 'Extra de Fresa', price: 0.50, emoji: '🍓' },
  { id: 'ex-galleta', name: 'Extra de Galleta', price: 0.25, emoji: '🍪' },
  { id: 'ex-granola', name: 'Extra de Granola', price: 0.25, emoji: '🥣' },
  { id: 'ex-melon', name: 'Extra de Melón', price: 0.25, emoji: '🍈' },
  { id: 'ex-papaya', name: 'Extra de Papaya', price: 0.25, emoji: '🥭' },
  { id: 'ex-pina', name: 'Extra de Piña', price: 0.25, emoji: '🍍' },
  { id: 'ex-sandia', name: 'Extra de Sandía', price: 0.25, emoji: '🍉' },
  { id: 'ex-zapote', name: 'Extra de Zapote', price: 0.25, emoji: '🫐' },
  { id: 'ex-guineo', name: 'Guineo Extra', price: 0.25, emoji: '🍌' },
  { id: 'ex-frozen', name: 'Licuado a Frozen', price: 0.25, emoji: '❄️' },
];

export const pinchosToppings: Extra[] = [
  { id: 'top-crispy', name: 'Crispy', price: 0, emoji: '🍪' },
  { id: 'top-galleta', name: 'Galleta', price: 0, emoji: '🍪' },
  { id: 'top-coco', name: 'Coco Rayado', price: 0, emoji: '🥥' },
  { id: 'top-mani', name: 'Maní', price: 0, emoji: '🥜' },
  { id: 'top-pixi', name: 'Pixi', price: 0, emoji: '🍬' },
  { id: 'top-solo-choco', name: 'Solo Chocolate', price: 0, emoji: '🍫' },
];

// Removed online payment fee

export const products: Product[] = [
  // LICUADOS
  { id: 'lic-1', name: '90-60-90', price: 2.50, category: 'licuados', popular: true, emoji: '🥤' },
  { id: 'lic-2', name: 'Celia Cruz', price: 2.00, category: 'licuados', popular: true, emoji: '🌺' },
  { id: 'lic-3', name: 'Coco con Leche', price: 1.75, category: 'licuados', popular: true, emoji: '🥥' },
  { id: 'lic-4', name: 'Crispy con Leche', price: 1.75, category: 'licuados', emoji: '🍪' },
  { id: 'lic-5', name: 'Galleta con Leche', price: 1.75, category: 'licuados', popular: true, emoji: '🍪' },
  { id: 'lic-6', name: 'Leche con Zanahoria', price: 2.00, category: 'licuados', emoji: '🥕' },
  { id: 'lic-7', name: 'Licuado de Avena', price: 1.75, category: 'licuados', emoji: '🌾' },
  { id: 'lic-8', name: 'Licuado de Chocolate', price: 1.75, category: 'licuados', popular: true, emoji: '🍫' },
  { id: 'lic-9', name: 'Licuado de Fresa', price: 2.00, category: 'licuados', popular: true, emoji: '🍓' },
  { id: 'lic-10', name: 'Licuado de Fresa/Guineo', price: 2.25, category: 'licuados', emoji: '🍓' },
  { id: 'lic-11', name: 'Licuado de Granola', price: 1.75, category: 'licuados', emoji: '🥣' },
  { id: 'lic-12', name: 'Licuado de Guineo', price: 1.75, category: 'licuados', popular: true, emoji: '🍌' },
  { id: 'lic-13', name: 'Licuado de Naranja', price: 2.25, category: 'licuados', emoji: '🍊' },
  { id: 'lic-14', name: 'Licuado de Zapote', price: 1.75, category: 'licuados', emoji: '🫐' },
  { id: 'lic-15', name: 'Melón con Leche', price: 1.75, category: 'licuados', emoji: '🍈' },
  { id: 'lic-16', name: 'Naranja con Fresa', price: 2.75, category: 'licuados', popular: true, emoji: '🍊' },
  { id: 'lic-17', name: 'Naranja con Huevo', price: 2.50, category: 'licuados', emoji: '🥚' },
  { id: 'lic-18', name: 'Naranja con Papaya', price: 2.50, category: 'licuados', emoji: '🍊' },
  { id: 'lic-19', name: 'Naranja con Piña', price: 2.50, category: 'licuados', emoji: '🍍' },
  { id: 'lic-20', name: 'Naranja con Sandía', price: 2.50, category: 'licuados', emoji: '🍉' },
  { id: 'lic-21', name: 'Naranja con Zanahoria', price: 2.50, category: 'licuados', emoji: '🥕' },
  { id: 'lic-22', name: 'Naranja Melocotón', price: 2.50, category: 'licuados', emoji: '🍑' },
  { id: 'lic-23', name: 'Naranja con Kiwi', price: 2.50, category: 'licuados', emoji: '🥝' },
  { id: 'lic-24', name: 'Papaya con Leche', price: 1.75, category: 'licuados', emoji: '🥭' },
  { id: 'lic-25', name: 'Piña con Leche', price: 1.75, category: 'licuados', emoji: '🍍' },
  { id: 'lic-26', name: 'Sandía con Leche', price: 1.75, category: 'licuados', popular: true, emoji: '🍉' },

  // FROZEN
  { id: 'frz-1', name: 'Blue Ice', price: 2.25, category: 'frozen', popular: true, emoji: '🧊' },
  { id: 'frz-2', name: 'Frappuccino Carmelo', price: 2.50, category: 'frozen', popular: true, emoji: '☕' },
  { id: 'frz-3', name: 'Frappuccino de Vainilla', price: 2.50, category: 'frozen', popular: true, emoji: '🍦' },
  { id: 'frz-4', name: 'Frappuccino Mocca', price: 2.50, category: 'frozen', popular: true, emoji: '☕' },
  { id: 'frz-5', name: 'Frappuccino Tradicional', price: 2.50, category: 'frozen', popular: true, emoji: '☕' },
  { id: 'frz-6', name: 'Frozen de Fresa', price: 2.50, category: 'frozen', popular: true, emoji: '🍓' },
  { id: 'frz-7', name: 'Frozen de Mango', price: 2.50, category: 'frozen', emoji: '🥭' },
  { id: 'frz-8', name: 'Frozen de Melón', price: 2.00, category: 'frozen', emoji: '🍈' },
  { id: 'frz-9', name: 'Frozen de Piña', price: 2.00, category: 'frozen', emoji: '🍍' },
  { id: 'frz-10', name: 'Frozen de Yogurt Kiwi', price: 2.00, category: 'frozen', emoji: '🥝' },
  { id: 'frz-11', name: 'Frozen Sandía', price: 2.00, category: 'frozen', emoji: '🍉' },
  { id: 'frz-12', name: 'Frozen Yogurt Fresa', price: 2.75, category: 'frozen', popular: true, emoji: '🍓' },
  { id: 'frz-13', name: 'Frozen Yogurt Melocotón', price: 2.50, category: 'frozen', emoji: '🍑' },
  { id: 'frz-14', name: 'Frozen de Yogurt Coco', price: 2.50, category: 'frozen', emoji: '🥥' },
  { id: 'frz-15', name: 'Jugo Puro Naranja', price: 2.75, category: 'frozen', emoji: '🍊' },
  { id: 'frz-16', name: 'Limonada con Fresa', price: 2.50, category: 'frozen', popular: true, emoji: '🍋' },
  { id: 'frz-17', name: 'Limonada con Kiwi', price: 2.00, category: 'frozen', emoji: '🥝' },
  { id: 'frz-18', name: 'Limonada con Melocotón', price: 2.00, category: 'frozen', emoji: '🍑' },
  { id: 'frz-19', name: 'Mango Verde', price: 2.50, category: 'frozen', emoji: '🥭' },
  { id: 'frz-20', name: 'Negra Tumbao', price: 2.50, category: 'frozen', popular: true, emoji: '🫐' },
  { id: 'frz-21', name: 'Piña Colada', price: 2.00, category: 'frozen', emoji: '🍍' },
  { id: 'frz-22', name: 'Yogurt Piña', price: 2.50, category: 'frozen', emoji: '🍍' },

  // PINCHOS
  { id: 'pin-1', name: 'Chocobananos', price: 0.75, category: 'pinchos', popular: true, emoji: '🍌' },
  { id: 'pin-2', name: 'Chocobananos Grandes', price: 1.00, category: 'pinchos', emoji: '🍌' },
  { id: 'pin-3', name: 'Pincho de Coco', price: 0.75, category: 'pinchos', emoji: '🥥' },
  { id: 'pin-4', name: 'Pincho de Melón', price: 0.75, category: 'pinchos', emoji: '🍈' },
  { id: 'pin-5', name: 'Pincho de Sandía', price: 0.75, category: 'pinchos', emoji: '🍉' },
  { id: 'pin-6', name: 'Pincho de Uva', price: 0.75, category: 'pinchos', emoji: '🍇' },
  { id: 'pin-7', name: 'Pinchos de Fresa', price: 1.00, category: 'pinchos', popular: true, emoji: '🍓' },
  { id: 'pin-8', name: 'Pinchos de Piña', price: 0.75, category: 'pinchos', emoji: '🍍' },

  // COMIDA
  { id: 'com-1', name: 'Nachos', price: 2.50, category: 'comida', popular: true, emoji: '🧀' },
];

export const WHATSAPP_NUMBER = '50370447864';
export const DELIVERY_URBAN = 1.00;    // Zona urbana Atiquizaya
export const DELIVERY_RURAL = 1.50;    // Fuera de zona urbana

export const categories = [
  {
    id: 'licuados',
    name: 'Licuados',
    description: 'Con leche, frutas, avena, chocolate y combinaciones especiales.',
    emoji: '🥤',
    color: 'from-orange-400 to-amber-500',
    bgColor: 'bg-orange-50',
    priceRange: '$1.75 - $2.75',
  },
  {
    id: 'frozen',
    name: 'Frozen',
    description: 'Bebidas heladas, limonadas, yogurt frozen y frappuccinos.',
    emoji: '🧊',
    color: 'from-blue-400 to-cyan-500',
    bgColor: 'bg-blue-50',
    priceRange: '$2.00 - $2.75',
  },
  {
    id: 'pinchos',
    name: 'Pinchos',
    description: 'Frutas frescas en palito, chocobananos y más.',
    emoji: '🍡',
    color: 'from-pink-400 to-rose-500',
    bgColor: 'bg-pink-50',
    priceRange: '$0.75 - $1.00',
  },
  {
    id: 'comida',
    name: 'Comida',
    description: 'Nachos y snacks para acompañar tu bebida favorita.',
    emoji: '🍽️',
    color: 'from-yellow-400 to-orange-500',
    bgColor: 'bg-yellow-50',
    priceRange: '$2.50',
  },
];

export const testimonials = [
  {
    name: 'María García',
    text: '¡Los mejores licuados de la zona! El de Fresa con Guineo es mi favorito. Siempre frescos y con porciones generosas.',
    rating: 5,
    avatar: '👩',
  },
  {
    name: 'Carlos Hernández',
    text: 'El Frozen de Fresa y la Limonada con Fresa son increíbles. Perfectos para el calor. ¡Muy recomendados!',
    rating: 5,
    avatar: '👨',
  },
  {
    name: 'Ana Martínez',
    text: 'Los chocobananos son adictivos y los precios son muy accesibles. Mi familia y yo venimos cada semana.',
    rating: 5,
    avatar: '👩‍🦱',
  },
  {
    name: 'Roberto López',
    text: 'La Negra Tumbao y el Blue Ice son únicos. No encuentras estos sabores en ningún otro lugar.',
    rating: 5,
    avatar: '👨‍🦲',
  },
  {
    name: 'Sofía Reyes',
    text: 'El Frappuccino Carmelo es perfecto. Mejor que cualquier cafetería de cadena y a un precio increíble.',
    rating: 5,
    avatar: '👱‍♀️',
  },
  {
    name: 'Diego Pérez',
    text: 'Vengo todos los días por mi licuado de galleta. El servicio es rápido y siempre con una sonrisa.',
    rating: 5,
    avatar: '🧑',
  },
];

export const faqs = [
  {
    question: '¿Cuál es el horario de atención?',
    answer: 'Estamos abiertos de lunes a sábado de 1:15 PM a 8:30 PM en el local. ¡Te esperamos!',
  },
  {
    question: '¿Cuál es el horario de delivery?',
    answer: 'El servicio de entrega a domicilio está disponible de 1:15 PM a 8:00 PM.',
  },
  {
    question: '¿Puedo personalizar mi licuado?',
    answer: '¡Por supuesto! Ofrecemos una gran variedad de extras como avena, granola, galleta, frutas adicionales y más. Puedes agregar lo que quieras desde $0.25 extra.',
  },
  {
    question: '¿Hacen pedidos por WhatsApp?',
    answer: 'Sí, puedes hacer tu pedido por WhatsApp al 7044-7864 y lo tendremos listo para cuando llegues o te lo llevamos.',
  },
  {
    question: '¿Cuál es el licuado más popular?',
    answer: 'Nuestros favoritos son el Licuado de Galleta, Fresa, Guineo, Chocolate y los Frappuccinos. ¡Pero todos son deliciosos!',
  },
  {
    question: '¿Pueden convertir un licuado en frozen?',
    answer: 'Sí, cualquier licuado se puede convertir en frozen por solo $0.25 adicionales. ¡Perfecto para los días de calor!',
  },
  {
    question: '¿Hacen entregas a domicilio?',
    answer: 'Sí, hacemos entregas de 1:15 a 8:00 PM. El costo es de $1.00 en zona urbana de Atiquizaya y $1.50 fuera de la zona urbana. También puedes pasar a recoger gratis.',
  },
  {
    question: '¿Cómo puedo pagar?',
    answer: 'Aceptamos pago en efectivo contra entrega o al recoger tu pedido en el local. ¡Así de fácil!',
  },
];
