'use client';

import { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Fleet = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const vehicles = [
    {
      name: 'Mercedes S-Klasse',
      category: 'Luxus-Limousine',
      image: '/5.webp',
      description: 'Unsere Flaggschiff-Limousine für höchste Ansprüche. Maximaler Komfort, modernste Technologie und überlegene Eleganz.',
    },
    {
      name: 'Mercedes E-Klasse',
      category: 'Business-Limousine',
      image: '/7.webp',
      description: 'Eleganz und Komfort vereint. Ideal für Geschäftsreisen und repräsentative Anlässe.',
    },
    {
      name: 'Mercedes V-Klasse',
      category: 'VIP-Van',
      image: '/8.webp',
      description: 'Großzügiger Raum für bis zu 7 Personen ohne Abstriche beim Komfort.',
    },
    {
      name: 'Mercedes Sprinter',
      category: 'Gruppenfahrzeug',
      image: '/11.webp',
      description: 'Für größere Gruppen und Events. Komfortabler Bus-Transfer mit professionellem Fahrer.',
    },
  ];

  const handlePrev = () =>
    setSelectedImage((p) => (p !== null ? (p > 0 ? p - 1 : vehicles.length - 1) : null));
  const handleNext = () =>
    setSelectedImage((p) => (p !== null ? (p < vehicles.length - 1 ? p + 1 : 0) : null));

  return (
    <>
      <section
        id="fleet"
        className="py-16 lg:py-32 bg-dusk relative overflow-hidden"
        aria-label="Fahrzeugflotte"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-silver/3 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-20">
            <div className="inline-block px-5 py-2 glass-card mb-5">
              <span className="text-silver text-xs sm:text-sm font-medium tracking-widest uppercase">
                Fahrzeugflotte
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient mb-4 leading-tight">
              Exklusive Mercedes-Flotte für jeden Anlass
            </h2>
            <p className="text-silver/70 text-sm sm:text-base lg:text-lg leading-relaxed">
              Ausschließlich gepflegte Mercedes-Fahrzeuge, nicht älter als 3 Jahre –
              für höchste Ansprüche an Komfort und Stil.
            </p>
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
            {vehicles.map((vehicle, index) => (
              <div
                key={vehicle.name}
                onClick={() => setSelectedImage(index)}
                className="group relative overflow-hidden rounded-lg glass-card cursor-pointer"
                style={{
                  aspectRatio: '4/3',
                  animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
                }}
                role="button"
                tabIndex={0}
                aria-label={`${vehicle.name} ansehen`}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(index)}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${vehicle.image}')` }}
                  role="img"
                  aria-label={vehicle.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                  <div className="text-xs text-platinum mb-1 font-medium tracking-wider uppercase hidden sm:block">
                    {vehicle.category}
                  </div>
                  <h3 className="text-sm sm:text-lg font-display font-bold text-silver leading-tight">
                    {vehicle.name}
                  </h3>
                  <p className="text-silver/70 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                    {vehicle.description}
                  </p>
                </div>

                {/* Tap indicator */}
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-7 h-7 sm:w-10 sm:h-10 glass-card rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-silver rounded-full" />
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-10 sm:mt-16 grid grid-cols-3 gap-3 sm:gap-6 text-center max-w-3xl mx-auto">
            {[
              { value: '100% Mercedes', label: 'Exklusive Premiummarke' },
              { value: '< 3 Jahre', label: 'Neueste Modelle' },
              { value: '100%', label: 'Regelmäßig gewartet' },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-4 sm:p-6">
                <div className="text-lg sm:text-2xl lg:text-3xl font-display font-bold text-gradient mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-silver/70 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-midnight/98 backdrop-blur-xl z-50 flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 glass-card rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300 z-10"
            aria-label="Schließen"
          >
            <FaTimes className="text-silver" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 glass-card rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300 z-10"
            aria-label="Vorheriges Fahrzeug"
          >
            <FaChevronLeft className="text-silver" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 glass-card rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300 z-10"
            aria-label="Nächstes Fahrzeug"
          >
            <FaChevronRight className="text-silver" />
          </button>

          <div
            className="w-full max-w-5xl mt-6"
            style={{ maxHeight: '80vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative rounded-lg overflow-hidden"
              style={{ aspectRatio: '16/9', maxHeight: '65vh' }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${vehicles[selectedImage].image}')` }}
              />
            </div>
            <div className="glass-card rounded-b-none rounded-t-none mt-0 p-4 sm:p-6">
              <div className="text-xs text-platinum mb-1 font-medium tracking-wider uppercase">
                {vehicles[selectedImage].category}
              </div>
              <h3 className="text-lg sm:text-2xl font-display font-bold text-silver mb-1">
                {vehicles[selectedImage].name}
              </h3>
              <p className="text-silver/70 text-sm">{vehicles[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Fleet;