'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';

const LocationCards: React.FC = () => {
  const locations = [
    {
      title: 'Main Office',
      address: '19/2/9, Market Complex, Matale Road',
      city: 'Akurana, Kandy 20850',
      country: 'Sri Lanka',
      phone: '+94 81 424 2615',
      email: 'info@quadrate.lk',
      hours: [
        'Monday - Friday: 9:00 AM - 5:00 PM',
        'Saturday: 10:00 AM - 3:00 PM',
        'Sunday: Closed'
      ],
      coordinates: { lat: 7.3697, lng: 80.6217 },
      isPrimary: true
    },
    {
      title: 'Development Center',
      address: 'Remote Development Hub',
      city: 'Distributed Team',
      country: 'Global',
      phone: '+94 81 424 2615',
      email: 'dev@quadrate.lk',
      hours: [
        'Monday - Friday: 24/7 Support',
        'Weekend: Emergency Only',
        'Time Zone: GMT+5:30'
      ],
      coordinates: { lat: 0, lng: 0 },
      isPrimary: false
    }
  ];

  const nearbyLandmarks = [
    'Akurana Railway Station - 2 min walk',
    'Akurana Hospital - 5 min drive',
    'Kandy City Center - 15 min drive',
    'Peradeniya University - 20 min drive'
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] bg-clip-text text-transparent">
              Our Locations
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit us in person or connect with our distributed team worldwide
          </p>
        </motion.div>

        {/* Location Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              className={`relative p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border ${
                location.isPrimary 
                  ? 'bg-gradient-to-br from-[#0607E1]/5 to-[#4D0AFF]/5 border-[#0607E1]/20 scale-105' 
                  : 'bg-white border-gray-100'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              {location.isPrimary && (
                <div className="absolute -top-4 left-8">
                  <div className="bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Primary Office
                  </div>
                </div>
              )}

              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    {location.title}
                  </h3>
                  <div className="text-gray-600">
                    <div>{location.address}</div>
                    <div>{location.city}</div>
                    <div className="font-semibold">{location.country}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#0607E1]" />
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">{location.phone}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#0607E1]" />
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">{location.email}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[#0607E1] mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-2">Business Hours</div>
                    <div className="space-y-1">
                      {location.hours.map((hour, hourIndex) => (
                        <div key={hourIndex} className="text-gray-600 text-sm">
                          {hour}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {location.isPrimary && (
                <motion.button
                  className="w-full py-3 bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  Get Directions
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Map Section */}
        <motion.div
          className="bg-gradient-to-r from-[#0607E1]/5 to-[#4D0AFF]/5 rounded-3xl p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] bg-clip-text text-transparent">
                  Easy to Find
                </span>
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Our main office is conveniently located in Akurana, Kandy, with easy access to major transportation routes.
              </p>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  Nearby Landmarks
                </h4>
                <div className="space-y-2">
                  {nearbyLandmarks.map((landmark, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-[#0607E1] rounded-full mr-3"></div>
                      {landmark}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-[#0607E1] mx-auto mb-4" />
                  <div className="text-lg font-semibold text-gray-700 mb-2">
                    Interactive Map
                  </div>
                  <div className="text-gray-600">
                    Click to view in Google Maps
                  </div>
                </div>
              </div>
              <motion.button
                className="absolute inset-0 w-full h-full bg-transparent hover:bg-[#0607E1]/10 rounded-2xl transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Visit Us CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-6 text-gray-900">
            Planning to Visit?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We'd love to meet you in person! Schedule an appointment to ensure our team is available to give you the attention you deserve.
          </p>
          <motion.button
            className="inline-flex items-center px-8 py-4 bg-[#0607E1] text-white font-semibold rounded-full hover:bg-[#0607E1]/90 transition-colors duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Visit
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationCards;