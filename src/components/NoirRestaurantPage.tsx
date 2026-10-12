import React, { useState } from 'react';
import {
  ArrowUpRight,
  Calendar,
  Check,
  Clock,
  MapPin,
  Phone,
  Sparkles,
  User,
  UtensilsCrossed,
  X,
  ChevronDown,
  Monitor,
  Smartphone,
} from 'lucide-react';

interface NoirRestaurantProps {
  onClose?: () => void;
}

export default function NoirRestaurantPage({ onClose }: NoirRestaurantProps) {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [activeMenuTab, setActiveMenuTab] = useState<'todos' | 'entradas' | 'fuertes' | 'postres'>('todos');
  const [reservationForm, setReservationForm] = useState({
    nombre: '',
    telefono: '',
    fecha: '2026-10-18',
    horario: '20:00',
    personas: '2 personas',
  });
  const [reservationConfirmed, setReservationConfirmed] = useState(false);

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReservationConfirmed(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const dishes = [
    {
      id: 1,
      title: 'Fuego & Tierra',
      price: '$490',
      category: 'fuertes',
      desc: 'Corte a la parrilla, vegetales de temporada y reducción de vino tinto.',
      img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80',
      badge: 'Corte Insignia',
    },
    {
      id: 2,
      title: 'Jardín de Autor',
      price: '$320',
      category: 'entradas',
      desc: 'Ingredientes frescos, texturas delicadas y sabores cuidadosamente equilibrados.',
      img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80',
      badge: 'Orgánico',
    },
    {
      id: 3,
      title: 'Dulce Tentación',
      price: '$180',
      category: 'postres',
      desc: 'Postre artesanal con notas de cacao, crema y un delicado toque de temporada.',
      img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80',
      badge: 'Chocolatería Fina',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center overflow-hidden animate-in fade-in duration-200">
      {/* Top Browser Simulator Bar */}
      <header className="w-full bg-[#141416] border-b border-neutral-800 px-4 py-2.5 flex items-center justify-between text-neutral-300 shrink-0 z-20">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-[#09090A] border border-neutral-800 text-[11px] font-mono-code px-3 py-1 rounded text-neutral-400">
            <span className="text-[#D4AF37]">🔒</span>
            <span>https://noir-gastronomia.mx</span>
          </div>
        </div>

        {/* Device Switcher */}
        <div className="flex items-center gap-2 bg-[#09090A] p-1 rounded-sm border border-neutral-800">
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

      {/* Main Preview Container */}
      <div
        className={`w-full flex-1 overflow-y-auto bg-[#0A0A0B] text-neutral-100 transition-all duration-300 ${
          deviceMode === 'mobile'
            ? 'max-w-[420px] my-4 rounded-xl border border-neutral-800 shadow-2xl overflow-x-hidden'
            : 'max-w-full'
        }`}
        id="noir-scroll-container"
      >
        {/* =========================================================================
            1. HERO SECTION (NOÏR)
        ========================================================================== */}
        <section
          id="noir-inicio"
          className="relative min-h-[90vh] flex flex-col justify-between px-6 sm:px-12 md:px-20 py-12 bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 11, 0.45) 0%, rgba(10, 10, 11, 0.85) 85%, rgba(10, 10, 11, 1) 100%), url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=85')`,
          }}
        >
          {/* Subtle Ambient Vignette */}
          <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/80 pointer-events-none"></div>

          {/* Right vertical text banner */}
          <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] text-[10px] font-mono-code uppercase tracking-[0.3em] text-[#E5C287]/60 pointer-events-none">
            UNA EXPERIENCIA EXTRAORDINARIA
          </div>

          {/* Top Tag */}
          <div className="relative z-10 pt-4">
            <span className="text-[11px] tracking-[0.25em] font-mono-code text-[#E5C287] uppercase font-medium">
              ALTA COCINA · MOMENTOS EXTRAORDINARIOS
            </span>
          </div>

          {/* Hero Center Headline & CTA */}
          <div className="relative z-10 my-auto max-w-2xl py-12 space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white font-serif-luxury leading-[1.02]">
              El arte de <br />
              saborear <span className="italic text-[#E5C287] font-serif-luxury">la</span> <br />
              <span className="italic text-[#E5C287] font-serif-luxury">vida.</span>
            </h1>

            <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed max-w-lg">
              Ingredientes excepcionales, creatividad sin límites y una experiencia diseñada para
              despertar todos tus sentidos.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => scrollToSection('noir-menu')}
                className="bg-[#E5C287] hover:bg-[#d8b475] text-neutral-950 text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-xs transition inline-flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <span>DESCUBRIR EL MENÚ</span>
                <span>↗</span>
              </button>
              <button
                onClick={() => scrollToSection('noir-reservacion')}
                className="border border-[#E5C287]/50 hover:border-[#E5C287] text-neutral-100 hover:text-white text-xs font-medium uppercase tracking-wider px-6 py-3.5 rounded-xs transition cursor-pointer"
              >
                RESERVAR EXPERIENCIA
              </button>
            </div>
          </div>

          {/* Bottom Slider Indicator */}
          <div className="relative z-10 flex items-center gap-3 text-[10px] font-mono-code uppercase tracking-widest text-neutral-400">
            <span>DESLIZA PARA DESCUBRIR</span>
            <span className="w-10 h-px bg-neutral-500"></span>
          </div>
        </section>

        {/* =========================================================================
            2. NUESTRA FILOSOFÍA
        ========================================================================== */}
        <section id="noir-filosofia" className="py-24 px-6 sm:px-12 md:px-20 bg-[#0C0C0E] border-t border-neutral-900">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Photographic Canvas */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-4/3 rounded-xs overflow-hidden border border-neutral-800 bg-[#16161A] relative shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=900&q=80"
                  alt="Nuestra cocina"
                  className="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              {/* Badge Overlay */}
              <div className="absolute bottom-4 right-4 bg-[#E5C287] text-neutral-950 font-bold font-mono-code text-[11px] uppercase tracking-wider px-4 py-2 rounded-xs shadow-xl">
                PASIÓN EN CADA DETALLE
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] tracking-[0.25em] font-mono-code text-[#E5C287] uppercase font-medium">
                NUESTRA FILOSOFÍA
              </span>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-white font-serif-luxury leading-[1.08]">
                La gastronomía <br />
                como <span className="italic text-[#E5C287] font-serif-luxury">expresión</span> <br />
                del arte.
              </h2>

              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                Creemos que una gran comida es mucho más que sabores. Es el origen de los ingredientes,
                la precisión de cada técnica y esos momentos que permanecen en la memoria.
              </p>

              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Una cocina contemporánea que honra la tradición y convierte cada visita en algo único.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => scrollToSection('noir-reservacion')}
                  className="border border-neutral-700 hover:border-[#E5C287] text-neutral-300 hover:text-[#E5C287] text-xs font-mono-code uppercase tracking-wider px-5 py-3 rounded-xs transition inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>CONOCE NUESTRA ESENCIA</span>
                  <span>↗</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. FAVORITOS DE LA CASA (SELECCIÓN DEL CHEF)
        ========================================================================== */}
        <section id="noir-menu" className="py-24 px-6 sm:px-12 md:px-20 bg-[#09090A] border-t border-neutral-900">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-3">
              <span className="text-[11px] tracking-[0.25em] font-mono-code text-[#E5C287] uppercase font-medium">
                SELECCIÓN DEL CHEF
              </span>
              <h2 className="text-4xl sm:text-5xl font-normal text-white font-serif-luxury">
                Favoritos de <span className="italic text-[#E5C287] font-serif-luxury">la casa.</span>
              </h2>
            </div>

            {/* 3 Dishes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dishes.map((dish) => (
                <div
                  key={dish.id}
                  className="bg-[#121215] border border-neutral-850 hover:border-[#E5C287]/60 rounded-xs overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-lg"
                >
                  <div>
                    {/* Dish Photographic Frame */}
                    <div className="h-56 bg-[#1B1B20] overflow-hidden relative">
                      <img
                        src={dish.img}
                        alt={dish.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-xs text-[#E5C287] text-[9px] font-mono-code uppercase px-2 py-0.5 tracking-wider">
                        {dish.badge}
                      </div>
                    </div>

                    {/* Dish Info */}
                    <div className="p-6 space-y-2">
                      <div className="flex items-baseline justify-between gap-2 border-b border-neutral-800/80 pb-2">
                        <h3 className="text-xl font-normal text-white font-serif-luxury tracking-wide">
                          {dish.title}
                        </h3>
                        <span className="text-base font-serif-luxury font-bold text-[#E5C287]">
                          {dish.price}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 font-light leading-relaxed pt-1">
                        {dish.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Menu Action Button */}
            <div className="text-center pt-4">
              <button
                onClick={() => scrollToSection('noir-reservacion')}
                className="border border-neutral-700 hover:border-[#E5C287] text-neutral-300 hover:text-white text-xs font-mono-code uppercase tracking-wider px-7 py-3.5 rounded-xs transition inline-flex items-center gap-2 cursor-pointer"
              >
                <span>VIVE LA EXPERIENCIA COMPLETA</span>
                <span>↗</span>
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. MOMENTOS QUE MERECEN QUEDARSE
        ========================================================================== */}
        <section
          className="relative py-28 px-6 sm:px-12 md:px-20 bg-cover bg-center border-t border-neutral-900"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(9, 9, 10, 0.85) 0%, rgba(9, 9, 10, 0.75) 50%, rgba(9, 9, 10, 0.95) 100%), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80')`,
          }}
        >
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <span className="text-[11px] tracking-[0.25em] font-mono-code text-[#E5C287] uppercase font-medium">
              MUCHO MÁS QUE UNA CENA
            </span>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-white font-serif-luxury leading-tight">
              Momentos que <br />
              <span className="italic text-[#E5C287] font-serif-luxury">merecen</span> quedarse.
            </h2>

            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-xl mx-auto">
              Iluminación íntima, servicio atento y una atmósfera donde cada detalle invita a
              desconectar del mundo y disfrutar el presente.
            </p>

            {/* Restaurant Sub-nav Strip */}
            <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-lg font-serif-luxury font-bold tracking-[0.3em] text-white">
                N O I R .
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono-code uppercase tracking-wider text-neutral-400">
                <button
                  onClick={() => scrollToSection('noir-inicio')}
                  className="hover:text-white transition cursor-pointer"
                >
                  INICIO
                </button>
                <button
                  onClick={() => scrollToSection('noir-filosofia')}
                  className="hover:text-white transition cursor-pointer"
                >
                  NOSOTROS
                </button>
                <button
                  onClick={() => scrollToSection('noir-menu')}
                  className="hover:text-white transition cursor-pointer"
                >
                  MENÚ
                </button>
                <button
                  onClick={() => scrollToSection('noir-reservacion')}
                  className="hover:text-white transition cursor-pointer"
                >
                  RESERVACIONES
                </button>
              </div>

              <div>
                <button
                  onClick={() => scrollToSection('noir-reservacion')}
                  className="border border-[#E5C287]/60 hover:border-[#E5C287] text-[#E5C287] hover:text-white text-xs font-mono-code uppercase tracking-wider px-5 py-2.5 rounded-xs transition inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>RESERVAR MESA</span>
                  <span>↗</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. RESERVACIÓN: TU PRÓXIMA EXPERIENCIA
        ========================================================================== */}
        <section id="noir-reservacion" className="py-24 px-6 sm:px-12 md:px-20 bg-[#0C0C0E] border-t border-neutral-900">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Heading & Schedule Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-[11px] tracking-[0.25em] font-mono-code text-[#E5C287] uppercase font-medium">
                  TU PRÓXIMA EXPERIENCIA
                </span>

                <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-white font-serif-luxury leading-[1.08]">
                  Una mesa. <br />
                  Una historia. <br />
                  <span className="italic text-[#E5C287] font-serif-luxury">Un recuerdo.</span>
                </h2>

                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed pt-2">
                  Planea tu próxima visita. Completa tus datos y prepara los sentidos para una
                  experiencia especial.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-neutral-800 text-xs">
                <div>
                  <span className="block font-mono-code text-[10px] text-neutral-500 uppercase tracking-wider font-bold">
                    HORARIOS
                  </span>
                  <span className="text-neutral-300 font-medium mt-0.5 block">
                    Martes a domingo · 13:00 – 23:00
                  </span>
                </div>

                <div>
                  <span className="block font-mono-code text-[10px] text-neutral-500 uppercase tracking-wider font-bold">
                    UBICACIÓN
                  </span>
                  <span className="text-neutral-300 font-medium mt-0.5 block">
                    Colonia Juárez / Roma Norte · CDMX
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Reservation Interactive Form */}
            <div className="lg:col-span-7 bg-[#131317] border border-neutral-800 p-6 sm:p-8 rounded-xs shadow-2xl">
              {reservationConfirmed ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 bg-[#E5C287] text-black rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h3 className="text-2xl font-serif-luxury text-white">
                    Mesa Reservada con Éxito
                  </h3>
                  <p className="text-xs text-neutral-400 max-w-md mx-auto leading-relaxed">
                    Gracias <span className="text-white font-semibold">{reservationForm.nombre || 'por tu reserva'}</span>.
                    Hemos agendado tu mesa para <span className="text-[#E5C287]">{reservationForm.personas}</span> el día{' '}
                    <span className="text-white font-semibold">{reservationForm.fecha}</span> a las{' '}
                    <span className="text-white font-semibold">{reservationForm.horario} hrs</span>.
                    Te enviaremos la confirmación oficial a tu teléfono registrado.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setReservationConfirmed(false)}
                      className="text-xs font-mono-code text-[#E5C287] hover:underline uppercase tracking-wider"
                    >
                      Modificar reservación
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleReservationSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono-code uppercase tracking-wider text-neutral-400 font-bold">
                        NOMBRE COMPLETO
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Tu nombre"
                        value={reservationForm.nombre}
                        onChange={(e) =>
                          setReservationForm({ ...reservationForm, nombre: e.target.value })
                        }
                        className="w-full bg-[#1A1A20] border border-neutral-750 px-3.5 py-3 text-xs text-neutral-100 placeholder-neutral-500 focus:outline-hidden focus:border-[#E5C287] transition rounded-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono-code uppercase tracking-wider text-neutral-400 font-bold">
                        TELÉFONO
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Tu teléfono"
                        value={reservationForm.telefono}
                        onChange={(e) =>
                          setReservationForm({ ...reservationForm, telefono: e.target.value })
                        }
                        className="w-full bg-[#1A1A20] border border-neutral-750 px-3.5 py-3 text-xs text-neutral-100 placeholder-neutral-500 focus:outline-hidden focus:border-[#E5C287] transition rounded-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono-code uppercase tracking-wider text-neutral-400 font-bold">
                        FECHA
                      </label>
                      <input
                        type="date"
                        required
                        value={reservationForm.fecha}
                        onChange={(e) =>
                          setReservationForm({ ...reservationForm, fecha: e.target.value })
                        }
                        className="w-full bg-[#1A1A20] border border-neutral-750 px-3.5 py-3 text-xs text-neutral-100 focus:outline-hidden focus:border-[#E5C287] transition rounded-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono-code uppercase tracking-wider text-neutral-400 font-bold">
                        HORARIO
                      </label>
                      <select
                        value={reservationForm.horario}
                        onChange={(e) =>
                          setReservationForm({ ...reservationForm, horario: e.target.value })
                        }
                        className="w-full bg-[#1A1A20] border border-neutral-750 px-3.5 py-3 text-xs text-neutral-100 focus:outline-hidden focus:border-[#E5C287] transition rounded-xs"
                      >
                        <option value="13:30">13:30 hrs</option>
                        <option value="14:00">14:00 hrs</option>
                        <option value="15:00">15:00 hrs</option>
                        <option value="19:30">19:30 hrs</option>
                        <option value="20:00">20:00 hrs</option>
                        <option value="21:00">21:00 hrs</option>
                        <option value="22:00">22:00 hrs</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-mono-code uppercase tracking-wider text-neutral-400 font-bold">
                      NÚMERO DE PERSONAS
                    </label>
                    <select
                      value={reservationForm.personas}
                      onChange={(e) =>
                        setReservationForm({ ...reservationForm, personas: e.target.value })
                      }
                      className="w-full bg-[#1A1A20] border border-neutral-750 px-3.5 py-3 text-xs text-neutral-100 focus:outline-hidden focus:border-[#E5C287] transition rounded-xs"
                    >
                      <option value="1 persona">1 persona</option>
                      <option value="2 personas">2 personas</option>
                      <option value="3 personas">3 personas</option>
                      <option value="4 personas">4 personas</option>
                      <option value="5 personas">5 personas</option>
                      <option value="6 personas">6 personas</option>
                      <option value="8+ personas (Mesa ejecutiva)">8+ personas (Mesa ejecutiva)</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#E5C287] hover:bg-[#d8b475] text-neutral-950 font-bold font-mono-code text-xs uppercase tracking-wider py-4 rounded-xs transition shadow-lg cursor-pointer"
                    >
                      SOLICITAR RESERVACIÓN ↗
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. NOIR FOOTER
        ========================================================================== */}
        <footer className="py-12 px-6 sm:px-12 md:px-20 bg-[#070708] border-t border-neutral-900 text-neutral-400 text-xs">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-code text-[11px]">
            <div className="text-base font-serif-luxury font-bold tracking-[0.25em] text-white">
              N O I R .
            </div>
            <div>© 2026 NOIR. UNA EXPERIENCIA CON IDENTIDAD.</div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollToSection('noir-reservacion')}
                className="hover:text-white transition cursor-pointer"
              >
                CONTACTO
              </button>
              <span>·</span>
              <button
                onClick={() => scrollToSection('noir-menu')}
                className="hover:text-white transition cursor-pointer"
              >
                MENÚ
              </button>
              <span>·</span>
              <button
                onClick={() => scrollToSection('noir-inicio')}
                className="hover:text-[#E5C287] transition cursor-pointer"
              >
                VOLVER ARRIBA ↑
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
