'use client';

import { FaPlay, FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background - Placeholder with overlay */}
      <div className="absolute inset-0 z-0">
        {/* Video element - user should replace with actual video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/11.webp"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback image */}
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Animated particles effect (subtle) */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-silver rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-silver-light rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-platinum rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Subtitle */}
          <div className="animate-fade-in">
            <div className="inline-block px-6 py-2 glass-card mb-6">
              <span className="text-silver text-sm font-medium tracking-widest uppercase">
                Premium Chauffeur Service
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gradient leading-tight animate-slide-up">
            Ihre Reise beginnt
            <br />
            mit Exzellenz
          </h1>

          {/* Description */}
          <p className="text-lg lg:text-xl text-silver/80 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Erstklassiger Chauffeur-Service in Düsseldorf und NRW. 
            Diskretion, Pünktlichkeit und Komfort auf höchstem Niveau.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="#booking"
              className="btn-primary w-full sm:w-auto min-w-[200px] text-center"
            >
              Jetzt buchen
            </a>
            <a
              href="#services"
              className="btn-secondary w-full sm:w-auto min-w-[200px] text-center"
            >
              Services entdecken
            </a>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-3 gap-6 pt-16 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center group">
              <div className="text-3xl lg:text-4xl font-display font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-silver/60 text-sm">Verfügbar</div>
            </div>
            <div className="text-center group border-x border-silver/10">
              <div className="text-3xl lg:text-4xl font-display font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                10+
              </div>
              <div className="text-silver/60 text-sm">Jahre Erfahrung</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl lg:text-4xl font-display font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-silver/60 text-sm">Diskretion</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-silver hover:text-silver-light transition-all duration-300 animate-bounce z-10"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <FaChevronDown className="text-xl" />
        </div>
      </a>
    </section>
  );
};

export default Hero;
