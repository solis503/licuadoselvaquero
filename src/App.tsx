import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import ProductShowcase from './components/ProductShowcase';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-cream-50 font-body">
        <Navbar />
        <Hero />
        <SocialProof />
        <Categories />
        <FeaturedProducts />
        <ProductShowcase />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
        <WhatsAppButton />
        <CartDrawer />
        <CheckoutModal />
      </div>
    </CartProvider>
  );
}

export default App;
