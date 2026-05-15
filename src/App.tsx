import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram,
  Youtube, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  ChevronDown,
  Hammer,
  PaintRoller,
  Layers,
  UtensilsCrossed,
  Bath,
  Building,
  Home,
  Lightbulb,
  Truck,
  User,
  CalendarDays,
  Folder,
  MessageCircle,
  Linkedin,
  Clock,
  ShieldCheck,
  Star,
  Handshake,
  Award,
  HardHat,
  ThumbsUp,
  Briefcase,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SEOMetadata = ({ 
  title, 
  description, 
  image = "http://carlosv161.sg-host.com/wp-content/uploads/2026/04/reforma-salon-lujo-interiorismo-burgos.jpg.png",
  faqs
}: { 
  title: string, 
  description: string, 
  image?: string,
  faqs?: { q: string, a: string }[] 
}) => {
  useEffect(() => {
    document.title = title;
    
    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Open Graph
    const setOgTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);
    };

    setOgTag('og:title', title);
    setOgTag('og:description', description);
    if (image) setOgTag('og:image', image);

    // JSON-LD Schema for FAQs
    let schemaScript = document.getElementById('seo-dynamic-faq-schema');
    if (faqs && faqs.length > 0) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        schemaScript.id = 'seo-dynamic-faq-schema';
        document.head.appendChild(schemaScript);
      }
      const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      };
      schemaScript.textContent = JSON.stringify(schemaData);
    } else if (schemaScript) {
      schemaScript.remove();
    }
    
  }, [title, description, image, faqs]);

  return null;
};

const FlipProjectCard = ({ img, title }: { img: string, title: string }) => {
  return (
    <div 
      className="group relative w-full h-[350px] cursor-pointer" 
      style={{ perspective: '1000px' }}
    >
      <div 
        className="relative w-full h-full transition-transform duration-700 group-hover:[transform:rotateY(180deg)]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 w-full h-full rounded-xl shadow-sm overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 w-full h-full rounded-xl overflow-hidden bg-[#1A3F5C] flex items-center justify-center p-6 text-center shadow-lg"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)' 
          }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url('${img}')` }}
          />
          <div className="absolute inset-0 bg-black/50" />
          
          <h4 className="relative z-10 text-2xl font-sans font-medium text-white leading-tight">
            {title}
          </h4>
        </div>
      </div>
    </div>
  );
};

const CocinasSEOPage = ({ activeDetail, setCurrentPage, setActiveDetail }: any) => {
  return (
    <div className="w-full bg-[#F6F5F0] font-sans pb-24 min-h-screen">
      <SEOMetadata 
        title={`${activeDetail.title} | Burgos Reformas Integrales`}
        description={activeDetail.desc}
        image={activeDetail.img}
        faqs={activeDetail.faqs}
      />
      {/* Detail Hero - H1 SEO Optimized */}
      <section className="relative h-[400px] md:h-[500px] flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <img src={activeDetail.img} className="absolute inset-0 w-full h-full object-cover z-0" alt="Reforma de Cocinas en Burgos" />
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <button 
            onClick={() => { setActiveDetail(null); window.scrollTo(0,0); }}
            className="flex items-center gap-2 text-white/70 hover:text-[#D4A017] mb-6 transition-colors uppercase text-xs md:text-sm tracking-wider font-semibold"
          >
           <ChevronLeft size={20} /> Volver a Servicios
          </button>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif mb-4 drop-shadow-lg leading-tight">
            Reforma de Cocinas en Burgos <br/><span className="text-[#D4A017] text-3xl md:text-4xl">Diseño 3D, Encimeras Premium y Montaje Rápido</span>
          </h1>
          <div className="w-24 h-1 bg-[#D4A017]" />
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 lg:px-8 max-w-[1100px] mt-16 md:mt-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-2/3 space-y-16">
            
            <section>
              <h2 className="text-3xl text-[#1A3F5C] font-serif mb-8 border-b border-gray-200 pb-4">
                ¿Qué nos diferencia al fabricar e instalar tu nueva cocina?
              </h2>
              
              {/* Block 1 */}
              <div className="mb-12">
                <h3 className="text-2xl text-[#1A3F5C] font-serif mb-4 flex items-center gap-3">
                  <Star className="text-[#D4A017]" size={28} />
                  Materiales resistentes al uso diario e intensivo
                </h3>
                <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800" alt="Materiales y Encimeras Premium Burgos" className="w-full h-64 object-cover rounded-xl shadow-md mb-6" />
                <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                  <p>La cocina es el corazón de la casa y el espacio que soporta el mayor desgaste. No puedes conformarte con materiales de ferretería básica que se hinchan con la humedad al primer año. En nuestras <strong>reformas de cocinas en Burgos</strong>, trabajamos exclusivamente con herrajes europeos de alta resistencia (como Blum o Hettich) garantizando durabilidad de por vida en aperturas y cierres.</p>
                  <p>Para la zona de trabajo, instalamos encimeras porcelánicas o de cuarzo compacto (marcas top como <strong>Silestone, Dekton o Neolith</strong>). Estos materiales repelen las manchas de aceite, resisten directamente el calor de las sartenes y no se rayan, manteniendo un aspecto de primer día de forma indefinida.</p>
                </div>
              </div>

              {/* Block 2 */}
              <div className="mb-12">
                <h3 className="text-2xl text-[#1A3F5C] font-serif mb-4 flex items-center gap-3">
                  <Lightbulb className="text-[#D4A017]" size={28} />
                  Distribución inteligente: Cocinas abiertas integradas al salón
                </h3>
                <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                  <p>La tendencia moderna demanda espacios diáfanos y muy luminosos. Si estás pensando en tirar tabiques para <strong>unir tu cocina con el salón</strong>, nuestro equipo técnico evalúa la estructura de tu vivienda para realizarlo con total seguridad técnica y arquitectónica.</p>
                  <p>Diseñamos espectaculares islas centrales o penínsulas, asegurando una correcta extracción de humos con campanas integradas de alta potencia para evitar olores en el resto del hogar. Ganarás luz, amplitud y una zona de vida familiar muchísimo más fluida.</p>
                </div>
              </div>

              {/* Block 3 */}
              <div className="mb-12">
                <h3 className="text-2xl text-[#1A3F5C] font-serif mb-4 flex items-center gap-3">
                  <ShieldCheck className="text-[#D4A017]" size={28} />
                  Alicatado impecable y renovación de fontanería oculta
                </h3>
                <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                  <p>Una reforma bien hecha debe ser tan perfecta por fuera como por dentro. Al renovar tu cocina, no solo instalamos muebles bonitos; sustituimos toda la fontanería y tomas eléctricas antiguas para adaptarlas a la estricta <strong>normativa actual del Ayuntamiento de Burgos</strong>. Evitarás futuras averías por tuberías deterioradas escondidas en las paredes.</p>
                  <p>Trabajamos, además, con cerámicas porcelánicas rectificadas o incluso revestimientos de microcemento si deseas evitar por completo las juntas visuales.</p>
                </div>
              </div>
            </section>

            {/* Uniform Conversion Block */}
            <section className="bg-[#1A3F5C] text-white p-8 md:p-12 rounded-xl shadow-xl mt-12 mb-8 text-center">
              <h2 className="text-3xl font-serif mb-4">Descubre nuestras últimas obras en Burgos</h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                No hay mejor prueba de nuestro trabajo que los resultados reales. Explora nuestra galería de proyectos y comprueba el nivel de acabados y el cuidado por el detalle que aplicamos en cada reforma.
              </p>
              <button 
                onClick={() => { setCurrentPage('projects'); window.scrollTo(0,0); }}
                className="bg-[#D4A017] hover:bg-white hover:text-[#1A3F5C] text-white px-8 py-4 font-bold transition-colors uppercase tracking-widest text-sm shadow-md rounded-sm inline-block"
              >
                Consultar Proyectos
              </button>
            </section>

          </div>
          
          <div className="lg:w-1/3">
             <div className="bg-[#1A3F5C] p-8 md:p-10 sticky top-32 shadow-2xl rounded-xl">
               <h3 className="text-2xl font-serif mb-6 text-white text-center">¿Hablamos de tu presupuesto?</h3>
               <p className="text-white/80 mb-8 font-light text-center leading-relaxed">Obtén un análisis técnico gratuito y una valoración económica detallada para tu proyecto en Burgos.</p>
               <button 
                 onClick={() => { setCurrentPage('presupuestos'); window.scrollTo(0,0); }}
                 className="w-full bg-[#D4A017] hover:bg-white hover:text-[#1A3F5C] text-white px-6 py-4 font-bold transition-colors uppercase tracking-widest text-sm shadow-md rounded-sm"
               >
                 Solicitar Presupuesto
               </button>
             </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-20 pt-16 border-t border-gray-200" id="faqs">
          <h2 className="text-3xl text-[#1A3F5C] font-serif mb-12 text-center">Preguntas Frecuentes sobre {activeDetail.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {activeDetail.faqs.map((faq: any, i: number) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-bold text-[#1A3F5C] mb-4 flex items-start gap-3"><span className="text-[#D4A017] flex-shrink-0">P.</span>{faq.q}</h4>
                <p className="text-gray-600 leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const BanosSEOPage = ({ activeDetail, setCurrentPage, setActiveDetail }: any) => {
  return (
    <div className="w-full bg-[#F6F5F0] font-sans pb-24 min-h-screen">
      <SEOMetadata 
        title={`${activeDetail.title} | Burgos Reformas Integrales`}
        description={activeDetail.desc}
        image={activeDetail.img}
        faqs={activeDetail.faqs}
      />
      {/* Detail Hero - H1 SEO Optimized */}
      <section className="relative h-[400px] md:h-[500px] flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <img src={activeDetail.img} className="absolute inset-0 w-full h-full object-cover z-0" alt="Reforma de Baños en Burgos" />
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <button onClick={() => { setActiveDetail(null); window.scrollTo(0,0); }} className="flex items-center gap-2 text-white/70 hover:text-[#D4A017] mb-6 transition-colors uppercase text-xs md:text-sm tracking-wider font-semibold"><ChevronLeft size={20} /> Volver a Servicios</button>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif mb-4 drop-shadow-lg leading-tight">
            Reforma de Baños en Burgos <br/><span className="text-[#D4A017] text-3xl md:text-4xl">Cambio de Bañera por Ducha en 48h</span>
          </h1>
          <div className="w-24 h-1 bg-[#D4A017]" />
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 lg:px-8 max-w-[1100px] mt-16 md:mt-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-2/3 space-y-16">
            
            <section>
              <h2 className="text-3xl text-[#1A3F5C] font-serif mb-8 border-b border-gray-200 pb-4">
                Soluciones integrales para cuartos de baño modernos
              </h2>
              
              <div className="mb-12">
                <h3 className="text-2xl text-[#1A3F5C] font-serif mb-4 flex items-center gap-3"><ShieldCheck className="text-[#D4A017]" size={28} />Impermeabilización total: Olvídate de humedades</h3>
                <img src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800" alt="Platos de ducha y baños Burgos" className="w-full h-64 object-cover rounded-xl shadow-md mb-6" />
                <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                  <p>El mayor temor en la reforma de un cuarto de baño húmedo es que las filtraciones arruinen el trabajo a los pocos meses o generen goteras al vecino. Nosotros solucionamos este problema de raíz instalando modernas láminas protectoras asfálticas o líquidas antes del plato de ducha y debajo de los azulejos. Es una barrera 100% estanca que asegura una tranquilidad absoluta a largo plazo en Burgos.</p>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl text-[#1A3F5C] font-serif mb-4 flex items-center gap-3"><CheckCircle2 className="text-[#D4A017]" size={28} />Accesibilidad máxima y cambio rápido de bañera</h3>
                <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                  <p>Si tu vieja bañera se ha vuelto incómoda o peligrosa, realizamos el <strong>cambio de bañera por plato de ducha</strong> de resina extrafina en un plazo récord (habitualmente 48 a 72 horas). Trabajamos con platos enrasados y antideslizantes de máxima calidad (clase 3) para evitar caídas y asegurar la máxima comodidad de todos los miembros de la familia.</p>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl text-[#1A3F5C] font-serif mb-4 flex items-center gap-3"><Star className="text-[#D4A017]" size={28} />Sanitarios suspendidos y grifería eficiente</h3>
                <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                  <p>A nivel de acabados, si quieres el aspecto de un "hotel de 5 estrellas", instalamos potentes cisternas empotradas (Geberit) para disfrutar de sanitarios suspendidos en la pared. Este sistema no solo amplía visualmente los cuartos pequeños, sino que hace muy fácil fregar el suelo.</p>
                  <p>Además, montamos grifería termostática y columnas de lluvia empotradas en pared de alta eficiencia, pensadas para mantener la temperatura y maximizar el ahorro frente a las constantes caídas de temperatura de las tuberías en otoño e invierno.</p>
                </div>
              </div>
            </section>

            {/* Uniform Conversion Block */}
            <section className="bg-[#1A3F5C] text-white p-8 md:p-12 rounded-xl shadow-xl mt-12 mb-8 text-center">
              <h2 className="text-3xl font-serif mb-4">Descubre nuestras últimas obras en Burgos</h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                No hay mejor prueba de nuestro trabajo que los resultados reales. Explora nuestra galería de proyectos y comprueba el nivel de acabados y el cuidado por el detalle que aplicamos en cada reforma.
              </p>
              <button 
                onClick={() => { setCurrentPage('projects'); window.scrollTo(0,0); }}
                className="bg-[#D4A017] hover:bg-white hover:text-[#1A3F5C] text-white px-8 py-4 font-bold transition-colors uppercase tracking-widest text-sm shadow-md rounded-sm inline-block"
              >
                Consultar Proyectos
              </button>
            </section>

          </div>
          
          <div className="lg:w-1/3">
             <div className="bg-[#1A3F5C] p-8 md:p-10 sticky top-32 shadow-2xl rounded-xl">
               <h3 className="text-2xl font-serif mb-6 text-white text-center">¿Hablamos de tu presupuesto?</h3>
               <p className="text-white/80 mb-8 font-light text-center leading-relaxed">Obtén un análisis técnico gratuito y una valoración económica detallada para tu proyecto en Burgos.</p>
               <button 
                 onClick={() => { setCurrentPage('presupuestos'); window.scrollTo(0,0); }}
                 className="w-full bg-[#D4A017] hover:bg-white hover:text-[#1A3F5C] text-white px-6 py-4 font-bold transition-colors uppercase tracking-widest text-sm shadow-md rounded-sm"
               >
                 Solicitar Presupuesto
               </button>
             </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-20 pt-16 border-t border-gray-200" id="faqs">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": activeDetail.faqs.map((faq: any) => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } })) }) }} />
          <h2 className="text-3xl text-[#1A3F5C] font-serif mb-12 text-center">Preguntas Frecuentes sobre {activeDetail.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {activeDetail.faqs.map((faq: any, i: number) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-bold text-[#1A3F5C] mb-4 flex items-start gap-3"><span className="text-[#D4A017] flex-shrink-0">P.</span>{faq.q}</h4>
                <p className="text-gray-600 leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SuelosSEOPage = ({ activeDetail, setCurrentPage, setActiveDetail }: any) => {
  return (
    <div className="w-full bg-[#F6F5F0] font-sans pb-24 min-h-screen">
      <SEOMetadata 
        title={`${activeDetail.title} | Burgos Reformas Integrales`}
        description={activeDetail.desc}
        image={activeDetail.img}
        faqs={activeDetail.faqs}
      />
      <section className="relative h-[400px] md:h-[500px] flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <img src={activeDetail.img} className="absolute inset-0 w-full h-full object-cover z-0" alt="Instalación de suelos laminados y parqué en Burgos" />
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <button onClick={() => { setActiveDetail(null); window.scrollTo(0,0); }} className="flex items-center gap-2 text-white/70 hover:text-[#D4A017] mb-6 transition-colors uppercase text-xs md:text-sm tracking-wider font-semibold"><ChevronLeft size={20} /> Volver a Servicios</button>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif mb-4 drop-shadow-lg leading-tight">
            Suelos y Parqué en Burgos <br/><span className="text-[#D4A017] text-3xl md:text-4xl">Acuchillado, Tarimas y Suelos SPC</span>
          </h1>
          <div className="w-24 h-1 bg-[#D4A017]" />
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 max-w-[1100px] mt-16 md:mt-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-2/3 space-y-16">
            
            <section>
              <h2 className="text-3xl text-[#1A3F5C] font-serif mb-8 border-b border-gray-200 pb-4">
                Renueva la pisada de tu hogar con la máxima calidez
              </h2>
              
              <div className="mb-12">
                <h3 className="text-2xl text-[#1A3F5C] font-serif mb-4 flex items-center gap-3"><ShieldCheck className="text-[#D4A017]" size={28} />Suelos vinílicos SPC para Cocinas y Baños</h3>
                <img src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=800" alt="Suelos de madera y vinilos Burgos" className="w-full h-64 object-cover rounded-xl shadow-md mb-6" />
                <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                  <p>La tecnología ha revolucionado el diseño interior. Hoy instalamos <strong>suelos vinílicos SPC</strong> (compuesto de piedra) ultrarresistentes que imitan a la perfección la madera noble, pero son 100% resistentes al agua. Esto nos permite unificar el suelo de toda la vivienda en Burgos, integrando salón, baños y cocina sin ningún miedo a las fugas ni a la humedad.</p>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl text-[#1A3F5C] font-serif mb-4 flex items-center gap-3"><Layers className="text-[#D4A017]" size={28} />Tarimas laminadas extremas: AC5 y AC6</h3>
                <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                  <p>Si buscas una renovación sencilla sin necesidad de quitar el suelo antiguo, las tarimas flotantes modernas instaladas con clic son la mejor apuesta. Trabajamos solamente con modelos de altísima dureza (calificaciones AC5 o AC6) aportando resistencia a rayaduras y mascotas, y montamos aislantes térmicos inferiores para proteger el pavimento de los pisos fríos y primeros de la capital.</p>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl text-[#1A3F5C] font-serif mb-4 flex items-center gap-3"><Hammer className="text-[#D4A017]" size={28} />Restauración y acuchillado de tradicional parqué</h3>
                <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                  <p>Para aquellos hogares burgaleses clásicos que ya cuentan con un parqué natural sólido, aplicamos un meticuloso trabajo artesanal de <strong>acuchillado, sellado y triple barnizado (al agua, inodoro)</strong>. Utilizamos aspiradoras industriales integradas en la maquinaria para hacer rebajas prácticamente "sin polvo", devolviéndole todo el brillo a la auténtica madera.</p>
                </div>
              </div>
            </section>

            {/* Uniform Conversion Block */}
            <section className="bg-[#1A3F5C] text-white p-8 md:p-12 rounded-xl shadow-xl mt-12 mb-8 text-center">
              <h2 className="text-3xl font-serif mb-4">Descubre nuestras últimas obras en Burgos</h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                No hay mejor prueba de nuestro trabajo que los resultados reales. Explora nuestra galería de proyectos y comprueba el nivel de acabados y el cuidado por el detalle que aplicamos en cada reforma.
              </p>
              <button 
                onClick={() => { setCurrentPage('projects'); window.scrollTo(0,0); }}
                className="bg-[#D4A017] hover:bg-white hover:text-[#1A3F5C] text-white px-8 py-4 font-bold transition-colors uppercase tracking-widest text-sm shadow-md rounded-sm inline-block"
              >
                Consultar Proyectos
              </button>
            </section>

          </div>
          
          <div className="lg:w-1/3">
             <div className="bg-[#1A3F5C] p-8 md:p-10 sticky top-32 shadow-2xl rounded-xl">
               <h3 className="text-2xl font-serif mb-6 text-white text-center">¿Hablamos de tu presupuesto?</h3>
               <p className="text-white/80 mb-8 font-light text-center leading-relaxed">Obtén un análisis técnico gratuito y una valoración económica detallada para tu proyecto en Burgos.</p>
               <button 
                 onClick={() => { setCurrentPage('presupuestos'); window.scrollTo(0,0); }}
                 className="w-full bg-[#D4A017] hover:bg-white hover:text-[#1A3F5C] text-white px-6 py-4 font-bold transition-colors uppercase tracking-widest text-sm shadow-md rounded-sm"
               >
                 Solicitar Presupuesto
               </button>
             </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-20 pt-16 border-t border-gray-200" id="faqs">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": activeDetail.faqs.map((faq: any) => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } })) }) }} />
          <h2 className="text-3xl text-[#1A3F5C] font-serif mb-12 text-center">Preguntas Frecuentes sobre {activeDetail.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {activeDetail.faqs.map((faq: any, i: number) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-bold text-[#1A3F5C] mb-4 flex items-start gap-3"><span className="text-[#D4A017] flex-shrink-0">P.</span>{faq.q}</h4>
                <p className="text-gray-600 leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ReformasIntegralesSEOPage = ({ activeDetail, setCurrentPage, setActiveDetail }: any) => {
  return (
    <div className="w-full bg-[#F6F5F0] font-sans pb-24 min-h-screen">
      <SEOMetadata 
        title={`${activeDetail.title} | Burgos Reformas Integrales`}
        description={activeDetail.desc}
        image={activeDetail.img}
        faqs={activeDetail.faqs}
      />
      {/* Detail Hero - H1 SEO Optimized */}
      <section className="relative h-[400px] md:h-[500px] flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <img src={activeDetail.img} className="absolute inset-0 w-full h-full object-cover z-0" alt="Reformas Integrales en Burgos" />
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <button 
            onClick={() => { setActiveDetail(null); window.scrollTo(0,0); }}
            className="flex items-center gap-2 text-white/70 hover:text-[#D4A017] mb-6 transition-colors uppercase text-xs md:text-sm tracking-wider font-semibold"
          >
           <ChevronLeft size={20} /> Volver a Servicios
          </button>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif mb-4 drop-shadow-lg leading-tight">
            Reformas Integrales en Burgos <br/><span className="text-[#D4A017] text-3xl md:text-4xl">Tu Vivienda Llave en Mano y sin Sobrecostes</span>
          </h1>
          <div className="w-24 h-1 bg-[#D4A017]" />
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 lg:px-8 max-w-[1100px] mt-16 md:mt-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-2/3 space-y-16">
            
            <section>
              <h2 className="text-3xl text-[#1A3F5C] font-serif mb-8 border-b border-gray-200 pb-4">
                ¿Por qué elegirnos para reformar tu piso en la capital o provincia?
              </h2>
              
              {/* Block 1: Aislamiento Térmico */}
              <div className="mb-12">
                <h3 className="text-2xl text-[#1A3F5C] font-serif mb-4 flex items-center gap-3">
                  <ShieldCheck className="text-[#D4A017]" size={28} />
                  Aislamiento térmico avanzado para los inviernos burgaleses
                </h3>
                <img src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=800" alt="Aislamiento térmico y eficiencia energética Burgos" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-md mb-6" />
                <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                  <p>En Burgos la prioridad es la eficiencia energética para combatir el rigor del clima. Implementamos soluciones como el <strong>Sistema SATE</strong> en fachadas y <strong>ventanas con rotura de puente térmico</strong>. Blindamos tu hogar para garantizar un confort térmico absoluto y un ahorro radical en tu factura eléctrica o de gas.</p>
                </div>
              </div>

              {/* Block 2: Coordinación de Gremios */}
              <div className="mb-12">
                <h3 className="text-2xl text-[#1A3F5C] font-serif mb-4 flex items-center gap-3">
                  <HardHat className="text-[#D4A017]" size={28} />
                  Coordinación de gremios locales sin interrupciones
                </h3>
                <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800" alt="Coordinación de gremios construcción Burgos" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-md mb-6" />
                <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                  <p>Evita los temidos parones y sobrecostes. Contamos con un equipo consolidado de profesionales de máxima confianza coordinados por un único jefe de obra. Sincronizamos cada fase técnica, desde el desescombro legal hasta la última capa de pintura, para que la obra fluya sin interrupciones.</p>
                </div>
              </div>

              {/* Block 3: Gestión de licencias */}
              <div className="mb-12">
                <h3 className="text-2xl text-[#1A3F5C] font-serif mb-4 flex items-center gap-3">
                  <Folder className="text-[#D4A017]" size={28} />
                  Gestión integral de licencias en el Ayuntamiento de Burgos
                </h3>
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800" alt="Gestión de licencias y proyectos de obra Burgos" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-md mb-6" />
                <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                  <p>Navegamos por la estricta normativa urbanística por ti. Nos encargamos íntegramente de la <strong>gestión de licencias y permisos en el Ayuntamiento de Burgos</strong>, garantizando un arranque 100% legal y sin retrasos inesperados de papeleo.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl text-[#1A3F5C] font-serif mb-8 border-b border-gray-200 pb-4">
                Nuestro proceso: Del diseño 3D a la entrega de llaves
              </h2>
              <div className="mb-12">
                <h3 className="text-2xl text-[#1A3F5C] font-serif mb-4 flex items-center gap-3">
                  <Layers className="text-[#D4A017]" size={28} />
                  Proyectos de interiorismo adaptados a tu presupuesto
                </h3>
                <img src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=800" alt="Interiorismo y renders 3D para reformas" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-md mb-6" />
                <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                  <p>Integramos herramientas de <strong>diseño 3D y realidad virtual</strong> para que valides distribuciones y materiales antes de la obra. Acordamos un diseño personalizado adaptado a tu presupuesto y entregamos tu vivienda "llave en mano": lista para entrar a vivir.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl text-[#1A3F5C] font-serif mb-6 text-[#1A3F5C]">
                Presupuesto cerrado para tu reforma en Burgos: Garantía por contrato
              </h2>
              <div className="bg-white p-6 md:p-8 border-l-4 border-[#D4A017] shadow-lg mb-0 text-gray-700 text-lg leading-relaxed space-y-4">
                <p>Olvídate de los "poyaques" y de los sobresaltos de última hora. Realizamos mediciones exhaustivas para ofrecerte un <strong>presupuesto 100% cerrado y plazos fijados por contrato</strong>, aportándote absoluta tranquilidad financiera desde el primer día.</p>
              </div>
            </section>

            {/* Uniform Conversion Block */}
            <section className="bg-[#1A3F5C] text-white p-8 md:p-12 rounded-xl shadow-xl mt-12 mb-8 text-center">
              <h2 className="text-3xl font-serif mb-4">Descubre nuestras últimas obras en Burgos</h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                No hay mejor prueba de nuestro trabajo que los resultados reales. Explora nuestra galería de proyectos y comprueba el nivel de acabados y el cuidado por el detalle que aplicamos en cada reforma.
              </p>
              <button 
                onClick={() => { setCurrentPage('projects'); window.scrollTo(0,0); }}
                className="bg-[#D4A017] hover:bg-white hover:text-[#1A3F5C] text-white px-8 py-4 font-bold transition-colors uppercase tracking-widest text-sm shadow-md rounded-sm inline-block"
              >
                Consultar Proyectos
              </button>
            </section>

          </div>
          
          <div className="lg:w-1/3">
             <div className="bg-[#1A3F5C] p-8 md:p-10 sticky top-32 shadow-2xl rounded-xl">
               <h3 className="text-2xl font-serif mb-6 text-white text-center">¿Hablamos de tu presupuesto?</h3>
               <p className="text-white/80 mb-8 font-light text-center leading-relaxed">Obtén un análisis técnico gratuito y una valoración económica detallada para tu proyecto en Burgos.</p>
               <button 
                 onClick={() => { setCurrentPage('presupuestos'); window.scrollTo(0,0); }}
                 className="w-full bg-[#D4A017] hover:bg-white hover:text-[#1A3F5C] text-white px-6 py-4 font-bold transition-colors uppercase tracking-widest text-sm shadow-md rounded-sm"
               >
                 Solicitar Presupuesto
               </button>
               <div className="mt-8 flex items-center justify-center gap-3 text-white/80">
                  <CheckCircle2 className="text-[#D4A017]" size={20} />
                  <span className="text-sm font-medium">100% Sin Sobrecostes Garantizado</span>
               </div>
             </div>
          </div>
        </div>

        {/* FAQs Section Specific */}
        <div className="mt-20 pt-16 border-t border-gray-200" id="faqs">
          <h2 className="text-3xl text-[#1A3F5C] font-serif mb-12 text-center">Preguntas Frecuentes sobre {activeDetail.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {activeDetail.faqs.map((faq: any, i: number) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-bold text-[#1A3F5C] mb-4 flex items-start gap-3">
                  <span className="text-[#D4A017] flex-shrink-0">P.</span>
                  {faq.q}
                </h4>
                <p className="text-gray-600 leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesPage = ({ setCurrentPage, targetService, clearTargetService }: { setCurrentPage: (page: string) => void, targetService?: string | null, clearTargetService?: () => void }) => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [activeDetail, setActiveDetail] = useState<any>(null);

  const servicesList = [
    {
      title: "Aislamiento térmico avanzado para los inviernos burgaleses",
      desc: "Protege tu hogar del frío extremo y reduce drásticamente tu factura de gas. En Burgos, no solo reformamos, blindamos tu vivienda térmicamente. Porque sabemos lo que significa un invierno aquí.",
      icon: <ShieldCheck size={40} strokeWidth={1.5} />,
      img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800",
      features: [
        "Sistemas SATE (Sistema de Aislamiento Térmico por el Exterior).",
        "Ventanas de PVC y Aluminio con Rotura de Puente Térmico.",
        "Aislamiento de cámaras de aire y fachadas.",
        "Mejora de la certificación energética de la vivienda.",
        "Reducción directa en la factura mensual de calefacción."
      ],
      faqs: [
        { q: "¿En qué consiste exactamente el Sistema SATE?", a: "El Sistema de Aislamiento Térmico por el Exterior (SATE) envuelve la fachada del edificio creando una 'piel' protectora que elimina los puentes térmicos. En el clima de Burgos, esto significa retener el calor interior en invierno y bloquear el calor exterior en verano de forma extraordinariamente eficiente." },
        { q: "¿Por qué es tan importante la rotura de puente térmico en ventanas?", a: "Los marcos de aluminio convencionales transmiten el frío del exterior al interior. La rotura de puente térmico inserta un material aislante en medio del marco que bloquea esta transferencia. En la capital, esto evita la condensación (las 'ventanas que lloran') y el frío irradiado cerca del cristal." },
        { q: "¿Notaré realmente el ahorro en la factura del gas?", a: "Sí, de manera radical. Una vivienda con protección térmica deficiente puede perder hasta un 40% de su energía. Al sellar estas fugas, la caldera trabaja muchísimo menos para mantener los 21 grados. Hablamos de un ahorro térmico sostenible todos los años." },
        { q: "¿Hacen aislamiento interior si no puedo modificar la fachada comunitaria?", a: "Por supuesto. Si la comunidad no permite sistemas SATE, aplicamos inyección de aislante en las cámaras de aire o instalamos trasdosados interiores (pladur + aislamiento) para mejorar drásticamente la eficiencia sin tocar la estética exterior del edificio." },
        { q: "¿Cuentan con experiencia en el aislamiento de pisos antiguos?", a: "Nuestra especialidad son las reformas integrales en edificios históricos y barrios estables de Burgos, donde se requiere pericia técnica para actualizar los estándares de comodidad actuales sin perder el encanto arquitectónico." }
      ]
    },
    {
      title: "Reformas Integrales en Burgos",
      desc: "Especialistas en la rehabilitación completa de pisos y casas en Burgos. Ofrecemos soluciones llave en mano con presupuesto cerrado, compromiso de plazos y un equipo de profesionales que cuida cada detalle para revalorizar tu vivienda.",
      icon: <Building size={40} strokeWidth={1.5} />,
      img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200",
      features: [
        "Gestión integral de licencias en el Ayuntamiento de Burgos.",
        "Diseño de interiores y planos personalizados.",
        "Renovación completa de instalaciones (Luz, Agua, Gas).",
        "Aislamiento térmico y eficiencia energética de vanguardia.",
        "Acabados profesionales con materiales de primera calidad."
      ],
      faqs: [
        { q: "¿Cuánto tiempo se tarda en realizar una reforma integral en Burgos?", a: "Para un piso estándar de 90m2, el tiempo estimado suele ser de entre 3 a 4 meses. Gracias a nuestra coordinación de gremios locales, garantizamos los plazos por contrato para tu total tranquilidad." },
        { q: "¿Necesito pedir licencia para mi reforma integral en Burgos?", a: "Sí, dependiendo del alcance, tramitamos desde actuaciones comunicadas hasta licencias de obra mayor. Nos encargamos de toda la gestión burocrática y técnica ante el consistorio." },
        { q: "¿Cuál es el precio medio de una reforma integral en Burgos en 2024?", a: "Al ser una vivienda particular, la inversión depende de las calidades, pero el rango suele estar entre 600€ y 900€ por metro cuadrado para un acabado de alta gama con presupuesto cerrado." },
        { q: "¿Ofrecen garantía de los materiales y mano de obra?", a: "Por supuesto. Ofrecemos las máximas garantías legales tanto en la ejecución de los trabajos como en todos los materiales instalados." },
        { q: "¿Hacen reformas integrales 'llave en mano'?", a: "Sí, es nuestra especialidad principal. Entregamos la vivienda totalmente terminada, minuciosa y lista para entrar a vivir." },
        { q: "¿Qué ocurre si surgen imprevistos o vicios ocultos durante la obra?", a: "Se evalúan de inmediato contigo, aportando presupuestos complementarios de manera transparente para su evaluación." },
        { q: "¿Incluyen el desescombro y gestión de residuos en el presupuesto?", a: "Sí, todos los costes están detallados en presupuesto, cumpliendo además con una rigurosa gestión de residuos en Castilla y León al usar solo vertederos autorizados." },
        { q: "¿Me asesoran en la elección de materiales, suelos y acabados?", a: "Contamos con un equipo técnico especializado que te acompañará para validar calidades directas de distribuidores." },
        { q: "¿Es más caro reformar en el casco histórico de la ciudad?", a: "A veces puede llevar asociadas tasas o permisos especiales de fachada, así como dificultar la carga y descarga de materiales." },
        { q: "¿Cómo se planifican los plazos de pago de la reforma?", a: "Trabajamos mediante hitos planificados de obra, realizando una coordinación de gremios locales excepcional para que los avances se cumplan y abonen secuencialmente." }
      ]
    },
    {
      title: "Reforma de Cocinas en Burgos",
      desc: "Diseñamos y ejecutamos la reforma de tu cocina en Burgos optimizando el espacio y la funcionalidad. Cocinas modernas con encimeras de alta gama y mobiliario a medida para el corazón de tu hogar.",
      icon: <UtensilsCrossed size={40} strokeWidth={1.5} />,
      img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800",
      features: [
        "Encimeras de Silestone, Dekton o granitos naturales.",
        "Mobiliario de fabricación nacional con herrajes Blum.",
        "Redistribución de tomas de agua y puntos eléctricos.",
        "Suelos porcelánicos imitación madera o gran formato.",
        "Cocinas abiertas al salón con isla y campana extractora."
      ],
      faqs: [
        { q: "¿Qué incluye vuestro presupuesto de reforma de cocina en Burgos?", a: "Incluimos desde la demolición hasta el montaje final: mobiliario, encimera, electrodomésticos, fontanería, electricidad y albañilería. Todo con un precio cerrado y sin sorpresas." },
        { q: "¿Cuánto se tarda en reformar una cocina completa?", a: "La fase de obra suele durar unos 10-15 días, seguida de la medición y colocación de la encimera. En menos de 3 semanas tendrás tu nueva cocina lista para disfrutar." },
        { q: "¿Pueden cambiar las tomas de agua y tuberías de sitio?", a: "Durante una reforma completa renovamos la instalación de fontanería completa, asegurando el cumplimiento de la estricta normativa del Ayuntamiento de Burgos en cuanto a saneamientos." },
        { q: "¿Qué material de encimera es el más resistente?", a: "Los materiales porcelánicos (como Dekton o Neolith) y cuarzos compactos (Silestone) son muy resistentes a rayaduras, golpes y calor intenso." },
        { q: "¿Hacen reformas de cocinas abriéndolas al salón para espacios diáfanos?", a: "¡Nos encanta! Hacemos un estudio de viabilidad técnica para intervenir cuidando la seguridad estructural de la vivienda." },
        { q: "¿Se encargan de la correcta eliminación de mis antiguos electrodomésticos?", a: "Nuestro equipo retira e incluye toda esa tarea dentro de una correcta gestión de residuos en Castilla y León, mediante el uso de Puntos Limpios." },
        { q: "¿Trabajan el microcemento como alternativa para mi cocina?", a: "Sí. Es una opción muy demandada para cocinas y lo aplicamos en paredes y suelos al ofrecer un aspecto continuo sin molestas juntas." },
        { q: "¿Incluye el alisado de las paredes del cuarto y la iluminación técnica?", a: "Podemos incluirlo en tu partida para esconder todo cableado, alisar gotelet y colocar tiras de luz LED bajo los armarios altos." },
        { q: "¿Existen accesorios especiales para mejorar el rincón o almacenaje?", a: "Trabajamos con herrajes extraíbles, bandejas giratorias y columnas despensa con cajones ocultos para maximizar incluso las cocinas más pequeñas." },
        { q: "¿Se protegen el suelo y muebles del resto de la casa al trabajar?", a: "Colocamos protecciones y plásticos de barrera desde el primer día en toda la ruta de paso hasta la cocina, minimizando la suciedad general." }
      ]
    },
    {
      title: "Reforma de Baños en Burgos",
      desc: "Expertos en reformas de baños en Burgos: desde el cambio de bañera por ducha hasta reformas integrales con acabados de hotel. Calidad garantizada y plazos mínimos.",
      icon: <Bath size={40} strokeWidth={1.5} />,
      img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800",
      features: [
        "Cambio rápido de bañera por plato de ducha (48-72h).",
        "Sanitarios suspendidos con cisterna oculta Geberit.",
        "Láminas de impermeabilización total sin juntas.",
        "Revestimientos porcelánicos de gran formato.",
        "Mamparas de cristal templado con tratamiento antical."
      ],
      faqs: [
        { q: "¿Cuánto cuesta reformar un baño en Burgos hoy?", a: "Un baño estándar suele oscilar entre 3.800€ y 5.500€ dependiendo de los materiales. Ofrecemos un presupuesto gratuito y detallado para que sepas el coste exacto desde el inicio." },
        { q: "¿Es necesario picar los azulejos para reformar el baño?", a: "Para renovar fontanería y asegurar la estanquidad, recomendamos el picado total, aunque existen soluciones de microcemento sobre azulejo antiguo." },
        { q: "¿Qué sistemas de impermeabilización utilizan para los platos de ducha?", a: "Empleamos láminas asfálticas de PVC o productos líquidos hidrófugos especializados para evitar por completo el riesgo de filtraciones y humedades futuras." },
        { q: "¿Instalan sanitarios modernos que van suspendidos en el aire?", a: "Por supuesto, montamos bastidores y cisternas ocultas en el muro dejando el inodoro y lavabo suspendidos para mayor elegancia y excelente facilidad al fregar." },
        { q: "¿Realizan baños plenamente adaptados para mayores o movilidad reducida?", a: "Eliminamos las barreras arquitectónicas usando duchas enrasadas sin desnivel y asideros de alta seguridad anticaída para facilitar la accesibilidad." },
        { q: "¿Qué soluciones dan para los baños pequeños o poco ventilados?", a: "Instalamos extractores potentes empotrados en falso techo y priorizamos cristales translúcidos o espejos LED grandes para amplificar y purificar el espacio visual." },
        { q: "¿Cuánto cuesta aproximadamente reformar un baño estándar en la ciudad de Burgos?", a: "Al depender de acabados y metros, lo habitual está entre los 3.500 y 5.500 euros, ofreciendo un desglose y ajuste estricto y transparente en tu presupuesto inicial." },
        { q: "¿Las mamparas para las duchas son fáciles de limpiar y tienen tratamiento antical especiales?", a: "Sí, todos los cristales de nuestras empresas colaboradoras incluyen tratamiento de fábrica Easy-Clean que repelen las gotas de agua." },
        { q: "¿Ofrecen además espejos térmicos que eviten empañarse con el vapor del agua?", a: "Disponemos de modelos innovadores con sistema antivaho integrado y conectividad musical bluetooth para un extra de lujo en tu baño." },
        { q: "¿Están incluidas la modificación del cuadro y puntos de luz eléctricos?", a: "En toda reforma sustituimos el cableado adaptándolo a zonas seguras (lejos de humedad inmediata) cumpliendo el estricto reglamento técnico." }
      ]
    },
    {
      title: "Suelos y Parqué",
      desc: "Instalación de tarimas, parqué, suelos laminados y cerámicos. Acabados cálidos y duraderos que soportan el paso del tiempo intactos.",
      icon: <Hammer size={40} strokeWidth={1.5} />,
      img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1200",
      features: [
        "Acuchillado y barnizado de parqué antiguo.",
        "Instalación de tarimas flotantes AC5 y AC6.",
        "Suelos vinílicos SPC resistentes al agua.",
        "Rodapiés a juego y remates impecables.",
        "Suelos radiantes compatibles con parqué."
      ],
      faqs: [
        { q: "¿Qué diferencia la madera maciza, la tarima flotante y el nuevo suelo laminado sintético?", a: "La madera aporta un valor noble y se puede restaurar. El laminado no requiere mantenimiento en absoluto, en cambio, la tarima aporta un equilibrio entre calidad y resistencia a presiones." },
        { q: "¿Se puede llegar a poner suelo laminado o vinílico encima de un suelo viejo de baldosa sin quitarlo?", a: "Sí, de hecho es nuestra recomendación para ahorrar escombros. Preparamos y nivelamos para montar tu suelo flotante o lamas de clic." },
        { q: "¿Cuánto tiempo hay de plazo para acuchillar, lijar, y barnizar un salón con habitación?", a: "Por tiempos de secado de capas protectoras, lo ideal es de 3 a 5 días con una estricta monitorización para no ensuciar el barnizado." },
        { q: "¿Es verdad que el polvo molesta por los pasillos al acuchillar?", a: "Hoy en día utilizamos potentes sistemas de aspirado simultáneo con las máquinas rotatorias. Eliminamos prácticamente en seco el 95% del polvo habitual." },
        { q: "¿El suelo vinílico tipo SPC es cien por ciento resistente para mojar todos los días en la cocina?", a: "Son hidrófugos y recomendados totalmente para baños principales y cocinas de intenso uso sin la más mínima hinchazón frente a las humedades." },
        { q: "¿Es viable poner piso laminado sobre un hogar un suelo radiante modernizado?", a: "Claro que sí, usamos aislantes y densidades concretas debajo para conducir de forma brillante y permitir la filtración el calor del suelo subyacente de la casa térmica." },
        { q: "¿Qué modelo de resistencia extrema (AC4, AC5 o el mayor AC6) se necesitaría exactamente para mi salón o pasillo familiar?", a: "Un AC4 serviría habitualmente para tránsito medio, aunque siempre aconsejamos presupuestar AC5 o AC6 debido a su tremenda garantía y dureza contra impactos y rayaduras que da mayor tranquilidad." },
        { q: "¿Rebajan el bajo de las puertas porque el suelo sube centímetros?", a: "Sí. Para todo sobre-suelo se hace un cepillado en puertas interiores además de moldear o cambiar de forma exacta el zócalo rodapié." },
        { q: "¿Ofrecen tratamientos efectivos frente a problemas perjudiciales como xilófagos o carcoma antigua?", a: "Podemos aplicar capas tratadas impregnables antipolillas para frenar humillación orgánica antes y durante el barniz." },
        { q: "¿Cuánto hay esperar cuando barnizas en acabado mate al agua antes de meter las mesas otra vez?", a: "Suele tener una consistencia adecuada tras 24h, sin embargo aconsejamos de media 48 horas intensas." }
      ]
    }
  ];

  useEffect(() => {
    if (targetService) {
      const match = servicesList.find((s) => s.title === targetService);
      if (match) {
        setActiveDetail(match);
        if (clearTargetService) {
          clearTargetService();
        }
      }
    }
  }, [targetService]);

  if (activeDetail) {
    if (activeDetail.title === "Reformas Integrales en Burgos" || activeDetail.title === "Aislamiento térmico avanzado para los inviernos burgaleses") {
      return <ReformasIntegralesSEOPage activeDetail={activeDetail} setCurrentPage={setCurrentPage} setActiveDetail={setActiveDetail} />
    }
    if (activeDetail.title === "Reforma de Cocinas en Burgos") {
      return <CocinasSEOPage activeDetail={activeDetail} setCurrentPage={setCurrentPage} setActiveDetail={setActiveDetail} />
    }
    if (activeDetail.title === "Reforma de Baños en Burgos") {
      return <BanosSEOPage activeDetail={activeDetail} setCurrentPage={setCurrentPage} setActiveDetail={setActiveDetail} />
    }
    if (activeDetail.title === "Suelos y Parqué") {
      return <SuelosSEOPage activeDetail={activeDetail} setCurrentPage={setCurrentPage} setActiveDetail={setActiveDetail} />
    }

    return (
      <div className="w-full bg-[#F6F5F0] font-sans pb-24 min-h-screen">
        {/* Detail Hero */}
        <section className="relative h-[300px] md:h-[450px] flex items-end pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img src={activeDetail.img} className="absolute inset-0 w-full h-full object-cover z-0" alt={activeDetail.title} />
          <div className="container mx-auto px-4 lg:px-8 relative z-20">
            <button 
              onClick={() => { setActiveDetail(null); window.scrollTo(0,0); }}
              className="flex items-center gap-2 text-white/70 hover:text-[#D4A017] mb-6 transition-colors uppercase text-xs md:text-sm tracking-wider font-semibold"
            >
             <ChevronLeft size={20} /> Volver a Servicios
            </button>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif mb-4 drop-shadow-lg">{activeDetail.title}</h1>
            <div className="w-16 h-1 bg-[#D4A017]" />
          </div>
        </section>

        {/* Content Area */}
        <div className="container mx-auto px-4 lg:px-8 max-w-[1100px] mt-16 md:mt-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="lg:w-2/3">
               <h2 className="text-3xl text-[#1A3F5C] font-serif mb-6">Acerca de este servicio</h2>
               <p className="text-gray-700 text-lg leading-relaxed mb-12">{activeDetail.desc}</p>
               
               <h3 className="text-2xl text-[#1A3F5C] font-serif mb-6">Lo que incluye</h3>
               <ul className="space-y-4 mb-16">
                 {activeDetail.features.map((feat: string, i: number) => (
                   <li key={i} className="flex items-start gap-4 p-4 bg-white shadow-sm border-l-4 border-[#D4A017]">
                     <div className="mt-1 flex-shrink-0 text-[#1A3F5C]">
                       <CheckCircle2 size={24} />
                     </div>
                     <span className="text-gray-800 text-[16px] md:text-lg">{feat}</span>
                   </li>
                 ))}
               </ul>

               {/* Extended fixed texts for detail view */}
               <div className="bg-white p-8 md:p-10 border border-gray-100 shadow-lg mb-0">
                 <h4 className="text-xl font-bold text-[#1A3F5C] mb-4 uppercase tracking-widest text-sm">¿Por qué elegirnos para tu proyecto?</h4>
                 <p className="text-gray-600 leading-relaxed">
                   Contamos con más de 15 años de experiencia ejecutando proyectos en la provincia de Burgos garantizando acabados de máxima calidad. Nuestra metodología de trabajo se basa en la transparencia absoluta, el respeto riguroso de los plazos acordados y una comunicación directa para que vivas el proceso de tu reforma con total tranquilidad.
                 </p>
               </div>
            </div>
            
            <div className="lg:w-1/3">
               <div className="bg-[#1A3F5C] p-8 md:p-10 sticky top-32 shadow-2xl">
                 <h3 className="text-2xl font-serif mb-6 text-white text-center">Empieza tu proyecto</h3>
                 <p className="text-white/80 mb-8 font-light text-center">¿Interesado en nuestros servicios de {activeDetail.title.toLowerCase()}? Cuéntanos tu idea a continuación y un experto preparará un presupuesto orientativo.</p>
                 <button 
                   onClick={() => { setCurrentPage('presupuestos'); window.scrollTo(0,0); }}
                   className="w-full bg-[#D4A017] hover:bg-white hover:text-[#1A3F5C] text-white px-6 py-4 font-bold transition-colors uppercase tracking-widest text-sm shadow-md"
                 >
                   Pedir Presupuesto
                 </button>
               </div>
            </div>
          </div>

          {/* FAQs Section */}
          <div className="mt-20 pt-16 border-t border-gray-200" id="faqs">
            {/* SEO FAQ Schema Injection */}
            <script 
               type="application/ld+json" 
               dangerouslySetInnerHTML={{
                 __html: JSON.stringify({
                   "@context": "https://schema.org",
                   "@type": "FAQPage",
                   "mainEntity": activeDetail.faqs.map((faq: any) => ({
                     "@type": "Question",
                     "name": faq.q,
                     "acceptedAnswer": {
                       "@type": "Answer",
                       "text": faq.a
                     }
                   }))
                 })
               }} 
            />
            <h3 className="text-3xl text-[#1A3F5C] font-serif mb-10 text-center">Preguntas Frecuentes sobre {activeDetail.title}</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {activeDetail.faqs.map((faq: any, idx: number) => (
                <details key={idx} className="group bg-white border border-gray-100 rounded-md shadow-sm hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 open:shadow-md h-full flex flex-col min-h-[140px] items-start">
                  <summary className="flex cursor-pointer list-none items-start justify-between p-5 font-semibold text-[#1A3F5C] w-full text-sm hover:text-[#D4A017] transition-colors rounded-md group-open:rounded-b-none focus:outline-none">
                    <span className="pr-3 leading-snug">{faq.q}</span>
                    <span className="transition group-open:rotate-180 flex-shrink-0 text-[#D4A017] pt-0.5">
                      <ChevronDown size={18} />
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-gray-600 font-light leading-relaxed animate-in fade-in duration-300 text-[13px] border-t border-gray-50 flex-grow">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>

            {/* Strategic CTA Portfolio */}
            <div className="mt-16 text-center bg-gray-50 p-8 rounded-lg border border-gray-100">
              <p className="text-[#1A3F5C] text-lg lg:text-xl font-medium">
                ¿Tienes más dudas? Mira nuestros últimos proyectos terminados y el proceso de obra real en nuestra sección de <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('projects'); window.scrollTo(0,0); }} className="font-bold text-[#D4A017] hover:text-[#B8860B] underline transition-colors decoration-2 underline-offset-4">Proyectos</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F6F5F0] font-sans">
      {/* Hero Section para Servicios */}
      <section className="relative h-[350px] md:h-[500px] flex flex-col justify-center items-center overflow-hidden">
         <div className="absolute inset-0 bg-black/65 z-10" />
         <img src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2000" className="absolute inset-0 w-full h-full object-cover z-0" alt="Servicios Banner" />
         <div className="relative z-20 text-center flex flex-col items-center w-full px-4">
            <h3 className="text-[#D4A017] font-serif font-bold tracking-[0.25em] text-xs md:text-sm uppercase mb-6 drop-shadow-lg">
              REFORMAS EN BURGOS | SERVICIOS
            </h3>
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] text-white font-serif uppercase tracking-[0.05em] mb-10 drop-shadow-2xl leading-none">
              SERVICIOS
            </h1>
            <button 
              onClick={() => { document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="bg-[#D4A017] hover:bg-[#B8860B] text-white px-10 py-3.5 shadow-xl transition-all duration-300"
            >
              <span className="text-xs md:text-sm font-sans font-bold tracking-[0.15em] uppercase">
                LO QUE OFRECEMOS
              </span>
            </button>
         </div>
      </section>

      {/* Grid de Servicios */}
      <section id="services-grid" className="py-20 lg:py-28 px-4 bg-[#F6F5F0] relative overflow-hidden">
        <div className="container mx-auto max-w-[1100px]">
          <div className="text-center mb-16">
            <h3 className="text-[#D4A017] tracking-widest text-[18px] font-bold uppercase mb-4">ESPECIALISTAS EN REFORMAS</h3>
            <h2 className="text-4xl lg:text-5xl text-[#1A3F5C] font-serif mb-6 leading-tight max-w-3xl mx-auto">
              Soluciones a medida para transformar tu hogar o negocio
            </h2>
            <p className="text-[#555] max-w-2xl mx-auto text-lg">
              Un equipo de profesionales altamente cualificados listos para ejecutar la reforma de tus sueños en Burgos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {servicesList.map((service, idx) => (
              <div key={idx} className="bg-white group overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-b-4 border-[#D4A017] flex flex-col transition-transform duration-300 hover:-translate-y-2">
                <div className="relative h-[220px] overflow-hidden">
                  <div className="absolute inset-0 bg-[#1A3F5C]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 max-w-full" referrerPolicy="no-referrer" />
                </div>
                
                <div className="p-8 flex-grow flex flex-col bg-white">
                  <h3 className="text-xl font-serif text-[#1A3F5C] mb-3 group-hover:text-[#D4A017] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-sans font-light leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  
                  <div className="mt-auto">
                    <button 
                      onClick={() => setSelectedService(service)}
                      className="text-[#1A3F5C] font-semibold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:text-[#D4A017] transition-colors cursor-pointer"
                    >
                      Saber más <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal de Detalle de Servicio */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />

              {/* Modal Content */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 z-30 p-2 bg-white/20 hover:bg-white/40 md:bg-white/10 text-[#1A3F5C] md:text-white rounded-full transition-colors"
                >
                  <X size={24} />
                </button>

                {/* Left: Image (Hero-style in modal) */}
                <div className="w-full md:w-5/12 h-64 md:h-auto relative overflow-hidden">
                  <img src={selectedService.img} alt={selectedService.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#1A3F5C]/40 mix-blend-multiply" />
                  <div className="absolute bottom-6 left-6 text-white pr-4">
                    <h3 className="text-3xl font-serif mb-2 leading-tight">{selectedService.title}</h3>
                    <div className="w-12 h-1 bg-[#D4A017]" />
                  </div>
                </div>

                {/* Right: Content */}
                <div className="w-full md:w-7/12 p-8 md:p-12 overflow-y-auto bg-white flex flex-col">
                  <div className="mb-8">
                    <p className="text-gray-600 text-lg leading-relaxed font-light">
                      {selectedService.desc}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-[#1A3F5C] font-semibold text-sm uppercase tracking-widest border-b border-gray-100 pb-2">
                      Lo que incluye este servicio
                    </h4>
                    <ul className="space-y-4">
                      {selectedService.features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-1.5 min-w-[6px] h-1.5 rounded-full bg-[#D4A017]" />
                          <span className="text-gray-700 text-[15px]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-12 pt-8 border-t border-gray-100">
                    <button 
                      onClick={() => {
                        setActiveDetail(selectedService);
                        setSelectedService(null);
                        window.scrollTo(0,0);
                      }}
                      className="w-full bg-[#1A3F5C] hover:bg-[#D4A017] text-white font-bold py-4 px-6 transition-all duration-300 uppercase tracking-widest text-xs shadow-lg"
                    >
                      Leer más
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* CTA Section */}
      <section id="presupuesto-section" className="bg-[#1A3F5C] py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000" className="w-full h-full object-cover opacity-10 mix-blend-luminosity" alt="Background pattern" />
        </div>
        <div className="relative z-10 container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">¿Preparado para empezar tu proyecto?</h2>
          <p className="text-[#D4A017] text-lg md:text-xl font-light mb-10">Pídenos presupuesto sin ningún compromiso y daremos vida a tus ideas con los máximos estándares de calidad.</p>
          <button 
            onClick={() => { setCurrentPage('presupuestos'); window.scrollTo(0,0); }}
            className="bg-[#D4A017] hover:bg-white hover:text-[#1A3F5C] text-white px-10 py-4 font-bold transition-colors shadow-xl uppercase tracking-[0.15em] text-sm md:text-base"
          >
            Solicitar Presupuesto
          </button>
        </div>
      </section>
    </div>
  );
};

const AboutPage = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  return (
    <div className="w-full bg-[#F6F5F0] font-sans">
      {/* 1. Hero */}
      <section className="relative h-[350px] md:h-[500px] flex flex-col justify-center items-center overflow-hidden">
         <div className="absolute inset-0 bg-black/65 z-10" />
         <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover z-0 blur-[3px] scale-105" alt="Sobre nosotros banner" />
         <div className="relative z-20 text-center flex flex-col items-center w-full mt-4">
            <h3 className="text-[#D4A017] font-serif font-bold tracking-[0.25em] text-xs md:text-sm uppercase mb-6 drop-shadow-lg">
              REFORMAS EN BURGOS | SOBRE NOSOTROS
            </h3>
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] text-white font-serif uppercase tracking-[0.05em] mb-10 drop-shadow-2xl leading-none">
              Nosotros
            </h1>
            <div className="bg-[#D4A017] text-white px-8 md:px-14 py-3 md:py-3.5 shadow-lg">
              <span className="text-xs md:text-sm font-sans font-medium tracking-[0.1em] uppercase">
                Nuestros pilares fundamentales
              </span>
            </div>
         </div>
      </section>

      {/* 2. Comprometidos Light Background */}
      <section className="py-20 lg:py-28 px-4 bg-[#F2F0E9] relative overflow-hidden">

        <div className="container mx-auto max-w-[1400px] flex flex-col lg:flex-row gap-8 relative z-10 items-center">
          
          {/* Left Side: Typography Block */}
          <div className="lg:w-[45%] flex flex-col justify-center lg:pr-12 relative z-10">
             <h3 className="text-[#D4A017] font-serif tracking-widest text-[18px] font-bold mb-4 uppercase">Tu empresa de reformas en Burgos</h3>
             <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] text-[#1A3F5C] font-serif mb-6 leading-[1.15]">Expertos en dar vida a tu hogar</h2>
             <p className="text-[#1A1A1A] mb-10 max-w-[95%] leading-relaxed text-[16px] md:text-[17px]">Con más de 15 años liderando el sector de las **reformas integrales en Burgos**, hemos ayudado a cientos de particulares a transformar sus viviendas con acabados de lujo y presupuestos sin sorpresas.</p>
             <ul className="space-y-5 text-[#1A1A1A] mb-12">
               <li className="flex items-center gap-4"><CheckCircle2 strokeWidth={2.5} className="text-[#D4A017]" size={24} /> <span className="font-serif font-medium text-[17px]">500+ clientes satisfechos</span></li>
               <li className="flex items-center gap-4"><CheckCircle2 strokeWidth={2.5} className="text-[#D4A017]" size={24} /> <span className="font-serif font-medium text-[17px]">Equipo profesional y especializado</span></li>
               <li className="flex items-center gap-4"><CheckCircle2 strokeWidth={2.5} className="text-[#D4A017]" size={24} /> <span className="font-serif font-medium text-[17px]">Los mejores acabados del mercado</span></li>
             </ul>
             <div>
               <button 
                 onClick={() => { document.getElementById('valores-section')?.scrollIntoView({ behavior: 'smooth' }); }}
                 className="bg-[#D4A017] text-white font-bold px-10 py-4 text-sm uppercase tracking-[0.15em] hover:bg-[#B3802A] transition-colors rounded-sm shadow-md"
               >
                 NUESTROS PILARES FUNDAMENTALES
               </button>
             </div>
          </div>

          {/* Right Side: Images and Floating Elements */}
          <div className="lg:w-[55%] relative min-h-[500px] lg:min-h-[650px] mt-12 lg:mt-0 w-full">
             
             {/* [Panel de Interiores (Extremo-Derecho)] */}
             <div className="absolute top-[5%] right-0 w-[45%] h-[85%] z-0">
                <div className="w-full h-full rounded-[2px] shadow-2xl border-[6px] border-[#1A3F5C] overflow-hidden bg-white">
                   <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800" className="w-full h-full object-cover" alt="Interior superlujo" />
                </div>

                {/* [Insignia Inferior Derecha] */}
                <div className="absolute bottom-[-20px] right-2 sm:bottom-6 sm:right-[-25px] bg-[#F2F0E9] border-[3px] border-[#1A3F5C] py-3 px-5 text-center rounded-[2px] shadow-xl z-30 flex flex-col items-center">
                  <Star className="text-[#D4A017] mb-1.5" size={20} fill="#D4A017" />
                  <div className="text-[22px] sm:text-[26px] font-serif text-[#1A1A1A] leading-none mb-1">500+</div>
                  <div className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]">PROYECTOS INCREÍBLES</div>
                </div>
             </div>

             {/* [Panel del Trabajador (Centro-Derecha)] */}
             <div className="absolute top-[10%] left-[8%] w-[50%] h-[75%] rounded-[2px] shadow-[[-20px_20px_40px_rgba(0,0,0,0.25)]] border-[6px] border-[#1A3F5C] z-10 bg-[#1A3F5C]">
                <img src="https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=1000" className="w-full h-full object-cover" alt="Reforma cocina lujo minimalista" />
                
                {/* [Insignia Central] */}
                <div className="absolute top-[45%] left-[-40px] sm:left-[-80px] bg-[#F2F0E9] border-[3px] border-[#1A3F5C] text-[#1A3F5C] py-3 px-4 rounded-[2px] flex items-center gap-3 sm:gap-4 shadow-[0_10px_25px_rgba(0,0,0,0.15)] z-20 w-[220px] sm:w-[280px]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D4A017]/10 rounded border border-[#D4A017]/20 flex justify-center items-center text-[#D4A017] shrink-0"><Award size={24} className="sm:w-7 sm:h-7" /></div>
                  <div className="font-serif text-[15px] sm:text-[18px] leading-tight italic">Más de 15 años<br/>de experiencia</div>
                </div>

                {/* [Insignia Inferior Izquierda] */}
                <div className="absolute bottom-[-20px] left-[-20px] sm:left-[-40px] bg-[#F2F0E9] border-[3px] border-[#1A3F5C] text-[#1A3F5C] py-2.5 px-3 sm:py-3 sm:px-4 rounded-[2px] flex items-center gap-3 sm:gap-4 shadow-[0_10px_25px_rgba(0,0,0,0.15)] z-20 w-[190px] sm:w-[240px]">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 bg-[#D4A017]/10 rounded border border-[#D4A017]/20 flex justify-center items-center text-[#D4A017] shrink-0"><HardHat size={22} className="sm:w-6 sm:h-6" /></div>
                  <div className="font-serif text-[13px] sm:text-[15px] leading-snug">Equipo profesional<br/>y certificado</div>
                </div>
             </div>
          </div>
        </div>
      </section>


      {/* 3. Stats Center (Atmospheric Background) */}
      <section className="relative pt-16 pb-12 md:pb-16 px-4 overflow-hidden bg-[#0A192F]">
        {/* 1. Pattern of hydraulic tiles (Vintage style in cream/beige/earth tones) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Azulejos hidráulicos vintage" 
          />
          {/* 2. Superposed Layer: Very dark navy blue with transparency */}
          <div className="absolute inset-0 bg-[#020C1B]/85"></div>
          {/* 3. Vignette Effect: Almost black in the borders */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,0.9)_100%)]"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto max-w-[1200px]">
          <div className="text-center mb-12 relative">
            <h3 className="text-[#D4A017] tracking-[0.4em] text-[18px] font-bold uppercase mb-4">LO QUE HACEMOS</h3>
            <h2 className="text-3xl md:text-[2.6rem] text-white font-sans font-bold leading-[1.2] max-w-2xl mx-auto px-4">
              Ofrecemos servicios integrales de calidad para todos los acabados
            </h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 max-w-5xl mx-auto relative px-4 mb-14">
             {[
               { i: <ThumbsUp size={36} strokeWidth={1} />, t: 'Satisfacción de clientes' },
               { i: <Briefcase size={36} strokeWidth={1} />, t: 'Proyectos completados' },
               { i: <CalendarDays size={36} strokeWidth={1} />, t: 'Años de experiencia' },
               { i: <MapPin size={36} strokeWidth={1} />, t: 'Ciudades' }
             ].map((stat, idx) => (
               <div key={idx} className="flex flex-col items-center">
                  <div className="w-24 h-24 md:w-30 md:h-30 rounded-full bg-[#D4A017] flex items-center justify-center mb-4 text-white shadow-lg">
                    {stat.i}
                  </div>
                  <p className="text-white text-center text-sm md:text-base font-sans font-medium tracking-wide max-w-[160px] leading-tight">{stat.t}</p>
               </div>
             ))}
          </div>

          {/* New Requested Card (Floating Square) */}
          <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row bg-[#F2EDE4] shadow-[0_45px_100px_-20px_rgba(0,0,0,0.6)] rounded-sm overflow-hidden transform md:translate-y-12 relative z-20">
             {/* Left: Image (High-quality modern interior) */}
             <div className="md:w-1/2 h-[350px] md:h-auto overflow-hidden bg-[#1A1A1A]">
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover" 
                  alt="Reforma integral salón de lujo" 
                  referrerPolicy="no-referrer"
                />
             </div>
             {/* Right: Content */}
             <div className="md:w-1/2 p-6 md:p-10 lg:p-14 flex flex-col justify-center items-start text-left">
                <h3 className="text-[26px] lg:text-[30px] text-[#1A3F5C] font-sans font-bold leading-none mb-2 tracking-tight">REFORMAS INTEGRALES</h3>
                <h4 className="text-base lg:text-lg text-[#333333] font-sans font-semibold mb-4">Suelos, Pinturas y Revestimientos</h4>
                <p className="text-[#555555] font-sans text-sm leading-relaxed mb-6 max-w-md">
                   Con un enfoque en la calidad y la experiencia, transformamos espacios en hogares únicos. Desde la instalación experta hasta los acabados más finos.
                </p>
                <button 
                  onClick={() => { setCurrentPage('projects'); window.scrollTo(0,0); }}
                  className="px-10 py-3.5 bg-[#D4A017] text-white hover:bg-[#A57C1B] transition-all duration-300 text-sm uppercase tracking-[0.14em] font-bold rounded-full shadow-lg"
                >
                   Ver proyectos
                </button>
             </div>
          </div>
        </div>

      </section>

      {/* 4. Por qué elegirnos contained */}
      <section className="py-20 lg:py-28 px-4 bg-[#F6F5F0]">
         <div className="container mx-auto max-w-7xl">
           <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
              <div className="lg:w-1/2 relative h-[400px] md:h-[500px] w-full">
                 <div className="absolute left-4 top-0 w-[55%] h-[75%] border-[10px] border-[#1A3F5C] shadow-xl overflow-hidden bg-[#1A3F5C]">
                   <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200" className="w-full h-full object-cover" alt="Interior moderno reformado" referrerPolicy="no-referrer" />
                 </div>
                 <div className="absolute right-4 bottom-0 w-[55%] h-[75%] shadow-2xl overflow-hidden border-[10px] border-[#1A3F5C] bg-[#1A3F5C]">
                   <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200" className="w-full h-full object-cover" alt="Detalle de baño de lujo reformado" referrerPolicy="no-referrer" />
                 </div>
              </div>
              
              <div className="lg:w-1/2">
                 <h3 className="text-[#D4A017] tracking-widest text-[18px] font-bold mb-5 uppercase">Por qué elegirnos</h3>
                 <h2 className="text-4xl lg:text-5xl text-[#1A3F5C] font-serif mb-10 leading-[1.1]">Transformamos cada<br/>espacio con precisión<br/>y calidad</h2>
                 
                 <div className="space-y-8 mb-10">
                   <div>
                     <h4 className="text-xl text-[#1A3F5C] font-semibold font-sans mb-2">Diseño personalizado de autor</h4>
                     <p className="text-[#2B2B2B] font-light text-[15px] leading-relaxed">Colaboramos estrechamente con usted para crear un diseño que refleje su visión única y estilo personal, asegurando que cada detalle sea perfecto para su espacio.</p>
                   </div>
                   <div>
                     <h4 className="text-xl text-[#1A3F5C] font-semibold font-sans mb-2">Acabados únicos y duraderos</h4>
                     <p className="text-[#2B2B2B] font-light text-[15px] leading-relaxed">Utilizamos solo los mejores materiales y técnicas para lograr acabados que no solo sean hermosos a la vista, sino que también resistan perfectamente el paso del tiempo.</p>
                   </div>
                 </div>
                 
                 <button 
                   onClick={() => { setCurrentPage('services'); window.scrollTo(0,0); }}
                   className="px-8 py-3 bg-[#D4A017] text-white font-bold hover:bg-[#D4892A] transition-colors text-xs uppercase tracking-widest shadow-md"
                 >
                    Explorar más
                 </button>
              </div>
           </div>
         </div>
      </section>

      {/* 5. Valores Light split section */}
      <section id="valores-section" className="bg-[#1A3F5C] flex flex-col lg:flex-row relative z-10 pt-16 lg:pt-0">
         <div className="lg:w-[45%] h-[350px] lg:h-auto relative lg:static">
           <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200" className="absolute lg:inset-0 w-full lg:h-full h-full object-cover brightness-[0.8] lg:border-r border-[#1A3F5C]" alt="Interior moderno" />
         </div>
         {/* The big overlapping white card containing values */}
         <div className="w-full lg:w-[65%] lg:-ml-16 my-0 lg:my-16 z-20 bg-[#F6F5F0] rounded-none lg:rounded-l-2xl shadow-[-10px_0_30px_rgba(0,0,0,0.15)] p-10 lg:p-20">
            <h2 className="text-4xl lg:text-5xl text-[#1A3F5C] font-serif mb-3 text-center lg:text-left">Nuestros valores</h2>
            <p className="text-[#1A3F5C] font-medium mb-16 text-center lg:text-left text-lg">Nuestros pilares fundamentales</p>
            
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
               <div className="flex gap-4">
                 <ShieldCheck className="text-[#D4A017] shrink-0 mt-1" size={32} strokeWidth={1.5} />
                 <div>
                   <h4 className="text-[#1A3F5C] font-semibold text-lg mb-2">Integridad</h4>
                   <p className="text-[#2B2B2B] text-[15px] leading-relaxed font-light">Actuamos con honestidad y transparencia inquebrantables en cada proyecto realizado.</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <Lightbulb className="text-[#D4A017] shrink-0 mt-1" size={32} strokeWidth={1.5} />
                 <div>
                   <h4 className="text-[#1A3F5C] font-semibold text-lg mb-2">Innovación</h4>
                   <p className="text-[#2B2B2B] text-[15px] leading-relaxed font-light">Adoptamos nuevas técnicas y materiales de vanguardia para los mejores resultados.</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <Star className="text-[#D4A017] shrink-0 mt-1" size={32} strokeWidth={1.5} />
                 <div>
                   <h4 className="text-[#1A3F5C] font-semibold text-lg mb-2">Excelencia</h4>
                   <p className="text-[#2B2B2B] text-[15px] leading-relaxed font-light">Buscamos la perfección en cada detalle y acabado que entregamos a nuestros clientes.</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <Handshake className="text-[#D4A017] shrink-0 mt-1" size={32} strokeWidth={1.5} />
                 <div>
                   <h4 className="text-[#1A3F5C] font-semibold text-lg mb-2">Compromiso</h4>
                   <p className="text-[#2B2B2B] text-[15px] leading-relaxed font-light">Nos dedicamos totalmente a su visión y proyecto, acompañándole de principio a fin.</p>
                 </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  )
}

const PresupuestosPage = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    description: '',
    terms: false
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.projectType || !formData.terms) return;
    
    setStatus('submitting');
    
    try {
      const response = await fetch('./contacto.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          projectType: '',
          description: '',
          terms: false
        });
        setCurrentPage('gracias');
      } else {
        alert(result.error || 'Hubo un error al enviar el formulario.');
        setStatus('idle');
      }
    } catch (error) {
      console.error("Error submitting form", error);
      // En modo local sin PHP, simulamos éxito para poder ver la página
      if (window.location.hostname === 'localhost' || window.location.hostname.includes('run.app')) {
        setStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          projectType: '',
          description: '',
          terms: false
        });
        setCurrentPage('gracias');
      } else {
        alert('No se pudo conectar con el servidor. Inténtelo más tarde.');
        setStatus('idle');
      }
    }
  };

  return (
    <div className="w-full bg-[#F6F5F0] font-sans pb-20">
      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[500px] flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/65 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=1600" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
          alt="Presupuesto y Planificación de Obra" 
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20 text-center flex flex-col items-center w-full px-4">
          <h3 className="text-[#D4A017] font-serif font-bold tracking-[0.25em] text-xs md:text-sm uppercase mb-6 drop-shadow-lg">
            REFORMAS EN BURGOS | PRESUPUESTO
          </h3>
          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] text-white font-serif uppercase tracking-[0.05em] mb-10 drop-shadow-2xl leading-none">
            Presupuesto
          </h1>
          <div className="w-20 h-1 bg-[#D4A017] mx-auto"></div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 -mt-16 relative z-30">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Form Card */}
          <div className="lg:w-2/3 bg-white shadow-2xl p-8 md:p-12 border-t-8 border-[#1A3F5C]">
            <h2 className="text-3xl font-serif text-[#1A3F5C] mb-8">Cuéntanos tu proyecto</h2>
            
            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="bg-green-50 border border-green-200 text-green-800 p-4 mb-6 flex items-start gap-3"
              >
                <CheckCircle2 className="text-green-600 mt-0.5 shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-sm">¡Solicitud enviada con éxito!</h4>
                  <p className="text-sm mt-1">Nos pondremos en contacto contigo lo antes posible para hablar sobre tu proyecto.</p>
                </div>
              </motion.div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wider">Nombre Completo *</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full border-b-2 border-gray-100 py-3 px-1 focus:border-[#D4A017] outline-none transition-colors text-gray-800" 
                    placeholder="Juan Pérez" 
                    required 
                    disabled={status === 'submitting'}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wider">Teléfono de Contacto *</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full border-b-2 border-gray-100 py-3 px-1 focus:border-[#D4A017] outline-none transition-colors text-gray-800" 
                    placeholder="+34 600 000 000" 
                    required 
                    disabled={status === 'submitting'}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wider">Correo Electrónico *</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full border-b-2 border-gray-100 py-3 px-1 focus:border-[#D4A017] outline-none transition-colors text-gray-800" 
                  placeholder="ejemplo@correo.com" 
                  required 
                  disabled={status === 'submitting'}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wider">Tipo de Proyecto *</label>
                <select 
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                  className="w-full border-b-2 border-gray-100 py-3 px-1 bg-transparent focus:border-[#D4A017] outline-none transition-colors text-gray-800 cursor-pointer"
                  required
                  disabled={status === 'submitting'}
                >
                  <option value="">Selecciona una opción</option>
                  <option value="integral">Reforma Integral</option>
                  <option value="cocina">Reforma de Cocina</option>
                  <option value="bano">Reforma de Baño</option>
                  <option value="suelos">Suelos y Parqué</option>
                  <option value="otro">Otros</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wider">Descripción del Proyecto</label>
                <textarea 
                  rows={4} 
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full border-2 border-gray-50 p-4 focus:border-[#D4A017] outline-none transition-colors text-gray-800 resize-none" 
                  placeholder="Cuéntanos un poco más sobre lo que tienes en mente..."
                  disabled={status === 'submitting'}
                ></textarea>
              </div>

              <div className="flex items-center gap-3 py-4">
                <input 
                  type="checkbox" 
                  id="terms" 
                  checked={formData.terms}
                  onChange={(e) => setFormData({...formData, terms: e.target.checked})}
                  className="w-5 h-5 accent-[#1A3F5C] cursor-pointer" 
                  required
                  disabled={status === 'submitting'}
                />
                <label htmlFor="terms" className="text-sm text-gray-500 cursor-pointer">He leído y acepto la política de privacidad *</label>
              </div>

              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-[#1A3F5C] hover:bg-[#D4A017] disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-5 px-8 transition-all duration-300 uppercase tracking-[0.2em] text-sm shadow-xl flex items-center justify-center gap-4"
              >
                {status === 'submitting' ? 'Enviando...' : (
                  <>Enviar Solicitud <ArrowRight size={18} /></>
                )}
              </button>
            </form>
          </div>

          {/* Right: Info Column */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-[#1A3F5C] p-8 text-white">
              <h3 className="text-2xl font-serif mb-6 border-b border-white/20 pb-4">Nuestra Metodología</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="text-[#D4A017] font-serif text-3xl font-bold opacity-30">01</div>
                  <div>
                    <h4 className="font-bold mb-1">Contacto</h4>
                    <p className="text-gray-300 text-sm">Recibimos tu solicitud y te contactamos en menos de 24 horas.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#D4A017] font-serif text-3xl font-bold opacity-30">02</div>
                  <div>
                    <h4 className="font-bold mb-1">Visita Técnica</h4>
                    <p className="text-gray-300 text-sm">Visitamos el espacio para tomar medidas y entender tus necesidades de primera mano.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#D4A017] font-serif text-3xl font-bold opacity-30">03</div>
                  <div>
                    <h4 className="font-bold mb-1">Presupuesto</h4>
                    <p className="text-gray-300 text-sm">Te entregamos una propuesta detallada y personalizada sin compromiso.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border border-gray-100 shadow-sm">
              <h4 className="text-[#1A3F5C] font-bold mb-4 flex items-center gap-2">
                <Phone size={18} className="text-[#D4A017]" /> ¿Prefieres llamarnos?
              </h4>
              <p className="text-gray-600 text-sm mb-4">Estamos disponibles para resolver tus dudas directamente por teléfono.</p>
              <a href="tel:947102030" className="text-2xl font-serif text-[#1A3F5C] hover:text-[#D4A017] transition-colors">
                947 10 20 30
              </a>
            </div>
            
            <div className="bg-[#D4A017]/10 p-8 border border-[#D4A017]/20">
              <p className="text-[#1A3F5C] italic font-serif text-lg leading-relaxed">
                "La calidad no es un acto, es un hábito. En Burgos Reformas nos comprometemos con cada detalle de tu presupuesto."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const BeforeAfterSlider = ({ before, after, title }: { before: string, after: string, title: string }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = (x / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto px-4 mt-20 mb-32">
      <div className="text-center mb-12">
        <h3 className="text-[#A57C1B] font-serif font-bold tracking-[0.2em] text-xs uppercase mb-4">Transformaciones Reales</h3>
        <h2 className="text-4xl md:text-5xl font-serif text-[#1A3F5C] mb-6 tracking-tight">El Impacto del Diseño</h2>
        <p className="text-gray-500 font-sans max-w-2xl mx-auto italic">Haz clic y arrastra para ver cómo convertimos espacios en ruinas en hogares de ensueño.</p>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full aspect-video overflow-hidden shadow-2xl cursor-ew-resize select-none bg-neutral-200 border border-neutral-100"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
      >
        {/* After Image (Background) */}
        <img 
          src={after} 
          alt="Después" 
          className="absolute inset-0 w-full h-full object-cover" 
          referrerPolicy="no-referrer"
        />

        {/* Before Image (Overlay clipped by slider via clip-path) */}
        <img 
          src={before} 
          alt="Antes" 
          className="absolute inset-0 w-full h-full object-cover" 
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          referrerPolicy="no-referrer"
        />

        {/* Labels */}
        <div className="absolute top-6 left-6 z-10 pointer-events-none">
          <div className="bg-black/50 backdrop-blur-md text-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] border border-white/20">
            Antes
          </div>
        </div>
        <div className="absolute top-6 right-6 z-10 pointer-events-none">
          <div className="bg-[#D4A017]/80 backdrop-blur-md text-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em]">
            Después
          </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute inset-y-0 w-[2px] bg-white z-30 pointer-events-none group-active:scale-x-150 transition-transform"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border border-neutral-200">
            <div className="flex gap-1 text-neutral-800">
              <ChevronLeft size={18} />
              <ChevronRight size={18} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex items-center justify-center w-full">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent"></div>
        <div className="px-6 text-[#1A3F5C] font-serif italic text-xl whitespace-nowrap">
          {title}
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent"></div>
      </div>
    </div>
  );
}

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const projects = [
    {
      title: "Reforma Integral en Gamonal",
      category: "Rehabilitación Completa",
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800",
      filter: "Reformas Integrales"
    },
    {
      title: "Cocina de Diseño en el G-3",
      category: "Mobiliario a Medida",
      img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
      filter: "Cocinas"
    },
    {
      title: "Baño Lujo en Centro Histórico",
      category: "Reforma Premium",
      img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800",
      filter: "Baños"
    },
    {
      title: "Cambio de Bañera por Ducha",
      category: "Accesibilidad",
      img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800",
      filter: "Baños"
    },
    {
      title: "Eficiencia Energética SATE",
      category: "Aislamiento Exterior",
      img: "https://images.unsplash.com/photo-1512914890251-2f96a9b0bbe2?w=800",
      filter: "Reformas Integrales"
    },
    {
      title: "Piso Moderno en Villímar",
      category: "Proyecto Llave en Mano",
      img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800",
      filter: "Reformas Integrales"
    }
  ];

  const categories = ['Todos', 'Baños', 'Cocinas', 'Reformas Integrales'];
  
  const filteredProjects = activeFilter === 'Todos' 
    ? projects 
    : projects.filter(p => p.filter === activeFilter);

  return (
    <div className="w-full bg-[#F6F5F0] font-sans">
      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[500px] flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/65 z-10" />
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600" className="absolute inset-0 w-full h-full object-cover z-0" alt="Proyectos banner" />
        <div className="relative z-20 text-center flex flex-col items-center w-full px-4">
          <h3 className="text-[#D4A017] font-serif font-bold tracking-[0.25em] text-xs md:text-sm uppercase mb-6 drop-shadow-lg">
            REFORMAS EN BURGOS | PORTFOLIO
          </h3>
          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] text-white font-serif uppercase tracking-[0.05em] mb-10 drop-shadow-2xl leading-none">
            Proyectos
          </h1>
          <div className="w-20 h-1 bg-[#D4A017] mx-auto"></div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-24 bg-[#F6F5F0]">
        <div className="container mx-auto max-w-6xl px-4">
          
          {/* Category Filter Bar */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 px-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-4 py-2 text-sm uppercase tracking-[0.2em] font-bold transition-all duration-300 ${
                  activeFilter === cat ? 'text-[#1A3F5C]' : 'text-gray-400 hover:text-[#1A3F5C]'
                }`}
              >
                {cat}
                {activeFilter === cat && (
                  <motion.div 
                    layoutId="activeFilter"
                    className="absolute -bottom-1 left-4 right-4 h-[2px] bg-[#D4A017]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div 
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative group aspect-square overflow-hidden cursor-pointer"
                >
                  {/* Image: Clean by default */}
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Designer Hover State (Inspired by the mockup) */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    
                    {/* Decorative Lines */}
                    {/* Vertical line on the left */}
                    <div className="absolute left-[15%] top-0 bottom-0 w-[1px] bg-[#D4A017]/50 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                    
                    {/* Horizontal line at the bottom */}
                    <div className="absolute bottom-[20%] left-0 right-0 h-[1px] bg-[#D4A017]/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left delay-100" />
                    
                    {/* Content Container */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      
                      {/* Arrow Icon at intersection (bottom-left area) */}
                      <div className="absolute left-[15%] bottom-[20%] -translate-x-1/2 translate-y-1/2 p-2 bg-transparent text-[#D4A017] transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-300">
                        <ArrowRight size={18} />
                      </div>

                      {/* Text Content in the bottom-right area */}
                      <div className="ml-auto text-right mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                        <h3 className="text-white text-2xl font-serif font-bold mb-1">
                          {project.title}
                        </h3>
                        <p className="text-[#D4A017] text-xs uppercase tracking-widest font-semibold">
                          {project.category}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {/* Interactive Before & After Section */}
          <BeforeAfterSlider 
            title="Transformación Real en Cocina"
            before="http://carlosv161.sg-host.com/wp-content/uploads/2026/04/antes-3-.png"
            after="http://carlosv161.sg-host.com/wp-content/uploads/2026/04/despues3.png"
          />

          {/* Bottom Design Accent */}
          <div className="mt-24 text-center">
            <p className="text-gray-400 font-serif italic text-lg mb-8">"Cada proyecto es una historia de transformación única en Burgos"</p>
            <div className="flex justify-center gap-6">
               <div className="w-12 h-[1px] bg-[#D4A017] self-center"></div>
               <span className="uppercase tracking-[0.3em] text-[#1A3F5C] font-bold text-xs">Excelencia en Acabados</span>
               <div className="w-12 h-[1px] bg-[#D4A017] self-center"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

{/* --- BLOG PAGE COMPONENT --- */}
function BlogPage({ blogPosts, onReadMore }: { blogPosts: any[], onReadMore: (post: any) => void }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="w-full bg-[#F6F5F0] font-sans">
      {/* Hero Header */}
      <section className="relative h-[350px] md:h-[500px] flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/65 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
          alt="Blog banner" 
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20 text-center flex flex-col items-center w-full px-4">
          <h3 className="text-[#D4A017] font-serif font-bold tracking-[0.25em] text-xs md:text-sm uppercase mb-6 drop-shadow-lg">
            CONSEJOS Y TENDENCIAS | BLOG
          </h3>
          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] text-white font-serif uppercase tracking-[0.05em] mb-10 drop-shadow-2xl leading-none">
            Blog
          </h1>
          <div className="w-20 h-1 bg-[#D4A017] mx-auto"></div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-[#F6F5F0]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {blogPosts.map((post) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col"
              >
                <div className="relative h-[300px] overflow-hidden mb-8">
                  <img src={post.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={post.title} />
                  <div className="absolute top-0 right-0 p-4">
                    <span className="bg-[#D4A017] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1">
                      {post.category || 'Reforma'}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">
                  <span>{post.date}</span>
                  <span className="text-[#D4A017]">•</span>
                  <span>Haus Hero</span>
                </div>
                <h2 className="text-2xl font-serif text-[#1A3F5C] leading-tight mb-6 group-hover:text-[#D4A017] transition-colors cursor-pointer" onClick={() => onReadMore(post)}>
                  {post.title}
                </h2>
                <p className="text-gray-500 font-sans font-light leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>
                <button 
                  onClick={() => onReadMore(post)}
                  className="w-fit text-[#1A3F5C] text-[11px] font-bold uppercase tracking-widest flex items-center gap-3 border-b-2 border-[#D4A017]/30 pb-2 hover:border-[#D4A017] transition-all"
                >
                  Continuar Leyendo <ArrowRight size={14} className="text-[#D4A017]" />
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-24 bg-[#F4F3EE]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif text-[#1A3F5C] mb-6">Suscríbete a nuestra newsletter</h2>
            <p className="text-gray-600 font-sans font-light mb-10">
              Recibe mensualmente los mejores consejos sobre reformas, mantenimiento y diseño de interiores directamente en tu bandeja de entrada.
            </p>
            
            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="bg-green-50 border border-green-200 text-green-800 p-4 mb-6 flex items-start gap-3 justify-center text-left mx-auto"
              >
                <CheckCircle2 className="text-green-600 mt-0.5 shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-sm">¡Suscripción confirmada!</h4>
                  <p className="text-sm mt-1">Gracias por suscribirte a nuestra newsletter.</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu dirección de correo electrónico" 
                className="flex-grow bg-white border border-gray-200 px-6 py-4 font-sans text-sm focus:outline-none focus:border-[#D4A017] shadow-sm"
                required
                disabled={status === 'submitting'}
              />
              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="bg-[#1A3F5C] text-white px-10 py-4 font-bold uppercase tracking-widest text-[11px] hover:bg-[#D4A017] disabled:opacity-70 disabled:cursor-not-allowed transition-all whitespace-nowrap shadow-md"
              >
                {status === 'submitting' ? 'Suscribiendo...' : 'Suscribirme'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

const PoliticaPrivacidadPage = () => {
  return (
    <div className="w-full bg-[#F6F5F0] font-sans pb-20">
      <section className="relative h-[250px] md:h-[350px] flex flex-col justify-center items-center overflow-hidden bg-[#1A3F5C]">
        <div className="relative z-20 text-center flex flex-col items-center w-full px-4">
          <h1 className="text-4xl md:text-5xl text-white font-serif tracking-[0.05em] mb-6 drop-shadow-2xl">
            Política de Privacidad
          </h1>
          <div className="w-20 h-1 bg-[#D4A017] mx-auto"></div>
        </div>
      </section>
      <div className="container mx-auto max-w-4xl px-4 mt-12 bg-white shadow-xl p-8 md:p-14 text-gray-700 leading-relaxed space-y-6">
        <h2 className="text-2xl font-serif text-[#1A3F5C] mb-4">1. Responsable del Tratamiento</h2>
        <p>
          De conformidad con lo establecido en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), le informamos que los datos personales aportados serán tratados por <strong>Burgos Reformas Integrales</strong> (en adelante, el "Titular").
        </p>
        
        <h2 className="text-2xl font-serif text-[#1A3F5C] mb-4 mt-8">2. Finalidad del Tratamiento</h2>
        <p>
          La recogida y tratamiento automatizado de los datos personales tiene como finalidades:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>La gestión, estudio y seguimiento de su solicitud de presupuesto o información sobre nuestros servicios de reformas y construcción.</li>
          <li>El mantenimiento de la relación comercial y precontractual que surja de la contratación de nuestros servicios.</li>
          <li>El envío de comunicaciones comerciales, boletines (newsletter) y promociones o consejos sobre reformas, siempre y cuando el usuario haya prestado su consentimiento expreso.</li>
        </ul>

        <h2 className="text-2xl font-serif text-[#1A3F5C] mb-4 mt-8">3. Base Legitimadora</h2>
        <p>
          La base legal para el tratamiento de sus datos es el <strong>consentimiento</strong> que se le solicita para rellenar el formulario de contacto o suscripción y la <strong>ejecución de un contrato</strong> (o medidas precontractuales) en el caso de la elaboración y aceptación de presupuestos de obra.
        </p>

        <h2 className="text-2xl font-serif text-[#1A3F5C] mb-4 mt-8">4. Conservación de los Datos</h2>
        <p>
          Los datos personales proporcionados se conservarán mientras se mantenga la relación mercantil o no solicite su supresión. Asimismo, se conservarán durante los años necesarios para cumplir con las obligaciones legales aplicables (fiscales, mercantiles y de garantías de obra derivadas de la reforma).
        </p>

        <h2 className="text-2xl font-serif text-[#1A3F5C] mb-4 mt-8">5. Comunicación a Terceros</h2>
        <p>
          Sus datos no se cederán a terceros ajenos a Burgos Reformas Integrales, salvo en los casos en que exista una obligación legal o sea estrictamente necesario para la prestación del servicio encomendado (por ejemplo, subcontratistas específicos durante la obra, gestoría para facturación, o plataformas para envío de correos bajo estrictos contratos de confidencialidad).
        </p>

        <h2 className="text-2xl font-serif text-[#1A3F5C] mb-4 mt-8">6. Derechos del Usuario (Derechos ARCO+)</h2>
        <p>
          Cualquier persona tiene derecho a obtener confirmación sobre si en Burgos Reformas Integrales estamos tratando datos personales que le conciernan. Usted tiene derecho a:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Acceder</strong> a sus datos personales.</li>
          <li>Solicitar la <strong>rectificación</strong> de datos inexactos.</li>
          <li>Solicitar su <strong>supresión</strong> (derecho al olvido) cuando los datos ya no sean necesarios para los fines que fueron recogidos.</li>
          <li>Solicitar la <strong>limitación</strong> de su tratamiento.</li>
          <li><strong>Oponerse</strong> al tratamiento.</li>
          <li>Derecho a la <strong>portabilidad</strong> de sus datos.</li>
        </ul>
        <p>
          Podrá ejercer todos estos derechos de forma gratuita dirigiéndose previamente por escrito y acreditando su identidad (DNI o equivalente) mediante correo electrónico a nuestra dirección: <strong>praticas@guadalweb.com</strong>.
        </p>

        <h2 className="text-2xl font-serif text-[#1A3F5C] mb-4 mt-8">7. Medidas de Seguridad</h2>
        <p>
          Hemos implementado todas las medidas organizativas y técnicas de seguridad necesarias (sistemas encriptados, acceso protegido) para evitar la pérdida, el acceso no autorizado o la alteración de sus datos personales.
        </p>
      </div>
    </div>
  );
};

const AvisoLegalPage = () => {
  return (
    <div className="w-full bg-[#F6F5F0] font-sans pb-20">
      <section className="relative h-[250px] md:h-[350px] flex flex-col justify-center items-center overflow-hidden bg-[#1A3F5C]">
        <div className="relative z-20 text-center flex flex-col items-center w-full px-4">
          <h1 className="text-4xl md:text-5xl text-white font-serif tracking-[0.05em] mb-6 drop-shadow-2xl">
            Aviso Legal
          </h1>
          <div className="w-20 h-1 bg-[#D4A017] mx-auto"></div>
        </div>
      </section>
      <div className="container mx-auto max-w-4xl px-4 mt-12 bg-white shadow-xl p-8 md:p-14 text-gray-700 leading-relaxed space-y-6">
        <h2 className="text-2xl font-serif text-[#1A3F5C] mb-4">1. Información General / Identidad del Titular</h2>
        <p>
          En cumplimiento de lo dispuesto en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), a continuación se exponen los datos identificativos del titular de este sitio web:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Titular de la web:</strong> Burgos Reformas Integrales</li>
          <li><strong>Domicilio Social:</strong> C/ Santander, Burgos, España</li>
          <li><strong>Teléfono de contacto:</strong> +34 690 703 950</li>
          <li><strong>Correo electrónico general:</strong> praticas@guadalweb.com</li>
          <li><strong>Actividad principal:</strong> Servicios de reformas y construcción en general.</li>
        </ul>

        <h2 className="text-2xl font-serif text-[#1A3F5C] mb-4 mt-8">2. Condiciones Generales de Uso</h2>
        <p>
          El simple acceso y/o uso de este portal web atribuye a quien lo realiza la condición de USUARIO. El USUARIO acepta, desde dicho acceso y/o uso, someterse a las Condiciones Generales detalladas en este Aviso Legal. 
        </p>
        <p>
          El sitio web proporciona información sobre servicios del sector de la reforma de inmuebles. El USUARIO se compromete a hacer un uso adecuado, lícito y diligente de los contenidos y servicios de esta página, y a no provocar daños en los sistemas físicos y lógicos de <strong>Burgos Reformas Integrales</strong> ni a difundir en la red virus informáticos o utilizar el portal para actividades ilegales.
        </p>

        <h2 className="text-2xl font-serif text-[#1A3F5C] mb-4 mt-8">3. Propiedad Intelectual e Industrial</h2>
        <p>
          Todos los derechos de Propiedad Intelectual e Industrial sobre todos los elementos de este sitio web (incluyendo de forma enunciativa pero no limitativa: imágenes de obras, planos, diseños y estructuras web, fotografías "antes / después", textos explicativos, logotipos o marcas comerciales) pertenecen a <strong>Burgos Reformas Integrales</strong> o están bajo licencia.
        </p>
        <p>
          En virtud de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, alteración, distribución y comunicación pública de parte o la totalidad del contenido del sitio web con fines comerciales y/o medianté cualquier vía analógica o digital sin autorización escrita.
        </p>

        <h2 className="text-2xl font-serif text-[#1A3F5C] mb-4 mt-8">4. Exclusión de Garantías y Responsabilidad</h2>
        <p>
          El Titular no garantiza la inexistencia de interrupciones o errores en el acceso a la Web y se reserva el derecho de efectuar, sin aviso previo, las modificaciones o actualizaciones del contenido que considere oportunas.
        </p>
        <p>
          De igual forma, <strong>Burgos Reformas Integrales</strong> no se hace responsable de los daños y perjuicios de cualquier naturaleza que puedan derivarse de la presencia de virus o malware introducido por terceros, ni de los hipotéticos daños al sistema informático del usuario derivados de la navegación web. Tampoco podemos responsabilizarnos del posible contenido de los enlaces a webs de terceras partes que, eventualmente, pudieran publicarse en el apartado Blog.
        </p>

        <h2 className="text-2xl font-serif text-[#1A3F5C] mb-4 mt-8">5. Legislación Aplicable y Jurisdicción</h2>
        <p>
          Para la resolución de cualquier discrepancia o conflicto originado por la utilización de este sitio web, resulta aplicable la normativa española vigente. Ambas partes (Usuario y Empresa) se someten expresamente a la jurisdicción y competencia técnica de los Juzgados y Tribunales competentes de la ciudad de <strong>Burgos (España)</strong>, renunciando expresamente a cualquier otro fuero que pudiera corresponderles.
        </p>
      </div>
    </div>
  );
};

const GraciasPage = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="w-full bg-[#F6F5F0] font-sans pb-20 min-h-[70vh] flex flex-col items-center justify-center p-8 text-center pt-32">
      <CheckCircle2 size={80} className="text-[#D4A017] mb-6 mx-auto" />
      <h1 className="text-4xl md:text-5xl font-serif text-[#1A3F5C] mb-4">¡Gracias por contactarnos!</h1>
      <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
        Su mensaje ha sido enviado correctamente. Nuestro equipo revisará su información y nos pondremos en contacto con usted a la menor brevedad posible.
      </p>
      <button 
        onClick={() => { setCurrentPage('home'); window.scrollTo(0,0); }}
        className="bg-[#1A3F5C] text-white px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-[#D4A017] transition-colors rounded-sm shadow-md"
      >
        Volver al Inicio
      </button>
    </div>
  );
};

export default function App() {
  const heroImages = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    "http://carlosv161.sg-host.com/wp-content/uploads/2026/04/reforma-salon-lujo-interiorismo-burgos.jpg.png",
    "http://carlosv161.sg-host.com/wp-content/uploads/2026/04/FondoBano.png-scaled.png"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentBlogSlide, setCurrentBlogSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPost, setSelectedPost] = useState<any>(null);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [targetService, setTargetService] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const blogPosts = [
    {
      id: 1,
      image: "http://carlosv161.sg-host.com/wp-content/uploads/2026/04/reforma-salon-lujo-interiorismo-burgos.jpg.png",
      title: "Guía de Reformas Integrales en Burgos 2024: Consejos y Precios Actualizados",
      date: "abril 18, 2026",
      excerpt: "Todo lo que necesitas saber antes de iniciar tu reforma integral en Burgos: desde materiales para el frío hasta presupuestos reales."
    },
    {
      id: 2,
      image: "http://carlosv161.sg-host.com/wp-content/uploads/2026/04/reforma-salon-burgos.jpg.png",
      title: "5 Ideas para Reformar Cocinas Pequeñas en Burgos y Ganar Espacio Real",
      date: "abril 19, 2026",
      excerpt: "Optimiza cada metro cuadrado de tu cocina con soluciones inteligentes de diseño y almacenamiento en Burgos."
    },
    {
      id: 3,
      image: "http://carlosv161.sg-host.com/wp-content/uploads/2026/04/reformas-integrales-burgos-diseno-madera-industrial.jpg-e1775728482725.png",
      title: "Ayudas y Subvenciones para Eficiencia Energética en Viviendas de Burgos",
      date: "abril 20, 2026",
      excerpt: "Descubre cómo ahorrar en la reforma de tu casa aprovechando las últimas subvenciones para aislamiento térmico en la capital.",
      category: "Ayudas"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=800",
      title: "Cómo elegir los materiales adecuados para tu reforma de cocina",
      date: "abril 12, 2026",
      excerpt: "La elección del material de la encimera y los muebles es crucial para la durabilidad y el estilo de tu cocina ...",
      category: "Materiales"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800",
      title: "Licencias de obra en Burgos: Paso a paso para no perderse",
      date: "abril 15, 2026",
      excerpt: "Cualquier reforma integral requiere trámites administrativos. Te explicamos los pasos en el Ayuntamiento de Burgos ...",
      category: "Consejos"
    }
  ];

  useEffect(() => {
    const blogTimer = setInterval(() => {
      setCurrentBlogSlide((prev) => (prev + 1) % blogPosts.length);
    }, 4000);
    return () => clearInterval(blogTimer);
  }, []);

  const searchIndex = [
    { title: "Inicio", type: "Página", action: () => setCurrentPage('home') },
    { title: "Sobre nosotros (Nosotros)", type: "Página", action: () => setCurrentPage('about') },
    { title: "Servicios", type: "Página", action: () => setCurrentPage('services') },
    { title: "Proyectos", type: "Página", action: () => setCurrentPage('projects') },
    { title: "Presupuestos", type: "Página", action: () => setCurrentPage('presupuestos') },
    { title: "Blog", type: "Página", action: () => setCurrentPage('blog') },
    
    // Servicios
    { title: "Reformas Integrales", type: "Servicio", action: () => setCurrentPage('services') },
    { title: "Diseño y Reforma de Cocinas", type: "Servicio", action: () => setCurrentPage('services') },
    { title: "Reforma de Baños", type: "Servicio", action: () => setCurrentPage('services') },
    { title: "Suelos y Parqué", type: "Servicio", action: () => setCurrentPage('services') },

    // Proyectos
    { title: "Salón con Parquet", type: "Proyecto", action: () => setCurrentPage('projects') },
    { title: "Cocina Contemporánea", type: "Proyecto", action: () => setCurrentPage('projects') },
    { title: "Baño de Mármol", type: "Proyecto", action: () => setCurrentPage('projects') },
    { title: "Reforma Integral Ático", type: "Proyecto", action: () => setCurrentPage('projects') },
    { title: "Revestimiento SATE", type: "Proyecto", action: () => setCurrentPage('projects') },
    { title: "Salón Minimalista", type: "Proyecto", action: () => setCurrentPage('projects') },

    // Blog
    ...blogPosts.map(post => ({
      title: post.title,
      type: "Blog",
      action: () => {
        setCurrentPage('blog');
        setSelectedPost(post);
        window.scrollTo(0,0);
      }
    }))
  ];

  const searchResults = searchQuery.trim().length > 0 
    ? searchIndex.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 6)
    : [];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Global LocalBusiness SEO Schema */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            "name": "Burgos Reformas Integrales",
            "image": "http://carlosv161.sg-host.com/wp-content/uploads/2026/03/ae2541f7-f2b3-4d84-b31c-e905934bf118-scaled-e1775806345162.png",
            "@id": "https://burgosreformas.example.com",
            "url": "https://burgosreformas.example.com",
            "telephone": "+34690703950",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "C/ Santander",
              "addressLocality": "Burgos",
              "postalCode": "09003",
              "addressCountry": "ES"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 42.3439,
              "longitude": -3.6969
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "19:00"
            }
          })
        }} 
      />

      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 w-full bg-[#1A3F5C] text-white shadow-lg">
        {/* Navigation Bar */}
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          
          {/* Left Side: Logo + Nav */}
          <div className="flex items-center gap-6 lg:gap-10">
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
            >
              <div className="space-y-1.5">
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-4 h-0.5 bg-white"></div>
              </div>
            </button>

            {/* Logo Area */}
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); window.scrollTo(0,0); }} className="flex items-center">
              <img 
                src="http://carlosv161.sg-host.com/wp-content/uploads/2026/03/ae2541f7-f2b3-4d84-b31c-e905934bf118-scaled-e1775806345162.png" 
                alt="Burgos Reformas Integrales" 
                className="h-8 md:h-12 object-contain"
                referrerPolicy="no-referrer"
              />
            </a>

            <nav className="hidden lg:flex items-center gap-6 lg:gap-8 text-[15px] font-medium text-white tracking-wide uppercase font-open-sans whitespace-nowrap">
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); window.scrollTo(0,0); }} className={`hover:text-brand-accent transition-colors ${currentPage === 'home' ? 'text-brand-accent' : ''}`}>INICIO</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); window.scrollTo(0,0); }} className={`hover:text-brand-accent transition-colors ${currentPage === 'about' ? 'text-brand-accent' : ''}`}>NOSOTROS</a>
              
              <div className="relative group">
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('services'); window.scrollTo(0,0); }} className={`flex items-center gap-1 hover:text-brand-accent transition-colors py-2 ${currentPage === 'services' ? 'text-brand-accent' : ''}`}>
                  SERVICIOS
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </a>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="bg-white shadow-xl border-t-2 border-[#D4A017] rounded-b-md flex flex-col min-w-[200px] overflow-hidden">
                    <a href="#" onClick={(e) => { e.preventDefault(); setTargetService("Reformas Integrales en Burgos"); setCurrentPage('services'); window.scrollTo(0,0); }} className="px-6 py-4 text-gray-800 text-[13px] hover:bg-[#F6F5F0] hover:text-[#D4A017] transition-colors border-b border-gray-100">Reformas Integrales</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setTargetService("Reforma de Cocinas en Burgos"); setCurrentPage('services'); window.scrollTo(0,0); }} className="px-6 py-4 text-gray-800 text-[13px] hover:bg-[#F6F5F0] hover:text-[#D4A017] transition-colors border-b border-gray-100">Diseño de cocinas</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setTargetService("Reforma de Baños en Burgos"); setCurrentPage('services'); window.scrollTo(0,0); }} className="px-6 py-4 text-gray-800 text-[13px] hover:bg-[#F6F5F0] hover:text-[#D4A017] transition-colors border-b border-gray-100">Reforma de baños</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setTargetService("Suelos y Parqué"); setCurrentPage('services'); window.scrollTo(0,0); }} className="px-6 py-4 text-gray-800 text-[13px] hover:bg-[#F6F5F0] hover:text-[#D4A017] transition-colors">Suelos y Parqué</a>
                  </div>
                </div>
              </div>

              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('projects'); window.scrollTo(0,0); }} className={`hover:text-brand-accent transition-colors ${currentPage === 'projects' ? 'text-brand-accent' : ''}`}>PROYECTOS</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('presupuestos'); window.scrollTo(0,0); }} className={`hover:text-brand-accent transition-colors ${currentPage === 'presupuestos' ? 'text-brand-accent' : ''}`}>PRESUPUESTOS</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('blog'); window.scrollTo(0,0); }} className={`hover:text-brand-accent transition-colors ${currentPage === 'blog' ? 'text-brand-accent' : ''}`}>BLOG</a>
            </nav>
          </div>
          
          {/* Right Side: Search */}
          <div className="flex items-center ml-auto">
            <div className="relative">
              <input 
                type="text" 
                placeholder="¿Qué Buscas?" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                className="bg-white/10 text-white placeholder-gray-300 border border-white/20 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:border-brand-accent focus:bg-white/20 transition-all w-32 sm:w-48 lg:w-64"
              />
              <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
              
              <AnimatePresence>
                {isSearchFocused && searchQuery.trim().length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-3 w-72 lg:w-80 bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden z-[100] flex flex-col"
                  >
                    {searchResults.length > 0 ? (
                      searchResults.map((result, idx) => (
                        <div 
                          key={idx} 
                          onClick={() => {
                            result.action();
                            setSearchQuery('');
                            setIsSearchFocused(false);
                          }}
                          className="px-4 py-3 hover:bg-gray-50 border-b border-gray-50 hover:border-l-4 hover:border-l-[#D4A017] cursor-pointer flex flex-col transition-all last:border-b-0"
                        >
                          <span className="text-[10px] font-bold text-[#D4A017] uppercase tracking-widest mb-1">{result.type}</span>
                          <span className="text-sm font-medium text-[#1A3F5C] leading-snug line-clamp-2">{result.title}</span>
                        </div>
                      ))
                    ) : (
                      <div className="px-5 py-8 text-center flex flex-col items-center justify-center">
                        <Search size={24} className="text-gray-300 mb-3" />
                        <p className="text-sm text-gray-500 font-medium">No se encontraron resultados para</p>
                        <p className="text-sm text-[#1A3F5C] font-bold mt-1">"{searchQuery}"</p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>

      {/* --- MOBILE MENU DRAWER --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            {/* Drawer */}
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 left-0 bottom-0 w-[85%] max-w-sm bg-[#1A3F5C] shadow-2xl flex flex-col p-8"
            >
              <div className="flex justify-between items-center mb-12">
                <img 
                  src="http://carlosv161.sg-host.com/wp-content/uploads/2026/03/ae2541f7-f2b3-4d84-b31c-e905934bf118-scaled-e1775806345162.png" 
                  alt="Logo" 
                  className="h-10 object-contain"
                />
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2">
                  <X size={28} />
                </button>
              </div>

              <nav className="flex flex-col gap-6 text-lg font-medium text-white tracking-wide uppercase font-open-sans">
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); setIsMobileMenuOpen(false); window.scrollTo(0,0); }} className={`hover:text-brand-accent transition-colors ${currentPage === 'home' ? 'text-brand-accent' : ''}`}>INICIO</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); setIsMobileMenuOpen(false); window.scrollTo(0,0); }} className={`hover:text-brand-accent transition-colors ${currentPage === 'about' ? 'text-brand-accent' : ''}`}>NOSOTROS</a>
                
                <div className="flex flex-col gap-4">
                  <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('services'); setIsMobileMenuOpen(false); window.scrollTo(0,0); }} className={`hover:text-brand-accent transition-colors ${currentPage === 'services' ? 'text-brand-accent' : ''}`}>SERVICIOS</a>
                  <div className="flex flex-col gap-3 pl-4 border-l border-white/10">
                    <a href="#" onClick={(e) => { e.preventDefault(); setTargetService("Reformas Integrales en Burgos"); setCurrentPage('services'); setIsMobileMenuOpen(false); window.scrollTo(0,0); }} className="text-sm text-white/70 hover:text-brand-accent transition-colors">• Reformas Integrales</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setTargetService("Reforma de Cocinas en Burgos"); setCurrentPage('services'); setIsMobileMenuOpen(false); window.scrollTo(0,0); }} className="text-sm text-white/70 hover:text-brand-accent transition-colors">• Reforma de Cocinas</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setTargetService("Reforma de Baños en Burgos"); setCurrentPage('services'); setIsMobileMenuOpen(false); window.scrollTo(0,0); }} className="text-sm text-white/70 hover:text-brand-accent transition-colors">• Reforma de Baños</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setTargetService("Suelos y Parqué"); setCurrentPage('services'); setIsMobileMenuOpen(false); window.scrollTo(0,0); }} className="text-sm text-white/70 hover:text-brand-accent transition-colors">• Suelos y Parqué</a>
                  </div>
                </div>

                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('projects'); setIsMobileMenuOpen(false); window.scrollTo(0,0); }} className={`hover:text-brand-accent transition-colors ${currentPage === 'projects' ? 'text-brand-accent' : ''}`}>PROYECTOS</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('presupuestos'); setIsMobileMenuOpen(false); window.scrollTo(0,0); }} className={`hover:text-brand-accent transition-colors ${currentPage === 'presupuestos' ? 'text-brand-accent' : ''}`}>PRESUPUESTOS</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('blog'); setIsMobileMenuOpen(false); window.scrollTo(0,0); }} className={`hover:text-brand-accent transition-colors ${currentPage === 'blog' ? 'text-brand-accent' : ''}`}>BLOG</a>
              </nav>

              <div className="mt-auto pt-8 border-t border-white/10 text-white/50 text-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Phone size={16} />
                  <span className="text-white">947 10 20 30</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} />
                  <span className="text-white">Burgos, España</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {currentPage === 'blog' && (
        <BlogPage 
          blogPosts={blogPosts} 
          onReadMore={(post) => setSelectedPost(post)} 
        />
      )}

      {currentPage === 'home' ? (
        <>
          {/* --- HERO SECTION --- */}
      <section className="relative min-h-[700px] lg:min-h-[80vh] py-24 mb-16 flex items-center justify-center overflow-hidden">
        {/* Carousel Backgrounds */}
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
              style={{ backgroundImage: `url('${img}')` }}
            />
          </div>
        ))}
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-brand-dark/75 z-0"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-4">
          <div className="mb-8 flex items-center justify-center">
            <img 
              src="http://carlosv161.sg-host.com/wp-content/uploads/2026/03/ae2541f7-f2b3-4d84-b31c-e905934bf118-scaled-e1775806345162.png" 
              alt="Burgos Reformas Integrales" 
              className="h-20 md:h-28 object-contain drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <h2 className="text-[#D4A017] font-light font-montserrat tracking-[3px] text-[20px] uppercase mb-8 ml-[3px]">
            Reformas Integrales
          </h2>
          <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-12 drop-shadow-lg">
            Expertos en <span className="text-[#D4A017]">Reformas Integrales</span> en Burgos
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-sans font-light mb-14 max-w-2xl mx-auto leading-relaxed">
            Transformamos tu vivienda en el hogar que siempre soñaste. Presupuestos cerrados, plazos garantizados y acabados de máxima calidad para tu reforma en Burgos.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-16 justify-center mt-6">
            <button 
              onClick={() => { setCurrentPage('presupuestos'); window.scrollTo(0,0); }}
              className="bg-[#D4A017] text-white px-10 py-4 font-bold hover:bg-[#B3802A] transition-all uppercase tracking-wider text-sm shadow-xl"
            >
              Solicitar Presupuesto Gratis
            </button>
            <button 
              onClick={() => { setCurrentPage('projects'); window.scrollTo(0,0); }}
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 font-bold hover:bg-white/20 transition-all uppercase tracking-wider text-sm shadow-xl"
            >
              Nuestros Proyectos
            </button>
          </div>
        </div>
      </section>

      {/* --- ABOUT US SECTION --- */}
      <section id="sobre-nosotros" className="bg-[#F8F7F3] relative flex flex-col lg:flex-row items-stretch overflow-hidden">
        
        {/* Decorative Background Shape */}
        <div className="absolute top-0 left-0 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] bg-[#EAE2D1] z-0 rounded-br-full"></div>

        {/* Left Content Half */}
        <div className="w-full lg:w-[60%] flex items-center justify-start relative z-10">
          <div className="w-full max-w-[800px] px-6 md:pl-12 lg:pl-16 xl:pl-24 pr-6 lg:pr-10 py-20 lg:py-28">
            <h3 className="text-[#BA9236] font-normal font-sans tracking-[0.2em] text-[13px] md:text-[14px] uppercase mb-6">
              Sobre Nosotros
            </h3>
            <h2 className="text-[2.2rem] md:text-[2.8rem] lg:text-[3rem] leading-[1.15] font-serif text-[#163554] mb-8">
              Tu Empresa de Reformas en Burgos de Confianza
            </h2>
            <p className="text-[#B08A2A] mb-8 text-[16px] md:text-[18px] font-sans font-medium">
              Especialistas en la revalorización de viviendas particulares con más de 15 años de experiencia.
            </p>
            <p className="text-gray-600 mb-10 text-[15px] md:text-[16px] font-sans font-light leading-relaxed">
              En Burgos Reformas Integrales entendemos que tu casa es tu mayor inversión. Por eso, nos alejamos de las soluciones genéricas para ofrecerte una **reforma integral personalizada**, donde el cumplimiento de plazos y la transparencia en el presupuesto son nuestra seña de identidad. Desde el centro histórico hasta barrios como Gamonal o el G-3, somos el referente en calidad y acabados profesionales.
            </p>

            <div className="flex flex-col md:flex-row gap-5 mb-10">
              <div className="flex-1 flex items-center gap-4 border border-[#B08A2A] px-6 py-4 rounded-md bg-transparent">
                <div className="text-[#B08A2A]"><Home strokeWidth={2.5} size={28} /></div>
                <div>
                  <h4 className="font-sans text-[#2B2B2B] text-[15px] md:text-[16px] leading-snug font-normal">Trabajo Inteligente y Ético</h4>
                </div>
              </div>
              <div className="flex-1 flex items-center gap-4 border border-[#B08A2A] px-6 py-4 rounded-md bg-transparent">
                <div className="text-[#B08A2A]"><Lightbulb strokeWidth={2.5} size={28} /></div>
                <div>
                  <h4 className="font-sans text-[#2B2B2B] text-[15px] md:text-[16px] leading-snug font-normal">Mejores Estándares de Calidad</h4>
                </div>
              </div>
            </div>

            <p className="text-[#333333] text-[16px] md:text-[17px] font-light font-sans leading-[1.8] mb-12">
              Nuestra dedicación y experiencia en <strong className="font-medium text-black">acabados premium</strong> nos permiten crear <strong className="font-medium text-black">espacios únicos</strong> y duraderos para <strong className="font-medium text-black">hogares y negocios</strong>
            </p>

            <div className="flex flex-wrap items-center gap-8">
              <button 
                onClick={() => { setCurrentPage('about'); window.scrollTo(0,0); }}
                className="bg-[#D4A017] text-white px-8 py-3.5 font-sans font-medium hover:bg-[#A57C1B] transition-colors uppercase text-[14px] tracking-wider"
              >
                Saber más
              </button>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#D4A017] rounded-full flex items-center justify-center text-white">
                  <Phone size={22} fill="currentColor" strokeWidth={0} />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#333] text-[13px] font-sans mb-0">Llame en cualquier momento</p>
                  <p className="text-black font-medium text-[20px] font-sans leading-tight">+34 947 10 20 30</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Half */}
        <div className="hidden lg:block lg:w-[40%] relative pointer-events-none">
          <img 
            src="http://carlosv161.sg-host.com/wp-content/uploads/2026/04/lolololo.png"  
            alt="Sobre nosotros interior" 
            className="absolute right-0 top-0 bottom-0 w-[180%] xl:w-[200%] max-w-none h-full object-contain object-right"
          />
        </div>

        {/* Mobile Right Image Half */}
        <div className="block lg:hidden w-full relative h-[450px] sm:h-[600px] mb-12">
          <img 
            src="http://carlosv161.sg-host.com/wp-content/uploads/2026/04/lolololo.png" 
            alt="Sobre nosotros interior" 
            className="absolute inset-0 w-full h-full object-contain object-center scale-[1.15]"
          />
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="container mx-auto px-4 max-w-[1100px]">
          <div className="text-center mb-12">
            <h3 className="text-[#D4A017] font-medium tracking-widest text-sm uppercase mb-4">Nuestros Servicios</h3>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Los servicios que ofrecemos</h2>
            <button 
              onClick={() => { setCurrentPage('services'); window.scrollTo(0,0); }}
              className="bg-[#D4A017] text-white px-8 py-3 font-medium hover:bg-opacity-90 transition-colors uppercase tracking-wider text-sm"
            >
              Ver todos los servicios
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div onClick={() => { setTargetService("Reforma de Cocinas en Burgos"); setCurrentPage('services'); window.scrollTo(0,0); }} className="bg-white text-gray-800 flex flex-col group cursor-pointer shadow-lg rounded-sm">
              <div className="relative h-[220px] overflow-hidden">
                <img 
                  src="http://carlosv161.sg-host.com/wp-content/uploads/2026/03/reformas-integrales-burgos-cocina.jpg" 
                  alt="Diseño y reforma de cocinas" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 right-0 bg-[#1A3F5C] text-brand-accent p-4 flex items-center justify-center">
                  <UtensilsCrossed size={28} />
                </div>
              </div>
              <div className="p-8 text-center flex flex-col items-center flex-grow">
                <h4 className="text-[20px] font-sans font-bold mb-4 uppercase text-[#1A3F5C] leading-snug">Diseño de cocinas</h4>
                <p className="text-gray-600 text-[15px] leading-relaxed font-sans mt-auto">
                  Transformamos tu cocina adaptándonos a tus necesidades y rutinas.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div onClick={() => { setTargetService("Reforma de Baños en Burgos"); setCurrentPage('services'); window.scrollTo(0,0); }} className="bg-white text-gray-800 flex flex-col group cursor-pointer shadow-lg rounded-sm">
              <div className="relative h-[220px] overflow-hidden">
                <img 
                  src="http://carlosv161.sg-host.com/wp-content/uploads/2026/03/reformas-burgos-banos-obra.jpg" 
                  alt="Reforma de baños" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 right-0 bg-[#1A3F5C] text-brand-accent p-4 flex items-center justify-center">
                  <Bath size={28} />
                </div>
              </div>
              <div className="p-8 text-center flex flex-col items-center flex-grow">
                <h4 className="text-[20px] font-sans font-bold mb-4 uppercase text-[#1A3F5C] leading-snug">Reforma de baños</h4>
                <p className="text-gray-600 text-[15px] leading-relaxed font-sans mt-auto">
                  Renueva tu baño con diseños actuales y platos de ducha accesibles.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div onClick={() => { setTargetService("Reformas Integrales en Burgos"); setCurrentPage('services'); window.scrollTo(0,0); }} className="bg-white text-gray-800 flex flex-col group cursor-pointer shadow-lg rounded-sm">
              <div className="relative h-[220px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200" 
                  alt="Reformas integrales" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 right-0 bg-[#1A3F5C] text-brand-accent p-4 flex items-center justify-center">
                  <Building size={28} />
                </div>
              </div>
              <div className="p-8 text-center flex flex-col items-center flex-grow">
                <h4 className="text-[20px] font-sans font-bold mb-4 uppercase text-[#1A3F5C] leading-snug">Reformas Integrales</h4>
                <p className="text-gray-600 text-[15px] leading-relaxed font-sans mt-auto">
                  Soluciones completas para toda tu vivienda o local comercial.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div onClick={() => { setTargetService("Suelos y Parqué"); setCurrentPage('services'); window.scrollTo(0,0); }} className="bg-white text-gray-800 flex flex-col group cursor-pointer shadow-lg rounded-sm">
              <div className="relative h-[220px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1200" 
                  alt="Suelos y Parqué" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 right-0 bg-[#1A3F5C] text-brand-accent p-4 flex items-center justify-center">
                  <Hammer size={28} />
                </div>
              </div>
              <div className="p-8 text-center flex flex-col items-center flex-grow">
                <h4 className="text-[20px] font-sans font-bold mb-4 uppercase text-[#1A3F5C] leading-snug">Suelos y Parqué</h4>
                <p className="text-gray-600 text-[15px] leading-relaxed font-sans mt-auto">
                  Instalación de tarimas, parqué, suelos laminados y cerámicos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section className="py-24 bg-[#F4F3EE]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10">
            {/* Left Header */}
            <div className="md:w-1/2">
              <h3 className="text-[#D4A017] font-light font-montserrat tracking-[3px] text-lg uppercase mb-6">
                PROYECTOS DESTACADOS
              </h3>
              <button 
                onClick={() => { setCurrentPage('projects'); window.scrollTo(0,0); }}
                className="bg-[#D4A017] text-white px-8 py-4 font-medium hover:bg-opacity-90 transition-colors shadow-sm text-left leading-snug"
              >
                Echa un vistazo a nuestros<br/>últimos proyectos
              </button>
            </div>
            
            {/* Right Header text */}
            <div className="md:w-1/2 md:pt-4">
              <p className="text-gray-600 text-lg leading-relaxed font-sans font-light">
                Calidad en cada detalle: Utilizamos materiales premium<br className="hidden lg:block" />
                para asegurar que tu reforma sea para toda la vida.<br className="hidden lg:block" />
                Diseños exclusivos y acabados impecables adaptados al<br className="hidden lg:block" />
                estilo de vida de Burgos.
              </p>
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FlipProjectCard 
              img="http://carlosv161.sg-host.com/wp-content/uploads/2026/04/reforma-salon-moderno-burgos-e1775653905799.jpg" 
              title="Salones Cálidos en Burgos"
            />
            <FlipProjectCard 
              img="http://carlosv161.sg-host.com/wp-content/uploads/2026/04/reforma-bano-microcemento-burgos.jpg-e1775653954197.png" 
              title="Reformas de baños en Burgos"
            />
            <FlipProjectCard 
              img="http://carlosv161.sg-host.com/wp-content/uploads/2026/04/ducha-diseno-vistas-reforma-burgos.jpg-e1775654006102.png" 
              title="Especialistas de platos de ducha"
            />
            <FlipProjectCard 
              img="http://carlosv161.sg-host.com/wp-content/uploads/2026/04/reforma-bano-marmol-lujo-burgos.jpg-e1775654040183.png" 
              title="Mármol y acabados de lujo"
            />
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US SECTION --- */}
      <section id="why-us" className="bg-[#F4F3EE] py-20 lg:py-28 px-4 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            
            {/* Left Image */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] md:min-h-[500px]">
              <img 
                src="http://carlosv161.sg-host.com/wp-content/uploads/2026/04/jojojo.png" 
                alt="Por qué elegirnos Cocina Diseño" 
                className="w-full h-full object-contain object-center scale-110 lg:scale-[1.2] lg:-translate-x-10 transition-transform"
              />
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2">
                <h3 className="text-[#C19B44] font-normal font-sans tracking-[0.2em] text-[13px] md:text-[14px] uppercase mb-6">
                  Por Qué Elegirnos
                </h3>
                <h2 className="text-[2.2rem] md:text-[2.8rem] lg:text-[3rem] leading-[1.15] font-serif text-[#163554] mb-10">
                  La Empresa de Reformas en Burgos que Cumple lo que Promete
                </h2>

                <div className="space-y-10 mb-12">
                  {/* Point 1 */}
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-[#1A3F5C] text-white flex items-center justify-center shadow-md">
                        <CheckCircle2 size={24} strokeWidth={2.5} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[17px] md:text-[19px] font-sans font-medium text-[#1A3F5C] mb-3">
                        Presupuesto Cerrado y Transparente
                      </h4>
                      <p className="text-gray-600 font-sans font-light leading-[1.8] text-[15px] md:text-[16px]">
                        Te entregamos un presupuesto detallado para tu reforma en Burgos. Sin sombras, sin sorpresas de última hora. Lo que firmamos es lo que pagas.
                      </p>
                    </div>
                  </div>

                  {/* Point 2 */}
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="text-[#1A3F5C]">
                        <Clock size={34} strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[17px] md:text-[19px] font-sans font-medium text-[#1A3F5C] mb-3">
                        Compromiso de Plazos por Contrato
                      </h4>
                      <p className="text-gray-600 font-sans font-light leading-[1.8] text-[15px] md:text-[16px]">
                        Sabemos que el tiempo es oro. Por eso, garantizamos la fecha de entrega de tu vivienda para que puedas planificar tu mudanza con total seguridad.
                      </p>
                    </div>
                  </div>
                </div>

              <div className="lg:ml-16">
                <button 
                  onClick={() => { setCurrentPage('about'); window.scrollTo(0,0); }}
                  className="bg-[#D4A017] text-white px-8 py-3.5 font-sans font-medium hover:bg-[#A57C1B] transition-colors uppercase text-[14px] tracking-wider"
                >
                  Saber más
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer Beige */}
      <div className="w-full h-16 lg:h-32 bg-[#F4F3EE]"></div>

      {/* --- BLOG SECTION --- */}
      <section id="blog-section" className="relative lg:h-[850px] py-16 lg:py-0 flex flex-col items-center overflow-hidden bg-[#4A4541]">
        {/* Split Left Background for Desktop */}
        <div className="absolute top-0 left-0 w-full lg:w-[45%] h-full bg-[#F4F3EE] shadow-xl z-0"></div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10 h-full flex flex-col lg:flex-row items-center">
            
          {/* Left Content */}
          <div className="w-full lg:w-[45%] lg:pr-20 pt-12 pb-6 lg:py-24">
            <h3 className="text-[#D4A017] font-bold font-montserrat tracking-[3px] text-[12px] md:text-[15px] uppercase mb-4 opacity-90">
              Blog & Tendencias
            </h3>
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-serif text-[#1A3F5C] leading-[1.25] mb-6 tracking-tight">
              Últimas Noticias<br className="hidden md:block" /> y Artículos
            </h2>
            <p className="text-gray-600 font-sans font-light leading-relaxed text-[15px] md:text-[16px] max-w-xl opacity-80">
              Tu guía experta en reformas integrales y construcción en Burgos. Compartimos consejos prácticos, tendencias y guías reales para revalorizar tu vivienda con plazos garantizados.
            </p>
          </div>

          {/* Right Carousel */}
          <div className="w-full lg:w-[60%] flex items-center py-6 lg:py-0 relative lg:pl-10">
            {/* Desktop Carousel Container */}
            <div className="hidden lg:block w-full overflow-hidden">
              <div 
                className="flex gap-8 transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentBlogSlide * 350}px)` }}
              >
                {[...blogPosts, ...blogPosts].map((post, idx) => (
                  <div key={idx} className="bg-white min-w-[320px] max-w-[320px] shadow-2xl flex-shrink-0 flex flex-col group hover:-translate-y-2 transition-all duration-500">
                    <div className="h-[240px] overflow-hidden grayscale-[30%] group-hover:grayscale-0 transition-all duration-700">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="p-8 flex-grow flex flex-col border-b-4 border-transparent group-hover:border-[#D4A017] transition-all">
                      <h4 className="font-serif text-[18px] font-medium leading-snug text-[#1A3F5C] mb-4">
                        {post.title}
                      </h4>
                      <div className="flex items-center text-[10px] text-gray-400 gap-3 mb-5 uppercase tracking-widest font-bold">
                        <div className="flex items-center gap-1.5"><CalendarDays size={12} className="text-[#D4A017]" /> {post.date}</div>
                        <span>•</span>
                        <div className="flex items-center gap-1.5"><Folder size={12} className="text-[#D4A017]" /> {post.category || 'Reforma'}</div>
                      </div>
                      <p className="text-gray-500 font-sans font-light text-[14px] leading-relaxed mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <button 
                         onClick={() => { setSelectedPost(post); setCurrentPage('blog'); }}
                         className="text-[#D4A017] text-[12px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 hover:gap-4 transition-all group/btn mt-auto"
                      >
                        Leer más <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Horizontal Scroll with Snap */}
            <div className="lg:hidden w-screen -mx-6 px-12 overflow-x-auto flex gap-6 snap-x snap-mandatory no-scrollbar pb-12 outline-none">
              {blogPosts.map((post, idx) => (
                <div key={idx} className="bg-white min-w-[280px] w-[75vw] shadow-2xl flex-shrink-0 flex flex-col snap-center rounded-sm">
                  <div className="h-[220px] overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <h4 className="font-serif text-[18px] font-medium leading-tight text-[#1A3F5C] mb-4">
                      {post.title}
                    </h4>
                    <div className="flex items-center text-[10px] text-gray-400 gap-2 mb-4 uppercase tracking-[0.1em] font-bold">
                      <CalendarDays size={12} className="text-[#D4A017]" /> {post.date}
                      <span className="mx-1 opacity-30">•</span>
                      <Folder size={12} className="text-[#D4A017]" /> {post.category || 'Reforma'}
                    </div>
                    <p className="text-gray-500 font-sans font-light text-[14px] leading-relaxed mb-8 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <button 
                       onClick={() => { setSelectedPost(post); setCurrentPage('blog'); }}
                       className="text-[#D4A017] text-[12px] font-extrabold uppercase tracking-widest flex items-center gap-2 mt-auto self-start"
                    >
                      Ver Artículo <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
              {/* Extra spacing at the end for mobile scroll */}
              <div className="min-w-[40px] h-full shrink-0"></div>
            </div>
          </div>

        </div>
      </section>
      </>
      ) : currentPage === 'about' ? (
        <AboutPage setCurrentPage={setCurrentPage} />
      ) : currentPage === 'services' ? (
        <ServicesPage setCurrentPage={setCurrentPage} targetService={targetService} clearTargetService={() => setTargetService(null)} />
      ) : currentPage === 'projects' ? (
        <ProjectsPage />
      ) : currentPage === 'presupuestos' ? (
        <PresupuestosPage setCurrentPage={setCurrentPage} />
      ) : currentPage === 'gracias' ? (
        <GraciasPage setCurrentPage={setCurrentPage} />
      ) : currentPage === 'politica' ? (
        <PoliticaPrivacidadPage />
      ) : currentPage === 'aviso' ? (
        <AvisoLegalPage />
      ) : null}

      {/* --- FOOTER --- */}
      <footer className="bg-[#1A3F5C] text-[#E0E0E0] pt-20 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Column 1: Brand & Info */}
            <div className="flex flex-col gap-6">
              <img 
                src="http://carlosv161.sg-host.com/wp-content/uploads/2026/03/ae2541f7-f2b3-4d84-b31c-e905934bf118-scaled-e1775806345162.png" 
                alt="Burgos Reformas Integrales" 
                className="h-14 mb-0 object-contain drop-shadow-xl" 
                referrerPolicy="no-referrer"
              />
              <p className="text-white/60 font-sans font-light leading-relaxed text-[15px]">
                Somos el referente en **reformas integrales en Burgos**. Nos especializamos en transformar viviendas particulares con acabados profesionales, puntualidad y transparencia total en los costes.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D4A017] transition-colors"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D4A017] transition-colors"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D4A017] transition-colors"><Linkedin size={18} /></a>
              </div>
            </div>

            {/* Column 2: Nuestros Servicios */}
            <div className="lg:pl-8">
              <h3 className="text-[#A57C1B] font-medium tracking-[2px] text-[15px] uppercase mb-10 mt-2">
                Nuestros Servicios
              </h3>
              <ul className="space-y-6 font-sans text-[16px] font-medium transition-colors">
                <li><a href="#" onClick={(e) => { e.preventDefault(); setTargetService("Reformas Integrales en Burgos"); setCurrentPage('services'); window.scrollTo(0,0); }} className="hover:text-[#DBA41B] transition-colors">Reformas Integrales</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setTargetService("Reforma de Cocinas en Burgos"); setCurrentPage('services'); window.scrollTo(0,0); }} className="hover:text-[#DBA41B] transition-colors">Reformas de Cocinas</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setTargetService("Reforma de Baños en Burgos"); setCurrentPage('services'); window.scrollTo(0,0); }} className="hover:text-[#DBA41B] transition-colors">Reformas de Baños</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('projects'); window.scrollTo(0,0); }} className="hover:text-[#DBA41B] transition-colors">Proyectos Realizados</a></li>
              </ul>
            </div>

            {/* Column 3: Zonas de Actuación */}
            <div>
              <h3 className="text-[#A57C1B] font-medium tracking-[2px] text-[15px] uppercase mb-10 mt-2">
                Zonas en Burgos
              </h3>
              <p className="text-white/60 font-sans text-[14px] leading-relaxed mb-6">
                Realizamos reformas en los principales barrios de la ciudad:
              </p>
              <ul className="grid grid-cols-2 gap-4 text-white/50 text-[11px] uppercase tracking-widest font-bold">
                <li>• GAMONAL</li>
                <li>• EL G-3</li>
                <li>• CENTRO</li>
                <li>• CASTAÑARES</li>
                <li>• VILLÍMAR</li>
                <li>• UNIVERSIDAD</li>
              </ul>
            </div>

            {/* Column 4: Contacto Directo */}
            <div>
              <h3 className="text-[#A57C1B] font-medium tracking-[2px] text-[15px] uppercase mb-10 mt-2">
                Contacto Directo
              </h3>
              <ul className="space-y-6 font-sans text-[15px] font-light">
                <li className="flex items-center gap-4">
                  <MapPin className="text-[#DBA41B]" size={20} strokeWidth={2.5} />
                  <span>Burgos Capital y Provincia</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="text-[#DBA41B]" size={20} strokeWidth={2.5} />
                  <span>947 10 20 30</span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="text-[#DBA41B]" size={20} strokeWidth={2.5} />
                  <span>info@burgosreformas.com</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </footer>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedPost(null)}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-none shadow-2xl z-10"
          >
            <button 
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 p-2 bg-white/20 hover:bg-[#D4A017] text-white transition-colors z-20"
            >
              <X size={24} />
            </button>
            
            <div className="h-[300px] md:h-[400px] overflow-hidden relative">
              <img src={selectedPost.image} className="w-full h-full object-cover" alt={selectedPost.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <span className="bg-[#D4A017] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 mb-4 inline-block">
                  {selectedPost.category || 'Reforma'}
                </span>
                <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                  {selectedPost.title}
                </h2>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="flex items-center gap-6 text-gray-400 text-xs uppercase tracking-widest font-bold mb-8 pb-8 border-b border-gray-100">
                <div className="flex items-center gap-2"><User size={14} className="text-[#D4A017]" /> Haus Hero</div>
                <div className="flex items-center gap-2"><CalendarDays size={14} className="text-[#D4A017]" /> {selectedPost.date}</div>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600 font-sans font-light leading-relaxed">
                <p className="mb-6 first-letter:text-5xl first-letter:font-serif first-letter:text-[#D4A017] first-letter:mr-3 first-letter:float-left">
                  {selectedPost.excerpt}
                </p>
                <p className="mb-6">
                  Realizar una reforma en Burgos requiere planificación y conocimiento del entorno. No se trata solo de la estética, sino de crear un espacio que responda a las necesidades climáticas y sociales de nuestra región. Desde el aislamiento térmico hasta la elección de texturas que aporten calidez, cada decisión cuenta.
                </p>
                <h3 className="text-2xl font-serif text-[#1A3F5C] mt-12 mb-6">Importancia de la Planificación</h3>
                <p className="mb-6">
                  Un proyecto bien estructurado ahorra tiempo y dinero. En Haus Hero nos encargamos de todo el proceso, desde la conceptualización hasta la entrega de llaves, asegurando que tu única preocupación sea disfrutar del resultado final.
                </p>
                <blockquote className="border-l-4 border-[#D4A017] pl-8 py-4 my-12 italic text-2xl font-serif text-[#1A3F5C] bg-[#F4F3EE]">
                  "La verdadera reforma no es la que cambia una casa, sino la que mejora la vida de quienes la habitan."
                </blockquote>
                <p>
                  Esperamos que este artículo te haya servido de inspiración para tu próximo proyecto en Burgos. No dudes en contactar con nosotros para un asesoramiento personalizado.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
