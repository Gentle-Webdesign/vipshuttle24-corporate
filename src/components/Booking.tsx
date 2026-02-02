'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Booking request:', formData);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="booking" className="py-20 lg:py-32 bg-midnight relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-silver/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-platinum/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-6 py-2 glass-card mb-6">
            <span className="text-silver text-sm font-medium tracking-widest uppercase">
              Buchungsanfrage
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-gradient mb-6">
            Ihre Fahrt beginnt hier
          </h2>
          <p className="text-silver/70 text-lg leading-relaxed">
            Stellen Sie eine unverbindliche Anfrage. Wir melden uns innerhalb von 2 Stunden bei Ihnen zurück.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-8 space-y-6">
              <h3 className="text-2xl font-display font-bold text-silver mb-6">
                Kontaktinformationen
              </h3>

              {/* Contact Methods */}
              <a
                href="tel:+491772472408"
                className="flex items-start space-x-4 p-4 glass-card hover:shadow-glow transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-silver/20 to-platinum/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                  <FaPhone className="text-silver text-lg" />
                </div>
                <div>
                  <div className="text-xs text-platinum mb-1 font-medium tracking-wider uppercase">
                    Telefon
                  </div>
                  <div className="text-silver font-semibold group-hover:text-silver-light transition-colors duration-300">
                    +49 177 2472408
                  </div>
                  <div className="text-silver/60 text-xs mt-1">24/7 verfügbar</div>
                </div>
              </a>

              <a
                href="https://wa.me/+491772472408"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 p-4 glass-card hover:shadow-glow transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-silver/20 to-platinum/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                  <FaWhatsapp className="text-silver text-lg" />
                </div>
                <div>
                  <div className="text-xs text-platinum mb-1 font-medium tracking-wider uppercase">
                    WhatsApp
                  </div>
                  <div className="text-silver font-semibold group-hover:text-silver-light transition-colors duration-300">
                    Direkter Chat
                  </div>
                  <div className="text-silver/60 text-xs mt-1">Schnellste Antwort</div>
                </div>
              </a>

              <a
                href="mailto:info@vipshuttle24.de"
                className="flex items-start space-x-4 p-4 glass-card hover:shadow-glow transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-silver/20 to-platinum/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                  <FaEnvelope className="text-silver text-lg" />
                </div>
                <div>
                  <div className="text-xs text-platinum mb-1 font-medium tracking-wider uppercase">
                    E-Mail
                  </div>
                  <div className="text-silver font-semibold group-hover:text-silver-light transition-colors duration-300">
                    info@vipshuttle24.de
                  </div>
                  <div className="text-silver/60 text-xs mt-1">Antwort binnen 2h</div>
                </div>
              </a>

              <div className="flex items-start space-x-4 p-4 glass-card">
                <div className="w-12 h-12 bg-gradient-to-br from-silver/20 to-platinum/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-silver text-lg" />
                </div>
                <div>
                  <div className="text-xs text-platinum mb-1 font-medium tracking-wider uppercase">
                    Hauptsitz
                  </div>
                  <div className="text-silver font-semibold">
                    Schlesische Str. 104
                  </div>
                  <div className="text-silver font-semibold mb-2">
                    40231 Düsseldorf
                  </div>
                  <a
                    href="https://maps.google.com/?q=Schlesische+Str.+104+40231+Düsseldorf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-platinum text-sm hover:text-silver transition-colors duration-300"
                  >
                    Route planen →
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="glass-card p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-silver/20 to-platinum/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-silver text-lg" />
                </div>
                <div>
                  <h4 className="text-lg font-display font-bold text-silver mb-3">
                    Verfügbarkeit
                  </h4>
                  <div className="text-silver/70 space-y-2 text-sm">
                    <p>Unser Service ist rund um die Uhr verfügbar.</p>
                    <p className="text-platinum font-medium">7 Tage die Woche, 24 Stunden am Tag</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-silver/80 text-sm font-medium mb-2">
                  Ihr Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input-premium"
                  placeholder="Max Mustermann"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-silver/80 text-sm font-medium mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input-premium"
                    placeholder="ihre@email.de"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-silver/80 text-sm font-medium mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-premium"
                    placeholder="+49 ..."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-silver/80 text-sm font-medium mb-2">
                  Gewünschter Service *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="input-premium"
                >
                  <option value="">Bitte wählen</option>
                  <option value="airport">Airport Transfer</option>
                  <option value="wedding">Hochzeitsfahrt</option>
                  <option value="corporate">Corporate Roadshow</option>
                  <option value="hourly">Stundenweise Buchung</option>
                  <option value="other">Sonstiges</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-silver/80 text-sm font-medium mb-2">
                    Datum *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="input-premium"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-silver/80 text-sm font-medium mb-2">
                    Uhrzeit *
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="input-premium"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-silver/80 text-sm font-medium mb-2">
                  Ihre Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="input-premium resize-none"
                  placeholder="Start- und Zielort, Anzahl Personen, besondere Wünsche..."
                />
              </div>

              <div className="text-xs text-silver/50">
                * Pflichtfelder. Ihre Daten werden vertraulich behandelt und DSGVO-konform verarbeitet.
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
