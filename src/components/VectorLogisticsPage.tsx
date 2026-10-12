import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  Globe,
  Layers,
  MapPin,
  Monitor,
  Package,
  Plane,
  Search,
  ShieldCheck,
  Ship,
  Smartphone,
  Truck,
  X,
} from 'lucide-react';

interface VectorLogisticsProps {
  onClose?: () => void;
}

interface ShipmentStatus {
  id: string;
  client: string;
  origin: string;
  destination: string;
  status: 'EN TRÁNSITO' | 'ADUANA LIBERADA' | 'EN BODEGA' | 'ENTREGADO';
  eta: string;
  mode: 'MARÍTIMO' | 'TERRESTRE' | 'AÉREO';
  progress: number;
  lastUpdate: string;
}

export default function VectorLogisticsPage({ onClose }: VectorLogisticsProps) {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'maritimo' | 'terrestre' | 'aereo' | 'aduanas'>('maritimo');

  // Shipment Tracker State
  const [trackingCode, setTrackingCode] = useState('VEC-8924-MX');
  const [activeShipment, setActiveShipment] = useState<ShipmentStatus | null>({
    id: 'VEC-8924-MX',
    client: 'Grupo Industrial Monterrey',
    origin: 'Puerto de Manzanillo, Colima (MX)',
    destination: 'Puerto de Long Beach, California (US)',
    status: 'EN TRÁNSITO',
    eta: '14 Octubre 2026 — 18:30 hrs',
    mode: 'MARÍTIMO',
    progress: 72,
    lastUpdate: 'Despacho aduanal completado. En navegación por Pacífico Norte.',
  });

  const sampleShipments: Record<string, ShipmentStatus> = {
    'VEC-8924-MX': {
      id: 'VEC-8924-MX',
      client: 'Grupo Industrial Monterrey',
      origin: 'Puerto de Manzanillo, Colima (MX)',
      destination: 'Puerto de Long Beach, California (US)',
      status: 'EN TRÁNSITO',
      eta: '14 Octubre 2026 — 18:30 hrs',
      mode: 'MARÍTIMO',
      progress: 72,
      lastUpdate: 'Despacho aduanal completado. En navegación por Pacífico Norte.',
    },
    'VEC-4410-EU': {
      id: 'VEC-4410-EU',
      client: 'BioPharma Laboratories',
      origin: 'Fráncfort del Meno (DE)',
      destination: 'Aeropuerto Internacional Felipe Ángeles (MX)',
      status: 'ADUANA LIBERADA',
      eta: '12 Octubre 2026 — 11:00 hrs',
      mode: 'AÉREO',
      progress: 90,
      lastUpdate: 'Inspección COFEPRIS aprobada sin observaciones. En preparación para última milla.',
    },
    'VEC-1092-US': {
      id: 'VEC-1092-US',
      client: 'Automotive Assemblies Bajío',
      origin: 'Laredo, Texas (US)',
      destination: 'Silao, Guanajuato (MX)',
      status: 'EN BODEGA',
      eta: '13 Octubre 2026 — 08:00 hrs',
      mode: 'TERRESTRE',
      progress: 45,
      lastUpdate: 'Arribo a patio fiscalizado San Luis Potosí para consolidación de carga.',
    },
  };

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = trackingCode.trim().toUpperCase();
    if (sampleShipments[clean]) {
      setActiveShipment(sampleShipments[clean]);
    } else {
      setActiveShipment({
        id: clean || 'VEC-CUSTOM',
        client: 'Operación Enlace Directo',
        origin: 'Terminal Central CDMX',
        destination: 'Frontera Norte / Punto Aduanal',
        status: 'EN TRÁNSITO',
        eta: 'Próximas 48 horas',
        mode: 'TERRESTRE',
        progress: 60,
        lastUpdate: 'Guía confirmada en Torre de Control. Sensores telemáticos activos.',
      });
    }
  };

  // Route Quote Estimator State
  const [calcOrigin, setCalcOrigin] = useState('Manzanillo (MX)');
  const [calcDest, setCalcDest] = useState('Rotterdam (NL)');
  const [calcType, setCalcType] = useState('FCL 40ft High Cube');
  const [calcWeight, setCalcWeight] = useState(18);
  const [quoteCalculated, setQuoteCalculated] = useState(false);

  // Quote Form State
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    empresa: '',
    email: '',
    volumen: 'Mensual (+5 contenedores)',
    mensaje: '',
  });

  const handleQuoteFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
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
      <header className="w-full bg-[#0E131F] border-b border-slate-850 px-4 py-2.5 flex items-center justify-between text-slate-300 shrink-0 z-20">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-[#080B12] border border-slate-800 text-[11px] font-mono-code px-3 py-1 rounded text-slate-400">
            <span className="text-emerald-400">🔒</span>
            <span>https://vectorlogistica.mx/operaciones-b2b</span>
          </div>
        </div>

        {/* Device Mode Switcher */}
        <div className="flex items-center gap-2 bg-[#080B12] p-1 rounded-sm border border-slate-800">
          <button
            onClick={() => setDeviceMode('desktop')}
            className={`px-2.5 py-1 text-[11px] font-mono-code flex items-center gap-1.5 rounded-xs transition ${
              deviceMode === 'desktop'
                ? 'bg-slate-800 text-white font-bold'
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Escritorio</span>
          </button>
          <button
            onClick={() => setDeviceMode('mobile')}
            className={`px-2.5 py-1 text-[11px] font-mono-code flex items-center gap-1.5 rounded-xs transition ${
              deviceMode === 'mobile'
                ? 'bg-slate-800 text-white font-bold'
                : 'text-slate-500 hover:text-slate-300'
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
        className={`w-full flex-1 overflow-y-auto bg-[#070A12] text-slate-100 transition-all duration-300 font-sans relative ${
          deviceMode === 'mobile'
            ? 'max-w-[420px] my-4 rounded-xl border border-slate-800 shadow-2xl overflow-x-hidden'
            : 'max-w-full'
        }`}
      >
        {/* Top Corporate Status Strip */}
        <div className="bg-[#090D18] border-b border-slate-850 px-6 sm:px-12 py-2 text-[10px] font-mono-code text-slate-400 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-slate-300 font-semibold tracking-wider uppercase">
              TORRE DE CONTROL OPERATIVA · 24/7 EN VIVO
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 tracking-wider">
            <span>TERMINAL MANZANILLO: OPERATIVO</span>
            <span className="hidden sm:inline text-slate-650">|</span>
            <span className="hidden sm:inline">ADUANA NUEVO LAREDO: TIEMPO ESTIMADO 42 MIN</span>
            <span className="text-slate-650">|</span>
            <span className="text-amber-400 font-semibold">ISO 9001 / BASC / C-TPAT</span>
          </div>
        </div>

        {/* Site Header */}
        <nav className="sticky top-0 z-30 bg-[#070A12]/90 backdrop-blur-md border-b border-slate-850 px-6 sm:px-12 md:px-20 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-amber-400 text-slate-950 font-black flex items-center justify-center text-xs tracking-tighter rounded-xs">
              V
            </div>
            <div>
              <span className="text-base font-bold tracking-tight text-white block">
                VECTOR <span className="text-amber-400">LOGÍSTICA</span>
              </span>
              <span className="text-[9px] font-mono-code text-slate-500 uppercase tracking-widest block -mt-1">
                INFRAESTRUCTURA & CADENA DE SUMINISTRO B2B
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-xs font-mono-code text-slate-300 uppercase tracking-wider">
            <button
              onClick={() => scrollTo('vector-servicios')}
              className="hover:text-amber-400 transition cursor-pointer"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollTo('vector-rastreador')}
              className="hover:text-amber-400 transition cursor-pointer"
            >
              Rastreo en Vivo
            </button>
            <button
              onClick={() => scrollTo('vector-calculadora')}
              className="hover:text-amber-400 transition cursor-pointer"
            >
              Calculadora
            </button>
            <button
              onClick={() => scrollTo('vector-contacto')}
              className="hover:text-amber-400 transition cursor-pointer"
            >
              Cotización B2B
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo('vector-rastreador')}
              className="border border-slate-750 hover:border-amber-400 text-slate-300 hover:text-white px-3.5 py-1.5 rounded-xs text-xs font-mono-code uppercase transition cursor-pointer flex items-center gap-1.5"
            >
              <Search className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Rastrear Guía</span>
            </button>
            <button
              onClick={() => scrollTo('vector-contacto')}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 px-4 py-1.5 rounded-xs text-xs font-mono-code font-bold uppercase transition cursor-pointer"
            >
              Cotizar Flete
            </button>
          </div>
        </nav>

        {/* =========================================================================
            1. HERO SECTION
        ========================================================================== */}
        <section
          className="relative min-h-[85vh] flex flex-col justify-center px-6 sm:px-12 md:px-20 py-20 bg-cover bg-center overflow-hidden border-b border-slate-850"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(7, 10, 18, 0.95) 0%, rgba(7, 10, 18, 0.85) 50%, rgba(7, 10, 18, 0.6) 100%), url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=85')`,
          }}
        >
          <div className="max-w-4xl space-y-8 relative z-10">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span className="text-[11px] font-mono-code text-amber-300 uppercase tracking-widest font-semibold">
                SISTEMA LOGÍSTICO INTEGRAL DE CLASE MUNDIAL
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              Arquitectura logística que <br />
              conecta México con las <br />
              <span className="text-amber-400">rutas del comercio global.</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
              Coordinamos operaciones aduanales, transporte intermodal y almacenaje fiscalizado
              con precisión milimétrica y monitoreo satelital en tiempo real para las industrias más
              exigentes.
            </p>

            {/* Quick Actions Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollTo('vector-calculadora')}
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold font-mono-code uppercase tracking-wider px-7 py-3.5 rounded-xs transition inline-flex items-center gap-2 shadow-xl cursor-pointer"
              >
                <span>CALCULAR RUTA & TARIFA</span>
                <span>↗</span>
              </button>
              <button
                onClick={() => scrollTo('vector-rastreador')}
                className="bg-slate-900/90 hover:bg-slate-800 text-white text-xs font-mono-code uppercase tracking-wider px-6 py-3.5 rounded-xs transition inline-flex items-center gap-2 border border-slate-700 cursor-pointer"
              >
                <Search className="w-4 h-4 text-amber-400" />
                <span>MONITOREAR ENVÍO ACTIVO</span>
              </button>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono-code">
                  99.8%
                </span>
                <span className="text-[11px] font-mono-code text-slate-400 uppercase tracking-wider block">
                  Puntualidad de Entrega
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono-code">
                  +42
                </span>
                <span className="text-[11px] font-mono-code text-slate-400 uppercase tracking-wider block">
                  Países Conectados
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono-code">
                  1.4M
                </span>
                <span className="text-[11px] font-mono-code text-slate-400 uppercase tracking-wider block">
                  Tons. Movilizadas/Año
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono-code">
                  24/7
                </span>
                <span className="text-[11px] font-mono-code text-slate-400 uppercase tracking-wider block">
                  Torre de Telemetría
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. REAL-TIME SHIPMENT TRACKER (INTERACTIVE)
        ========================================================================== */}
        <section id="vector-rastreador" className="py-20 px-6 sm:px-12 md:px-20 bg-[#0A0E1A] border-b border-slate-850">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono-code text-amber-400 uppercase tracking-widest font-bold">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span>MÓDULO DE SEGUIMIENTO SATELITAL</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Rastreo en tiempo real de operaciones
                </h2>
              </div>
              <p className="text-xs text-slate-400 font-light max-w-sm leading-relaxed">
                Ingresa tu número de guía o selecciona uno de nuestros despachos activos de prueba
                para consultar telemetría, estatus aduanal y tiempo estimado de llegada.
              </p>
            </div>

            {/* Quick Sample Selector */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono-code text-slate-400 mr-2">Cargar guías muestra:</span>
              {Object.keys(sampleShipments).map((code) => (
                <button
                  key={code}
                  onClick={() => {
                    setTrackingCode(code);
                    setActiveShipment(sampleShipments[code]);
                  }}
                  className={`px-3 py-1 text-xs font-mono-code rounded-xs transition cursor-pointer ${
                    activeShipment?.id === code
                      ? 'bg-amber-400 text-slate-950 font-bold'
                      : 'bg-slate-850 hover:bg-slate-800 text-slate-300 border border-slate-750'
                  }`}
                >
                  {code} ({sampleShipments[code].mode})
                </button>
              ))}
            </div>

            {/* Search Input Bar */}
            <form onSubmit={handleTrackSubmit} className="flex flex-col sm:flex-row gap-2 max-w-3xl">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  value={trackingCode}
                  onChange={(e) => setTrackingCode(e.target.value)}
                  placeholder="Ingresa código de seguimiento (ej. VEC-8924-MX)"
                  className="w-full bg-[#101626] border border-slate-750 pl-11 pr-4 py-3.5 text-xs font-mono-code text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-400 rounded-xs"
                />
              </div>
              <button
                type="submit"
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold font-mono-code text-xs uppercase px-7 py-3.5 rounded-xs transition cursor-pointer"
              >
                CONSULTAR GUÍA ↗
              </button>
            </form>

            {/* Shipment Result Panel */}
            {activeShipment && (
              <div className="bg-[#101524] border border-slate-750 rounded-xs p-6 sm:p-8 space-y-6 shadow-2xl">
                {/* Header status */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono-code text-slate-400 uppercase tracking-widest block">
                      CÓDIGO DE CARGA: <span className="text-white font-bold">{activeShipment.id}</span>
                    </span>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      {activeShipment.client}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono-code bg-slate-800 text-slate-300 px-3 py-1 rounded-xs flex items-center gap-1.5 border border-slate-700">
                      {activeShipment.mode === 'MARÍTIMO' && <Ship className="w-3.5 h-3.5 text-amber-400" />}
                      {activeShipment.mode === 'AÉREO' && <Plane className="w-3.5 h-3.5 text-sky-400" />}
                      {activeShipment.mode === 'TERRESTRE' && <Truck className="w-3.5 h-3.5 text-emerald-400" />}
                      <span>TRANSPORTE {activeShipment.mode}</span>
                    </span>

                    <span
                      className={`text-xs font-mono-code font-bold px-3 py-1 rounded-xs flex items-center gap-1.5 ${
                        activeShipment.status === 'EN TRÁNSITO'
                          ? 'bg-amber-400 text-slate-950'
                          : activeShipment.status === 'ADUANA LIBERADA'
                          ? 'bg-emerald-400 text-slate-950'
                          : 'bg-sky-400 text-slate-950'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                      <span>{activeShipment.status}</span>
                    </span>
                  </div>
                </div>

                {/* Route visualization */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono-code text-slate-400 uppercase block">PUNTO DE ORIGEN</span>
                        <span className="text-sm font-semibold text-white">{activeShipment.origin}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-amber-400/20 border border-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono-code text-amber-400 uppercase block">DESTINO FINAL ESTIMADO</span>
                        <span className="text-sm font-semibold text-white">{activeShipment.destination}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#090D18] p-4 rounded-xs border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono-code">
                      <span className="text-slate-400">Progreso del trayecto:</span>
                      <span className="text-amber-400 font-bold">{activeShipment.progress}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-700"
                        style={{ width: `${activeShipment.progress}%` }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono-code text-slate-400 pt-1">
                      <span>ETA:</span>
                      <span className="text-slate-200 font-bold">{activeShipment.eta}</span>
                    </div>

                    <div className="text-[11px] font-mono-code text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 p-2.5 rounded-xs mt-2 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 shrink-0" />
                      <span>{activeShipment.lastUpdate}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* =========================================================================
            3. LOGISTICS CAPABILITIES / SERVICIOS
        ========================================================================== */}
        <section id="vector-servicios" className="py-24 px-6 sm:px-12 md:px-20 bg-[#070A12] border-b border-slate-850">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono-code text-amber-400 uppercase tracking-widest font-bold">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>CAPACIDADES INDUSTRIALES & B2B</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Infraestructura modal para cada requerimiento
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-light max-w-xl">
                Soluciones integradas con custodia satelital, despachos aduanales automatizados
                y depósitos fiscalizados en los principales corredores del país.
              </p>
            </div>

            {/* Service Filter Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
              {[
                { id: 'maritimo', label: 'TRANSPORTE MARÍTIMO (FCL / LCL)', icon: Ship },
                { id: 'terrestre', label: 'FLOTA TERRESTRE INTERMODAL', icon: Truck },
                { id: 'aereo', label: 'CARGA AÉREA CRÍTICA & CHARTER', icon: Plane },
                { id: 'aduanas', label: 'AGENCIA ADUANAL & COMPLIANCE', icon: ShieldCheck },
              ].map((tab) => {
                const IconComponent = tab.icon;
                const isCurrent = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-4 py-2 text-xs font-mono-code uppercase rounded-xs transition flex items-center gap-2 cursor-pointer ${
                      isCurrent
                        ? 'bg-amber-400 text-slate-950 font-bold shadow-md'
                        : 'bg-[#101524] text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Details Content */}
            <div className="bg-[#0D1220] border border-slate-800 rounded-xs p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center shadow-xl">
              <div className="space-y-6">
                {activeTab === 'maritimo' && (
                  <>
                    <span className="text-[10px] font-mono-code text-amber-400 uppercase tracking-widest font-bold">
                      01 // PUERTOS DEL PACÍFICO Y GOLFO
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      Rutas de Contenedor Completo (FCL) y Consolidado (LCL)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      Alianzas prioritarias con las principales navieras globales (Maersk, MSC, CMA CGM, Hapag-Lloyd)
                      con espacios garantizados en temporadas altas desde Shanghái, Ningbo, Busan hacia Manzanillo y Lázaro Cárdenas.
                    </p>
                    <ul className="space-y-2 text-xs font-mono-code text-slate-300">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Monitoreo de temperatura en contenedores Reefer Pharma</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Desconsolidación express en recintos portuarios</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Días libres de demora negociados por contrato</span>
                      </li>
                    </ul>
                  </>
                )}

                {activeTab === 'terrestre' && (
                  <>
                    <span className="text-[10px] font-mono-code text-amber-400 uppercase tracking-widest font-bold">
                      02 // CONEXIÓN TRANSFRONTERIZA US-MX-CA
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      Flota Propia con Custodia Armada & C-TPAT
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      Unidades tractocamión modelo 2024-2026 equipadas con doble candado satelital, sensor
                      de apertura de puertas y botón de pánico enlazado directamente a C5 y Policía Federal.
                    </p>
                    <ul className="space-y-2 text-xs font-mono-code text-slate-300">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Cruce fronterizo FAST vía Nuevo Laredo, Colombia y Tijuana</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Caja seca 53 pies, plataforma y sobredimensión</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Pólizas de seguro todo riesgo con cobertura puerta a puerta</span>
                      </li>
                    </ul>
                  </>
                )}

                {activeTab === 'aereo' && (
                  <>
                    <span className="text-[10px] font-mono-code text-amber-400 uppercase tracking-widest font-bold">
                      03 // CARGA TIME-CRITICAL & CHARTER
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      Vuelos Fletados y Envíos de Emergencia AOG
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      Cuando cada hora de paro de línea cuesta millones, nuestro servicio Next-Flight-Out
                      moviliza componentes críticos automotrices y aeroespaciales en menos de 24 horas transcontinentales.
                    </p>
                    <ul className="space-y-2 text-xs font-mono-code text-slate-300">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>On-Board Courier (OBC) con custodia física personalizada</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Manejo de mercancías peligrosas IMO/DGR IATA certificadas</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Conexión directa en AICM, AIFA, GDL y MTY</span>
                      </li>
                    </ul>
                  </>
                )}

                {activeTab === 'aduanas' && (
                  <>
                    <span className="text-[10px] font-mono-code text-amber-400 uppercase tracking-widest font-bold">
                      04 // DERECHO ADUANERO & COMPLIANCE
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      Patente Aduanal Propia con Cero Incidencias
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      Garantizamos cumplimiento absoluto de regulaciones no arancelarias (NOMs, COFEPRIS, SEDENA)
                      y optimización fiscal bajo esquemas IMMEX, PROSEC y Regla Octava.
                    </p>
                    <ul className="space-y-2 text-xs font-mono-code text-slate-300">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Validación y preclasificación arancelaria en menos de 2 horas</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Auditorías preventivas de expediente de comercio exterior</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Gestión de pedimentos consolidados y virtuales</span>
                      </li>
                    </ul>
                  </>
                )}

                <button
                  onClick={() => scrollTo('vector-contacto')}
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold font-mono-code text-xs uppercase px-6 py-3 rounded-xs transition inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>SOLICITAR ASIGNACIÓN DE CUENTA B2B</span>
                  <span>↗</span>
                </button>
              </div>

              {/* Service Visual Preview */}
              <div className="relative aspect-4/3 rounded-xs overflow-hidden border border-slate-750 bg-slate-900 shadow-2xl">
                <img
                  src={
                    activeTab === 'maritimo'
                      ? 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80'
                      : activeTab === 'terrestre'
                      ? 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80'
                      : activeTab === 'aereo'
                      ? 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80'
                      : 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
                  }
                  alt="Operación Logística Vector"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-xs p-3 rounded-xs border border-slate-800 text-[11px] font-mono-code text-slate-300 flex items-center justify-between">
                  <span className="text-amber-400 font-bold">OPERACIÓN CERTIFICADA</span>
                  <span>SLO // CDMX 2026</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. ROUTE & FREIGHT CALCULATOR (INTERACTIVE ESTIMATOR)
        ========================================================================== */}
        <section id="vector-calculadora" className="py-24 px-6 sm:px-12 md:px-20 bg-[#0A0E1A] border-b border-slate-850">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono-code text-amber-400 uppercase tracking-widest font-bold">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>HERRAMIENTA DIGITAL INTERACTIVA</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Cotizador referencial de fletes y rutas
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-light max-w-xl">
                Simula los costos base, tiempo de tránsito y compensación de huella de carbono
                para tus principales corredores comerciales.
              </p>
            </div>

            <div className="bg-[#101524] border border-slate-750 p-6 sm:p-8 rounded-xs space-y-6 shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Origin */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono-code text-slate-400 uppercase">
                    1. Origen de Embarque
                  </label>
                  <select
                    value={calcOrigin}
                    onChange={(e) => setCalcOrigin(e.target.value)}
                    className="w-full bg-[#080C16] border border-slate-750 px-3.5 py-3 text-xs font-mono-code text-white rounded-xs focus:outline-hidden focus:border-amber-400"
                  >
                    <option value="Manzanillo (MX)">Puerto de Manzanillo (MX)</option>
                    <option value="Veracruz (MX)">Puerto de Veracruz (MX)</option>
                    <option value="Nuevo Laredo (MX/US)">Terminal Nuevo Laredo (MX/US)</option>
                    <option value="Shanghái (CN)">Puerto de Shanghái (CN)</option>
                    <option value="Hamburgo (DE)">Puerto de Hamburgo (DE)</option>
                  </select>
                </div>

                {/* Destination */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono-code text-slate-400 uppercase">
                    2. Destino de Entrega
                  </label>
                  <select
                    value={calcDest}
                    onChange={(e) => setCalcDest(e.target.value)}
                    className="w-full bg-[#080C16] border border-slate-750 px-3.5 py-3 text-xs font-mono-code text-white rounded-xs focus:outline-hidden focus:border-amber-400"
                  >
                    <option value="Rotterdam (NL)">Puerto de Rotterdam (NL)</option>
                    <option value="Long Beach (US)">Puerto de Long Beach (US)</option>
                    <option value="CDMX / Valle de México">CDMX / Valle de México</option>
                    <option value="Monterrey (MX)">Monterrey / Corredor Norte (MX)</option>
                    <option value="Bogotá (CO)">Bogotá / El Dorado (CO)</option>
                  </select>
                </div>

                {/* Cargo Type */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono-code text-slate-400 uppercase">
                    3. Modalidad de Carga
                  </label>
                  <select
                    value={calcType}
                    onChange={(e) => setCalcType(e.target.value)}
                    className="w-full bg-[#080C16] border border-slate-750 px-3.5 py-3 text-xs font-mono-code text-white rounded-xs focus:outline-hidden focus:border-amber-400"
                  >
                    <option value="FCL 40ft High Cube">FCL 40ft High Cube (Marítimo)</option>
                    <option value="FCL 20ft Standard">FCL 20ft Standard (Marítimo)</option>
                    <option value="Caja Seca 53ft (Terrestre)">Caja Seca 53ft (Terrestre)</option>
                    <option value="Pallet Aéreo Express">Pallet Aéreo Express (Time-Critical)</option>
                  </select>
                </div>
              </div>

              {/* Weight Slider */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-xs font-mono-code">
                  <span className="text-slate-400">Peso Bruto Estimado:</span>
                  <span className="text-amber-400 font-bold">{calcWeight} Toneladas Métricas</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="28"
                  value={calcWeight}
                  onChange={(e) => setCalcWeight(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setQuoteCalculated(true)}
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold font-mono-code text-xs uppercase px-6 py-3 rounded-xs transition cursor-pointer"
                >
                  CALCULAR ESTIMACIÓN DE FLETE ↗
                </button>
              </div>

              {/* Calculation Result Breakdown */}
              {quoteCalculated && (
                <div className="bg-[#090D18] border border-amber-400/50 p-6 rounded-xs space-y-4 animate-in fade-in">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono-code text-amber-400 font-bold uppercase">
                      PROYECCIÓN LOGÍSTICA ESTIMADA
                    </span>
                    <span className="text-[11px] font-mono-code text-slate-400">
                      Ruta: {calcOrigin} ➔ {calcDest}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-[#121828] p-4 rounded-xs border border-slate-800 space-y-1">
                      <span className="text-[10px] font-mono-code text-slate-400 uppercase block">
                        TARIFA REFERENCIAL BASE
                      </span>
                      <span className="text-2xl font-bold text-white font-mono-code">
                        ${(calcWeight * 180 + 2450).toLocaleString()} USD
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono-code block">
                        + IVA / Derechos portuarios
                      </span>
                    </div>

                    <div className="bg-[#121828] p-4 rounded-xs border border-slate-800 space-y-1">
                      <span className="text-[10px] font-mono-code text-slate-400 uppercase block">
                        TIEMPO DE TRÁNSITO
                      </span>
                      <span className="text-2xl font-bold text-amber-400 font-mono-code">
                        {calcType.includes('Aéreo') ? '24 - 48 hrs' : '16 - 21 días'}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono-code block">
                        Puerto a Puerto garantizado
                      </span>
                    </div>

                    <div className="bg-[#121828] p-4 rounded-xs border border-slate-800 space-y-1">
                      <span className="text-[10px] font-mono-code text-slate-400 uppercase block">
                        HUELLA DE CARBONO (CO₂)
                      </span>
                      <span className="text-2xl font-bold text-emerald-400 font-mono-code">
                        -14.2%
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono-code block">
                        Ruta optimizada con bio-fuel
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                    <p className="text-[11px] text-slate-400">
                      * Tarifas sujetas a confirmación según volumen de contrato y fecha de corte naviero.
                    </p>
                    <button
                      onClick={() => scrollTo('vector-contacto')}
                      className="bg-slate-800 hover:bg-slate-750 text-white border border-slate-700 px-4 py-2 text-xs font-mono-code uppercase rounded-xs transition cursor-pointer"
                    >
                      Formalizar propuesta contractual ↗
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. ENTERPRISE B2B QUOTE FORM (INTERACTIVE CONTACT)
        ========================================================================== */}
        <section id="vector-contacto" className="py-24 px-6 sm:px-12 md:px-20 bg-[#070A12]">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono-code text-amber-400 uppercase tracking-widest font-bold">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>ATENCIÓN A CUENTAS CORPORATIVAS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Iniciar conversación con un Director de Operaciones
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-light">
                Asignamos un ejecutivo de cuenta senior y un especialista aduanal para auditar
                tu cadena de suministro sin costo inicial.
              </p>
            </div>

            {quoteSubmitted ? (
              <div className="bg-[#10172A] border border-amber-400/60 p-8 rounded-xs space-y-4 shadow-2xl">
                <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white">
                  ¡Solicitud corporativa recibida con éxito!
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed max-w-lg">
                  Hemos registrado la solicitud de <span className="text-amber-400 font-bold">{quoteForm.empresa || 'tu empresa'}</span>.
                  Un Director de Cuentas B2B de VECTOR se comunicará al correo {quoteForm.email} en menos de 2 horas hábiles con el análisis preliminar de ruta.
                </p>
                <button
                  onClick={() => setQuoteSubmitted(false)}
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold font-mono-code text-xs uppercase px-5 py-2.5 rounded-xs transition cursor-pointer"
                >
                  ENVIAR NUEVA CONSULTA
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuoteFormSubmit} className="bg-[#0E1322] border border-slate-750 p-6 sm:p-8 rounded-xs space-y-4 shadow-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono-code text-slate-400 uppercase">
                      Razón Social o Empresa *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Industrias del Bajío S.A. de C.V."
                      value={quoteForm.empresa}
                      onChange={(e) => setQuoteForm({ ...quoteForm, empresa: e.target.value })}
                      className="w-full bg-[#080B14] border border-slate-750 px-4 py-3 text-xs font-mono-code text-white placeholder-slate-600 focus:outline-hidden focus:border-amber-400 rounded-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono-code text-slate-400 uppercase">
                      Correo Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="logistica@tuempresa.com"
                      value={quoteForm.email}
                      onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                      className="w-full bg-[#080B14] border border-slate-750 px-4 py-3 text-xs font-mono-code text-white placeholder-slate-600 focus:outline-hidden focus:border-amber-400 rounded-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono-code text-slate-400 uppercase">
                    Volumen de Movimiento Estimado
                  </label>
                  <select
                    value={quoteForm.volumen}
                    onChange={(e) => setQuoteForm({ ...quoteForm, volumen: e.target.value })}
                    className="w-full bg-[#080B14] border border-slate-750 px-4 py-3 text-xs font-mono-code text-white focus:outline-hidden focus:border-amber-400 rounded-xs"
                  >
                    <option value="Mensual (+5 contenedores)">Mensual (+5 contenedores FCL)</option>
                    <option value="Mensual (+20 contenedores)">Alto Volumen (+20 contenedores FCL)</option>
                    <option value="Embarque Único / Proyecto">Embarque Único / Carga de Proyecto</option>
                    <option value="Auditoría Aduanal Integral">Auditoría Aduanal Integral & IMMEX</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono-code text-slate-400 uppercase">
                    Detalles de la Operación
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe los puertos/fronteras de interés, tipo de mercancía y requerimientos especiales de cadena de frío o custodia..."
                    value={quoteForm.mensaje}
                    onChange={(e) => setQuoteForm({ ...quoteForm, mensaje: e.target.value })}
                    className="w-full bg-[#080B14] border border-slate-750 px-4 py-3 text-xs font-mono-code text-white placeholder-slate-600 focus:outline-hidden focus:border-amber-400 rounded-xs resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold font-mono-code text-xs uppercase py-3.5 rounded-xs transition cursor-pointer shadow-lg"
                >
                  SOLICITAR PROPUESTA B2B ↗
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Corporate Footer */}
        <footer className="py-12 px-6 sm:px-12 md:px-20 bg-[#04060B] border-t border-slate-850 text-slate-500 text-xs font-mono-code">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-amber-400 text-slate-950 font-black flex items-center justify-center text-[10px] rounded-xs">
                V
              </div>
              <span className="font-bold text-slate-300 tracking-wider">
                VECTOR LOGÍSTICA S.A.P.I. DE C.V.
              </span>
            </div>
            <div className="text-center sm:text-left text-[11px] space-y-0.5">
              <div>© 2026 VECTOR. Infraestructura y logística B2B.</div>
              <div className="text-slate-600">Torre de Control Polanco, Ciudad de México.</div>
            </div>
            <div className="flex items-center gap-4 text-[11px] text-slate-400">
              <span className="hover:text-white cursor-pointer">BASC Cert. #MX-8902</span>
              <span>·</span>
              <span className="hover:text-white cursor-pointer">C-TPAT Validated</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
