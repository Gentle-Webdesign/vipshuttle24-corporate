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
      description: 'Premium-Limousine für höchste Ansprüche',
    },
    {
      name: 'Mercedes E-Klasse',
      category: 'Business-Limousine',
      image: '/7.webp',
      description: 'Eleganz und Komfort vereint',
    },
    {
      name: 'Mercedes V-Klasse',
      category: 'VIP-Van',
      image: '/8.webp',
      description: 'Raum für bis zu 7 Personen',
    },
    {
      name: 'Audi A8',
      category: 'Executive-Limousine',
      image: '/9.webp',
      description: 'Technologie und Luxus',
    },
    {
      name: 'BMW 7er',
      category: 'Premium-Limousine',
      image: '/10.webp',
      description: 'Dynamik und Eleganz',
    },
    {
      name: 'Mercedes Sprinter',
      category: 'Gruppenfahrzeug',
      image: '/11.webp',
      description: 'Für größere Gruppen',
    },
  ];

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : vehicles.length - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage < vehicles.length - 1 ? selectedImage + 1 : 0);
    }
  };

  return (
    <>
      <section id="fleet" className="py-20 lg:py-32 bg-dusk relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-silver/3 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <div className="inline-block px-6 py-2 glass-card mb-6">
              <span className="text-silver text-sm font-medium tracking-widest uppercase">
                Fahrzeugflotte
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-gradient mb-6">
              Premium-Fahrzeuge
              <br />für jeden Anlass
            </h2>
            <p className="text-silver/70 text-lg leading-relaxed">
              Unsere Flotte besteht ausschließlich aus gepflegten Premium-Fahrzeugen, 
              nicht älter als 3 Jahre.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((vehicle, index) => (
              <div
                key={vehicle.name}
                onClick={() => setSelectedImage(index)}
                className="group relative aspect-[4/3] glass-card overflow-hidden cursor-pointer hover-lift"
                style={{
                  animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${vehicle.image}')` }}
                ></div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-xs text-platinum mb-2 font-medium tracking-wider uppercase">
                      {vehicle.category}
                    </div>
                    <h3 className="text-xl font-display font-bold text-silver mb-2">
                      {vehicle.name}
                    </h3>
                    <p className="text-silver/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {vehicle.description}
                    </p>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute top-4 right-4 w-10 h-10 glass-card rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-6 h-6 border-2 border-silver rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-silver rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
            <div className="glass-card p-6">
              <div className="text-3xl font-display font-bold text-gradient mb-2">
                Premium
              </div>
              <div className="text-silver/70 text-sm">Nur Mercedes, BMW & Audi</div>
            </div>
            <div className="glass-card p-6">
              <div className="text-3xl font-display font-bold text-gradient mb-2">
                {'< 3 Jahre'}
              </div>
              <div className="text-silver/70 text-sm">Neueste Fahrzeugmodelle</div>
            </div>
            <div className="glass-card p-6">
              <div className="text-3xl font-display font-bold text-gradient mb-2">
                100%
              </div>
              <div className="text-silver/70 text-sm">Regelmäßig gewartet</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-midnight/98 backdrop-blur-xl z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 glass-card rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300 z-10"
          >
            <FaTimes className="text-silver text-xl" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            className="absolute left-4 w-12 h-12 glass-card rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300 z-10"
          >
            <FaChevronLeft className="text-silver text-xl" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 w-12 h-12 glass-card rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300 z-10"
          >
            <FaChevronRight className="text-silver text-xl" />
          </button>

          {/* Image */}
          <div className="relative w-full max-w-6xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <div 
              className="absolute inset-0 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url('${vehicles[selectedImage].image}')` }}
            ></div>
            
            {/* Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 glass-card rounded-b-lg p-6">
              <div className="text-xs text-platinum mb-2 font-medium tracking-wider uppercase">
                {vehicles[selectedImage].category}
              </div>
              <h3 className="text-2xl font-display font-bold text-silver mb-2">
                {vehicles[selectedImage].name}
              </h3>
              <p className="text-silver/70">
                {vehicles[selectedImage].description}
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Fleet;
