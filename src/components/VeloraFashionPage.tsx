import React, { useState } from 'react';
import {
  Heart,
  ShoppingBag,
  Sparkles,
  X,
  Monitor,
  Smartphone,
  ArrowRight,
  Check,
  Plus,
  Trash2,
} from 'lucide-react';

interface VeloraFashionProps {
  onClose?: () => void;
}

interface ProductItem {
  id: number;
  badge: string;
  category: 'MUJER' | 'HOMBRE' | 'ACCESORIOS';
  title: string;
  priceNum: number;
  price: string;
  img: string;
}

export default function VeloraFashionPage({ onClose }: VeloraFashionProps) {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [activeCategory, setActiveCategory] = useState<'TODOS' | 'MUJER' | 'HOMBRE' | 'ACCESORIOS'>('TODOS');
  const [cart, setCart] = useState<{ product: ProductItem; quantity: number }[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [checkoutCompleted, setCheckoutCompleted] = useState(false);

  const products: ProductItem[] = [
    {
      id: 1,
      badge: 'BESTSELLER',
      category: 'MUJER',
      title: 'Blazer Essential',
      priceNum: 1299,
      price: '$1,299',
      img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      badge: 'NUEVO',
      category: 'HOMBRE',
      title: 'Camisa Minimal',
      priceNum: 749,
      price: '$749',
      img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      badge: 'EXCLUSIVO',
      category: 'ACCESORIOS',
      title: 'Bolso Signature',
      priceNum: 999,
      price: '$999',
      img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 4,
      badge: 'DESTACADO',
      category: 'MUJER',
      title: 'Vestido Noir',
      priceNum: 1499,
      price: '$1,499',
      img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 5,
      badge: 'NUEVO',
      category: 'HOMBRE',
      title: 'Chaqueta Urban',
      priceNum: 1599,
      price: '$1,599',
      img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 6,
      badge: 'FAVORITO',
      category: 'ACCESORIOS',
      title: 'Gafas Eclipse',
      priceNum: 599,
      price: '$599',
      img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 7,
      badge: 'LIMITADO',
      category: 'MUJER',
      title: 'Top Satín',
      priceNum: 699,
      price: '$699',
      img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 8,
      badge: 'ESENCIAL',
      category: 'HOMBRE',
      title: 'Suéter Classic',
      priceNum: 899,
      price: '$899',
      img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const filteredProducts =
    activeCategory === 'TODOS'
      ? products
      : products.filter((p) => p.category === activeCategory);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const addToCart = (product: ProductItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartPrice = cart.reduce(
    (sum, item) => sum + item.product.priceNum * item.quantity,
    0
  );

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center overflow-hidden animate-in fade-in duration-200">
      {/* Top Browser Simulator Bar */}
      <header className="w-full bg-[#111114] border-b border-neutral-800 px-4 py-2.5 flex items-center justify-between text-neutral-300 shrink-0 z-20">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-[#09090B] border border-neutral-800 text-[11px] font-mono-code px-3 py-1 rounded text-neutral-400">
            <span className="text-[#E5C483]">🔒</span>
            <span>https://velora-fashion.com/coleccion-2026</span>
          </div>
        </div>

        {/* Device Mode Switcher */}
        <div className="flex items-center gap-2 bg-[#09090B] p-1 rounded-sm border border-neutral-800">
          <button
            onClick={() => setDeviceMode('desktop')}
            className={`px-2.5 py-1 text-[11px] font-mono-code flex items-center gap-1.5 rounded-xs transition ${
              deviceMode === 'desktop'
                ? 'bg-neutral-800 text-white font-bold'
                : 'text-neutral-500 hover:text-neutral-300'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Escritorio</span>
          </button>
          <button
            onClick={() => setDeviceMode('mobile')}
            className={`px-2.5 py-1 text-[11px] font-mono-code flex items-center gap-1.5 rounded-xs transition ${
              deviceMode === 'mobile'
                ? 'bg-neutral-800 text-white font-bold'
                : 'text-neutral-500 hover:text-neutral-300'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Móvil</span>
          </button>
        </div>

        {/* Close Button */}
        {onClose && (
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-mono-code bg-neutral-800 hover:bg-neutral-700 text-white px-3 py-1.5 rounded-xs transition border border-neutral-700 cursor-pointer"
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">Cerrar Demo</span>
          </button>
        )}
      </header>

      {/* Main Preview Scrollable Area */}
      <div
        className={`w-full flex-1 overflow-y-auto bg-[#0C0C0E] text-neutral-100 transition-all duration-300 font-sans relative ${
          deviceMode === 'mobile'
            ? 'max-w-[420px] my-4 rounded-xl border border-neutral-800 shadow-2xl overflow-x-hidden'
            : 'max-w-full'
        }`}
      >
        {/* =========================================================================
            1. HERO SECTION
        ========================================================================== */}
        <section
          className="relative min-h-[92vh] flex flex-col justify-between px-6 sm:px-12 md:px-20 py-12 bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(12, 12, 14, 0.4) 0%, rgba(12, 12, 14, 0.75) 60%, rgba(12, 12, 14, 1) 100%), url('https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=85')`,
          }}
        >
          {/* Top Label */}
          <div className="relative z-10 pt-4">
            <span className="text-[11px] tracking-[0.25em] font-mono-code text-[#E5C483] uppercase font-semibold">
              NUEVA COLECCIÓN · 2026
            </span>
          </div>

          {/* Hero Main Copy */}
          <div className="relative z-10 my-auto max-w-xl py-12 space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white font-serif-luxury leading-[1.03]">
              Viste tu <br />
              propia <br />
              <span className="italic text-[#E5C483] font-serif-luxury">historia.</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-neutral-300 font-light leading-relaxed max-w-md">
              Prendas cuidadosamente seleccionadas para quienes entienden que el estilo no consiste en
              seguir tendencias, sino en crear una identidad propia.
            </p>

            <div className="pt-2">
              <button
                onClick={() => scrollTo('velora-destacadas')}
                className="bg-[#E5C483] hover:bg-[#d4b06a] text-neutral-950 text-xs font-bold font-mono-code uppercase tracking-wider px-7 py-4 rounded-xs transition inline-flex items-center gap-2 cursor-pointer shadow-xl"
              >
                <span>DESCUBRIR COLECCIÓN</span>
                <span>↗</span>
              </button>
            </div>
          </div>

          <div className="relative z-10"></div>
        </section>

        {/* =========================================================================
            2. ENCUENTRA TU ESENCIA (CATEGORIES)
        ========================================================================== */}
        <section className="py-24 px-6 sm:px-12 md:px-20 border-t border-neutral-900 bg-[#0C0C0E]">
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Header with line */}
            <div className="space-y-4">
              <div className="w-10 h-0.5 bg-[#E5C483]"></div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white font-serif-luxury">
                  Encuentra tu esencia
                </h2>
                <p className="text-xs text-neutral-400 font-light max-w-xs leading-relaxed">
                  Diseños atemporales, detalles únicos y prendas que hablan por ti.
                </p>
              </div>
            </div>

            {/* 3 Categories Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  id: '01 / COLECCIÓN',
                  name: 'Mujer',
                  cat: 'MUJER',
                  img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=80',
                },
                {
                  id: '02 / COLECCIÓN',
                  name: 'Hombre',
                  cat: 'HOMBRE',
                  img: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=700&q=80',
                },
                {
                  id: '03 / COLECCIÓN',
                  name: 'Accesorios',
                  cat: 'ACCESORIOS',
                  img: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=700&q=80',
                },
              ].map((c, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveCategory(c.cat as any);
                    scrollTo('velora-destacadas');
                  }}
                  className="bg-[#17171C] border border-neutral-850 hover:border-[#E5C483]/60 rounded-xs overflow-hidden group cursor-pointer transition duration-300 flex flex-col justify-between shadow-lg"
                >
                  <div className="aspect-3/4 relative overflow-hidden bg-[#202026]">
                    <img
                      src={c.img}
                      alt={c.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700 grayscale-15 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 space-y-1">
                      <span className="text-[10px] font-mono-code text-[#E5C483] tracking-widest uppercase block">
                        {c.id}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-serif-luxury font-normal text-white">
                        {c.name}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono-code uppercase tracking-wider text-neutral-300 group-hover:text-[#E5C483] transition pt-1">
                        <span>EXPLORAR</span>
                        <span>↗</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. PIEZAS DESTACADAS (PRODUCT CATALOG GRID)
        ========================================================================== */}
        <section id="velora-destacadas" className="py-24 px-6 sm:px-12 md:px-20 border-t border-neutral-900 bg-[#0A0A0C]">
          <div className="max-w-7xl mx-auto space-y-10">
            {/* Header with line */}
            <div className="space-y-4">
              <div className="w-10 h-0.5 bg-[#E5C483]"></div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white font-serif-luxury">
                  Piezas destacadas
                </h2>
                <p className="text-xs text-neutral-400 font-light max-w-xs leading-relaxed">
                  Una selección de favoritos para elevar tu estilo todos los días.
                </p>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {(['TODOS', 'MUJER', 'HOMBRE', 'ACCESORIOS'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveCategory(tab)}
                  className={`px-4 py-1.5 text-[11px] font-mono-code uppercase tracking-wider rounded-xs transition cursor-pointer ${
                    activeCategory === tab
                      ? 'bg-[#E5C483] text-black font-bold shadow-md'
                      : 'bg-[#15151A] text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* 8 Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {filteredProducts.map((p) => {
                const isWished = wishlist.includes(p.id);
                return (
                  <div
                    key={p.id}
                    className="bg-[#121216] border border-neutral-850 hover:border-neutral-700 rounded-xs overflow-hidden flex flex-col justify-between group transition duration-300 shadow-md"
                  >
                    <div>
                      {/* Product Image Frame */}
                      <div className="aspect-square bg-[#1A1A22] relative overflow-hidden">
                        <img
                          src={p.img}
                          alt={p.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        {/* Top Badge */}
                        <div className="absolute top-3 left-3 bg-[#E5C483] text-neutral-950 text-[9px] font-mono-code font-bold uppercase px-2 py-0.5 tracking-wider rounded-xs shadow-xs">
                          {p.badge}
                        </div>
                        {/* Wishlist Heart Button */}
                        <button
                          onClick={() => toggleWishlist(p.id)}
                          aria-label="Guardar en favoritos"
                          className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 backdrop-blur-xs flex items-center justify-center text-white hover:text-rose-400 transition cursor-pointer"
                        >
                          <Heart
                            className={`w-3.5 h-3.5 ${
                              isWished ? 'fill-rose-500 text-rose-500' : ''
                            }`}
                          />
                        </button>
                      </div>

                      {/* Product Info */}
                      <div className="p-4 space-y-1.5">
                        <span className="text-[10px] font-mono-code uppercase tracking-wider text-neutral-400 block">
                          {p.category}
                        </span>
                        <h3 className="text-sm font-semibold text-white tracking-wide">
                          {p.title}
                        </h3>
                      </div>
                    </div>

                    {/* Price and Add to Cart Row */}
                    <div className="p-4 pt-0 flex items-center justify-between border-t border-neutral-850 mt-2">
                      <span className="text-sm font-mono-code font-bold text-[#E5C483]">
                        {p.price}
                      </span>
                      <button
                        onClick={() => addToCart(p)}
                        className="bg-[#1B1B22] hover:bg-[#E5C483] hover:text-black text-neutral-200 text-[10px] font-mono-code uppercase font-semibold px-3 py-1.5 rounded-xs transition border border-neutral-750 flex items-center gap-1 cursor-pointer"
                      >
                        <span>AÑADIR +</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. STATEMENT BANNER: MENOS RUIDO. MÁS ESTILO.
        ========================================================================== */}
        <section className="py-24 px-6 sm:px-12 md:px-20 border-t border-neutral-900 bg-[#0E0E12] text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Mini subnav strip */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-neutral-800 pb-6 text-xs font-mono-code">
              <div className="text-base font-serif-luxury font-bold tracking-[0.25em] text-white">
                V E L O R A
              </div>
              <div className="flex items-center gap-6 text-neutral-400 text-[11px] uppercase tracking-wider">
                <button
                  onClick={() => scrollTo('velora-destacadas')}
                  className="hover:text-white transition cursor-pointer"
                >
                  INICIO
                </button>
                <button
                  onClick={() => scrollTo('velora-destacadas')}
                  className="hover:text-white transition cursor-pointer"
                >
                  COLECCIÓN
                </button>
                <button
                  onClick={() => scrollTo('velora-destacadas')}
                  className="hover:text-white transition cursor-pointer"
                >
                  PRODUCTOS
                </button>
                <button
                  onClick={() => scrollTo('velora-newsletter')}
                  className="hover:text-white transition cursor-pointer"
                >
                  CONTACTO
                </button>
              </div>
              <div>
                <button
                  onClick={() => setCartOpen(true)}
                  className="border border-neutral-700 hover:border-[#E5C483] text-[#E5C483] px-3.5 py-1.5 text-xs rounded-xs flex items-center gap-1.5 transition cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>BOLSA ({totalCartCount})</span>
                </button>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-4 pt-4">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-white font-serif-luxury leading-tight">
                Menos ruido. <br />
                <span className="italic text-[#E5C483] font-serif-luxury">Más estilo.</span>
              </h2>

              <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-md mx-auto leading-relaxed">
                Descubre prendas que combinan comodidad, elegancia y personalidad. Tu próximo look
                favorito comienza aquí.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => scrollTo('velora-destacadas')}
                  className="bg-[#E5C483] hover:bg-[#d4b06a] text-neutral-950 font-bold font-mono-code text-xs uppercase tracking-wider px-8 py-3.5 rounded-xs transition shadow-xl cursor-pointer"
                >
                  COMPRAR AHORA
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. FORMA PARTE DEL ESTILO (NEWSLETTER)
        ========================================================================== */}
        <section id="velora-newsletter" className="py-24 px-6 sm:px-12 md:px-20 border-t border-neutral-900 bg-[#0C0C0E]">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="space-y-4">
              <div className="w-10 h-0.5 bg-[#E5C483]"></div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white font-serif-luxury">
                  Forma parte del estilo
                </h2>
                <p className="text-xs text-neutral-400 font-light max-w-xs leading-relaxed">
                  Suscríbete para conocer nuevas colecciones, novedades y ofertas especiales.
                </p>
              </div>
            </div>

            {/* Newsletter input form */}
            <div className="pt-4 max-w-2xl">
              {newsletterSubscribed ? (
                <div className="bg-[#17171C] border border-[#E5C483]/50 p-4 rounded-xs flex items-center gap-3 text-xs text-neutral-200">
                  <div className="w-6 h-6 rounded-full bg-[#E5C483] text-black flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <span className="font-bold text-white block">¡Te has suscrito con éxito!</span>
                    <span className="text-neutral-400 text-[11px]">
                      Hemos registrado {newsletterEmail}. Recibirás un 10% de bienvenida en tu primera compra.
                    </span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Tu correo electrónico"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 bg-[#15151A] border border-neutral-800 px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-[#E5C483] rounded-xs"
                  />
                  <button
                    type="submit"
                    className="bg-[#E5C483] hover:bg-[#d4b06a] text-neutral-950 font-bold font-mono-code text-xs uppercase tracking-wider px-6 py-3 rounded-xs transition cursor-pointer"
                  >
                    SUSCRIBIRME ↗
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. VELORA FOOTER
        ========================================================================== */}
        <footer className="py-12 px-6 sm:px-12 md:px-20 bg-[#08080A] border-t border-neutral-900 text-neutral-400 text-xs font-mono-code">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-lg font-serif-luxury font-bold tracking-[0.25em] text-white">
              V E L O R A
            </div>
            <div className="text-center sm:text-left text-[11px] space-y-0.5">
              <div>© 2026 VELORA. Todos los derechos reservados.</div>
              <div className="text-neutral-500 text-[10px]">Moda con identidad propia.</div>
            </div>
            <div className="flex items-center gap-4 text-[11px] text-neutral-400">
              <span className="hover:text-white cursor-pointer">Instagram</span>
              <span>·</span>
              <span className="hover:text-white cursor-pointer">TikTok</span>
              <span>·</span>
              <span className="hover:text-white cursor-pointer">Pinterest</span>
            </div>
          </div>
        </footer>
      </div>

      {/* =========================================================================
          INTERACTIVE SHOPPING CART DRAWER (BOLSA DE COMPRAS)
      ========================================================================== */}
      {cartOpen && (
        <div className="fixed inset-0 z-60 bg-black/75 backdrop-blur-xs flex justify-end animate-in fade-in">
          <div className="w-full max-w-md bg-[#121216] border-l border-neutral-800 text-neutral-100 flex flex-col justify-between h-full shadow-2xl p-6">
            <div>
              <div className="flex items-center justify-between border-b border-neutral-850 pb-4">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-[#E5C483]" />
                  <h3 className="font-serif-luxury text-xl font-normal text-white">
                    Bolsa de Compras ({totalCartCount})
                  </h3>
                </div>
                <button
                  onClick={() => setCartOpen(false)}
                  className="text-neutral-400 hover:text-white p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cart Items List */}
              <div className="py-4 space-y-4 max-h-[60vh] overflow-y-auto">
                {cart.length === 0 ? (
                  <div className="text-center py-12 space-y-3">
                    <ShoppingBag className="w-10 h-10 text-neutral-600 mx-auto stroke-1" />
                    <p className="text-xs text-neutral-400">Tu bolsa de compras está vacía.</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center gap-3 bg-[#191920] p-3 rounded-xs border border-neutral-800"
                    >
                      <img
                        src={item.product.img}
                        alt={item.product.title}
                        className="w-14 h-14 object-cover rounded-xs"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-mono-code text-[#E5C483] block">
                          {item.product.category}
                        </span>
                        <h4 className="text-xs font-bold text-white truncate">
                          {item.product.title}
                        </h4>
                        <span className="text-xs font-mono-code text-neutral-300">
                          {item.product.price} × {item.quantity}
                        </span>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-neutral-500 hover:text-rose-400 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Cart Footer / Checkout */}
            {checkoutCompleted ? (
              <div className="border-t border-neutral-850 pt-4 space-y-3 bg-[#17171E] p-4 rounded-xs border border-[#E5C483]/40">
                <div className="flex items-center gap-2 text-[#E5C483] font-bold text-xs">
                  <Check className="w-4 h-4 text-[#E5C483]" />
                  <span>¡Pedido simulado con éxito!</span>
                </div>
                <p className="text-[11px] text-neutral-300 leading-relaxed">
                  Gracias por probar la experiencia interactiva de VELORA. Se ha generado la orden de compra ficticia con pago seguro simulado.
                </p>
                <button
                  onClick={() => {
                    setCheckoutCompleted(false);
                    setCartOpen(false);
                  }}
                  className="w-full bg-[#E5C483] hover:bg-[#d4b06a] text-neutral-950 font-bold font-mono-code text-[11px] uppercase py-2.5 rounded-xs transition cursor-pointer"
                >
                  CONTINUAR EXPLORANDO
                </button>
              </div>
            ) : cart.length > 0 ? (
              <div className="border-t border-neutral-850 pt-4 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono-code">
                  <span className="text-neutral-400">Subtotal estimado:</span>
                  <span className="text-base font-bold text-[#E5C483]">
                    ${totalCartPrice.toLocaleString()} MXN
                  </span>
                </div>
                <p className="text-[10px] text-neutral-500">
                  Envío gratuito en compras superiores a $1,500 MXN. Impuestos incluidos.
                </p>
                <button
                  onClick={() => {
                    setCheckoutCompleted(true);
                    setCart([]);
                  }}
                  className="w-full bg-[#E5C483] hover:bg-[#d4b06a] text-neutral-950 font-bold font-mono-code text-xs uppercase py-3.5 rounded-xs transition cursor-pointer shadow-lg"
                >
                  PROCEDER AL PAGO ↗
                </button>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
