import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Monitor,
  Phone,
  Send,
  Smartphone,
  Sparkles,
  X,
} from 'lucide-react';

interface OtraFormaProps {
  onClose?: () => void;
}

interface ChatMessage {
  id: number;
  sender: 'bot' | 'user';
  text: string;
}

export default function OtraFormaTechPage({ onClose }: OtraFormaProps) {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Interactive Chat State in "Experiencia Interactiva"
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: 'bot',
      text: '¡Hola! Bienvenido a Otra Forma. ¿Qué tipo de negocio tienes o qué proceso te gustaría automatizar?',
    },
    {
      id: 2,
      sender: 'user',
      text: 'Tengo un despacho de asesoría y perdemos mucho tiempo explicando precios y agendando llamadas.',
    },
    {
      id: 3,
      sender: 'bot',
      text: '¡Podemos resolverlo! Diseñamos tu portal con un flujo guiado que explica tus planes y permite a tus prospectos agendar directamente. ¿Te gustaría ver un presupuesto?',
    },
  ]);

  const [userInput, setUserInput] = useState('');
  const [chatOptionSelected, setChatOptionSelected] = useState<string | null>(null);

  const handleSelectOption = (optionText: string) => {
    setChatOptionSelected(optionText);
    const newId = chatMessages.length + 1;
    const userMsg: ChatMessage = {
      id: newId,
      sender: 'user',
      text: optionText,
    };
    const botReply: ChatMessage = {
      id: newId + 1,
      sender: 'bot',
      text:
        optionText.includes('llamada')
          ? '¡Excelente! Nuestro asistente ya reservó tu espacio preliminar. Te contactaremos en breve para coordinar los detalles.'
          : '¡Perfecto! El paquete "Presencia & Automatización" cuesta $10,990 MXN (pago único) e incluye web completa, asistente 24/7 y entrega en 10-15 días.',
    };
    setChatMessages((prev) => [...prev, userMsg, botReply]);
  };

  const handleSendCustomMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    const newId = chatMessages.length + 1;
    const userMsg: ChatMessage = {
      id: newId,
      sender: 'user',
      text: userInput.trim(),
    };
    setUserInput('');
    setChatMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          id: newId + 1,
          sender: 'bot',
          text: 'Gracias por tu mensaje. El asistente automático procesó tus datos y te podemos enviar la cotización detallada en menos de 24 horas.',
        },
      ]);
    }, 600);
  };

  // Contact Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    giro: '',
    mensaje: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqItems = [
    {
      q: '¿Cuánto tiempo toma tener todo listo?',
      a: 'Normalmente el desarrollo toma entre 10 y 15 días hábiles desde que recibimos la información inicial de tu negocio y contenidos clave.',
    },
    {
      q: '¿Tendré que pagar mensualidades obligatorias?',
      a: 'No. El precio de $10,990 MXN es pago único llave en mano. Tú eres el dueño absoluto de tu página y tu dominio sin rentas forzosas.',
    },
    {
      q: '¿Podré actualizar el contenido después?',
      a: 'Sí. Diseñamos una estructura modular y te capacitamos en una sesión en vivo de 45 minutos para que tú o tu equipo cambien textos o fotos fácilmente.',
    },
    {
      q: '¿Cómo se integra el asistente con mis canales?',
      a: 'El asistente se conecta a tu correo electrónico o cuenta de WhatsApp Business para enviarte notificaciones instantáneas cada vez que un prospecto califica sus datos.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center overflow-hidden animate-in fade-in duration-200">
      {/* Top Browser Simulator Chrome */}
      <header className="w-full bg-[#111317] border-b border-neutral-800 px-4 py-2.5 flex items-center justify-between text-neutral-300 shrink-0 z-20">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-[#090A0D] border border-neutral-800 text-[11px] font-mono-code px-3 py-1 rounded text-neutral-400">
            <span className="text-[#2563EB]">🔒</span>
            <span>https://otraforma.mx/tecnologia-negocios</span>
          </div>
        </div>

        {/* Device Mode Switcher */}
        <div className="flex items-center gap-2 bg-[#090A0D] p-1 rounded-sm border border-neutral-800">
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
        className={`w-full flex-1 overflow-y-auto bg-[#F9FAFB] text-neutral-900 transition-all duration-300 font-sans relative ${
          deviceMode === 'mobile'
            ? 'max-w-[420px] my-4 rounded-xl border border-neutral-800 shadow-2xl overflow-x-hidden'
            : 'max-w-full'
        }`}
      >
        {/* =========================================================================
            1. HEADER / NAVBAR
        ========================================================================== */}
        <nav className="sticky top-0 z-30 bg-[#F9FAFB]/95 backdrop-blur-md border-b border-neutral-200/80 px-6 sm:px-12 md:px-20 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <span className="text-lg font-black tracking-tight text-neutral-950 block">
                OTRA<span className="text-[#2563EB]">FORMA</span>
              </span>
              <span className="text-[9px] font-mono-code text-neutral-500 uppercase tracking-widest block -mt-1 font-semibold">
                TECNOLOGÍA PARA NEGOCIOS
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-xs text-neutral-600 font-medium">
            <button
              onClick={() => scrollTo('of-solucion')}
              className="hover:text-[#2563EB] transition cursor-pointer"
            >
              La solución
            </button>
            <button
              onClick={() => scrollTo('of-paquete')}
              className="hover:text-[#2563EB] transition cursor-pointer"
            >
              Paquete y precio
            </button>
            <button
              onClick={() => scrollTo('of-metodologia')}
              className="hover:text-[#2563EB] transition cursor-pointer"
            >
              Cómo funciona
            </button>
            <button
              onClick={() => scrollTo('of-preguntas')}
              className="hover:text-[#2563EB] transition cursor-pointer"
            >
              Preguntas
            </button>
          </div>

          <div>
            <button
              onClick={() => scrollTo('of-contacto')}
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold px-4 sm:px-5 py-2.5 rounded-xs transition flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <span>Solicitar información</span>
              <span className="text-white/80">↗</span>
            </button>
          </div>
        </nav>

        {/* =========================================================================
            2. HERO SECTION
        ========================================================================== */}
        <section className="px-6 sm:px-12 md:px-20 py-16 sm:py-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-[11px] font-mono-code font-bold uppercase tracking-wider text-neutral-500">
                <span className="w-5 h-0.5 bg-[#F95738]"></span>
                <span>MENOS TAREAS MANUALES. MÁS NEGOCIO.</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-neutral-950 tracking-tight leading-[1.05]">
                Tu web puede <br />
                hacer <span className="text-[#2563EB]">más.</span>
              </h1>

              <p className="text-sm sm:text-base text-neutral-600 max-w-lg leading-relaxed font-normal">
                Una página profesional que no solo muestra lo que haces. También responde preguntas
                frecuentes y ayuda a organizar las solicitudes que llegan a tu negocio.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => scrollTo('of-paquete')}
                  className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold px-6 py-3.5 rounded-xs transition flex items-center gap-2 shadow-sm cursor-pointer"
                >
                  <span>Conocer el paquete</span>
                  <span>↗</span>
                </button>
                <button
                  onClick={() => scrollTo('of-metodologia')}
                  className="border border-neutral-300 hover:border-neutral-900 text-neutral-800 text-xs font-semibold px-5 py-3.5 rounded-xs transition flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Ver cómo funciona</span>
                  <span>↓</span>
                </button>
              </div>
            </div>

            {/* Right Graphic Card (Exact match to screenshot) */}
            <div className="lg:col-span-5">
              <div className="aspect-4/4 bg-[#1E50DE] rounded-xs p-6 sm:p-8 flex flex-col justify-between text-white shadow-2xl relative overflow-hidden group">
                {/* Top Label */}
                <div className="flex items-center justify-between text-[11px] font-mono-code text-white/90">
                  <span className="tracking-wider">01 / SOLUCIONES DIGITALES</span>
                  <span className="tracking-wider font-semibold">HECHO PARA CRECER ↗</span>
                </div>

                {/* Geometric Abstract Artwork: Triangle + Orange Circle with white rings */}
                <div className="relative my-auto flex items-center justify-center h-48 sm:h-56">
                  {/* White Triangle (left/center) */}
                  <div
                    className="absolute z-10 w-28 h-36 bg-white shadow-lg"
                    style={{
                      clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                      transform: 'translateX(-22px) translateY(-5px)',
                    }}
                  ></div>

                  {/* Coral / Orange Circle (right/center) */}
                  <div className="absolute z-20 w-32 h-32 rounded-full bg-[#FF5733] shadow-md flex items-center justify-center translate-x-12">
                    {/* Concentric rings wireframe */}
                    <div className="w-24 h-24 rounded-full border border-white/50"></div>
                    <div className="absolute w-16 h-16 rounded-full border border-white/40"></div>
                  </div>
                </div>

                {/* Bottom text */}
                <div className="flex items-end justify-between">
                  <div className="space-y-0.5">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                      Automatización <br />
                      y presencia <br />
                      digital
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono-code tracking-widest text-white/80 uppercase">
                    MÉXICO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. TICKER STRIP (BLACK BANNER)
        ========================================================================== */}
        <div className="bg-[#111111] text-white py-3 px-6 text-center text-[11px] font-mono-code tracking-widest uppercase">
          <span>DISEÑO WEB · AUTOMATIZACIÓN · ATENCIÓN 24/7 · INTEGRACIÓN EFECTIVA</span>
        </div>

        {/* =========================================================================
            4. EL RETO COMÚN
        ========================================================================== */}
        <section id="of-solucion" className="px-6 sm:px-12 md:px-20 py-24 max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-mono-code font-bold text-[#2563EB] uppercase tracking-wider block">
                EL RETO COMÚN
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
                El tiempo invertido en <br />
                tareas repetitivas <br />
                frena tu crecimiento.
              </h2>
            </div>
            <div className="lg:col-span-5 pt-2">
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Muchos negocios pierden horas respondiendo los mismos mensajes, enviando cotizaciones
                básicas y organizando prospectos a mano. Diseñamos plataformas que resuelven esto
                desde el primer día.
              </p>
            </div>
          </div>

          {/* 3 Columns Reto */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-neutral-200 pt-10">
            <div className="space-y-2">
              <span className="text-[11px] font-mono-code font-bold text-[#FF5733] uppercase tracking-wider block">
                01 / RETO
              </span>
              <h3 className="text-base font-bold text-neutral-950">Respuestas lentas</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Los clientes esperan respuestas inmediatas. Si tardas horas en contestar dudas habituales,
                buscan a la competencia.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono-code font-bold text-[#FF5733] uppercase tracking-wider block">
                02 / RETO
              </span>
              <h3 className="text-base font-bold text-neutral-950">Desorden de prospectos</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Mensajes dispersos entre WhatsApp, correo y redes que dificultan el seguimiento y
                hacen perder oportunidades clave.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono-code font-bold text-[#FF5733] uppercase tracking-wider block">
                03 / RETO
              </span>
              <h3 className="text-base font-bold text-neutral-950">Sitios estáticos</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Una página que solo funciona como tarjeta de presentación sin captar ni calificar el
                interés de quienes la visitan.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. SOLUCIÓN INTEGRAL / PAQUETE Y PRECIO
        ========================================================================== */}
        <section id="of-paquete" className="bg-[#EFEFED] py-24 px-6 sm:px-12 md:px-20 border-y border-neutral-200">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left side text */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono-code font-bold text-[#2563EB] uppercase tracking-wider block">
                SOLUCIÓN INTEGRAL
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
                Un único paquete <br />
                con todo lo <br />
                necesario.
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-sm">
                Sin costos ocultos ni complicaciones técnicas. Nos encargamos de la estrategia, el
                diseño, la redacción y la automatización inicial.
              </p>
            </div>

            {/* Right Pricing Card */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-neutral-200 rounded-xs p-8 sm:p-10 shadow-lg space-y-6">
                <div className="flex items-center justify-between text-[11px] font-mono-code border-b border-neutral-100 pb-4">
                  <span className="text-[#2563EB] font-bold uppercase tracking-wider">
                    PLAN COMPLETO
                  </span>
                  <span className="text-neutral-500 uppercase tracking-wider font-semibold">
                    LLAVE EN MANO
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-neutral-950">
                    Presencia & Automatización
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Ideal para empresas y negocios de servicios que quieren profesionalizar su canal digital
                    y atender clientes en automático.
                  </p>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-2 pt-2 pb-2">
                  <span className="text-4xl sm:text-5xl font-extrabold text-neutral-950 font-mono-code">
                    $10,990
                  </span>
                  <span className="text-xs font-mono-code text-neutral-500">
                    MXN + IVA (pago único)
                  </span>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3.5 border-t border-neutral-100 pt-5 text-xs text-neutral-700 leading-relaxed">
                  <span className="text-[10px] font-mono-code text-neutral-400 uppercase tracking-widest block font-bold">
                    INCLUYE TODO ESTO:
                  </span>

                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <p>
                      <strong className="text-neutral-950 font-bold">Sitio Web a la Medida:</strong>{' '}
                      Diseño optimizado para móvil y escritorio, arquitectura orientada a conversión.
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <p>
                      <strong className="text-neutral-950 font-bold">Asistente Virtual Integrado:</strong>{' '}
                      Automatización que responde preguntas frecuentes y captura datos 24/7.
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <p>
                      <strong className="text-neutral-950 font-bold">Recepción y Notificaciones:</strong>{' '}
                      Registro ordenado de contactos y alertas inmediatas por correo o WhatsApp.
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <p>
                      <strong className="text-neutral-950 font-bold">Optimización Técnica & SEO:</strong>{' '}
                      Velocidad ultrarrápida, certificados de seguridad y estructura amigable para Google.
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <p>
                      <strong className="text-neutral-950 font-bold">Capacitación y Entrega:</strong>{' '}
                      Sesión personalizada para que tu equipo domine la plataforma sin depender de terceros.
                    </p>
                  </div>
                </div>

                {/* For Whom Box */}
                <div className="bg-neutral-50 border border-neutral-200/80 p-4 rounded-xs text-xs space-y-1">
                  <span className="font-bold text-neutral-900 block">¿Para quién es?</span>
                  <p className="text-neutral-600 leading-relaxed">
                    Consultorías, agencias, despachos, servicios locales y negocios en crecimiento que
                    buscan captar mejores prospectos con menor esfuerzo manual.
                  </p>
                </div>

                {/* Button */}
                <div>
                  <button
                    onClick={() => scrollTo('of-contacto')}
                    className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xs transition shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Comenzar proyecto</span>
                    <span>↗</span>
                  </button>
                  <p className="text-[10px] text-neutral-400 font-mono-code text-center pt-2">
                    * Entrega estimada en 10 a 15 días hábiles a partir de la recepción de información.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. METODOLOGÍA («Cómo trabajamos juntos.»)
        ========================================================================== */}
        <section id="of-metodologia" className="px-6 sm:px-12 md:px-20 py-24 max-w-7xl mx-auto space-y-16">
          <div className="space-y-3">
            <span className="text-xs font-mono-code font-bold text-[#2563EB] uppercase tracking-wider block">
              METODOLOGÍA
            </span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight">
                Cómo trabajamos juntos.
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 font-normal max-w-xs">
                Un proceso estructurado, transparente y ágil en cuatro pasos sencillos.
              </p>
            </div>
          </div>

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="w-8 h-8 rounded-xs bg-[#2563EB] text-white font-bold text-xs flex items-center justify-center font-mono-code">
                01
              </div>
              <h3 className="text-base font-bold text-neutral-950">Diagnóstico</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Analizamos tu negocio, tus preguntas frecuentes y los puntos clave de contacto con tus clientes.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-8 h-8 rounded-xs bg-[#2563EB] text-white font-bold text-xs flex items-center justify-center font-mono-code">
                02
              </div>
              <h3 className="text-base font-bold text-neutral-950">Diseño & Redacción</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Construimos la propuesta visual, los textos persuasivos y la arquitectura de contenidos.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-8 h-8 rounded-xs bg-[#2563EB] text-white font-bold text-xs flex items-center justify-center font-mono-code">
                03
              </div>
              <h3 className="text-base font-bold text-neutral-950">Automatización</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Configuramos el asistente, los formularios y la lógica de respuestas automáticas.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-8 h-8 rounded-xs bg-[#2563EB] text-white font-bold text-xs flex items-center justify-center font-mono-code">
                04
              </div>
              <h3 className="text-base font-bold text-neutral-950">Lanzamiento</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Publicación, pruebas exhaustivas en vivo y capacitación directa con tu equipo.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. EXPERIENCIA INTERACTIVA («Tu web atendiendo en tiempo real.»)
        ========================================================================== */}
        <section className="bg-[#141416] text-white py-24 px-6 sm:px-12 md:px-20 border-y border-neutral-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono-code font-bold text-[#60A5FA] uppercase tracking-wider block">
                EXPERIENCIA INTERACTIVA
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Tu web atendiendo <br />
                en tiempo real.
              </h2>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                Imagina que cada visitante recibe una respuesta clara a sus preguntas inmediatas
                mientras tu equipo se enfoca en cerrar ventas.
              </p>

              <div className="space-y-3 pt-2 text-xs text-neutral-200">
                <div className="flex items-center gap-2">
                  <span className="text-[#FF5733] font-bold">↗</span>
                  <span>Resuelve dudas sobre precios, horarios y ubicación al instante.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#FF5733] font-bold">↗</span>
                  <span>Filtra y califica prospectos antes de pasarlos a tu equipo.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#FF5733] font-bold">↗</span>
                  <span>Disponible las 24 horas, los 365 días del año sin fricción.</span>
                </div>
              </div>
            </div>

            {/* Right side: Functional Chat Simulator Widget */}
            <div className="lg:col-span-6">
              <div className="bg-[#1C1D22] border border-neutral-700/80 rounded-xs shadow-2xl overflow-hidden flex flex-col justify-between">
                {/* Chat Widget Top Header */}
                <div className="bg-[#24252B] p-4 flex items-center gap-3 border-b border-neutral-700">
                  <div className="w-8 h-8 rounded-xs bg-[#2563EB] text-white font-black text-xs flex items-center justify-center font-mono-code">
                    OF
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white leading-tight">
                      Asistente Otra Forma
                    </h4>
                    <span className="text-[10px] text-emerald-400 flex items-center gap-1.5 font-mono-code">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                      <span>En línea • Respuesta inmediata</span>
                    </span>
                  </div>
                </div>

                {/* Chat Messages Body */}
                <div className="p-5 space-y-3.5 max-h-[340px] overflow-y-auto bg-[#18191E]">
                  {chatMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${
                        msg.sender === 'user' ? 'justify-end' : 'justify-start'
                      } animate-in fade-in`}
                    >
                      <div
                        className={`max-w-[85%] rounded-xs p-3.5 text-xs leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-[#DBEAFE] text-slate-900 font-medium'
                            : 'bg-white text-neutral-900 shadow-xs'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}

                  {/* Interactive Quick Action Buttons */}
                  <div className="space-y-2 pt-2">
                    <button
                      onClick={() =>
                        handleSelectOption('1. Sí, me gustaría agendar una llamada breve ↗')
                      }
                      className="w-full text-left bg-white/95 hover:bg-white text-neutral-900 text-xs font-medium p-3 rounded-xs transition border border-neutral-300 flex items-center justify-between cursor-pointer"
                    >
                      <span>1. Sí, me gustaría agendar una llamada breve</span>
                      <span className="text-neutral-500">↗</span>
                    </button>
                    <button
                      onClick={() =>
                        handleSelectOption('2. Quiero revisar el detalle del paquete ↗')
                      }
                      className="w-full text-left bg-white/95 hover:bg-white text-neutral-900 text-xs font-medium p-3 rounded-xs transition border border-neutral-300 flex items-center justify-between cursor-pointer"
                    >
                      <span>2. Quiero revisar el detalle del paquete</span>
                      <span className="text-neutral-500">↗</span>
                    </button>
                  </div>
                </div>

                {/* Chat Input Footer */}
                <form
                  onSubmit={handleSendCustomMessage}
                  className="p-3 bg-[#202127] border-t border-neutral-700 flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Escribe un mensaje de prueba..."
                    className="flex-1 bg-[#141418] border border-neutral-700 px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-[#2563EB] rounded-xs"
                  />
                  <button
                    type="submit"
                    aria-label="Enviar mensaje"
                    className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white p-2 rounded-xs transition cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>

                <div className="bg-[#18191E] px-4 py-2 text-center text-[9px] text-neutral-400 font-mono-code border-t border-neutral-800">
                  * Demostración interactiva simplificada del flujo de atención.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. PREGUNTAS FRECUENTES
        ========================================================================== */}
        <section id="of-preguntas" className="px-6 sm:px-12 md:px-20 py-24 max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono-code font-bold text-[#2563EB] uppercase tracking-wider block">
                DUDAS FRECUENTES
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
                Preguntas <br />
                claras, <br />
                respuestas <br />
                directas.
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 max-w-xs">
                Todo lo que necesitas saber antes de iniciar tu proyecto con nosotros.
              </p>
            </div>

            {/* Accordion list */}
            <div className="lg:col-span-7 divide-y divide-neutral-200 border-t border-neutral-200">
              {faqItems.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="py-5">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left font-bold text-sm sm:text-base text-neutral-950 hover:text-[#2563EB] transition cursor-pointer"
                    >
                      <span>{item.q}</span>
                      <span className="text-lg font-mono-code text-[#2563EB] ml-4">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="pt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed animate-in fade-in">
                        {item.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            9. CTA SECTION («COMENCEMOS HOY / HAGAMOS QUE TU WEB TRABAJE PARA TI»)
        ========================================================================== */}
        <section id="of-contacto" className="px-6 sm:px-12 md:px-20 pb-24 max-w-7xl mx-auto">
          <div className="bg-[#FF5533] rounded-xs p-8 sm:p-14 text-white shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left headline */}
              <div className="lg:col-span-5 space-y-5">
                <span className="text-[11px] font-mono-code font-bold uppercase tracking-widest text-white/90 block">
                  COMENCEMOS HOY
                </span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-white">
                  Hagamos que tu <br />
                  web trabaje para <br />
                  ti.
                </h2>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-sm">
                  Completa el formulario y te contactaremos en menos de 24 horas con una propuesta adaptada a tu sector.
                </p>
              </div>

              {/* Right white card form */}
              <div className="lg:col-span-7 bg-white rounded-xs p-6 sm:p-8 text-neutral-900 shadow-2xl">
                {formSubmitted ? (
                  <div className="text-center py-10 space-y-3">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                      ✓
                    </div>
                    <h3 className="text-xl font-bold text-neutral-950">¡Solicitud recibida!</h3>
                    <p className="text-xs text-neutral-600 max-w-md mx-auto">
                      Gracias, {formData.nombre || 'amigo'}. Hemos recibido la información de tu negocio.
                      Nos pondremos en contacto contigo en {formData.email || 'tu correo'} en menos de 24 horas.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="bg-[#2563EB] text-white text-xs font-semibold px-4 py-2 rounded-xs mt-3 cursor-pointer"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-neutral-700 block">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Mariana López"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        className="w-full border border-neutral-300 px-3.5 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 rounded-xs focus:outline-hidden focus:border-[#2563EB]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-neutral-700 block">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ejemplo@tunegocio.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border border-neutral-300 px-3.5 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 rounded-xs focus:outline-hidden focus:border-[#2563EB]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-neutral-700 block">
                        Tipo de negocio o giro
                      </label>
                      <input
                        type="text"
                        placeholder="Ej. Clínica dental, Despacho contable..."
                        value={formData.giro}
                        onChange={(e) => setFormData({ ...formData, giro: e.target.value })}
                        className="w-full border border-neutral-300 px-3.5 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 rounded-xs focus:outline-hidden focus:border-[#2563EB]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-neutral-700 block">
                        ¿Qué te gustaría automatizar o mejorar?
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Cuéntanos brevemente sobre tu proyecto actual..."
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                        className="w-full border border-neutral-300 px-3.5 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 rounded-xs focus:outline-hidden focus:border-[#2563EB] resize-none"
                      ></textarea>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full bg-[#111111] hover:bg-black text-white font-bold text-xs uppercase py-3.5 rounded-xs transition shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <span>Enviar solicitud</span>
                        <span>↗</span>
                      </button>
                      <p className="text-[10px] text-neutral-400 text-center pt-2 font-mono-code">
                        * Respetamos tu privacidad. Sin spam ni mensajes no deseados.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            10. FOOTER
        ========================================================================== */}
        <footer className="py-12 px-6 sm:px-12 md:px-20 bg-[#F9FAFB] border-t border-neutral-200 text-neutral-500 text-xs font-mono-code">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-base font-black tracking-tight text-neutral-950">
                OTRA<span className="text-[#2563EB]">FORMA</span>
              </div>
              <div className="text-[11px] text-neutral-500 pt-0.5">
                © 2025 Otra Forma. Tecnología y diseño web para negocios en crecimiento.
              </div>
            </div>

            <div className="flex items-center gap-6 text-[11px] text-neutral-600">
              <button
                onClick={() => scrollTo('of-solucion')}
                className="hover:text-black transition cursor-pointer"
              >
                Solución
              </button>
              <button
                onClick={() => scrollTo('of-paquete')}
                className="hover:text-black transition cursor-pointer"
              >
                Paquete
              </button>
              <button
                onClick={() => scrollTo('of-metodologia')}
                className="hover:text-black transition cursor-pointer"
              >
                Proceso
              </button>
              <button
                onClick={() => scrollTo('of-preguntas')}
                className="hover:text-black transition cursor-pointer"
              >
                Preguntas
              </button>
              <button
                onClick={() => scrollTo('of-contacto')}
                className="hover:text-black transition cursor-pointer"
              >
                Contacto
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
