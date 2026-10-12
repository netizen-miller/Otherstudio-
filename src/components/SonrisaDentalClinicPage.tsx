import React, { useState } from 'react';
import {
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  ExternalLink,
  Heart,
  MapPin,
  MessageCircle,
  MessageSquare,
  Monitor,
  Phone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  User,
  X,
  ArrowRight,
  ChevronDown,
  Activity,
  Award,
  CreditCard,
  Building,
} from 'lucide-react';

interface SonrisaDentalClinicProps {
  onClose?: () => void;
}

export default function SonrisaDentalClinicPage({ onClose }: SonrisaDentalClinicProps) {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [callRequestSubmitted, setCallRequestSubmitted] = useState(false);
  const [callFormData, setCallFormData] = useState({
    nombre: '',
    telefono: '',
    tratamiento: 'Primera Consulta de Evaluación',
  });
  const [whatsappToastOpen, setWhatsappToastOpen] = useState(false);

  const handleCallSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCallRequestSubmitted(true);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const treatments = [
    {
      title: 'Limpieza Dental Profunda',
      sub: 'PROFILAXIS & ULTRASONIDO',
      badge: '<45 min',
      desc: 'Eliminación de placa bacteriana, sarro resistente y manchas superficiales con aeropulidor, previniendo gingivitis y garantizando un aliento fresco prolongado.',
    },
    {
      title: 'Blanqueamiento Dental LED',
      sub: 'ESTÉTICA CLÍNICAMENTE PROBADA',
      badge: '1 sesión',
      desc: 'Recupera hasta 5 tonos de blancura en solo una sesión clínica. Aplicamos geles biocompatibles fototratados con cero sensibilidad dental garantizada.',
    },
    {
      title: 'Ortodoncia Avanzada',
      sub: 'ALINEADORES INVISIBLES & BRACKETS',
      badge: 'Personalizado',
      desc: 'Alineadores transparentes invisibles y brackets de zafiro de última generación. Corrige mordida y simetría de forma cómoda, higiénica e imperceptible.',
    },
    {
      title: 'Odontología Preventiva',
      sub: 'REVISIONES & RADIOGRAFÍA 3D',
      badge: 'Checkup Anual',
      desc: 'Diagnóstico integral asistido por imagenología panorámica digital. Detección temprana de caries microscópicas y evaluación periodontal a fondo.',
    },
  ];

  const whyChooseUs = [
    {
      title: 'Tecnología de Vanguardia y Sin Dolor',
      desc: 'Escáneres intraorales 3D que eliminan las molestas pastas de impresión tradicionales, radiología digital de bajísima radiación y sistemas de anestesia computarizada indolora.',
      check: 'Tratamientos sin molestias ni estrés',
      icon: Activity,
    },
    {
      title: 'Especialistas Certificados y Trato Cercano',
      desc: 'Odontólogos colegiados con más de 12 años de trayectoria médica continua. Dedicamos el tiempo necesario para resolver tus dudas y explicarte cada procedimiento con calma.',
      check: 'Atención empática y personalizada',
      icon: Award,
    },
    {
      title: 'Financiación a tu Medida y Precios Claros',
      desc: 'Presupuestos 100% transparentes desde el primer día, sin costes ocultos ni sorpresas. Opciones de pago flexibles hasta 12 meses sin intereses y acuerdos con mutuas médicas.',
      check: 'Planes de pago cómodos sin intereses',
      icon: CreditCard,
    },
  ];

  const testimonials = [
    {
      quote:
        '“Llevaba años posponiendo el blanqueamiento por temor a la sensibilidad. En Sonrisa Dental fue un proceso completamente indoloro y los resultados se notaron de inmediato en la primera sesión.”',
      author: 'Laura Méndez R.',
      treatment: 'Tratamiento: Blanqueamiento Dental LED',
      avatar: 'LM',
    },
    {
      quote:
        '“Los alineadores invisibles han sido la mejor decisión. Nadie en mi trabajo notó que los llevaba puesto y el seguimiento mensual por WhatsApp me dio total comodidad.”',
      author: 'Carlos Santillana',
      treatment: 'Tratamiento: Ortodoncia Invisible',
      avatar: 'CS',
    },
    {
      quote:
        '“El trato humano de todo el equipo es insuperable. Me hicieron una limpieza profunda y carillas estéticas; ahora sonrío con total seguridad en mis reuniones.”',
      author: 'Elena Valenzuela',
      treatment: 'Tratamiento: Limpieza y Carillas',
      avatar: 'EV',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center overflow-hidden animate-in fade-in duration-200">
      {/* Top Browser Simulator Chrome Bar */}
      <header className="w-full bg-[#0E1524] border-b border-slate-800 px-4 py-2.5 flex items-center justify-between text-slate-300 shrink-0 z-20">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-[#080D18] border border-slate-750 text-[11px] font-mono-code px-3 py-1 rounded text-slate-400">
            <span className="text-emerald-400">🔒</span>
            <span>https://sonrisadental-clinica.es/madrid</span>
          </div>
        </div>

        {/* Device Mode Switcher */}
        <div className="flex items-center gap-2 bg-[#080D18] p-1 rounded-sm border border-slate-750">
          <button
            onClick={() => setDeviceMode('desktop')}
            className={`px-2.5 py-1 text-[11px] font-mono-code flex items-center gap-1.5 rounded-xs transition ${
              deviceMode === 'desktop'
                ? 'bg-slate-750 text-white font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Escritorio</span>
          </button>
          <button
            onClick={() => setDeviceMode('mobile')}
            className={`px-2.5 py-1 text-[11px] font-mono-code flex items-center gap-1.5 rounded-xs transition ${
              deviceMode === 'mobile'
                ? 'bg-slate-750 text-white font-bold'
                : 'text-slate-400 hover:text-slate-200'
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
            className="flex items-center gap-1.5 text-xs font-mono-code bg-slate-800 hover:bg-slate-700 text-white px-3 py-1.5 rounded-xs transition border border-slate-700 cursor-pointer"
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">Cerrar Demo</span>
          </button>
        )}
      </header>

      {/* Main Preview Scrollable Area */}
      <div
        className={`w-full flex-1 overflow-y-auto bg-white text-slate-900 transition-all duration-300 font-sans relative ${
          deviceMode === 'mobile'
            ? 'max-w-[420px] my-4 rounded-xl border border-neutral-300 shadow-2xl overflow-x-hidden'
            : 'max-w-full'
        }`}
      >
        {/* =========================================================================
            1. TOP CLINIC CONTACT STRIP
        ========================================================================== */}
        <div className="bg-[#F8FAFC] border-b border-slate-200 px-6 sm:px-12 md:px-20 py-2 text-[11px] text-slate-600 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>Lunes a Viernes 8:00 - 20:00 | Sábados 9:00 - 14:00</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-semibold text-slate-800">
              <Phone className="w-3.5 h-3.5 text-slate-600" />
              <span>+34 900 123 456</span>
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-600">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Atención Odontológica Avanzada</span>
            </span>
          </div>
        </div>

        {/* =========================================================================
            2. MAIN HEADER & NAVBAR
        ========================================================================== */}
        <nav className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-150 px-6 sm:px-12 md:px-20 py-3.5 flex items-center justify-between shadow-2xs">
          <div className="flex items-center gap-2.5">
            <span className="text-xl font-light text-teal-600 font-mono-code">—</span>
            <span className="text-lg font-bold tracking-tight text-slate-900">
              Sonrisa Dental
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-7 text-xs text-slate-600 font-medium">
            <button
              onClick={() => scrollTo('sd-inicio')}
              className="hover:text-teal-700 transition cursor-pointer"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollTo('sd-servicios')}
              className="hover:text-teal-700 transition cursor-pointer"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollTo('sd-elegirnos')}
              className="hover:text-teal-700 transition cursor-pointer"
            >
              Por Qué Elegirnos
            </button>
            <button
              onClick={() => scrollTo('sd-espacios')}
              className="hover:text-teal-700 transition cursor-pointer"
            >
              Nuestra Clínica
            </button>
            <button
              onClick={() => scrollTo('sd-opiniones')}
              className="hover:text-teal-700 transition cursor-pointer"
            >
              Opiniones
            </button>
            <button
              onClick={() => scrollTo('sd-contacto')}
              className="hover:text-teal-700 transition cursor-pointer"
            >
              Contacto
            </button>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => scrollTo('sd-contacto')}
              className="bg-[#0B1528] hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2.5 rounded-sm transition flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-teal-400" />
              <span>Agendar Cita</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 border border-slate-200">
              <User className="w-4 h-4" />
            </div>
          </div>
        </nav>

        {/* =========================================================================
            3. HERO SECTION
        ========================================================================== */}
        <section id="sd-inicio" className="px-6 sm:px-12 md:px-20 py-16 sm:py-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Green Pill Badge */}
              <div className="inline-flex items-center gap-2 bg-[#E6F8F3] border border-teal-200/80 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
                <span className="text-[11px] font-semibold text-teal-800 tracking-wide">
                  CLÍNICA ODONTOLÓGICA CERTIFICADA
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Una sonrisa saludable <br />
                comienza aquí
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl font-normal">
                Cuidado odontológico de vanguardia, sin dolor y con trato humano personalizado.
                Recupera la confianza y el brillo de tu sonrisa con nuestro equipo de especialistas
                certificados.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={() => scrollTo('sd-contacto')}
                  className="bg-[#22C55E] hover:bg-[#16A34A] text-white text-xs font-bold px-5 py-3.5 rounded-sm transition flex items-center gap-2 shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-white" />
                  <span>Agendar por WhatsApp</span>
                  <span className="bg-white/25 text-white text-[10px] px-2 py-0.5 rounded-xs font-medium ml-1">
                    Respuesta en &lt;5 min
                  </span>
                </button>

                <button
                  onClick={() => scrollTo('sd-servicios')}
                  className="border border-slate-300 hover:border-slate-800 text-slate-700 text-xs font-medium px-4 py-3.5 rounded-sm transition cursor-pointer flex items-center gap-1.5"
                >
                  <span>Conoce nuestros servicios</span>
                  <span>↓</span>
                </button>
              </div>

              {/* Social Proof Line */}
              <div className="pt-2 text-xs text-slate-500 flex flex-wrap items-center gap-2">
                <span className="text-amber-500 font-bold">★ 4.9/5</span>
                <span>(Más de 550 pacientes satisfechos)</span>
                <span className="text-slate-300">|</span>
                <span className="text-teal-700 font-medium">
                  ✓ Primera consulta de diagnóstico sin compromiso
                </span>
              </div>
            </div>

            {/* Right Column: Hero Image with Floating Badges */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-4/4 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80"
                  alt="Sonrisa Dental Consulta"
                  className="w-full h-full object-cover"
                />

                {/* Floating Badge Top Left: Tecnología 3D Digital */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-lg border border-slate-200/80 shadow-lg flex items-center gap-2.5 max-w-[210px]">
                  <div className="w-7 h-7 rounded-md bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div className="text-[10px] leading-tight">
                    <span className="font-bold text-slate-900 block">Tecnología 3D Digital</span>
                    <span className="text-slate-500">Diagnóstico de alta resolución</span>
                  </div>
                </div>

                {/* Floating Badge Bottom Right: 100% Sin Dolor */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-lg border border-slate-200/80 shadow-lg flex items-center gap-2.5 max-w-[210px]">
                  <div className="w-7 h-7 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="text-[10px] leading-tight">
                    <span className="font-bold text-slate-900 block">100% Sin Dolor</span>
                    <span className="text-slate-500">Anestesia guiada por computadora</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. TRATAMIENTOS ESPECIALIZADOS
        ========================================================================== */}
        <section id="sd-servicios" className="px-6 sm:px-12 md:px-20 py-20 bg-[#F9FBFC] border-y border-slate-150">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-3">
              <span className="text-[11px] font-mono-code font-bold text-teal-700 uppercase tracking-widest block">
                TRATAMIENTOS ESPECIALIZADOS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight max-w-2xl leading-tight">
                Tratamientos diseñados para devolverte la mejor sonrisa
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                Abordamos cada necesidad con rigor médico avanzado, materiales biocompatibles y
                técnicas mínimamente invasivas enfocadas en tu confort absoluto.
              </p>
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatments.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition hover:border-teal-300 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-md bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-xs">
                        {idx === 0 && '🪥'}
                        {idx === 1 && '✨'}
                        {idx === 2 && '🦷'}
                        {idx === 3 && '🩺'}
                      </div>
                      <span className="text-[10px] font-mono-code bg-slate-100 text-slate-600 px-2 py-0.5 rounded-xs font-semibold">
                        {t.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition">
                        {t.title}
                      </h3>
                      <span className="text-[9px] font-mono-code text-teal-700 uppercase font-bold tracking-wider block mt-0.5">
                        {t.sub}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed pt-1">
                      {t.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 mt-4">
                    <button
                      onClick={() => scrollTo('sd-contacto')}
                      className="text-xs font-semibold text-slate-700 group-hover:text-teal-700 transition flex items-center gap-1 cursor-pointer"
                    >
                      <span>Consultar por WhatsApp</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. LA EXPERIENCIA SONRISA DENTAL («¿POR QUÉ ELEGIRNOS?»)
        ========================================================================== */}
        <section id="sd-elegirnos" className="px-6 sm:px-12 md:px-20 py-24 max-w-7xl mx-auto space-y-14">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-[11px] font-mono-code font-bold text-teal-700 uppercase tracking-widest block">
              LA EXPERIENCIA SONRISA DENTAL
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Combinamos tecnología de precisión, calidez en el trato y soluciones financieras
              claras para que cuidar tu salud bucodental sea una experiencia gratificante.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyChooseUs.map((w, idx) => {
              const IconComp = w.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-lg p-7 shadow-xs space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-9 h-9 rounded-md bg-teal-50 text-teal-700 flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {w.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {w.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-teal-800">
                    <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>{w.check}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            6. ESPACIOS DISEÑADOS PARA TI
        ========================================================================== */}
        <section id="sd-espacios" className="px-6 sm:px-12 md:px-20 py-20 bg-[#F9FBFC] border-y border-slate-150">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image with Floating badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-4/3 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
                  alt="Instalaciones Sonrisa Dental"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-lg border border-slate-200 shadow-md flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="text-[10px] leading-tight">
                    <span className="font-bold text-slate-900 block">Instalaciones 100% Esterilizadas</span>
                    <span className="text-slate-500">Protocolos hospitalarios de máxima bioseguridad en cada consulta.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-mono-code font-bold text-teal-700 uppercase tracking-widest block">
                ESPACIOS DISEÑADOS PARA TI
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Un espacio creado para tu tranquilidad y bienestar dental
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                En Sonrisa Dental hemos redefinido por completo la visita tradicional al dentista.
                Diseñamos nuestras instalaciones para transformar la cita médica en una experiencia
                serena, agradable y libre de ansiedad.
              </p>

              <div className="space-y-4 pt-1">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Ambiente Anti-Estrés y Relajación Sensorial
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Aromaterapia relajante, música ambiente suave y diseño biofílico con luz natural para desconectar antes de entrar a consulta.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Activity className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Sillones Ergonómicos de Confort Clínico
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Equipamiento ergonómico A-dec de apoyo anatómico con pantallas multimedia en techo para disfrutar de tu contenido preferido durante la sesión.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Puntualidad Rigurosa en la Atención
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Respetamos tu tiempo personal. Trabajamos con agenda coordinada para evitar salas de espera abarrotadas o demoras injustificadas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => scrollTo('sd-contacto')}
                  className="text-xs font-semibold text-teal-700 hover:text-teal-900 transition flex items-center gap-1 cursor-pointer"
                >
                  <span>Conoce nuestras instalaciones en persona</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. LO QUE DICEN NUESTROS PACIENTES (TESTIMONIOS)
        ========================================================================== */}
        <section id="sd-opiniones" className="px-6 sm:px-12 md:px-20 py-24 max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-[11px] font-mono-code font-bold text-teal-700 uppercase tracking-widest block">
              HISTORIAS REALES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Lo que dicen nuestros pacientes
            </h2>
            <p className="text-[11px] font-mono-code text-slate-400">
              (DATOS DE EJEMPLO REEMPLAZABLES POR EL CLIENTE)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((test, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex text-amber-400 gap-1 text-sm">
                    {'★★★★★'}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    {test.quote}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      {test.author}
                    </h4>
                    <span className="text-[10px] text-slate-500 block">
                      {test.treatment}
                    </span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-teal-50 text-teal-700 font-bold text-[10px] flex items-center justify-center border border-teal-200">
                    {test.avatar}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            8. DARK CTA BANNER & FORM
        ========================================================================== */}
        <section id="sd-contacto" className="px-6 sm:px-12 md:px-20 pb-20 max-w-7xl mx-auto">
          <div className="bg-[#0B1528] rounded-2xl p-8 sm:p-14 text-white shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-[10px] font-mono-code text-teal-400 uppercase tracking-widest font-bold block">
                  ● Atención Inmediata
                </span>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  ¿Listo para recuperar la confianza en tu sonrisa?
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg font-light">
                  Agenda tu consulta de evaluación inicial hoy mismo. Nuestro equipo te responderá en
                  minutos vía WhatsApp con disponibilidad inmediata.
                </p>

                <div className="pt-1">
                  <button
                    onClick={() => setWhatsappToastOpen(true)}
                    className="bg-[#22C55E] hover:bg-[#16A34A] text-white text-xs font-bold px-6 py-4 rounded-sm transition flex items-center gap-2 shadow-lg cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-white" />
                    <span>Solicitar Cita por WhatsApp</span>
                  </button>
                  <span className="text-[10px] font-mono-code text-slate-400 block pt-2">
                    * Reemplazar XXXXXXXXXXX con tu número internacional oficial (rama/enlace)
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-medium text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                    <span>Cita confirmada en el día</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                    <span>Sin compromiso de pago</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Callback Request White Card */}
              <div className="lg:col-span-5 bg-white rounded-xl p-6 sm:p-8 text-slate-900 shadow-xl">
                <div className="space-y-1 mb-5">
                  <h3 className="text-base font-bold text-slate-900">
                    ¿Prefieres que te llamemos?
                  </h3>
                  <p className="text-xs text-slate-500">
                    Déjanos tus datos y responderemos en contacto.
                  </p>
                </div>

                {callRequestSubmitted ? (
                  <div className="text-center py-8 space-y-3 bg-teal-50/60 p-4 rounded-md border border-teal-200">
                    <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto text-lg font-bold">
                      ✓
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">
                      ¡Solicitud de llamada recibida!
                    </h4>
                    <p className="text-xs text-slate-600">
                      Nos comunicaremos contigo al teléfono {callFormData.telefono} a la brevedad.
                    </p>
                    <button
                      onClick={() => setCallRequestSubmitted(false)}
                      className="text-xs text-teal-700 underline font-semibold cursor-pointer pt-2"
                    >
                      Enviar otra solicitud
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleCallSubmit} className="space-y-3.5">
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700 block">
                        Nombre y Apellidos
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. María García"
                        value={callFormData.nombre}
                        onChange={(e) =>
                          setCallFormData({ ...callFormData, nombre: e.target.value })
                        }
                        className="w-full border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 rounded-sm focus:outline-hidden focus:border-teal-600"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700 block">
                        Teléfono o WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+34 600 000 000"
                        value={callFormData.telefono}
                        onChange={(e) =>
                          setCallFormData({ ...callFormData, telefono: e.target.value })
                        }
                        className="w-full border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 rounded-sm focus:outline-hidden focus:border-teal-600"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-700 block">
                        Tratamiento de Interés
                      </label>
                      <select
                        value={callFormData.tratamiento}
                        onChange={(e) =>
                          setCallFormData({ ...callFormData, tratamiento: e.target.value })
                        }
                        className="w-full border border-slate-300 px-3 py-2.5 text-xs text-slate-900 rounded-sm focus:outline-hidden focus:border-teal-600 bg-white"
                      >
                        <option value="Primera Consulta de Evaluación">
                          Primera Consulta de Evaluación
                        </option>
                        <option value="Limpieza Dental Profunda">
                          Limpieza Dental Profunda
                        </option>
                        <option value="Blanqueamiento Dental LED">
                          Blanqueamiento Dental LED
                        </option>
                        <option value="Ortodoncia Invisible">
                          Ortodoncia Invisible
                        </option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#0B1528] hover:bg-slate-800 text-white font-semibold text-xs py-3.5 rounded-sm transition shadow-md cursor-pointer flex items-center justify-center gap-2 mt-2"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Pedir que me contacten</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            9. FOOTER
        ========================================================================== */}
        <footer className="py-14 px-6 sm:px-12 md:px-20 bg-[#F8FAFC] border-t border-slate-200 text-slate-600 text-xs">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-200">
            {/* Brand Col */}
            <div className="space-y-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <span className="text-xl font-light text-teal-600 font-mono-code">—</span>
                <span className="text-base font-bold text-slate-900">Sonrisa Dental</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Clínica dental de referencia comprometida con la salud bucal, combinando odontología de alta precisión médica con un trato empático, sereno y confortable.
              </p>
            </div>

            {/* Horarios */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-900">Horarios de Consulta</h4>
              <div className="text-[11px] space-y-1 text-slate-600">
                <div className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span className="font-semibold text-slate-800">08:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span className="font-semibold text-slate-800">09:00 - 14:00</span>
                </div>
                <div className="flex justify-between text-rose-600">
                  <span>Domingos y Festivos:</span>
                  <span className="font-semibold">Cerrado (Urgencias 24h)</span>
                </div>
              </div>
            </div>

            {/* Ubicación */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-900">Ubicación y Contacto</h4>
              <div className="text-[11px] space-y-1.5 text-slate-600">
                <p>Av. de la Salud 145, Planta 1, 28001 Madrid (Dato de ejemplo a reemplazar)</p>
                <p className="font-semibold text-slate-800">+34 900 123 456</p>
                <p className="text-teal-700 font-semibold">WhatsApp Directo Clínica</p>
              </div>
            </div>

            {/* Navegación Rápida */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-900">Navegación Rápida</h4>
              <div className="text-[11px] space-y-1 text-slate-600 flex flex-col">
                <button onClick={() => scrollTo('sd-inicio')} className="text-left hover:text-teal-700">
                  Inicio
                </button>
                <button onClick={() => scrollTo('sd-servicios')} className="text-left hover:text-teal-700">
                  Tratamientos y Servicios
                </button>
                <button onClick={() => scrollTo('sd-elegirnos')} className="text-left hover:text-teal-700">
                  Compromiso Clínico
                </button>
                <button onClick={() => scrollTo('sd-espacios')} className="text-left hover:text-teal-700">
                  Instalaciones y Equipo
                </button>
                <button onClick={() => scrollTo('sd-opiniones')} className="text-left hover:text-teal-700">
                  Casos de Éxito
                </button>
                <button onClick={() => scrollTo('sd-contacto')} className="text-left hover:text-teal-700">
                  Localización y Citas
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <div>
              © 2025 Clínica Sonrisa Dental. Todos los derechos reservados. Registro Sanitario Nº CS-89421.
            </div>
            <div className="flex items-center gap-4">
              <span>Aviso Legal</span>
              <span>·</span>
              <span>Política de Privacidad</span>
              <span>·</span>
              <span>Política de Cookies</span>
            </div>
          </div>
        </footer>

        {/* Floating WhatsApp Bubble in bottom-right */}
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
          <div className="hidden sm:block bg-slate-900 text-white text-[11px] font-medium py-1.5 px-3 rounded-full shadow-lg">
            ¿Dudas? Escríbenos por WhatsApp
          </div>
          <button
            onClick={() => setWhatsappToastOpen(!whatsappToastOpen)}
            aria-label="Abrir WhatsApp"
            className="w-12 h-12 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white flex items-center justify-center shadow-2xl transition cursor-pointer"
          >
            <MessageCircle className="w-6 h-6 fill-white" />
          </button>
        </div>

        {/* WhatsApp Simulation Toast */}
        {whatsappToastOpen && (
          <div className="fixed bottom-22 right-6 z-50 bg-white border border-slate-200 p-4 rounded-xl shadow-2xl max-w-xs space-y-3 animate-in fade-in">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Recepción Sonrisa Dental</span>
              </span>
              <button
                onClick={() => setWhatsappToastOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Hola, estamos disponibles en línea para coordinar tu cita o resolver dudas sobre presupuestos y seguros médicos.
            </p>
            <button
              onClick={() => {
                setWhatsappToastOpen(false);
                scrollTo('sd-contacto');
              }}
              className="w-full bg-[#22C55E] text-white text-xs font-bold py-2 rounded-sm text-center block cursor-pointer"
            >
              Iniciar Chat WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
