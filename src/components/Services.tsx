'use client';

import { FaPlane, FaHeart, FaBriefcase, FaArrowRight } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: FaPlane,
      title: 'Airport Transfer',
      subtitle: 'Pünktlich und stressfrei',
      description: 'Professioneller Flughafentransfer zu allen deutschen und internationalen Flughäfen. Mit Flugüberwachung in Echtzeit passen wir uns flexibel an Ihre Ankunftszeit an.',
      features: [
        'Meet & Greet Service',
        'Gepäckassistenz',
        'Wartezeit inkludiert',
        'Alle Flughäfen in NRW',
      ],
      image: '/2.webp',
    },
    {
      icon: FaHeart,
      title: 'Hochzeitsfahrten',
      subtitle: 'Ihr perfekter Tag',
      description: 'Machen Sie Ihren besonderen Tag unvergesslich. Unsere geschmückten Fahrzeuge und erfahrenen Chauffeure sorgen für eine stilvolle An- und Abreise.',
      features: [
        'Fahrzeugdekoration',
        'Flexible Zeiteinteilung',
        'Mehrere Fahrzeuge verfügbar',
        'Fotoshooting möglich',
      ],
      image: '/3.webp',
    },
    {
      icon: FaBriefcase,
      title: 'Corporate Roadshows',
      subtitle: 'Business auf höchstem Niveau',
      description: 'Professionelle Organisation Ihrer Geschäftsreisen und Roadshows durch ganz NRW. Perfekte Koordination, pünktliche Transfers und diskrete Begleitung.',
      features: [
        'Mehrtägige Touren',
        'Mehrere Fahrzeuge',
        'Persönlicher Koordinator',
        'Flexible Routenplanung',
      ],
      image: '/4.webp',
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-midnight relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-silver/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-platinum/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-block px-6 py-2 glass-card mb-6">
            <span className="text-silver text-sm font-medium tracking-widest uppercase">
              Unsere Services
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-gradient mb-6">
            Exzellenz in jedem Detail
          </h2>
          <p className="text-silver/70 text-lg leading-relaxed">
            Von Flughafentransfers bis zu maßgeschneiderten Roadshows – 
            wir bieten Ihnen erstklassige Mobilität für jeden Anlass.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`glass-card hover-lift group ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
              style={{
                animation: `slideUp 0.8s ease-out ${index * 0.2}s both`,
              }}
            >
              <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                {/* Content */}
                <div className={`space-y-6 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-silver/20 to-platinum/20 rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <service.icon className="text-3xl text-silver" />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-display font-bold text-silver mb-2 group-hover:text-silver-light transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-platinum text-sm font-medium mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-silver/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-silver rounded-full"></div>
                        <span className="text-silver/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="#booking"
                    className="inline-flex items-center space-x-2 text-silver hover:text-silver-light transition-colors duration-300 group/link"
                  >
                    <span className="font-medium">Jetzt anfragen</span>
                    <FaArrowRight className="text-sm group-hover/link:translate-x-2 transition-transform duration-300" />
                  </a>
                </div>

                {/* Image */}
                <div className={`relative h-80 lg:h-full min-h-[400px] rounded-lg overflow-hidden ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center glass-card p-8">
          <p className="text-silver/80 mb-6 text-lg">
            Benötigen Sie einen individuellen Service?
          </p>
          <a href="#booking" className="btn-primary inline-block">
            Persönliche Beratung anfragen
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
