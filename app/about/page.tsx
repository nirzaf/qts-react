'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Users,
  Target,
  Eye,
  Award,
  Lightbulb,
  Heart,
  Shield,
  Zap,
  Globe,
  Rocket
} from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  }
};

// Team data
const teamMembers = [
  {
    name: "Nirzaf Rahman",
    role: "Founder & CEO",
    image: "/images/team/nirzaf.jpg",
    bio: "Visionary leader with 8+ years in software development and AI/ML solutions.",
    linkedin: "https://linkedin.com/in/nirzaf",
    skills: ["AI/ML", "Leadership", "Strategy"]
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    image: "/images/team/sarah.jpg",
    bio: "Technical expert specializing in scalable architecture and cloud solutions.",
    linkedin: "https://linkedin.com/in/sarah-johnson",
    skills: ["Cloud Architecture", "DevOps", "Security"]
  },
  {
    name: "Michael Chen",
    role: "Lead AI Engineer",
    image: "/images/team/michael.jpg",
    bio: "AI specialist with expertise in machine learning and computer vision.",
    linkedin: "https://linkedin.com/in/michael-chen",
    skills: ["Machine Learning", "Computer Vision", "Python"]
  },
  {
    name: "Emily Davis",
    role: "Head of Design",
    image: "/images/team/emily.jpg",
    bio: "Creative designer focused on user experience and interface design.",
    linkedin: "https://linkedin.com/in/emily-davis",
    skills: ["UI/UX Design", "Branding", "User Research"]
  }
];

// Values data
const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries and embrace cutting-edge technologies to deliver groundbreaking solutions."
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Our clients' success is our success. We build lasting partnerships through exceptional service and results."
  },
  {
    icon: Shield,
    title: "Quality",
    description: "We maintain the highest standards in everything we do, from code quality to customer service."
  },
  {
    icon: Zap,
    title: "Agility",
    description: "We adapt quickly to changing requirements and market conditions, delivering solutions that evolve with your needs."
  }
];

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main ref={ref} className="min-h-screen bg-gradient-to-b from-white to-gray-50/50">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h1
              className="text-fluid-4xl lg:text-fluid-5xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              About <span className="gradient-text">Quadrate Tech Solutions</span>
            </motion.h1>
            <motion.p
              className="text-fluid-lg lg:text-fluid-xl text-gray-600 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Empowering businesses through innovative AI solutions and cutting-edge software development.
              We transform ideas into reality with technology that drives growth and success.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-fluid-3xl lg:text-fluid-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2016, Quadrate Tech Solutions emerged from a simple yet powerful vision:
                  to bridge the gap between cutting-edge technology and real-world business challenges.
                  What started as a small team of passionate developers has grown into a leading
                  technology consultancy.
                </p>
                <p>
                  Our journey began when our founder, Nirzaf Rahman, recognized the transformative
                  potential of AI and machine learning in solving complex business problems. With a
                  background in software engineering and a passion for innovation, he assembled a
                  team of like-minded professionals who shared the vision of making advanced
                  technology accessible to businesses of all sizes.
                </p>
                <p>
                  Today, we've successfully delivered over 200 projects, helping businesses across
                  various industries leverage the power of AI, machine learning, and custom software
                  solutions to achieve unprecedented growth and efficiency.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <Rocket className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">8+ Years</h3>
                    <p className="text-lg opacity-90">of Innovation</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating stats */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">200+</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">100+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 lg:py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-fluid-3xl lg:text-fluid-4xl font-bold text-gray-900 mb-4">
              Mission & Vision
            </h2>
            <p className="text-fluid-lg text-gray-600 max-w-3xl mx-auto">
              Driving the future of business through intelligent technology solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-fluid-xl lg:text-fluid-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative AI and software solutions that drive growth,
                efficiency, and competitive advantage. We believe in making cutting-edge technology
                accessible and practical for organizations of all sizes, helping them navigate the
                digital transformation journey with confidence.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#4D0AFF] to-[#0607E1] rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-fluid-xl lg:text-fluid-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the global leader in AI-driven business solutions, creating a world where
                intelligent technology seamlessly integrates with human creativity and business
                acumen. We envision a future where every organization can harness the power of
                artificial intelligence to unlock their full potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-fluid-3xl lg:text-fluid-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-fluid-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#0607E1]/10 to-[#4D0AFF]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-[#0607E1]/20 group-hover:to-[#4D0AFF]/20 transition-all duration-300">
                  <value.icon className="w-10 h-10 text-[#0607E1] group-hover:text-[#4D0AFF] transition-colors duration-300" />
                </div>
                <h3 className="text-fluid-lg lg:text-fluid-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-fluid-3xl lg:text-fluid-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-fluid-lg text-gray-600 max-w-3xl mx-auto">
              The brilliant minds behind our innovative solutions and exceptional service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] rounded-full mx-auto flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4D0AFF] to-[#0607E1] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="text-fluid-lg font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-[#0607E1] font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#0607E1] hover:text-[#4D0AFF] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">Connect</span>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-fluid-3xl lg:text-fluid-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-fluid-lg mb-8 opacity-90 max-w-3xl mx-auto">
              Let's discuss how our AI and software solutions can drive your business forward.
              Get in touch with our team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0607E1] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Started Today</span>
              </motion.a>
              <motion.a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#0607E1] transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Our Services</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
