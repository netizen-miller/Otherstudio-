import React, { useState } from 'react';
import {
  Calendar,
  Check,
  ChevronRight,
  Clock,
  ExternalLink,
  MapPin,
  MessageSquare,
  Monitor,
  Phone,
  Play,
  ShieldCheck,
  Smartphone,
  Star,
  User,
  X,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface SonrisaDentalProps {
  onClose?: () => void;
}

export default function SonrisaDentalPage({ onClose }: SonrisaDentalProps) {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'todas' | 'instalaciones' | 'casos' | 'videos' | 'tecnologia'>('todas');
  const [activeCaseSlider, setActiveCaseSlider] = useState<{ [key: number]: number }>({
    1: 50,
    2: 50,
    3: 50,
  });
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);
  const [appointmentForm, setAppointmentForm] = useState({
    nombre: '',
    telefono: '',
    tratamiento: 'Valoración Integral & Diagnóstico 3D',
    comentario: '',
  });
  const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);

  const handleSliderChange = (caseId: number, val: number) => {
    setActiveCaseSlider((prev) => ({ ...prev, [caseId]: val }));
  };

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppointmentConfirmed(true);
  };

  const cases = [
    {
      id: 1,
      category: 'Estética Dental Avanzada',
      time: '2 semanas',
      title: 'Rehabilitación con Carillas de Porcelana',
      desc: 'Diseño digital de sonrisa (DSD) y colocación de 8 carillas de disilicato de litio ultrafinas sin tallado agresivo.',
      doctor: 'Dra. Elena Romero',
      docInitials: 'ER',
      caseNum: 'Caso #1419',
      beforeImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
      afterImg: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      category: 'Ortodoncia Invisible',
      time: '11 meses',
      title: 'Cierre de Diastemas con Invisalign',
      desc: 'Corrección integral de separación interdental y rotación de caninos mediante alineadores transparentes con escaneado iTero.',
      doctor: 'Dr. Manuel Aguirre',
      docInitials: 'MA',
      caseNum: 'Caso #1182',
      beforeImg: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80',
      afterImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      category: 'Implantología Guiada',
      time: 'Fijos en 24h',
      title: 'Carga Inmediata en Arcada Superior',
      desc: 'Protocolo guiado por ordenador: colocación de 4 implantes de titanio grado quirúrgico y fijación de prótesis el mismo día.',
      doctor: 'Dr. Carlos Delgado',
      docInitials: 'CD',
      caseNum: 'Caso #1305',
      beforeImg: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
      afterImg: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const testimonials = [
    {
      time: 'Hace 2 semanas',
      text: '«Tengo fobia al dentista desde la infancia y la Dra. Romero cambió completamente mi perspectiva. La calidez del trato, la sedación suave y el no sentir absolutamente nada de dolor marcaron la diferencia. Eternamente agradecida.»',
      name: 'Carmen Ortiz',
      treatment: 'Carillas de Porcelana',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
    },
    {
      time: 'Hace 1 mes',
      text: '«La puntualidad es impecable: llegas y pasas a tu hora sin esperas interminables. Además ver la simulación en directo de cómo quedaría mi boca con el escáner 3D me dio una seguridad total antes de empezar.»',
      name: 'Rodrigo Beltrán',
      treatment: 'Ortodoncia Invisalign',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    },
    {
      time: 'Hace 1 mes',
      text: '«Destaco la total claridad en el presupuesto. Desde la primera cita me detallaron los costes cerrados sin sorpresas a mitad del tratamiento y me ofrecieron financiación a 24 meses sin intereses.»',
      name: 'Laura Santamaría',
      treatment: 'Implante Unitario + Corona',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    },
    {
      time: 'Hace 2 meses',
      text: '«Llevé a mi hijo de 7 años que venía asustado de otra clínica. El equipo infantil lo trató con un cariño infinito, poniéndole sus dibujos preferidos en la pantalla del techo. Ahora pregunta cuándo volvemos.»',
      name: 'David Navarro',
      treatment: 'Odontopediatría Integral',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    },
    {
      time: 'Hace 3 meses',
      text: '«Entré a la clínica por la mañana sin poder masticar bien y por la tarde ya cenaba con dientes fijos provisionales. El Dr. Delgado y su equipo quirúrgico son auténticos artistas de la medicina dental.»',
      name: 'Fernando Morales',
      treatment: 'Rehabilitación Completa Fija',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80',
    },
    {
      time: 'Hace 3 meses',
      text: '«Mi mayor temor era tener una sonrisa postiza o exageradamente blanca. Lograron un tono y una textura tan natural que nadie nota que llevo carillas; solo me dicen que me ven rejuvenecida.»',
      name: 'Beatriz Herranz',
      treatment: 'Microcarillas Cerámicas',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center overflow-hidden animate-in fade-in duration-200">
      {/* Top Browser Simulator Bar */}
      <header className="w-full bg-[#0D1527] border-b border-neutral-700/80 px-4 py-2.5 flex items-center justify-between text-neutral-300 shrink-0 z-20">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-[#080E1C] border border-neutral-700/60 text-[11px] font-mono-code px-3 py-1 rounded text-cyan-400">
            <span>🔒</span>
            <span>https://sonrisadental-madrid.es/galeria-testimonios</span>
          </div>
        </div>

        {/* Device Switcher */}
        <div className="flex items-center gap-2 bg-[#080E1C] p-1 rounded-sm border border-neutral-700/60">
          <button
            onClick={() => setDeviceMode('desktop')}
            className={`px-2.5 py-1 text-[11px] font-mono-code flex items-center gap-1.5 rounded-xs transition ${
              deviceMode === 'desktop'
                ? 'bg-[#1E293B] text-cyan-400 font-bold'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Escritorio</span>
          </button>
          <button
            onClick={() => setDeviceMode('mobile')}
            className={`px-2.5 py-1 text-[11px] font-mono-code flex items-center gap-1.5 rounded-xs transition ${
              deviceMode === 'mobile'
                ? 'bg-[#1E293B] text-cyan-400 font-bold'
                : 'text-neutral-400 hover:text-neutral-200'
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
        className={`w-full flex-1 overflow-y-auto bg-[#F8FAFC] text-slate-800 transition-all duration-300 font-sans ${
          deviceMode === 'mobile'
            ? 'max-w-[420px] my-4 rounded-xl border border-neutral-800 shadow-2xl overflow-x-hidden'
            : 'max-w-full'
        }`}
      >
        {/* =========================================================================
            TOP CONTACT BAR
        ========================================================================== */}
        <div className="bg-[#0B1528] text-slate-300 text-[11px] px-6 py-2 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-white font-medium">
              <Phone className="w-3 h-3 text-cyan-400" /> (+34) 912 345 678
            </span>
            <span className="bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full text-[10px] font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              Urgencias 24/7
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> Lun - Vie: 9:00 - 20:00 | Sáb: 9:00 - 14:00
            </span>
            <span className="text-slate-300 font-medium">🌐 ES / EN</span>
          </div>
        </div>

        {/* =========================================================================
            MAIN CLINIC NAVBAR
        ========================================================================== */}
        <nav className="bg-white border-b border-slate-200 px-6 py-3.5 sticky top-0 z-30 shadow-xs">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#0F284E] flex items-center justify-center text-cyan-400 shadow-sm">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="font-extrabold text-sm md:text-base tracking-tight text-[#0B1A34] block leading-tight">
                  Sonrisa Dental
                </span>
                <span className="text-[9px] uppercase tracking-wider font-semibold text-cyan-700 block">
                  CLÍNICA ODONTOLÓGICA ESPECIALIZADA
                </span>
              </div>
            </div>

            {/* Nav Links */}
            <div className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-600">
              <span className="hover:text-blue-900 cursor-pointer">Inicio</span>
              <span className="hover:text-blue-900 cursor-pointer">Servicios y Tratamientos</span>
              <span className="hover:text-blue-900 cursor-pointer">Nosotros y Equipo</span>
              <span className="text-cyan-700 font-bold border-b-2 border-cyan-500 pb-0.5 cursor-pointer">
                Galería y Testimonios
              </span>
              <span className="hover:text-blue-900 cursor-pointer">Contacto y Citas</span>
              <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1 cursor-pointer">
                <span>💬 Consulta Rápida</span>
              </span>
            </div>

            {/* Appointment Button */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowAppointmentModal(true)}
                className="bg-[#0C1E3C] hover:bg-[#142B52] text-white text-xs font-bold px-4 py-2.5 rounded-lg flex items-center gap-2 shadow-sm transition cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>Agendar Cita</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Breadcrumb strip */}
        <div className="max-w-7xl mx-auto px-6 pt-4 text-[11px] text-slate-400 flex items-center gap-1.5">
          <span>Inicio</span>
          <span>/</span>
          <span className="text-slate-600 font-medium">Galería y Testimonios</span>
        </div>

        {/* =========================================================================
            HERO HEADER & REVIEW STATS
        ========================================================================== */}
        <section className="max-w-7xl mx-auto px-6 pt-6 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-cyan-50 border border-cyan-200/80 text-cyan-800 px-3 py-1 rounded-full text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                <span>TRANSPARENCIA CLÍNICA & EVIDENCIA</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#09152B] tracking-tight leading-tight">
                Resultados Reales y <br />
                Experiencias de Pacientes
              </h1>

              <p className="text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed">
                Descubre nuestras instalaciones diseñadas para tu bienestar y conoce las historias de
                transformación de quienes confiaron en nosotros.
              </p>
            </div>

            {/* Google Reviews Badge */}
            <div className="lg:col-span-4 bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">
                    4.9
                  </div>
                  <div>
                    <div className="font-extrabold text-base text-slate-900">4.9 / 5.0</div>
                    <div className="flex items-center text-amber-400 text-xs gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-slate-400 border border-slate-200 px-2 py-0.5 rounded">
                  Google Reviews
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-3 border-t border-slate-100 pt-3">
                Basado en <span className="font-bold text-slate-700">1,250+ opiniones verificadas</span> de pacientes en Madrid.
              </p>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-8 pt-4 border-t border-slate-200">
            {[
              { id: 'todas', label: 'Todas' },
              { id: 'instalaciones', label: 'Instalaciones Clínicas' },
              { id: 'casos', label: 'Casos de Éxito Antes/Después' },
              { id: 'videos', label: 'Testimonios en Vídeo' },
              { id: 'tecnologia', label: 'Tecnología Dental' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#09152B] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION: NUESTRAS INSTALACIONES CLÍNICAS
        ========================================================================== */}
        {(activeTab === 'todas' || activeTab === 'instalaciones' || activeTab === 'tecnologia') && (
          <section className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-200">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[11px] uppercase tracking-widest font-bold text-cyan-700 block mb-1">
                  ARQUITECTURA DE PAZ Y PRECISIÓN
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#09152B]">
                  Nuestras Instalaciones Clínicas
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md leading-relaxed">
                Diseñadas según los estándares de hospitalidad premium: ergonomía acústica, luz solar
                natural y tecnología de microcirugía integrada.
              </p>
            </div>

            {/* Bento Grid Facilities */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Box 1: Sala de Espera Calm & Lounge (Large) */}
              <div className="md:col-span-8 rounded-xl overflow-hidden border border-slate-200 relative group min-h-[280px] bg-slate-900 shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                  alt="Sala de Espera"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                  <span className="bg-emerald-500/30 text-emerald-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full inline-block backdrop-blur-xs">
                    Bienestar & Serenidad
                  </span>
                  <h3 className="text-xl font-bold">Sala de Espera Calm & Lounge</h3>
                  <p className="text-xs text-slate-200 max-w-xl">
                    Inundada de luz natural, aislamiento acústico y selección musical relajante para
                    eliminar cualquier indicio de ansiedad previa al tratamiento.
                  </p>
                </div>
              </div>

              {/* Box 2: Gabinete Quirúrgico 3D */}
              <div className="md:col-span-4 rounded-xl overflow-hidden border border-slate-200 relative group min-h-[280px] bg-slate-900 shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80"
                  alt="Gabinete Quirúrgico"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                  <span className="bg-cyan-500/30 text-cyan-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full inline-block backdrop-blur-xs">
                    Quirófano A-1
                  </span>
                  <h3 className="text-lg font-bold">Gabinete Quirúrgico 3D</h3>
                  <p className="text-xs text-slate-200">
                    Microscopio óptico de alta precisión y monitorización continua para cirugías sin
                    molestia.
                  </p>
                </div>
              </div>

              {/* Box 3: Diagnóstico Digital */}
              <div className="md:col-span-4 rounded-xl overflow-hidden border border-slate-200 relative group min-h-[220px] bg-slate-900 shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80"
                  alt="Diagnóstico Digital"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="bg-blue-500/30 text-blue-300 text-[10px] font-bold px-2 py-0.5 rounded-full inline-block">
                    Flujo Digital
                  </span>
                  <h3 className="text-base font-bold">Diagnóstico Digital</h3>
                  <p className="text-[11px] text-slate-200">
                    Escáner intraoral 3D sin pastas molestas, visible al instante en pantalla gigante.
                  </p>
                </div>
              </div>

              {/* Box 4: Espacio Sonrisas Kids */}
              <div className="md:col-span-4 rounded-xl overflow-hidden border border-slate-200 relative group min-h-[220px] bg-slate-900 shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
                  alt="Odontopediatría"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="bg-amber-500/30 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full inline-block">
                    Odontopediatría
                  </span>
                  <h3 className="text-base font-bold">Espacio Sonrisas Kids</h3>
                  <p className="text-[11px] text-slate-200">
                    Pantallas en techo y metodología lúdica que transforma la visita al dentista.
                  </p>
                </div>
              </div>

              {/* Box 5: Recepción & Atención */}
              <div className="md:col-span-4 rounded-xl overflow-hidden border border-slate-200 relative group min-h-[220px] bg-slate-900 shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=600&q=80"
                  alt="Recepción"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="bg-purple-500/30 text-purple-300 text-[10px] font-bold px-2 py-0.5 rounded-full inline-block">
                    Recepción & Atención
                  </span>
                  <h3 className="text-base font-bold">Atención Personalizada</h3>
                  <p className="text-[11px] text-slate-200">
                    Conserjería personalizada y tiempo de espera de menos de 7 minutos.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =========================================================================
            SECTION: CASOS DE ÉXITO CLÍNICOS (INTERACTIVE BEFORE / AFTER SLIDERS)
        ========================================================================== */}
        {(activeTab === 'todas' || activeTab === 'casos') && (
          <section className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-200">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[11px] uppercase tracking-widest font-bold text-cyan-700 block mb-1">
                  ODONTOLOGÍA DE MÍNIMA INVASIÓN
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#09152B]">
                  Casos de Éxito Clínicos
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
                  Desliza o compara el antes y después de transformaciones reales diseñadas por nuestros
                  especialistas mediante protocolos digitales.
                </p>
              </div>
              <div className="bg-cyan-50 border border-cyan-200 text-cyan-900 px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
                <span>⭐ +650 sonrisas rehabilitadas al año</span>
              </div>
            </div>

            {/* 3 Interactive Cases */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cases.map((c) => {
                const sliderPos = activeCaseSlider[c.id] || 50;
                return (
                  <div
                    key={c.id}
                    className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs flex flex-col justify-between hover:shadow-md transition"
                  >
                    <div>
                      {/* Interactive Before / After Split Viewer */}
                      <div className="relative h-60 bg-slate-900 overflow-hidden select-none">
                        {/* After Image (Background) */}
                        <img
                          src={c.afterImg}
                          alt={`${c.title} Después`}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute top-3 right-3 bg-cyan-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                          DESPUÉS
                        </div>

                        {/* Before Image (Clipped Left Layer) */}
                        <div
                          className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white shadow-xl"
                          style={{ width: `${sliderPos}%` }}
                        >
                          <img
                            src={c.beforeImg}
                            alt={`${c.title} Antes`}
                            className="absolute inset-0 w-full h-full object-cover max-w-none"
                            style={{ width: '100%', height: '100%' }}
                          />
                          <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                            ANTES
                          </div>
                        </div>

                        {/* Draggable Divider Handle */}
                        <div
                          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white text-slate-900 shadow-lg flex items-center justify-center font-bold text-xs pointer-events-none"
                          style={{ left: `${sliderPos}%` }}
                        >
                          ↔
                        </div>

                        {/* Invisible Range Input for Interactive Slider */}
                        <input
                          type="range"
                          min="5"
                          max="95"
                          value={sliderPos}
                          onChange={(e) => handleSliderChange(c.id, Number(e.target.value))}
                          aria-label="Deslizar para comparar antes y después"
                          className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-10"
                        />
                      </div>

                      {/* Slider Hint */}
                      <div className="bg-slate-50 px-4 py-1.5 border-b border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                        <span>Arrastra el control para comparar</span>
                        <span className="font-semibold text-cyan-700">{sliderPos}% visto</span>
                      </div>

                      {/* Case Details */}
                      <div className="p-5 space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-semibold">
                          <span className="text-cyan-700">{c.category}</span>
                          <span className="text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                            ⏱ {c.time}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-slate-900 leading-snug">{c.title}</h3>

                        <p className="text-xs text-slate-600 leading-relaxed pt-1">{c.desc}</p>
                      </div>
                    </div>

                    {/* Doctor attribution badge */}
                    <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-cyan-700 text-white font-bold text-[10px] flex items-center justify-center">
                          {c.docInitials}
                        </div>
                        <span className="font-semibold text-slate-800">{c.doctor}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono-code">{c.caseNum}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 text-center text-[11px] text-slate-400">
              📸 Fotografías clínicas autorizadas por pacientes. Los resultados pueden variar según el
              diagnóstico individual y anatomía del paciente.
            </div>
          </section>
        )}

        {/* =========================================================================
            SECTION: TESTIMONIOS EN VÍDEO
        ========================================================================== */}
        {(activeTab === 'todas' || activeTab === 'videos') && (
          <section className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-200">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[11px] uppercase tracking-widest font-bold text-cyan-700 block mb-1">
                  EN PRIMERA PERSONA
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#09152B]">
                  Testimonios en Vídeo
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md">
                Nuestros pacientes explican cómo fue el proceso, la cercanía del equipo y el impacto
                que ha tenido en su confianza diaria.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Video 1 */}
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs flex flex-col justify-between">
                <div>
                  <div
                    onClick={() =>
                      setActiveVideoModal(
                        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80'
                      )
                    }
                    className="h-56 bg-slate-900 relative cursor-pointer group overflow-hidden"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                      alt="María Gómez"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>
                    <div className="absolute top-3 left-3 bg-cyan-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      INVISALIGN ADULTOS
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white text-[10px] font-mono-code px-2 py-0.5 rounded">
                      ⏱ 2:45 min
                    </div>
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/90 text-slate-900 shadow-xl flex items-center justify-center group-hover:scale-110 transition">
                        <Play className="w-5 h-5 ml-0.5 fill-current" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-slate-900">
                      La experiencia de María con Invisalign
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed italic">
                      «Tenía pánico de volver a llevar brackets a los 33 años por mi trabajo comercial. El
                      sistema invisible de Sonrisa Dental fue tan discreto que mis clientes ni siquiera lo
                      notaron.»
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-500">
                  <span className="font-semibold text-slate-800">María Gómez (Madrid)</span> · Tratamiento
                  finalizado en 2024
                </div>
              </div>

              {/* Video 2 */}
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs flex flex-col justify-between">
                <div>
                  <div
                    onClick={() =>
                      setActiveVideoModal(
                        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80'
                      )
                    }
                    className="h-56 bg-slate-900 relative cursor-pointer group overflow-hidden"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
                      alt="Javier Serrano"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>
                    <div className="absolute top-3 left-3 bg-cyan-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      IMPLANTES INMEDIATOS
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white text-[10px] font-mono-code px-2 py-0.5 rounded">
                      ⏱ 3:12 min
                    </div>
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/90 text-slate-900 shadow-xl flex items-center justify-center group-hover:scale-110 transition">
                        <Play className="w-5 h-5 ml-0.5 fill-current" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-slate-900">
                      Cómo Javier recuperó su seguridad con implantes dentales
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed italic">
                      «Había pospuesto la intervención durante casi 5 años por miedo al dolor. Salí de la
                      clínica con dientes fijos el mismo día y no necesité analgésicos tras las primeras
                      24 horas.»
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-500">
                  <span className="font-semibold text-slate-800">Javier Serrano (Alcobendas)</span> ·
                  Tratamiento de Carga Inmediata
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =========================================================================
            SECTION: TESTIMONIOS DE PACIENTES VERIFICADOS (6 CARDS)
        ========================================================================== */}
        <section className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-200">
          <div className="text-center space-y-2 mb-10">
            <span className="bg-cyan-50 border border-cyan-200 text-cyan-800 px-3 py-1 rounded-full text-xs font-bold inline-block">
              OPINIONES 100% AUDITADAS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#09152B]">
              Testimonios de Pacientes Verificados
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
              La confianza se construye con hechos: cero dolor, puntualidad rigurosa y financiación
              transparente sin letra pequeña.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-cyan-300 transition"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center text-amber-400 gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400">{t.time}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{t.text}</p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-9 h-9 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <span className="block text-xs font-bold text-slate-900">{t.name}</span>
                    <span className="block text-[10px] text-cyan-700 font-medium">
                      {t.treatment}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            STATS HIGHLIGHT BAR
        ========================================================================== */}
        <section className="bg-cyan-50/70 border-y border-cyan-100 py-10 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1A34]">12+</div>
              <div className="text-xs text-slate-600 mt-1 font-medium">Años de experiencia</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1A34]">15.000+</div>
              <div className="text-xs text-slate-600 mt-1 font-medium">Pacientes atendidos</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1A34]">99.4%</div>
              <div className="text-xs text-slate-600 mt-1 font-medium">Éxito en osteointegración</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1A34]">0%</div>
              <div className="text-xs text-slate-600 mt-1 font-medium">Intereses hasta 24 meses</div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            BOTTOM CTA BANNER (BLUE GRADIENT)
        ========================================================================== */}
        <section className="bg-[#0B172E] text-white py-16 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="bg-white/10 text-cyan-300 text-xs font-bold px-3 py-1 rounded-full inline-block backdrop-blur-xs">
              SIN COMPROMISO NI COSTE INICIAL
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              ¿Quieres saber cómo <br />
              podemos transformar tu <br />
              sonrisa?
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Agenda una consulta de valoración sin compromiso, incluye estudio radiológico digital 3D
              y simulación de resultados personalizada.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => setShowAppointmentModal(true)}
                className="bg-[#4EE1C4] hover:bg-[#3ec4aa] text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg transition shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Quiero una Valoración Gratuita</span>
              </button>
              <a
                href="tel:+34912345678"
                className="border border-slate-600 hover:border-white text-white font-medium text-xs px-6 py-3.5 rounded-lg transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>O llámanos al 912 345 678</span>
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            CLINIC FOOTER
        ========================================================================== */}
        <footer className="bg-white border-t border-slate-200 py-12 px-6 text-slate-600 text-xs">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4 space-y-3">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                <Sparkles className="w-4 h-4 text-cyan-600" />
                <span>Sonrisa Dental // MEDICINA BUCODENTAL AVANZADA</span>
              </div>
              <p className="text-slate-500 leading-relaxed text-[11px]">
                Odontología clínica y estética de precisión en un entorno de hospitalidad y serenidad.
                Comprometidos con su salud bucodental integral mediante tecnología digital de mínima invasión.
              </p>
              <div className="flex items-center gap-3 text-[10px] text-slate-400 font-mono-code pt-1">
                <span>ISO 9001 Calidad</span>
                <span>·</span>
                <span>Consejo General Dentistas</span>
              </div>
            </div>

            <div className="md:col-span-2 space-y-2 text-[11px]">
              <span className="font-bold text-slate-900 block mb-1">Navegación</span>
              <ul className="space-y-1 text-slate-500">
                <li>Inicio</li>
                <li>Servicios</li>
                <li>Nosotros y Equipo</li>
                <li>Galería Clínica</li>
                <li>Testimonios</li>
                <li>Preguntas Frecuentes</li>
              </ul>
            </div>

            <div className="md:col-span-3 space-y-2 text-[11px]">
              <span className="font-bold text-slate-900 block mb-1">Tratamientos</span>
              <ul className="space-y-1 text-slate-500">
                <li>• Implantología Avanzada</li>
                <li>• Ortodoncia Invisible</li>
                <li>• Estética Dental & Carillas</li>
                <li>• Odontopediatría Integral</li>
                <li>• Endodoncia Microscópica</li>
              </ul>
            </div>

            <div className="md:col-span-3 space-y-2 text-[11px]">
              <span className="font-bold text-slate-900 block mb-1">Sede y Contacto</span>
              <div className="space-y-1 text-slate-500">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
                  <span>Calle Mayor 45, 1º Planta, 28013 Madrid</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span>✉ info@sonrisadental.es</span>
                </div>
                <div className="flex items-center gap-1.5 font-bold text-slate-800">
                  <span>📞 (+34) 912 345 678</span>
                </div>
              </div>
              <div className="bg-red-50 text-red-700 p-2 rounded text-[10px] font-semibold mt-2">
                🚨 Atención de Urgencia 24/7 · Teléfono exclusivo pacientes activos
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto border-t border-slate-200 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
            <div>© 2026 Sonrisa Dental S.L.P. Todos los derechos reservados.</div>
            <div className="flex items-center gap-4">
              <span>Aviso Legal</span>
              <span>Política de Privacidad</span>
              <span>Política de Cookies</span>
              <span>Accesibilidad AA</span>
              <span className="font-mono-code">Registro Sanitario CS-0825M</span>
            </div>
          </div>
        </footer>
      </div>

      {/* =========================================================================
          APPOINTMENT BOOKING MODAL
      ========================================================================== */}
      {showAppointmentModal && (
        <div className="fixed inset-0 z-60 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 space-y-5 shadow-2xl relative animate-in fade-in zoom-in-95">
            <button
              onClick={() => {
                setShowAppointmentModal(false);
                setAppointmentConfirmed(false);
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            {appointmentConfirmed ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Cita Solicitada con Éxito</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Gracias <span className="font-bold text-slate-900">{appointmentForm.nombre}</span>.
                  Nos pondremos en contacto al <span className="font-bold text-slate-900">{appointmentForm.telefono}</span> en
                  menos de 30 minutos hábiles para confirmar tu horario de valoración gratuita y estudio 3D.
                </p>
                <button
                  onClick={() => {
                    setShowAppointmentModal(false);
                    setAppointmentConfirmed(false);
                  }}
                  className="bg-[#0C1E3C] text-white text-xs font-bold py-2.5 px-6 rounded-lg mt-2"
                >
                  Entendido
                </button>
              </div>
            ) : (
              <form onSubmit={handleAppointmentSubmit} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900">Agendar Valoración Gratuita</h3>
                  <p className="text-xs text-slate-500">
                    Incluye radiografía panorámica digital y diagnóstico 3D sin coste.
                  </p>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700">Nombre completo *</label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre y apellidos"
                    value={appointmentForm.nombre}
                    onChange={(e) =>
                      setAppointmentForm({ ...appointmentForm, nombre: e.target.value })
                    }
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-xs focus:outline-hidden focus:border-cyan-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700">Teléfono de contacto *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(+34) 600 000 000"
                    value={appointmentForm.telefono}
                    onChange={(e) =>
                      setAppointmentForm({ ...appointmentForm, telefono: e.target.value })
                    }
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-xs focus:outline-hidden focus:border-cyan-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700">Tratamiento de interés</label>
                  <select
                    value={appointmentForm.tratamiento}
                    onChange={(e) =>
                      setAppointmentForm({ ...appointmentForm, tratamiento: e.target.value })
                    }
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-xs focus:outline-hidden focus:border-cyan-600"
                  >
                    <option>Valoración Integral & Diagnóstico 3D</option>
                    <option>Estética Dental & Carillas de Porcelana</option>
                    <option>Ortodoncia Invisible (Invisalign)</option>
                    <option>Implantología y Carga Inmediata</option>
                    <option>Odontopediatría infantil</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#4EE1C4] hover:bg-[#3ec4aa] text-slate-950 font-bold text-xs uppercase tracking-wider py-3 rounded-lg shadow-sm transition mt-2 cursor-pointer"
                >
                  Confirmar Solicitud de Cita ↗
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Video Simulation Modal */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-60 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-xl max-w-2xl w-full p-4 space-y-4 shadow-2xl relative">
            <div className="flex items-center justify-between text-white text-xs font-bold border-b border-slate-800 pb-2">
              <span>Reproduciendo Testimonio Clínico</span>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-16/9 bg-black rounded-lg overflow-hidden relative flex items-center justify-center">
              <img
                src={activeVideoModal}
                alt="Video Preview"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute text-center space-y-2 text-white p-4">
                <div className="w-14 h-14 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center mx-auto shadow-xl animate-pulse">
                  <Play className="w-6 h-6 ml-1 fill-current" />
                </div>
                <p className="text-sm font-bold">Testimonio Clínico en Alta Resolución</p>
                <p className="text-xs text-slate-300">
                  Audio y vídeo verificado con consentimiento de paciente.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
