'use client';

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight-dark border-t border-silver/10">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-baseline space-x-1 mb-4">
                <span className="text-2xl font-display font-bold text-silver tracking-tight">
                  VIPSHUTTLE
                </span>
                <span className="text-xl font-display font-light text-silver/70">
                  24
                </span>
              </div>
              <p className="text-silver/60 text-sm leading-relaxed">
                Ihr Premium Chauffeur-Service in Düsseldorf und NRW. 
                Exzellenz in jedem Detail.
              </p>
            </div>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/people/VipShuttle24de/100070007923784/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:shadow-glow transition-all duration-300 group"
              >
                <FaFacebook className="text-silver/70 group-hover:text-silver transition-colors duration-300" />
              </a>
              <a
                href="https://www.instagram.com/vipshuttle24.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:shadow-glow transition-all duration-300 group"
              >
                <FaInstagram className="text-silver/70 group-hover:text-silver transition-colors duration-300" />
              </a>
              <a
                href="https://wa.me/+491772472408"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:shadow-glow transition-all duration-300 group"
              >
                <FaWhatsapp className="text-silver/70 group-hover:text-silver transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-silver font-display font-semibold mb-6 text-lg">
              Navigation
            </h3>
            <nav className="space-y-3">
              <a href="#services" className="block text-silver/60 hover:text-silver transition-colors duration-300 text-sm">
                Services
              </a>
              <a href="#fleet" className="block text-silver/60 hover:text-silver transition-colors duration-300 text-sm">
                Fahrzeugflotte
              </a>
              <a href="#booking" className="block text-silver/60 hover:text-silver transition-colors duration-300 text-sm">
                Buchung
              </a>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-silver font-display font-semibold mb-6 text-lg">
              Services
            </h3>
            <div className="space-y-3 text-sm text-silver/60">
              <div>Airport Transfer</div>
              <div>Hochzeitsfahrten</div>
              <div>Corporate Roadshows</div>
              <div>Stundenweise Buchung</div>
              <div>VIP-Service</div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-silver font-display font-semibold mb-6 text-lg">
              Kontakt
            </h3>
            <div className="space-y-4">
              <a
                href="tel:+491772472408"
                className="flex items-start space-x-3 text-silver/60 hover:text-silver transition-colors duration-300 group"
              >
                <FaPhone className="text-platinum mt-1 flex-shrink-0 group-hover:text-silver transition-colors duration-300" />
                <div className="text-sm">
                  <div>+49 177 2472408</div>
                  <div className="text-xs text-silver/40">24/7 Hotline</div>
                </div>
              </a>
              <a
                href="mailto:info@vipshuttle24.de"
                className="flex items-start space-x-3 text-silver/60 hover:text-silver transition-colors duration-300 group"
              >
                <FaEnvelope className="text-platinum mt-1 flex-shrink-0 group-hover:text-silver transition-colors duration-300" />
                <div className="text-sm">info@vipshuttle24.de</div>
              </a>
              <a
                href="https://maps.google.com/?q=Schlesische+Str.+104+40231+Düsseldorf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-silver/60 hover:text-silver transition-colors duration-300 group"
              >
                <FaMapMarkerAlt className="text-platinum mt-1 flex-shrink-0 group-hover:text-silver transition-colors duration-300" />
                <div className="text-sm">
                  Schlesische Str. 104<br />
                  40231 Düsseldorf
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/+491772472408"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-silver to-platinum rounded-full flex items-center justify-center shadow-glow-lg hover:shadow-glow transition-all duration-300 hover:scale-110 z-40 animate-glow-pulse"
        aria-label="WhatsApp Chat"
      >
        <FaWhatsapp className="text-midnight text-2xl" />
      </a>

      {/* Bottom Bar */}
      <div className="border-t border-silver/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-silver/50 text-sm">
              © {currentYear} VIPSHUTTLE24. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/impressum" className="text-silver/50 hover:text-silver transition-colors duration-300">
                Impressum
              </a>
              <a href="/datenschutz" className="text-silver/50 hover:text-silver transition-colors duration-300">
                Datenschutz
              </a>
              <a href="/agb" className="text-silver/50 hover:text-silver transition-colors duration-300">
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
