import React, { useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  Laptop,
  Layers,
  Layout,
  Mail,
  Menu,
  MessageSquare,
  Minus,
  Plus,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  User,
  X,
  Zap,
} from 'lucide-react';

import NoirRestaurantPage from './components/NoirRestaurantPage.tsx';
import SonrisaDentalPage from './components/SonrisaDentalPage.tsx';
import VeloraFashionPage from './components/VeloraFashionPage.tsx';
import VectorLogisticsPage from './components/VectorLogisticsPage.tsx';
import OtraFormaTechPage from './components/OtraFormaTechPage.tsx';
import SonrisaDentalClinicPage from './components/SonrisaDentalClinicPage.tsx';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(
    'Captación de Clientes ($4,000–$6,000 MXN + IVA) — Recomendado'
  );
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showNoirDemo, setShowNoirDemo] = useState(false);
  const [showSonrisaDemo, setShowSonrisaDemo] = useState(false);
  const [showVeloraDemo, setShowVeloraDemo] = useState(false);
  const [showVectorDemo, setShowVectorDemo] = useState(false);
  const [showOtraFormaDemo, setShowOtraFormaDemo] = useState(false);
  const [showSonrisaLocalDemo, setShowSonrisaLocalDemo] = useState(false);
  const [activeProjectModal, setActiveProjectModal] = useState<number | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    negocio: '',
    tipo: 'Sitio web para negocio o servicios',
    mensaje: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('otherstudio2026@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSelectPackage = (pkgName: string) => {
    setSelectedPackage(pkgName);
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const faqs = [
    {
      q: '¿Cuánto cuesta una página web?',
      a: 'Nuestros paquetes van desde $2,500 MXN para Presencia Web hasta $12,000 MXN para Web Inteligente (+ IVA). Todos los presupuestos son cerrados y transparentes, sin tarifas ocultas ni mensualidades forzosas por concepto de diseño.',
    },
    {
      q: '¿Cómo sé qué paquete le conviene a mi negocio?',
      a: 'Si requieres validar tu presencia digital con datos de contacto básicos y perfil inicial, el paquete Presencia Web es ideal. Si ofreces múltiples servicios o tratamientos y requieres formularios de solicitud y SEO estructural, Captación de Clientes es el más recomendado. Para atención automatizada con asistente 24/7, elige Web Inteligente.',
    },
    {
      q: '¿La página se verá bien en celulares?',
      a: 'Absolutamente. Todas nuestras páginas se desarrollan bajo un riguroso estándar mobile-first. Calibramos tipografías, jerarquías visuales y tiempos de carga para que la experiencia táctil sea inmediata y fluida en cualquier smartphone, tablet o computadora.',
    },
    {
      q: '¿El diseño será personalizado?',
      a: 'Sí, al 100%. No utilizamos plantillas comerciales genéricas prefabricadas. Diseñamos la arquitectura de información, la paleta cromática y la tipografía desde cero para reflejar fielmente la identidad y prestigio de tu negocio.',
    },
    {
      q: '¿Incluye dominio y hospedaje?',
      a: 'Te asesoramos y asistimos en la compra del dominio a tu nombre para que tú mantengas la propiedad total y absoluta. También configuramos el hospedaje de alto rendimiento en infraestructura moderna o lo vinculamos con el proveedor de tu preferencia.',
    },
    {
      q: '¿Cómo puedo solicitar una cotización?',
      a: 'Puedes llenar el formulario al final de esta página seleccionando tu paquete de interés o escribirnos directamente a otherstudio2026@gmail.com. Te responderemos en un lapso de 24 a 48 horas hábiles con una propuesta formal detallada.',
    },
    {
      q: '¿Qué hace el asistente del paquete Web Inteligente?',
      a: 'Es un agente conversacional configurado con las respuestas oficiales aprobadas por tu empresa. Resuelve dudas frecuentes de horarios, servicios y ubicación las 24 horas del día, y canaliza solicitudes específicas hacia tu correo sin inventar información no autorizada.',
    },
  ];

  const services = [
    {
      id: '01 //',
      title: 'Diseño web a medida',
      desc: 'Páginas web adaptadas a la identidad, necesidades y objetivos específicos de cada negocio. Arquitectura de información construida desde cero.',
      tag: 'EXCLUSIVO',
    },
    {
      id: '02 //',
      title: 'Landing pages',
      desc: 'Páginas de alto impacto enfocadas en presentar una oferta particular, promocionar un nuevo servicio o captar solicitudes comerciales directas.',
      tag: 'CONVERSIÓN',
    },
    {
      id: '03 //',
      title: 'Tiendas en línea',
      desc: 'Experiencias de comercio electrónico diseñadas para presentar catálogos de productos con elegancia, claridad y pasarelas que facilitan las compras.',
      tag: 'E-COMMERCE',
    },
    {
      id: '04 //',
      title: 'Páginas corporativas',
      desc: 'Sitios profesionales para empresas que necesitan comunicar sus servicios, trayectoria institucional y propuesta de valor ante socios y clientes.',
      tag: 'CORPORATIVO',
    },
    {
      id: '05 //',
      title: 'Profesionales & marcas',
      desc: 'Páginas para profesionales independientes y firmas personales que presentan portafolios, trayectoria, publicaciones y vías de contacto directo.',
      tag: 'AUTORIDAD',
    },
    {
      id: '06 //',
      title: 'Rediseño web',
      desc: 'Actualización integral de páginas existentes para modernizar su dirección de arte, simplificar su estructura y optimizar la experiencia de usuario.',
      tag: 'EVOLUCIÓN',
    },
    {
      id: '07 //',
      title: 'Mantenimiento y optimización',
      desc: 'Servicios técnicos continuos para actualización de contenidos, ajustes de rendimiento y mejoras que pueden contratarse según las necesidades del proyecto.',
      tag: 'SOPORTE',
    },
  ];

  const projects = [
    {
      cat: 'RESTAURANTE O CAFETERÍA',
      num: '01 // CONCEPTO',
      title: 'NOÏR. — Alta Cocina & Experiencia',
      desc: 'Sitio web gastronómico de alta cocina con atmósfera nocturna, menú del chef por tiempos, filosofía culinaria y sistema interactivo de reservación de mesas.',
      tag: 'ALTA COCINA & HOSPITALIDAD',
      theme: 'warm',
      isInteractive: true,
    },
    {
      cat: 'TIENDA DE ROPA O PRODUCTOS',
      num: '02 // CONCEPTO',
      title: 'VELORA — Moda con Identidad Propia',
      desc: 'Tienda digital de moda contemporánea con catálogo interactivo, filtro por colecciones, carrito de compras dinámico y suscripción editorial.',
      tag: 'E-COMMERCE & MODA DE AUTOR',
      theme: 'minimal',
      isInteractive: true,
    },
    {
      cat: 'EMPRESA DE SERVICIOS',
      num: '03 // CONCEPTO',
      title: 'Vector Logística & Infraestructura',
      desc: 'Portal corporativo B2B con desglose modular de operaciones aduanales, cálculo de rutas, telemetría satelital y cotizador interactivo de fletes.',
      tag: 'B2B & CADENA DE SUMINISTRO',
      theme: 'industrial',
      isInteractive: true,
    },
    {
      cat: 'MARCA PERSONAL',
      num: '04 // CONCEPTO',
      title: 'Sonrisa Dental — Dra. Elena Romero',
      desc: 'Monografía clínica y espacio de autoridad médica para odontología avanzada: casos antes/después interactivos, instalaciones 3D y testimonios auditados.',
      tag: 'MEDICINA BUCODENTAL & AUTORIDAD',
      theme: 'clinical',
      isInteractive: true,
    },
    {
      cat: 'NEGOCIO LOCAL',
      num: '05 // CONCEPTO',
      title: 'Clínica Sonrisa Dental',
      desc: 'Presencia digital para clínica odontológica de proximidad: catálogo de tratamientos sin dolor, instalaciones 3D, citas vía WhatsApp y opiniones verificadas.',
      tag: 'CLÍNICA DE PROXIMIDAD & SALUD',
      theme: 'craft',
      isInteractive: true,
    },
    {
      cat: 'EMPRESA TECNOLÓGICA',
      num: '06 // CONCEPTO',
      title: 'OTRA FORMA — Tecnología para Negocios',
      desc: 'Plataforma web con automatización para negocios en crecimiento: asistente virtual integrado 24/7, paquete todo incluido y captación sin tareas manuales.',
      tag: 'TECNOLOGÍA & AUTOMATIZACIÓN B2B',
      theme: 'tech',
      isInteractive: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F8F7] text-neutral-900 selection:bg-[#E2FF4A] selection:text-black">
      {/* =========================================================================
          1. TOP UTILITY HEADER / LOCATION STRIP
      ========================================================================== */}
      <div className="border-b border-neutral-200/80 bg-white/60 backdrop-blur-xs text-[11px] font-mono-code text-neutral-600 px-4 md:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
          <span className="tracking-wider uppercase">ESTUDIO DE ARQUITECTURA & INTERFACES WEB</span>
        </div>
        <div className="flex items-center gap-3 tracking-wider">
          <span>CDMX // MÉXICO</span>
          <span className="text-neutral-300">|</span>
          <span>EST. 2025</span>
          <span className="text-neutral-300">|</span>
          <span className="bg-[#E2FF4A] text-neutral-950 font-bold px-2 py-0.5 rounded-xs tracking-wide">
            PRECIOS EN MXN
          </span>
        </div>
      </div>

      {/* =========================================================================
          MAIN NAVIGATION BAR
      ========================================================================== */}
      <nav className="sticky top-0 z-40 bg-[#F8F8F7]/90 backdrop-blur-md border-b border-neutral-200 px-4 md:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Area */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full border-2 border-neutral-950 flex items-center justify-center">
                <div className="w-2 h-2 bg-neutral-950 rounded-full"></div>
              </div>
              <span className="font-extrabold text-sm md:text-base tracking-tight font-mono-code text-neutral-950">
                OTHER <span className="font-light text-neutral-500">ESTUDIO</span>
              </span>
            </div>
            <span className="hidden sm:inline-block border border-neutral-300 text-[10px] font-mono-code uppercase px-2 py-0.5 text-neutral-600 rounded-xs">
              OTRO ESTUDIO
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider text-neutral-600">
            <a href="#inicio" className="hover:text-neutral-950 transition">
              INICIO
            </a>
            <a href="#servicios" className="hover:text-neutral-950 transition">
              SERVICIOS
            </a>
            <a href="#proyectos" className="hover:text-neutral-950 transition">
              PROYECTOS
            </a>
            <a href="#paquetes" className="hover:text-neutral-950 transition">
              PAQUETES
            </a>
            <a href="#proceso" className="hover:text-neutral-950 transition">
              PROCESO
            </a>
            <a href="#contacto" className="hover:text-neutral-950 transition">
              CONTACTO
            </a>
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="#contacto"
              className="bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-bold font-mono-code uppercase px-4 py-2.5 rounded-xs transition flex items-center gap-1.5 shadow-xs"
            >
              <span>+ SOLICITAR COTIZACIÓN</span>
              <span className="text-[#E2FF4A]">&gt;</span>
            </a>
            <a
              href="mailto:otherstudio2026@gmail.com"
              title="Contacto directo por correo"
              className="w-9 h-9 border border-neutral-300 hover:border-neutral-900 rounded-full flex items-center justify-center text-neutral-700 hover:text-black transition"
            >
              <User className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-900 focus:outline-hidden"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200 mt-3 pt-4 pb-4 space-y-3 px-2 bg-[#F8F8F7]">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold tracking-wider text-neutral-800 hover:text-black py-1"
            >
              INICIO
            </a>
            <a
              href="#servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold tracking-wider text-neutral-800 hover:text-black py-1"
            >
              SERVICIOS
            </a>
            <a
              href="#proyectos"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold tracking-wider text-neutral-800 hover:text-black py-1"
            >
              PROYECTOS
            </a>
            <a
              href="#paquetes"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold tracking-wider text-neutral-800 hover:text-black py-1"
            >
              PAQUETES
            </a>
            <a
              href="#proceso"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold tracking-wider text-neutral-800 hover:text-black py-1"
            >
              PROCESO
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold tracking-wider text-neutral-800 hover:text-black py-1"
            >
              CONTACTO
            </a>
            <div className="pt-2">
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-neutral-950 text-white text-xs font-bold font-mono-code uppercase px-4 py-3 rounded-xs"
              >
                + SOLICITAR COTIZACIÓN &gt;
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* =========================================================================
          HERO SECTION
      ========================================================================== */}
      <section id="inicio" className="pt-12 md:pt-20 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-6 space-y-7">
            <div className="inline-flex items-center gap-2 border border-neutral-300 bg-white/80 px-3 py-1 text-[11px] font-mono-code tracking-widest text-neutral-700">
              <span>[DISEÑO WEB PREMIUM // MÉXICO]</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-950 leading-[1.08]">
              Creamos páginas <br />
              web que hacen <br />
              crecer tu marca.
            </h1>

            <p className="text-neutral-600 text-base md:text-lg max-w-xl font-normal leading-relaxed">
              Diseñamos experiencias digitales modernas, estratégicas y a la medida de tu negocio
              para ayudarte a destacar en internet y conectar con tus clientes.
            </p>

            {/* Hero CTA buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#paquetes"
                className="bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-bold font-mono-code uppercase px-6 py-4 rounded-xs transition inline-flex items-center gap-2 shadow-xs group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E2FF4A]"></span>
                <span>CONOCER PAQUETES</span>
                <span className="transition-transform group-hover:translate-x-0.5">&gt;</span>
              </a>
              <a
                href="#proyectos"
                className="bg-white hover:bg-neutral-100 border border-neutral-300 text-neutral-900 text-xs font-bold font-mono-code uppercase px-6 py-4 rounded-xs transition inline-flex items-center gap-2"
              >
                <span>VER PROYECTOS</span>
                <span>↓</span>
              </a>
            </div>

            {/* Bottom 3 indicators row */}
            <div className="border-t border-neutral-200/90 pt-6 mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center gap-1.5 text-neutral-500 mb-1">
                  <Layers className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono-code uppercase tracking-wider">01 // ESPECIALIDAD</span>
                </div>
                <p className="text-xs font-semibold text-neutral-900">Especialistas en UX/UI y Desarrollo</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-neutral-500 mb-1">
                  <Laptop className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono-code uppercase tracking-wider">02 // COMPATIBILIDAD</span>
                </div>
                <p className="text-xs font-semibold text-neutral-900">Enfoque multiplataforma</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-neutral-500 mb-1">
                  <Zap className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono-code uppercase tracking-wider">03 // DINAMISMO</span>
                </div>
                <p className="text-xs font-semibold text-neutral-900">Experiencias interactivas</p>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Browser Window Mockup */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-xl overflow-hidden border border-neutral-300/80 bg-neutral-900 shadow-2xl relative">
              {/* Browser chrome header */}
              <div className="bg-neutral-800/90 border-b border-neutral-700/80 px-4 py-2.5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                </div>
                <div className="bg-neutral-900/90 text-neutral-400 font-mono-code text-[11px] px-4 py-1 rounded-sm border border-neutral-700/50 flex items-center gap-2 max-w-[260px] truncate">
                  <span className="text-neutral-500">🔒</span>
                  <span>other.estudio.mx/portfolio</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E2FF4A] animate-pulse"></span>
                  <span className="text-[10px] font-mono-code text-[#E2FF4A] uppercase font-bold">MODO ACTIVO</span>
                </div>
              </div>

              {/* Inside Mockup Interface */}
              <div className="bg-[#FAF9F5] p-6 text-neutral-900 min-h-[380px] flex flex-col justify-between relative overflow-hidden">
                {/* Mockup sub-nav */}
                <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                  <span className="font-mono-code text-[10px] font-bold tracking-widest text-neutral-500">
                    ESTUDIO // ARCHIVO 2025
                  </span>
                  <span className="text-[10px] font-mono-code bg-black text-white px-2 py-0.5">
                    DIRECCIÓN DE ARTE
                  </span>
                </div>

                {/* Mockup editorial layout */}
                <div className="my-6 space-y-4">
                  <span className="text-[10px] font-mono-code text-neutral-400 tracking-wider">
                    [EDICIÓN DIGITAL LIMITADA]
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-950 uppercase leading-none">
                    DISEÑO Y DESARROLLO <br />
                    WEB PREMIUM.
                  </h2>

                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="col-span-2 h-36 bg-neutral-200 rounded-sm overflow-hidden relative border border-neutral-300">
                      <img
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                        alt="Arquitectura moderna"
                        className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition duration-500"
                      />
                      <div className="absolute bottom-2 left-2 bg-black/80 backdrop-blur-xs text-white text-[9px] font-mono-code px-2 py-0.5">
                        ARQUITECTURA DIGITAL
                      </div>
                    </div>
                    <div className="col-span-1 flex flex-col justify-between">
                      <div className="h-20 bg-neutral-200 rounded-sm overflow-hidden border border-neutral-300">
                        <img
                          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80"
                          alt="Minimal interior"
                          className="w-full h-full object-cover grayscale"
                        />
                      </div>
                      <div className="bg-neutral-900 text-white p-2.5 rounded-sm">
                        <span className="block text-[8px] font-mono-code text-[#E2FF4A]">RENDIMIENTO</span>
                        <span className="text-sm font-extrabold font-mono-code">99.8% Perf</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mockup bottom bar */}
                <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-[10px] font-mono-code text-neutral-500">
                  <span>SISTEMA DE INTERFACES SUCIAS 001</span>
                  <span className="text-neutral-900 font-bold">CDMX © 2025</span>
                </div>
              </div>
            </div>

            {/* Floating verification card (bottom right of mockup) */}
            <div className="mt-4 sm:absolute sm:-bottom-6 sm:left-4 bg-white border border-neutral-300/90 shadow-xl p-3.5 rounded-sm max-w-sm flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#E2FF4A] text-black flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                ✓
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-950 uppercase font-mono-code">
                  100% HECHO A LA MEDIDA
                </p>
                <p className="text-[11px] text-neutral-600 leading-snug mt-0.5">
                  Sin plantillas genéricas. Código pulido y tipografía suiza calibrada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 01 // VISIÓN ESTRATÉGICA
      ========================================================================== */}
      <section className="py-20 border-t border-neutral-200 bg-white/50 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Header row */}
          <div>
            <div className="text-[11px] font-mono-code uppercase tracking-widest text-neutral-500 mb-2">
              01 // VISIÓN ESTRATÉGICA
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
              <div className="lg:col-span-7">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 leading-tight">
                  Tu negocio merece una <br />
                  presencia digital a la altura.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                  Transformamos tus ideas en páginas web profesionales que comunican el valor de tu
                  marca, presentan tus servicios y facilitan que tus clientes encuentren lo que
                  necesitan.
                </p>
              </div>
            </div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="bg-white border border-neutral-200/90 p-6 rounded-sm space-y-4 hover:border-neutral-400 transition-all shadow-xs">
              <div className="flex items-center justify-between text-neutral-400">
                <span className="font-mono-code text-xs text-neutral-500 font-bold">01</span>
                <Layout className="w-4 h-4 text-neutral-700" />
              </div>
              <h3 className="text-lg font-bold text-neutral-950">Diseño personalizado</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Una imagen digital que refleje la personalidad de cada negocio, alejándose de
                soluciones en serie para construir autoridad visual inmediata.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-neutral-200/90 p-6 rounded-sm space-y-4 hover:border-neutral-400 transition-all shadow-xs">
              <div className="flex items-center justify-between text-neutral-400">
                <span className="font-mono-code text-xs text-neutral-500 font-bold">02</span>
                <Smartphone className="w-4 h-4 text-neutral-700" />
              </div>
              <h3 className="text-lg font-bold text-neutral-950">Experiencia adaptable</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Interfaces diseñadas al milímetro para computadoras, tabletas y celulares,
                garantizando fluidez táctil y legibilidad impecable en cualquier pantalla.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-neutral-200/90 p-6 rounded-sm space-y-4 hover:border-neutral-400 transition-all shadow-xs">
              <div className="flex items-center justify-between text-neutral-400">
                <span className="font-mono-code text-xs text-neutral-500 font-bold">03</span>
                <MessageSquare className="w-4 h-4 text-neutral-700" />
              </div>
              <h3 className="text-lg font-bold text-neutral-950">Comunicación clara</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Contenido organizado jerárquicamente para presentar productos, servicios y propuestas
                de valor sin saturar ni confundir al visitante.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-neutral-200/90 p-6 rounded-sm space-y-4 hover:border-neutral-400 transition-all shadow-xs">
              <div className="flex items-center justify-between text-neutral-400">
                <span className="font-mono-code text-xs text-neutral-500 font-bold">04</span>
                <Target className="w-4 h-4 text-neutral-700" />
              </div>
              <h3 className="text-lg font-bold text-neutral-950">Enfoque en objetivos</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Estructuras pensadas con precisión comercial para facilitar consultas, solicitudes de
                información y conversiones medibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02 // CATÁLOGO DE DISCIPLINA (SERVICES LIST)
      ========================================================================== */}
      <section id="servicios" className="py-20 border-t border-neutral-200 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-[11px] font-mono-code uppercase tracking-widest text-neutral-500 mb-2">
                02 // CATÁLOGO DE DISCIPLINA
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950">
                Soluciones digitales para llevar tu <br />
                negocio más lejos.
              </h2>
            </div>
            <div>
              <span className="border border-neutral-300 font-mono-code text-[11px] uppercase tracking-wider px-3 py-1.5 bg-white text-neutral-700 font-semibold rounded-xs">
                7 ESPECIALIDADES DE DESARROLLO
              </span>
            </div>
          </div>

          {/* Editorial Service Table Rows */}
          <div className="border border-neutral-200 bg-white divide-y divide-neutral-200">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-neutral-50/80 transition group"
              >
                <div className="md:w-1/3 flex items-baseline gap-3">
                  <span className="font-mono-code text-xs text-neutral-400 font-bold">{item.id}</span>
                  <h3 className="text-lg md:text-xl font-bold text-neutral-950 group-hover:text-black">
                    {item.title}
                  </h3>
                </div>
                <div className="md:w-1/2">
                  <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="md:w-1/6 flex md:justify-end items-center">
                  <span className="text-[10px] font-mono-code tracking-widest uppercase border border-neutral-300 px-2.5 py-1 text-neutral-600 group-hover:border-neutral-900 group-hover:text-black transition">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03 // INVERSIÓN TRANSPARENTE EN MXN (PRICING TIERS)
      ========================================================================== */}
      <section id="paquetes" className="py-24 border-t border-neutral-200 bg-[#F4F4F2] px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-[11px] font-mono-code uppercase tracking-widest text-neutral-500">
              03 // INVERSIÓN TRANSPARENTE EN MXN
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950">
              Encuentra el paquete ideal <br />
              para tu negocio.
            </h2>
            <p className="text-neutral-600 text-xs md:text-sm leading-relaxed">
              Opciones de diseño web para diferentes necesidades, desde una presencia digital
              profesional hasta una experiencia con funciones inteligentes.
            </p>
          </div>

          {/* 3 Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* -------------------- CARD 01: PRESENCIA WEB -------------------- */}
            <div className="bg-white border border-neutral-300 p-7 md:p-8 rounded-sm flex flex-col justify-between shadow-xs">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                  <span className="font-mono-code text-[11px] uppercase tracking-wider text-neutral-500 font-bold">
                    PAQUETE 01
                  </span>
                  <span className="font-mono-code text-[10px] uppercase tracking-wider bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded-xs">
                    ESENCIAL
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-neutral-950">Presencia Web</h3>
                  <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                    Una página web profesional para comenzar a mostrar tu negocio en Internet.
                  </p>
                </div>

                {/* Price block */}
                <div className="bg-neutral-50 border border-neutral-200 p-4 rounded-xs">
                  <span className="block text-[10px] font-mono-code uppercase tracking-wider text-neutral-500">
                    RANGO DE INVERSIÓN
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-extrabold text-neutral-950">
                      $2,500 – $3,500
                    </span>
                    <span className="text-[11px] font-mono-code text-neutral-500">MXN + IVA</span>
                  </div>
                </div>

                {/* Target Audience */}
                <div className="space-y-1">
                  <span className="text-[11px] font-mono-code uppercase tracking-wider text-neutral-500 font-bold">
                    Ideal para:
                  </span>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    Emprendedores, profesionistas independientes y pequeños negocios que necesitan una
                    presencia digital sencilla y formal.
                  </p>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3 pt-2 border-t border-neutral-200">
                  <span className="block text-[11px] font-mono-code uppercase tracking-wider text-neutral-950 font-bold">
                    INCLUYE:
                  </span>
                  <ul className="space-y-2 text-xs text-neutral-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-0.5" />
                      <span>Página de inicio con diseño adaptable a celular</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-0.5" />
                      <span>Sección de servicios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-0.5" />
                      <span>Ubicación y horarios, cuando corresponda</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-0.5" />
                      <span>Botón o enlace de contacto por correo electrónico</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-0.5" />
                      <span>Información de contacto estructurada</span>
                    </li>
                  </ul>
                </div>

                {/* Quote */}
                <div className="p-3 bg-neutral-50 border-l-2 border-neutral-400 text-[11px] italic text-neutral-600 leading-snug">
                  «Presenta tu negocio con una imagen profesional y facilita que tus clientes
                  encuentren tu información.»
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <button
                  onClick={() =>
                    handleSelectPackage('Presencia Web ($2,500–$3,500 MXN + IVA)')
                  }
                  className="w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs font-bold font-mono-code uppercase py-3.5 px-4 rounded-xs transition text-center border border-neutral-300"
                >
                  SOLICITAR COTIZACIÓN &gt;
                </button>
              </div>
            </div>

            {/* -------------------- CARD 02: CAPTACIÓN DE CLIENTES (HIGHLIGHTED) -------------------- */}
            <div className="bg-neutral-950 text-white border-2 border-neutral-900 p-7 md:p-8 rounded-sm flex flex-col justify-between shadow-2xl relative transform lg:-translate-y-2">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                  <span className="font-mono-code text-[11px] uppercase tracking-wider text-neutral-400 font-bold">
                    PAQUETE 02
                  </span>
                  <span className="font-mono-code text-[10px] uppercase tracking-wider bg-[#E2FF4A] text-black font-extrabold px-2.5 py-0.5 rounded-xs">
                    ★ RECOMENDADO
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-white">Captación de Clientes</h3>
                  <p className="text-xs text-neutral-300 mt-1.5 leading-relaxed">
                    Diseñada para presentar información detallada de servicios, responder dudas y
                    facilitar las solicitudes de información.
                  </p>
                </div>

                {/* Price block */}
                <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xs">
                  <span className="block text-[10px] font-mono-code uppercase tracking-wider text-neutral-400">
                    RANGO DE INVERSIÓN
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-extrabold text-[#E2FF4A] font-mono-code">
                      $4,000 – $6,000
                    </span>
                    <span className="text-[11px] font-mono-code text-neutral-400">MXN + IVA</span>
                  </div>
                </div>

                {/* Target Audience */}
                <div className="space-y-1">
                  <span className="text-[11px] font-mono-code uppercase tracking-wider text-[#E2FF4A] font-bold">
                    Ideal para:
                  </span>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Negocios que necesitan explicar mejor su oferta y ofrecer una experiencia más
                    completa a sus visitantes.
                  </p>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3 pt-2 border-t border-neutral-850">
                  <span className="block text-[11px] font-mono-code uppercase tracking-wider text-white font-bold">
                    INCLUYE TODO LO ANTERIOR Y MÁS:
                  </span>
                  <ul className="space-y-2 text-xs text-neutral-300">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E2FF4A] shrink-0 mt-0.5" />
                      <span className="font-bold text-white">Todo lo incluido en el paquete Presencia Web</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E2FF4A] shrink-0 mt-0.5" />
                      <span>Secciones completas para servicios o tratamientos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E2FF4A] shrink-0 mt-0.5" />
                      <span>Sección para presentar el equipo y experiencia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E2FF4A] shrink-0 mt-0.5" />
                      <span>Formulario para solicitar información o citas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E2FF4A] shrink-0 mt-0.5" />
                      <span>Sección dedicada a preguntas frecuentes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E2FF4A] shrink-0 mt-0.5" />
                      <span>Estructura básica para Google y SEO inicial</span>
                    </li>
                  </ul>
                </div>

                {/* Quote */}
                <div className="p-3 bg-neutral-900 border-l-2 border-[#E2FF4A] text-[11px] italic text-neutral-300 leading-snug">
                  «Presenta mejor lo que haces, resuelve dudas frecuentes y facilita que los
                  clientes potenciales se pongan en contacto contigo.»
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <button
                  onClick={() =>
                    handleSelectPackage(
                      'Captación de Clientes ($4,000–$6,000 MXN + IVA) — Recomendado'
                    )
                  }
                  className="w-full bg-[#E2FF4A] hover:bg-[#d5f53c] text-neutral-950 text-xs font-black font-mono-code uppercase py-3.5 px-4 rounded-xs transition text-center shadow-md cursor-pointer"
                >
                  ELEGIR ESTE PAQUETE &gt;
                </button>
              </div>
            </div>

            {/* -------------------- CARD 03: WEB INTELIGENTE -------------------- */}
            <div className="bg-white border border-neutral-300 p-7 md:p-8 rounded-sm flex flex-col justify-between shadow-xs">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                  <span className="font-mono-code text-[11px] uppercase tracking-wider text-neutral-500 font-bold">
                    PAQUETE 03
                  </span>
                  <span className="font-mono-code text-[10px] uppercase tracking-wider bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded-xs">
                    AUTOMATIZACIÓN
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-neutral-950">Web Inteligente</h3>
                  <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                    Una experiencia digital con funciones inteligentes para mejorar la atención
                    inicial a tus visitantes.
                  </p>
                </div>

                {/* Price block */}
                <div className="bg-neutral-50 border border-neutral-200 p-4 rounded-xs">
                  <span className="block text-[10px] font-mono-code uppercase tracking-wider text-neutral-500">
                    RANGO DE INVERSIÓN
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-extrabold text-neutral-950">
                      $7,000 – $12,000
                    </span>
                    <span className="text-[11px] font-mono-code text-neutral-500">MXN + IVA</span>
                  </div>
                </div>

                {/* Target Audience */}
                <div className="space-y-1">
                  <span className="text-[11px] font-mono-code uppercase tracking-wider text-neutral-500 font-bold">
                    Ideal para:
                  </span>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    Negocios y empresas que desean automatizar respuestas a preguntas frecuentes y
                    calificar prospectos 24/7.
                  </p>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3 pt-2 border-t border-neutral-200">
                  <span className="block text-[11px] font-mono-code uppercase tracking-wider text-neutral-950 font-bold">
                    INCLUYE:
                  </span>
                  <ul className="space-y-2 text-xs text-neutral-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-0.5" />
                      <span>Todo lo incluido en Captación de Clientes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-0.5" />
                      <span className="font-bold text-neutral-950">
                        Asistente para responder preguntas frecuentes
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Assistant guidelines block */}
                <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-xs space-y-1.5">
                  <span className="block text-[10px] font-mono-code uppercase tracking-wider text-neutral-600 font-bold">
                    GUION TÉCNICO DEL ASISTENTE:
                  </span>
                  <ul className="text-[11px] text-neutral-600 space-y-1 list-disc list-inside">
                    <li>Responde exclusivamente con la información configurada y aprobada por el negocio.</li>
                    <li>Deriva a correo cuando no conoce una respuesta específica.</li>
                    <li>No inventa datos ni compromete la veracidad comercial.</li>
                  </ul>
                </div>

                {/* Quote */}
                <div className="p-3 bg-neutral-50 border-l-2 border-neutral-400 text-[11px] italic text-neutral-600 leading-snug">
                  «Facilita el acceso a información habitual y ofrece una experiencia de atención
                  inicial más ágil.»
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <button
                  onClick={() =>
                    handleSelectPackage('Web Inteligente ($7,000–$12,000 MXN + IVA)')
                  }
                  className="w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs font-bold font-mono-code uppercase py-3.5 px-4 rounded-xs transition text-center border border-neutral-300"
                >
                  SOLICITAR INFORMACIÓN &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04 // COMPARATIVE MATRIX TABLE
      ========================================================================== */}
      <section className="py-20 border-t border-neutral-200 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
            <div className="text-[11px] font-mono-code uppercase tracking-widest text-neutral-500 mb-2">
              04 // MATRIZ DETALLADA
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950">
              Comparativa técnica entre paquetes
            </h2>
            <p className="text-neutral-600 text-xs md:text-sm mt-1">
              Transparencia absoluta en cada funcionalidad y entregable antes de comenzar tu proyecto.
            </p>
          </div>

          {/* Table */}
          <div className="border border-neutral-300 bg-white overflow-x-auto shadow-xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-neutral-300 bg-neutral-100/80 font-mono-code text-[11px] text-neutral-700">
                  <th className="p-4 uppercase font-bold w-2/5">CARACTERÍSTICA / ENTREGABLE</th>
                  <th className="p-4 uppercase font-bold text-center w-1/5 border-l border-neutral-300">
                    01 // PRESENCIA WEB
                  </th>
                  <th className="p-4 uppercase font-bold text-center w-1/5 border-l border-neutral-300 bg-neutral-200/50">
                    02 // CAPTACIÓN DE CLIENTES
                  </th>
                  <th className="p-4 uppercase font-bold text-center w-1/5 border-l border-neutral-300 bg-[#E2FF4A]/15">
                    03 // WEB INTELIGENTE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {[
                  {
                    item: '1. Página de inicio adaptable (móvil y escritorio)',
                    c1: 'Sí',
                    c2: 'Sí',
                    c3: 'Sí',
                  },
                  {
                    item: '2. Servicios, ubicación y horarios de atención',
                    c1: 'Sí',
                    c2: 'Sí',
                    c3: 'Sí',
                  },
                  {
                    item: '3. Información y enlaces de contacto estructurados',
                    c1: 'Sí',
                    c2: 'Sí',
                    c3: 'Sí',
                  },
                  {
                    item: '4. Secciones completas para servicios o tratamientos',
                    c1: 'No especificado',
                    c2: 'Sí',
                    c3: 'Sí',
                  },
                  {
                    item: '5. Presentación del equipo y trayectoria',
                    c1: 'No especificado',
                    c2: 'Sí',
                    c3: 'Sí',
                  },
                  {
                    item: '6. Formulario para solicitar información o citas',
                    c1: 'No especificado',
                    c2: 'Sí',
                    c3: 'Sí',
                  },
                  {
                    item: '7. Preguntas frecuentes integradas',
                    c1: 'No especificado',
                    c2: 'Sí',
                    c3: 'Sí',
                  },
                  {
                    item: '8. Estructura básica para Google y SEO inicial',
                    c1: 'No especificado',
                    c2: 'Sí',
                    c3: 'Sí',
                  },
                  {
                    item: '9. Asistente para responder preguntas frecuentes',
                    c1: 'No',
                    c2: 'No',
                    c3: 'Sí',
                    highlight: true,
                  },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50/70 transition">
                    <td className="p-4 font-medium text-neutral-900">{row.item}</td>
                    <td
                      className={`p-4 text-center border-l border-neutral-200 font-mono-code ${
                        row.c1 === 'Sí'
                          ? 'text-neutral-900 font-bold'
                          : 'text-neutral-400'
                      }`}
                    >
                      {row.c1}
                    </td>
                    <td
                      className={`p-4 text-center border-l border-neutral-200 font-mono-code bg-neutral-50/50 ${
                        row.c2 === 'Sí'
                          ? 'text-neutral-900 font-bold'
                          : 'text-neutral-400'
                      }`}
                    >
                      {row.c2}
                    </td>
                    <td
                      className={`p-4 text-center border-l border-neutral-200 font-mono-code ${
                        row.highlight ? 'bg-[#E2FF4A]/25 text-neutral-950 font-black' : 'bg-[#E2FF4A]/10 font-bold'
                      }`}
                    >
                      {row.c3}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05 // ARCHIVO EDITORIAL (PORTFOLIO SHOWCASE)
      ========================================================================== */}
      <section id="proyectos" className="py-20 border-t border-neutral-200 bg-white/60 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-[11px] font-mono-code uppercase tracking-widest text-neutral-500 mb-2">
                05 // ARCHIVO EDITORIAL
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950">
                Ideas que toman forma.
              </h2>
              <p className="text-neutral-600 text-xs md:text-sm mt-1 max-w-xl">
                Selección de conceptos de diseño editorial desarrollados por Other Estudio para
                ilustrar diferentes industrias y modelos de negocio.
              </p>
            </div>
            <div>
              <span className="border border-neutral-300 font-mono-code text-[11px] uppercase tracking-wider px-3 py-1.5 bg-neutral-100 text-neutral-700 font-semibold rounded-xs">
                CONCEPTOS DE DISEÑO
              </span>
            </div>
          </div>

          {/* 6 Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj, idx) => {
              const isNoir = idx === 0;
              const isVelora = idx === 1;
              const isVector = idx === 2;
              const isSonrisa = idx === 3;
              const isSonrisaLocal = idx === 4;
              const isOtraForma = idx === 5;
              const isInteractive = isNoir || isSonrisa || isVelora || isVector || isSonrisaLocal || isOtraForma;

              return (
                <div
                  key={idx}
                  onClick={() => {
                    if (isNoir) {
                      setShowNoirDemo(true);
                    } else if (isVelora) {
                      setShowVeloraDemo(true);
                    } else if (isVector) {
                      setShowVectorDemo(true);
                    } else if (isSonrisa) {
                      setShowSonrisaDemo(true);
                    } else if (isSonrisaLocal) {
                      setShowSonrisaLocalDemo(true);
                    } else if (isOtraForma) {
                      setShowOtraFormaDemo(true);
                    }
                  }}
                  className={`bg-white border rounded-sm overflow-hidden transition-all flex flex-col justify-between group shadow-xs ${
                    isNoir
                      ? 'border-[#E5C287] hover:border-black cursor-pointer hover:shadow-xl ring-1 ring-[#E5C287]/40'
                      : isVelora
                      ? 'border-[#E5C483] hover:border-black cursor-pointer hover:shadow-xl ring-1 ring-[#E5C483]/40'
                      : isVector
                      ? 'border-amber-400 hover:border-slate-900 cursor-pointer hover:shadow-xl ring-1 ring-amber-400/40'
                      : isSonrisa
                      ? 'border-cyan-400 hover:border-[#09152B] cursor-pointer hover:shadow-xl ring-1 ring-cyan-400/40'
                      : isSonrisaLocal
                      ? 'border-teal-400 hover:border-[#061C19] cursor-pointer hover:shadow-xl ring-1 ring-teal-400/40'
                      : isOtraForma
                      ? 'border-[#2563EB] hover:border-blue-900 cursor-pointer hover:shadow-xl ring-1 ring-[#2563EB]/40'
                      : 'border-neutral-300/80 hover:border-neutral-900'
                  }`}
                >
                  <div>
                    {/* Category Header */}
                    <div
                      className={`p-3.5 border-b flex items-center justify-between text-[10px] font-mono-code ${
                        isNoir
                          ? 'bg-[#151518] text-[#E5C287] border-neutral-800'
                          : isVelora
                          ? 'bg-[#141418] text-[#E5C483] border-neutral-800'
                          : isVector
                          ? 'bg-[#0E1322] text-amber-300 border-slate-800'
                          : isSonrisa
                          ? 'bg-[#0B1528] text-cyan-300 border-slate-800'
                          : isSonrisaLocal
                          ? 'bg-[#061C19] text-teal-300 border-teal-800'
                          : isOtraForma
                          ? 'bg-[#1E50DE] text-white border-blue-600'
                          : 'bg-neutral-100/70 text-neutral-600 border-neutral-200'
                      }`}
                    >
                      <span className="font-bold tracking-wider">{proj.cat}</span>
                      {isNoir ? (
                        <span className="bg-[#E5C287] text-neutral-950 font-bold px-2 py-0.5 rounded-xs flex items-center gap-1 text-[9px]">
                          <span>DEMO EN VIVO</span>
                          <span>↗</span>
                        </span>
                      ) : isVelora ? (
                        <span className="bg-[#E5C483] text-neutral-950 font-bold px-2 py-0.5 rounded-xs flex items-center gap-1 text-[9px]">
                          <span>DEMO EN VIVO</span>
                          <span>↗</span>
                        </span>
                      ) : isVector ? (
                        <span className="bg-amber-400 text-slate-950 font-bold px-2 py-0.5 rounded-xs flex items-center gap-1 text-[9px]">
                          <span>DEMO EN VIVO</span>
                          <span>↗</span>
                        </span>
                      ) : isSonrisa ? (
                        <span className="bg-[#4EE1C4] text-slate-950 font-bold px-2 py-0.5 rounded-xs flex items-center gap-1 text-[9px]">
                          <span>DEMO EN VIVO</span>
                          <span>↗</span>
                        </span>
                      ) : isSonrisaLocal ? (
                        <span className="bg-[#14B8A6] text-slate-950 font-bold px-2 py-0.5 rounded-xs flex items-center gap-1 text-[9px]">
                          <span>DEMO EN VIVO</span>
                          <span>↗</span>
                        </span>
                      ) : isOtraForma ? (
                        <span className="bg-white text-[#1E50DE] font-bold px-2 py-0.5 rounded-xs flex items-center gap-1 text-[9px]">
                          <span>DEMO EN VIVO</span>
                          <span>↗</span>
                        </span>
                      ) : (
                        <span className="text-neutral-400 group-hover:text-neutral-900 transition">
                          ↗
                        </span>
                      )}
                    </div>

                    {/* Mockup Preview Graphic */}
                    <div className="h-48 bg-neutral-950 relative overflow-hidden flex items-center justify-center p-3">
                      {isNoir ? (
                        /* Realistic Noir Preview Frame */
                        <div className="w-full h-full rounded-sm overflow-hidden border border-[#E5C287]/40 relative flex flex-col justify-between shadow-2xl group-hover:scale-[1.02] transition duration-300">
                          <img
                            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80"
                            alt="Noir Alta Cocina"
                            className="absolute inset-0 w-full h-full object-cover grayscale-20"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/80"></div>

                          {/* Mini browser chrome */}
                          <div className="relative z-10 bg-black/60 backdrop-blur-xs px-2.5 py-1 flex items-center justify-between border-b border-neutral-800 text-[8px] font-mono-code text-neutral-400">
                            <span className="text-[#E5C287]">🔒 noir-gastronomia.mx</span>
                            <span className="text-[#E5C287] font-bold">ALTA COCINA</span>
                          </div>

                          {/* Mini Hero Content */}
                          <div className="relative z-10 p-3 space-y-1">
                            <span className="text-[7px] font-mono-code text-[#E5C287] uppercase tracking-widest block">
                              ALTA COCINA · MOMENTOS
                            </span>
                            <p className="text-sm font-serif-luxury font-normal text-white leading-tight">
                              El arte de <br />
                              saborear <span className="italic text-[#E5C287]">la vida.</span>
                            </p>
                          </div>

                          {/* Bottom action indicator */}
                          <div className="relative z-10 px-3 pb-2.5 flex items-center justify-between text-[8px] font-mono-code">
                            <span className="text-white/80 font-bold tracking-widest font-serif-luxury">N O I R .</span>
                            <span className="bg-[#E5C287] text-black font-bold px-2 py-0.5 rounded-xs flex items-center gap-1 shadow-xs">
                              <span>VER EN VIVO</span>
                              <span>↗</span>
                            </span>
                          </div>
                        </div>
                      ) : isSonrisa ? (
                        /* Realistic Sonrisa Dental Preview Frame */
                        <div className="w-full h-full rounded-sm overflow-hidden border border-cyan-400/40 relative flex flex-col justify-between shadow-2xl group-hover:scale-[1.02] transition duration-300 bg-[#0B1528]">
                          <img
                            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=80"
                            alt="Sonrisa Dental"
                            className="absolute inset-0 w-full h-full object-cover opacity-80"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-[#0B1528]/60 to-[#0B1528]/80"></div>

                          {/* Mini browser chrome */}
                          <div className="relative z-10 bg-black/60 backdrop-blur-xs px-2.5 py-1 flex items-center justify-between border-b border-slate-700 text-[8px] font-mono-code text-cyan-300">
                            <span>🔒 sonrisadental-madrid.es</span>
                            <span className="text-white font-bold">CASOS 3D</span>
                          </div>

                          {/* Mini Hero Content */}
                          <div className="relative z-10 p-3 space-y-1">
                            <span className="text-[7px] font-mono-code text-cyan-400 uppercase tracking-widest block">
                              EVIDENCIA CLÍNICA · CASOS
                            </span>
                            <p className="text-xs font-bold text-white leading-tight">
                              Resultados Reales y <br />
                              <span className="text-cyan-300">Experiencias de Pacientes</span>
                            </p>
                          </div>

                          {/* Bottom action indicator */}
                          <div className="relative z-10 px-3 pb-2.5 flex items-center justify-between text-[8px] font-mono-code">
                            <span className="text-amber-300 font-bold">⭐ 4.9 (1.2k+ Reviews)</span>
                            <span className="bg-[#4EE1C4] text-slate-950 font-bold px-2 py-0.5 rounded-xs flex items-center gap-1 shadow-xs">
                              <span>VER EN VIVO</span>
                              <span>↗</span>
                            </span>
                          </div>
                        </div>
                      ) : isVelora ? (
                        /* Realistic Velora Fashion Preview Frame */
                        <div className="w-full h-full rounded-sm overflow-hidden border border-[#E5C483]/40 relative flex flex-col justify-between shadow-2xl group-hover:scale-[1.02] transition duration-300 bg-[#0C0C0E]">
                          <img
                            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80"
                            alt="Velora Fashion"
                            className="absolute inset-0 w-full h-full object-cover grayscale-15"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/80"></div>

                          {/* Mini browser chrome */}
                          <div className="relative z-10 bg-black/60 backdrop-blur-xs px-2.5 py-1 flex items-center justify-between border-b border-neutral-800 text-[8px] font-mono-code text-[#E5C483]">
                            <span>🔒 velora-fashion.com</span>
                            <span className="text-white font-bold">COLECCIÓN 2026</span>
                          </div>

                          {/* Mini Hero Content */}
                          <div className="relative z-10 p-3 space-y-1">
                            <span className="text-[7px] font-mono-code text-[#E5C483] uppercase tracking-widest block">
                              NUEVA COLECCIÓN · 2026
                            </span>
                            <p className="text-sm font-serif-luxury font-normal text-white leading-tight">
                              Viste tu propia <br />
                              <span className="italic text-[#E5C483]">historia.</span>
                            </p>
                          </div>

                          {/* Bottom action indicator */}
                          <div className="relative z-10 px-3 pb-2.5 flex items-center justify-between text-[8px] font-mono-code">
                            <span className="text-white font-serif-luxury font-bold tracking-widest">V E L O R A</span>
                            <span className="bg-[#E5C483] text-black font-bold px-2 py-0.5 rounded-xs flex items-center gap-1 shadow-xs">
                              <span>VER EN VIVO</span>
                              <span>↗</span>
                            </span>
                          </div>
                        </div>
                      ) : isVector ? (
                        /* Realistic Vector Logistics Preview Frame */
                        <div className="w-full h-full rounded-sm overflow-hidden border border-amber-400/40 relative flex flex-col justify-between shadow-2xl group-hover:scale-[1.02] transition duration-300 bg-[#070A12]">
                          <img
                            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=700&q=80"
                            alt="Vector Logística"
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-[#070A12]/60 to-[#070A12]/85"></div>

                          {/* Mini browser chrome */}
                          <div className="relative z-10 bg-black/60 backdrop-blur-xs px-2.5 py-1 flex items-center justify-between border-b border-slate-800 text-[8px] font-mono-code text-amber-400">
                            <span>🔒 vectorlogistica.mx</span>
                            <span className="text-white font-bold">TORRE 24/7</span>
                          </div>

                          {/* Mini Hero Content */}
                          <div className="relative z-10 p-3 space-y-1">
                            <span className="text-[7px] font-mono-code text-amber-400 uppercase tracking-widest block">
                              LOGÍSTICA B2B · ADUANAS & FLETES
                            </span>
                            <p className="text-xs font-bold text-white leading-tight">
                              Arquitectura logística que <br />
                              <span className="text-amber-400">conecta el comercio global</span>
                            </p>
                          </div>

                          {/* Bottom action indicator */}
                          <div className="relative z-10 px-3 pb-2.5 flex items-center justify-between text-[8px] font-mono-code">
                            <span className="text-emerald-400 font-bold">🟢 99.8% PUNTUALIDAD</span>
                            <span className="bg-amber-400 text-slate-950 font-bold px-2 py-0.5 rounded-xs flex items-center gap-1 shadow-xs">
                              <span>VER EN VIVO</span>
                              <span>↗</span>
                            </span>
                          </div>
                        </div>
                      ) : isSonrisaLocal ? (
                        /* Realistic Clinica Sonrisa Local Preview Frame */
                        <div className="w-full h-full rounded-sm overflow-hidden border border-teal-400/40 relative flex flex-col justify-between shadow-2xl group-hover:scale-[1.02] transition duration-300 bg-[#061C19]">
                          <img
                            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=80"
                            alt="Clínica Sonrisa Dental"
                            className="absolute inset-0 w-full h-full object-cover opacity-80"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#061C19] via-[#061C19]/60 to-[#061C19]/85"></div>

                          {/* Mini browser chrome */}
                          <div className="relative z-10 bg-black/60 backdrop-blur-xs px-2.5 py-1 flex items-center justify-between border-b border-teal-800 text-[8px] font-mono-code text-teal-300">
                            <span>🔒 clinicasonrisadental.com</span>
                            <span className="text-white font-bold">LOCAL & SALUD</span>
                          </div>

                          {/* Mini Hero Content */}
                          <div className="relative z-10 p-3 space-y-1">
                            <span className="text-[7px] font-mono-code text-teal-300 uppercase tracking-widest block">
                              NEGOCIO LOCAL · CLÍNICA DENTAL
                            </span>
                            <p className="text-xs font-bold text-white leading-tight">
                              Tu salud bucodental en <br />
                              <span className="text-teal-300">las mejores manos de proximidad</span>
                            </p>
                          </div>

                          {/* Bottom action indicator */}
                          <div className="relative z-10 px-3 pb-2.5 flex items-center justify-between text-[8px] font-mono-code">
                            <span className="text-teal-300 font-bold">🟢 CITAS WHATSAPP HOY</span>
                            <span className="bg-[#14B8A6] text-slate-950 font-bold px-2 py-0.5 rounded-xs flex items-center gap-1 shadow-xs">
                              <span>VER EN VIVO</span>
                              <span>↗</span>
                            </span>
                          </div>
                        </div>
                      ) : isOtraForma ? (
                        /* Realistic Otra Forma Tech Preview Frame */
                        <div className="w-full h-full rounded-sm overflow-hidden border border-[#2563EB]/40 relative flex flex-col justify-between shadow-2xl group-hover:scale-[1.02] transition duration-300 bg-[#1E50DE] text-white p-2.5">
                          {/* Mini browser chrome */}
                          <div className="bg-black/40 backdrop-blur-xs px-2.5 py-1 flex items-center justify-between border-b border-white/20 text-[8px] font-mono-code text-white rounded-xs">
                            <span>🔒 otraforma.mx</span>
                            <span className="font-bold text-white/90">TECNOLOGÍA</span>
                          </div>

                          {/* Geometric Artwork in thumbnail */}
                          <div className="relative flex items-center justify-center my-auto h-20">
                            <div
                              className="w-12 h-16 bg-white shadow-md"
                              style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', transform: 'translateX(-10px)' }}
                            ></div>
                            <div className="w-14 h-14 rounded-full bg-[#FF5733] shadow-md flex items-center justify-center translate-x-4">
                              <div className="w-10 h-10 rounded-full border border-white/60"></div>
                            </div>
                          </div>

                          {/* Mini Hero Content */}
                          <div className="space-y-0.5">
                            <span className="text-[7px] font-mono-code text-white/80 uppercase tracking-widest block">
                              01 / SOLUCIONES DIGITALES
                            </span>
                            <p className="text-xs font-black text-white leading-tight">
                              Tu web puede <span className="underline decoration-[#FF5733] decoration-2">hacer más.</span>
                            </p>
                          </div>

                          {/* Bottom action indicator */}
                          <div className="pt-1 flex items-center justify-between text-[8px] font-mono-code border-t border-white/20 mt-1">
                            <span className="font-bold tracking-wider">OTRA FORMA</span>
                            <span className="bg-white text-[#1E50DE] font-bold px-2 py-0.5 rounded-xs flex items-center gap-1 shadow-xs">
                              <span>VER EN VIVO</span>
                              <span>↗</span>
                            </span>
                          </div>
                        </div>
                      ) : (
                        /* Simulated Browser Frame inside card */
                        <div className="w-full h-full rounded-sm bg-neutral-100 border border-neutral-300 overflow-hidden shadow-inner flex flex-col">
                          <div className="bg-neutral-200/90 px-2 py-1 flex items-center gap-1.5 border-b border-neutral-300 text-[8px] font-mono-code text-neutral-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
                            <span className="truncate">other-concept-{idx + 1}.mx</span>
                          </div>
                          <div className="p-3 bg-neutral-50 flex-1 flex flex-col justify-between">
                            <div>
                              <span className="text-[7px] font-mono-code uppercase bg-black text-white px-1 py-0.5">
                                {proj.tag}
                              </span>
                              <p className="text-xs font-black uppercase text-neutral-950 mt-1.5 tracking-tight truncate">
                                {proj.title}
                              </p>
                            </div>
                            <div className="grid grid-cols-2 gap-1.5 my-1">
                              <div className="h-10 bg-neutral-300/60 rounded-xs"></div>
                              <div className="h-10 bg-neutral-300/40 rounded-xs"></div>
                            </div>
                            <div className="flex items-center justify-between text-[8px] font-mono-code text-neutral-400 border-t border-neutral-200 pt-1">
                              <span>SYSTEM UI</span>
                              <span className="text-neutral-900 font-bold">2025</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono-code uppercase tracking-widest text-neutral-400 font-bold">
                          {proj.num}
                        </span>
                        {isInteractive && (
                          <span
                            className={`text-[10px] font-mono-code font-bold uppercase ${
                              isNoir || isVelora
                                ? 'text-[#C9A24D]'
                                : isVector
                                ? 'text-amber-600'
                                : isOtraForma
                                ? 'text-blue-600'
                                : isSonrisaLocal
                                ? 'text-teal-600'
                                : 'text-cyan-700'
                            }`}
                          >
                            INTERACTIVO
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-neutral-950 leading-snug group-hover:text-black">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-neutral-600 leading-relaxed pt-1">
                        {proj.desc}
                      </p>

                      {isNoir && (
                        <div className="pt-3">
                          <button
                            type="button"
                            className="w-full bg-neutral-950 hover:bg-neutral-800 text-white text-[11px] font-bold font-mono-code uppercase py-2.5 px-3 rounded-xs flex items-center justify-center gap-1.5 transition"
                          >
                            <span>✦ INTERACTUAR CON ESTE SITIO</span>
                            <span className="text-[#E5C287]">↗</span>
                          </button>
                        </div>
                      )}

                      {isVelora && (
                        <div className="pt-3">
                          <button
                            type="button"
                            className="w-full bg-[#141418] hover:bg-neutral-800 text-white text-[11px] font-bold font-mono-code uppercase py-2.5 px-3 rounded-xs flex items-center justify-center gap-1.5 transition"
                          >
                            <span>✦ INTERACTUAR CON ESTE SITIO</span>
                            <span className="text-[#E5C483]">↗</span>
                          </button>
                        </div>
                      )}

                      {isVector && (
                        <div className="pt-3">
                          <button
                            type="button"
                            className="w-full bg-[#0E1322] hover:bg-[#182038] text-white text-[11px] font-bold font-mono-code uppercase py-2.5 px-3 rounded-xs flex items-center justify-center gap-1.5 transition"
                          >
                            <span>✦ INTERACTUAR CON ESTE SITIO</span>
                            <span className="text-amber-400">↗</span>
                          </button>
                        </div>
                      )}

                      {isSonrisa && (
                        <div className="pt-3">
                          <button
                            type="button"
                            className="w-full bg-[#0B172E] hover:bg-[#142B52] text-white text-[11px] font-bold font-mono-code uppercase py-2.5 px-3 rounded-xs flex items-center justify-center gap-1.5 transition"
                          >
                            <span>✦ INTERACTUAR CON ESTE SITIO</span>
                            <span className="text-[#4EE1C4]">↗</span>
                          </button>
                        </div>
                      )}

                      {isSonrisaLocal && (
                        <div className="pt-3">
                          <button
                            type="button"
                            className="w-full bg-[#061C19] hover:bg-[#0c3630] text-white text-[11px] font-bold font-mono-code uppercase py-2.5 px-3 rounded-xs flex items-center justify-center gap-1.5 transition"
                          >
                            <span>✦ INTERACTUAR CON ESTE SITIO</span>
                            <span className="text-teal-400">↗</span>
                          </button>
                        </div>
                      )}

                      {isOtraForma && (
                        <div className="pt-3">
                          <button
                            type="button"
                            className="w-full bg-[#1E50DE] hover:bg-[#1940B0] text-white text-[11px] font-bold font-mono-code uppercase py-2.5 px-3 rounded-xs flex items-center justify-center gap-1.5 transition"
                          >
                            <span>✦ INTERACTUAR CON ESTE SITIO</span>
                            <span className="text-white">↗</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06 // MANIFIESTO Y RIGOR (BLACK BANNER)
      ========================================================================== */}
      <section className="bg-neutral-950 text-white py-24 px-4 md:px-8 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex items-center gap-2 text-[11px] font-mono-code text-neutral-400 uppercase tracking-widest">
            <span className="inline-block w-2 h-2 bg-[#E2FF4A]"></span>
            <span>06 // MANIFIESTO Y RIGOR</span>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
              No hacemos páginas por <br />
              hacer. Creamos <br />
              experiencias con <br />
              propósito.
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-end">
              <div className="lg:col-span-7">
                <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-xl">
                  Creemos en el diseño que comunica, en los detalles que marcan la diferencia y en las
                  experiencias digitales que conectan estrategia, estética y funcionalidad. Cada sitio
                  que construimos es una pieza única pensada para dignificar el negocio que
                  representa.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="border border-neutral-800 bg-neutral-900/60 p-5 rounded-sm space-y-2">
                  <span className="text-[10px] font-mono-code uppercase tracking-widest text-[#E2FF4A] font-bold block">
                    PRINCIPIO FUNDAMENTAL
                  </span>
                  <p className="text-sm md:text-base font-bold text-white leading-snug">
                    Claridad sobre artificio. Precisión técnica sobre modas pasajeras.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07 // METODOLOGÍA PROBADA (PROCESS PHASES)
      ========================================================================== */}
      <section id="proceso" className="py-20 border-b border-neutral-200 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div>
            <div className="text-[11px] font-mono-code uppercase tracking-widest text-neutral-500 mb-2">
              07 // METODOLOGÍA PROBADA
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950">
              De la idea a tu próxima <br />
              página web.
            </h2>
            <p className="text-neutral-600 text-xs md:text-sm mt-1">
              Un flujo de trabajo transparente, ordenado y sin sorpresas de principio a fin.
            </p>
          </div>

          {/* 4 Phases Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Step 1 */}
            <div className="bg-white border border-neutral-300/80 p-6 rounded-sm flex flex-col justify-between space-y-6 shadow-xs hover:border-neutral-900 transition">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                  <span className="font-mono-code text-[11px] uppercase tracking-wider text-neutral-500 font-bold">
                    FASE // 01
                  </span>
                  <div className="w-5 h-5 rounded-full border border-neutral-400 text-neutral-700 flex items-center justify-center text-[10px] font-mono-code font-bold">
                    01
                  </div>
                </div>
                <h3 className="text-lg font-bold text-neutral-950">Descubrimiento</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Conocemos tu negocio, tus necesidades y los objetivos de tu página para definir el
                  alcance exacto y la solución requerida.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-200">
                <span className="text-[10px] font-mono-code uppercase text-neutral-500 tracking-wider">
                  SEMANA 1 · ALINEACIÓN INICIAL
                </span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-neutral-300/80 p-6 rounded-sm flex flex-col justify-between space-y-6 shadow-xs hover:border-neutral-900 transition">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                  <span className="font-mono-code text-[11px] uppercase tracking-wider text-neutral-500 font-bold">
                    FASE // 02
                  </span>
                  <div className="w-5 h-5 rounded-full border border-neutral-400 text-neutral-700 flex items-center justify-center text-[10px] font-mono-code font-bold">
                    02
                  </div>
                </div>
                <h3 className="text-lg font-bold text-neutral-950">Planeación y diseño</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Definimos la estructura, el contenido y la dirección visual del proyecto, elaborando
                  prototipos de alta fidelidad.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-200">
                <span className="text-[10px] font-mono-code uppercase text-neutral-500 tracking-wider">
                  SEMANA 2 · WIREFRAMES Y ESTILO
                </span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-neutral-300/80 p-6 rounded-sm flex flex-col justify-between space-y-6 shadow-xs hover:border-neutral-900 transition">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                  <span className="font-mono-code text-[11px] uppercase tracking-wider text-neutral-500 font-bold">
                    FASE // 03
                  </span>
                  <div className="w-5 h-5 rounded-full border border-neutral-400 text-neutral-700 flex items-center justify-center text-[10px] font-mono-code font-bold">
                    03
                  </div>
                </div>
                <h3 className="text-lg font-bold text-neutral-950">Desarrollo</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Transformamos el diseño en una experiencia web adaptable, rápida y funcional, probada
                  minuciosamente en múltiples dispositivos.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-200">
                <span className="text-[10px] font-mono-code uppercase text-neutral-500 tracking-wider">
                  SEMANA 3 · CÓDIGO E IMPLEMENTACIÓN
                </span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white border border-neutral-300/80 p-6 rounded-sm flex flex-col justify-between space-y-6 shadow-xs hover:border-neutral-900 transition">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                  <span className="font-mono-code text-[11px] uppercase tracking-wider text-neutral-500 font-bold">
                    FASE // 04
                  </span>
                  <div className="w-5 h-5 rounded-full border border-neutral-400 text-neutral-700 flex items-center justify-center text-[10px] font-mono-code font-bold">
                    04
                  </div>
                </div>
                <h3 className="text-lg font-bold text-neutral-950">Revisión y lanzamiento</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Revisamos juntos el resultado y preparamos la publicación oficial en tu dominio de
                  acuerdo con el alcance acordado.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-200">
                <span className="text-[10px] font-mono-code uppercase text-neutral-500 tracking-wider">
                  SEMANA 4 · PUBLICACIÓN Y ENTREGA
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 08 // RESOLUCIÓN DE DUDAS (FAQ ACCORDION)
      ========================================================================== */}
      <section className="py-20 bg-neutral-100/50 px-4 md:px-8 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <div className="text-[11px] font-mono-code uppercase tracking-widest text-neutral-500">
              08 // RESOLUCIÓN DE DUDAS
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950">
              Preguntas frecuentes
            </h2>
            <p className="text-neutral-600 text-xs md:text-sm">
              Todo lo que necesitas saber sobre costos, procesos y alcances de servicio.
            </p>
          </div>

          <div className="bg-white border border-neutral-300 divide-y divide-neutral-200 shadow-xs">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="transition">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 hover:bg-neutral-50/80 transition cursor-pointer"
                  >
                    <span className="text-sm md:text-base font-bold text-neutral-900">
                      {faq.q}
                    </span>
                    <span className="text-neutral-500 font-mono-code text-sm shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-neutral-900" />
                      ) : (
                        <Plus className="w-4 h-4 text-neutral-500" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 md:px-6 pb-6 text-xs md:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 bg-neutral-50/50 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 09 // INICIAR CONVERSACIÓN (CONTACT FORM)
      ========================================================================== */}
      <section id="contacto" className="py-20 bg-[#F4F4F2] px-4 md:px-8 border-b border-neutral-200">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <div className="text-[11px] font-mono-code uppercase tracking-widest text-neutral-500">
              09 // INICIAR CONVERSACIÓN
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950">
              Cuéntanos sobre tu proyecto.
            </h2>
            <p className="text-neutral-600 text-xs md:text-sm">
              Platícanos qué tienes en mente y te ayudaremos a encontrar la solución web adecuada para
              tu negocio.
            </p>
          </div>

          {/* Official Email Contact Pill Bar */}
          <div className="bg-white border border-neutral-300 p-4 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] font-mono-code uppercase tracking-wider text-neutral-500 font-bold">
                  CANAL OFICIAL DE ATENCIÓN
                </span>
                <span className="font-mono-code text-xs md:text-sm font-bold text-neutral-900">
                  otherstudio2026@gmail.com
                </span>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs font-mono-code px-3.5 py-1.5 rounded-xs border border-neutral-300 transition flex items-center gap-1.5 cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-600" />
                  <span>Copiar correo</span>
                </>
              )}
            </button>
          </div>

          {/* Form Box */}
          <div className="bg-white border border-neutral-300 p-6 md:p-8 rounded-sm shadow-xs">
            {formSubmitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-[#E2FF4A] text-black rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-950 font-mono-code">
                  ¡SOLICITUD ENVIADA!
                </h3>
                <p className="text-xs text-neutral-600 max-w-md mx-auto leading-relaxed">
                  Hemos recibido tus datos con éxito. Revisaremos los requerimientos de tu proyecto y
                  te responderemos formalmente a{' '}
                  <span className="font-bold text-neutral-900">{formData.correo || 'tu correo'}</span>{' '}
                  en un plazo máximo de 24 a 48 horas hábiles.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-mono-code font-bold uppercase underline text-neutral-700 hover:text-black"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Field 1 */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono-code uppercase tracking-wider text-neutral-700 font-bold">
                      1. TU NOMBRE *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="p. ej. Mariana Treviño"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full bg-neutral-50/70 border border-neutral-300 px-3.5 py-2.5 text-xs text-neutral-900 focus:bg-white focus:outline-hidden focus:border-neutral-900 transition"
                    />
                  </div>

                  {/* Field 2 */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono-code uppercase tracking-wider text-neutral-700 font-bold">
                      2. CORREO ELECTRÓNICO *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tu@empresa.com"
                      value={formData.correo}
                      onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                      className="w-full bg-neutral-50/70 border border-neutral-300 px-3.5 py-2.5 text-xs text-neutral-900 focus:bg-white focus:outline-hidden focus:border-neutral-900 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Field 3 */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono-code uppercase tracking-wider text-neutral-700 font-bold">
                      3. NOMBRE DE TU NEGOCIO O MARCA
                    </label>
                    <input
                      type="text"
                      placeholder="p. ej. Café Lumbre"
                      value={formData.negocio}
                      onChange={(e) => setFormData({ ...formData, negocio: e.target.value })}
                      className="w-full bg-neutral-50/70 border border-neutral-300 px-3.5 py-2.5 text-xs text-neutral-900 focus:bg-white focus:outline-hidden focus:border-neutral-900 transition"
                    />
                  </div>

                  {/* Field 4 */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono-code uppercase tracking-wider text-neutral-700 font-bold">
                      4. TIPO DE PÁGINA QUE NECESITAS
                    </label>
                    <select
                      value={formData.tipo}
                      onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                      className="w-full bg-neutral-50/70 border border-neutral-300 px-3.5 py-2.5 text-xs text-neutral-900 focus:bg-white focus:outline-hidden focus:border-neutral-900 transition"
                    >
                      <option>Sitio web para negocio o servicios</option>
                      <option>Landing page de conversión directa</option>
                      <option>Tienda en línea / Catálogo de productos</option>
                      <option>Página corporativa institucional</option>
                      <option>Monografía / Marca personal</option>
                      <option>Rediseño de página existente</option>
                    </select>
                  </div>
                </div>

                {/* Field 5: Selected Package */}
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-mono-code uppercase tracking-wider text-neutral-700 font-bold">
                    5. PAQUETE DE INTERÉS EN MXN
                  </label>
                  <select
                    value={selectedPackage}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                    className="w-full bg-neutral-50/70 border border-neutral-300 px-3.5 py-2.5 text-xs text-neutral-900 focus:bg-white focus:outline-hidden focus:border-neutral-900 transition font-medium"
                  >
                    <option>Captación de Clientes ($4,000–$6,000 MXN + IVA) — Recomendado</option>
                    <option>Presencia Web ($2,500–$3,500 MXN + IVA)</option>
                    <option>Web Inteligente ($7,000–$12,000 MXN + IVA)</option>
                    <option>Aún no estoy seguro / Necesito asesoría técnica</option>
                  </select>
                </div>

                {/* Field 6: Message */}
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-mono-code uppercase tracking-wider text-neutral-700 font-bold">
                    6. MENSAJE O DETALLES ADICIONALES
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Cuéntanos brevemente sobre tus clientes ideales, secciones que requieres y si tienes fecha meta de entrega..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full bg-neutral-50/70 border border-neutral-300 p-3.5 text-xs text-neutral-900 focus:bg-white focus:outline-hidden focus:border-neutral-900 transition"
                  ></textarea>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-neutral-950 hover:bg-neutral-800 text-white font-mono-code text-xs font-bold uppercase py-4 px-6 rounded-xs transition flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <span>✦ ENVIAR SOLICITUD</span>
                    <span>↗</span>
                  </button>
                </div>

                {/* SMTP / Mail client links */}
                <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 pt-2 gap-2 border-t border-neutral-100">
                  <span>Formulario listo para conexión SMTP. ¿Prefieres enviar directo desde tu gestor?</span>
                  <a
                    href="mailto:otherstudio2026@gmail.com?subject=Solicitud%20de%20Cotizaci%C3%B3n%20-%20Other%20Estudio"
                    className="text-neutral-900 font-bold hover:underline font-mono-code inline-flex items-center gap-1"
                  >
                    <span>Abrir cliente de correo</span>
                    <span>↗</span>
                  </a>
                </div>

                {/* Disclaimer */}
                <div className="text-[10px] text-neutral-500 leading-normal pt-2">
                  Aviso de privacidad: Tus datos se utilizarán única y exclusivamente para responder a
                  tu solicitud de cotización comercial. No enviamos spam ni transferimos tu información
                  a terceros. Atención exclusiva por correo electrónico.
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10 // BOTTOM PRE-FOOTER CTA BANNER (BLACK BLOCK)
      ========================================================================== */}
      <section className="bg-neutral-950 text-white py-24 px-4 md:px-8 border-b border-neutral-900 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono-code text-neutral-400 uppercase tracking-widest">
            <span className="w-2 h-2 bg-[#E2FF4A]"></span>
            <span>AGENDA ABIERTA // CICLO 2025</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
            Tu próxima página web <br />
            empieza con una buena <br />
            idea.
          </h2>

          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Hagamos que tu negocio tenga una presencia digital profesional, moderna y preparada para
            destacar.
          </p>

          <div className="pt-2">
            <a
              href="mailto:otherstudio2026@gmail.com?subject=Cotizaci%C3%B3n%20de%20Proyecto%20-%20Other%20Estudio"
              className="inline-flex items-center gap-2 bg-[#E2FF4A] hover:bg-[#d5f53c] text-neutral-950 font-black font-mono-code text-xs uppercase px-8 py-4 rounded-xs transition shadow-lg"
            >
              <span>★ SOLICITAR COTIZACIÓN POR CORREO</span>
              <span>↗</span>
            </a>
          </div>

          {/* 3 points row */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono-code text-neutral-400">
            <div className="flex items-center gap-1.5">
              <span className="text-[#E2FF4A]">•</span>
              <span>Cotizaciones en pesos mexicanos (MXN)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#E2FF4A]">•</span>
              <span>Sin llamadas innecesarias</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#E2FF4A]">•</span>
              <span>Respuesta formal en 24-48 hrs</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11 // FOOTER
      ========================================================================== */}
      <footer className="bg-white border-t border-neutral-200 text-neutral-800 px-4 md:px-8 py-16">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Col 1: Brand & Contact */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full border-2 border-neutral-950 flex items-center justify-center">
                  <div className="w-2 h-2 bg-neutral-950 rounded-full"></div>
                </div>
                <span className="font-extrabold text-base tracking-tight font-mono-code text-neutral-950">
                  OTHER <span className="font-light text-neutral-500">ESTUDIO</span>
                </span>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed max-w-sm">
                Diseñado con intención. Construido para avanzar.
              </p>
              <div className="pt-2">
                <a
                  href="mailto:otherstudio2026@gmail.com"
                  className="text-xs font-mono-code text-neutral-900 hover:underline font-bold"
                >
                  otherstudio2026@gmail.com
                </a>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="md:col-span-3 space-y-3">
              <span className="block text-[11px] font-mono-code uppercase tracking-wider text-neutral-400 font-bold">
                NAVEGACIÓN
              </span>
              <ul className="space-y-1.5 text-xs font-mono-code text-neutral-700">
                <li>
                  <a href="#inicio" className="hover:text-black transition">
                    01 // Inicio
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="hover:text-black transition">
                    02 // Servicios
                  </a>
                </li>
                <li>
                  <a href="#proyectos" className="hover:text-black transition">
                    03 // Proyectos
                  </a>
                </li>
                <li>
                  <a href="#paquetes" className="hover:text-black transition">
                    04 // Paquetes
                  </a>
                </li>
                <li>
                  <a href="#proceso" className="hover:text-black transition">
                    05 // Proceso
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="hover:text-black transition">
                    06 // Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Atelier & Discipline */}
            <div className="md:col-span-4 space-y-3">
              <span className="block text-[11px] font-mono-code uppercase tracking-wider text-neutral-400 font-bold">
                ATELIER Y DISCIPLINA
              </span>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Arquitectura digital, dirección de arte e ingeniería de interfaces con rigor
                neo-grotesco.
              </p>
              <div className="pt-2">
                <span className="inline-block border border-neutral-300 text-[10px] font-mono-code uppercase px-2.5 py-1 text-neutral-600 bg-neutral-50">
                  STUDIO ÍNDEX 2025
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Legal */}
          <div className="border-t border-neutral-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono-code text-neutral-500">
            <div>© 2025 Other Estudio. Todos los derechos reservados.</div>
            <div className="flex items-center gap-6">
              <a href="#contacto" className="hover:text-black transition">
                Aviso de Privacidad
              </a>
              <a href="#contacto" className="hover:text-black transition">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Noir Restaurant Demo Modal */}
      {showNoirDemo && (
        <NoirRestaurantPage onClose={() => setShowNoirDemo(false)} />
      )}

      {/* Interactive Sonrisa Dental Personal Brand Demo Modal */}
      {showSonrisaDemo && (
        <SonrisaDentalPage onClose={() => setShowSonrisaDemo(false)} />
      )}

      {/* Interactive Velora Fashion Store Demo Modal */}
      {showVeloraDemo && (
        <VeloraFashionPage onClose={() => setShowVeloraDemo(false)} />
      )}

      {/* Interactive Vector Logistics Corporate B2B Demo Modal */}
      {showVectorDemo && (
        <VectorLogisticsPage onClose={() => setShowVectorDemo(false)} />
      )}

      {/* Interactive Otra Forma Tech Demo Modal */}
      {showOtraFormaDemo && (
        <OtraFormaTechPage onClose={() => setShowOtraFormaDemo(false)} />
      )}

      {/* Interactive Clinica Sonrisa Local Demo Modal */}
      {showSonrisaLocalDemo && (
        <SonrisaDentalClinicPage onClose={() => setShowSonrisaLocalDemo(false)} />
      )}
    </div>
  );
}
