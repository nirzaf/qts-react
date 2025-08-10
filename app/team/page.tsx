'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ComprehensiveSEO from '@/components/seo/ComprehensiveSEO';
import { pageSEO } from '@/config/seo';
import { organizationSchema, websiteSchema } from '@/config/structuredData';
import { 
  Linkedin, 
  Twitter, 
  Github, 
  Mail, 
  Award, 
  Users, 
  Star,
  MapPin,
  Calendar,
  Code,
  Brain,
  Cloud,
  Shield,
  Zap,
  Globe,
  Database,
  Smartphone
} from 'lucide-react';

// Team member interface
interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  expertise: string[];
  bio: string;
  longBio: string;
  image: string;
  linkedin: string;
  twitter?: string;
  github?: string;
  email: string;
  certifications: string[];
  experience: string;
  education: string[];
  achievements: string[];
  location: string;
  joinDate: string;
  languages: string[];
  featured: boolean;
}

// Team data
const teamMembers: TeamMember[] = [
  {
    id: "nirzaf-rahman",
    name: "Nirzaf Rahman",
    position: "Founder & CEO",
    department: "Leadership",
    expertise: ["AI/ML Strategy", "Business Development", "Technology Leadership", "Digital Transformation"],
    bio: "Visionary leader with 8+ years in software development and AI/ML solutions, driving innovation and business growth.",
    longBio: "Nirzaf Rahman is the visionary founder and CEO of Quadrate Tech Solutions, bringing over 8 years of experience in software development and AI/ML solutions. He has led the company from a startup to a leading technology consultancy, specializing in AI-driven business transformation. His expertise spans across strategic planning, technology innovation, and building high-performance teams.",
    image: "/images/team/nirzaf-rahman.jpg",
    linkedin: "https://linkedin.com/in/nirzaf-rahman",
    twitter: "https://twitter.com/nirzafrahman",
    github: "https://github.com/nirzaf",
    email: "nirzaf@quadratetechsolutions.com",
    certifications: [
      "AWS Certified Solutions Architect",
      "Microsoft Azure AI Engineer",
      "Google Cloud Professional ML Engineer",
      "Certified Scrum Master"
    ],
    experience: "8+ years",
    education: [
      "Master's in Computer Science - University of Colombo",
      "Bachelor's in Software Engineering - SLIIT"
    ],
    achievements: [
      "Led 50+ successful AI/ML projects",
      "Built team of 25+ technology experts",
      "Achieved Microsoft Gold Partner status",
      "Recognized as Top 40 Under 40 Tech Leaders"
    ],
    location: "Colombo, Sri Lanka",
    joinDate: "2020-01-01",
    languages: ["English", "Sinhala", "Tamil"],
    featured: true
  },
  {
    id: "sarah-johnson",
    name: "Dr. Sarah Johnson",
    position: "Chief Technology Officer",
    department: "Technology",
    expertise: ["Cloud Architecture", "DevOps", "Security", "System Design"],
    bio: "Technical expert specializing in scalable architecture and cloud solutions with PhD in Computer Science.",
    longBio: "Dr. Sarah Johnson serves as the Chief Technology Officer, bringing deep technical expertise in cloud architecture, DevOps, and enterprise security. With a PhD in Computer Science and 10+ years of experience, she leads our technical strategy and ensures the delivery of robust, scalable solutions.",
    image: "/images/team/sarah-johnson.jpg",
    linkedin: "https://linkedin.com/in/sarah-johnson-cto",
    github: "https://github.com/sarahjohnson",
    email: "sarah@quadratetechsolutions.com",
    certifications: [
      "AWS Certified Solutions Architect Professional",
      "Certified Kubernetes Administrator",
      "CISSP - Certified Information Systems Security Professional",
      "Google Cloud Professional Cloud Architect"
    ],
    experience: "10+ years",
    education: [
      "PhD in Computer Science - Stanford University",
      "Master's in Software Engineering - MIT"
    ],
    achievements: [
      "Architected cloud solutions for Fortune 500 companies",
      "Published 15+ research papers on distributed systems",
      "Led digital transformation for 20+ enterprises",
      "Speaker at major tech conferences"
    ],
    location: "San Francisco, USA",
    joinDate: "2020-03-15",
    languages: ["English", "Spanish"],
    featured: true
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    position: "Lead AI Engineer",
    department: "AI/ML",
    expertise: ["Machine Learning", "Computer Vision", "Deep Learning", "MLOps"],
    bio: "AI specialist with expertise in machine learning, computer vision, and deep learning model development.",
    longBio: "Michael Chen leads our AI/ML engineering team, specializing in developing cutting-edge machine learning models and computer vision solutions. With extensive experience in deep learning and MLOps, he ensures our AI solutions are production-ready and scalable.",
    image: "/images/team/michael-chen.jpg",
    linkedin: "https://linkedin.com/in/michael-chen-ai",
    github: "https://github.com/michaelchen",
    email: "michael@quadratetechsolutions.com",
    certifications: [
      "TensorFlow Developer Certificate",
      "AWS Certified Machine Learning Specialty",
      "NVIDIA Deep Learning Institute Certification",
      "Google Cloud Professional ML Engineer"
    ],
    experience: "7+ years",
    education: [
      "Master's in Artificial Intelligence - Carnegie Mellon University",
      "Bachelor's in Computer Science - UC Berkeley"
    ],
    achievements: [
      "Developed 30+ production ML models",
      "Reduced model training time by 60%",
      "Led computer vision projects for healthcare",
      "Contributed to open-source ML frameworks"
    ],
    location: "Toronto, Canada",
    joinDate: "2020-06-01",
    languages: ["English", "Mandarin"],
    featured: true
  },
  {
    id: "emily-davis",
    name: "Emily Davis",
    position: "Head of Design & UX",
    department: "Design",
    expertise: ["UI/UX Design", "Design Systems", "User Research", "Product Design"],
    bio: "Creative designer focused on user experience, interface design, and building design systems that scale.",
    longBio: "Emily Davis heads our design team, bringing a user-centered approach to all our products. With expertise in UI/UX design and user research, she ensures our solutions are not only functional but also intuitive and engaging for end users.",
    image: "/images/team/emily-davis.jpg",
    linkedin: "https://linkedin.com/in/emily-davis-ux",
    email: "emily@quadratetechsolutions.com",
    certifications: [
      "Google UX Design Professional Certificate",
      "Adobe Certified Expert",
      "Certified Usability Analyst",
      "Design Thinking Certification"
    ],
    experience: "6+ years",
    education: [
      "Master's in Human-Computer Interaction - Georgia Tech",
      "Bachelor's in Graphic Design - RISD"
    ],
    achievements: [
      "Designed interfaces for 40+ applications",
      "Improved user engagement by 150%",
      "Built design systems used by 100+ developers",
      "Won UX Design Excellence Award 2023"
    ],
    location: "New York, USA",
    joinDate: "2020-09-01",
    languages: ["English", "French"],
    featured: true
  },
  {
    id: "alex-thompson",
    name: "Alex Thompson",
    position: "Senior Full-Stack Developer",
    department: "Development",
    expertise: ["React", "Node.js", "Python", "Database Design"],
    bio: "Full-stack developer with expertise in modern web technologies and scalable application development.",
    longBio: "Alex Thompson is a senior full-stack developer who specializes in building scalable web applications using modern technologies. With strong expertise in both frontend and backend development, Alex ensures our applications are performant, maintainable, and user-friendly.",
    image: "/images/team/alex-thompson.jpg",
    linkedin: "https://linkedin.com/in/alex-thompson-dev",
    github: "https://github.com/alexthompson",
    email: "alex@quadratetechsolutions.com",
    certifications: [
      "AWS Certified Developer Associate",
      "React Developer Certification",
      "MongoDB Certified Developer",
      "Node.js Certified Developer"
    ],
    experience: "5+ years",
    education: [
      "Bachelor's in Computer Science - University of Toronto",
      "Full-Stack Web Development Bootcamp"
    ],
    achievements: [
      "Built 25+ web applications",
      "Optimized application performance by 200%",
      "Mentored 10+ junior developers",
      "Contributed to major open-source projects"
    ],
    location: "Vancouver, Canada",
    joinDate: "2021-02-15",
    languages: ["English"],
    featured: false
  }
];

// Departments
const departments = [
  "All Team",
  "Leadership", 
  "Technology",
  "AI/ML",
  "Development",
  "Design",
  "Operations"
];

export default function TeamPage() {
  const [selectedDepartment, setSelectedDepartment] = React.useState("All Team");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Filter team members
  const filteredMembers = teamMembers.filter(member => 
    selectedDepartment === "All Team" || member.department === selectedDepartment
  );

  const featuredMembers = filteredMembers.filter(member => member.featured);
  const regularMembers = filteredMembers.filter(member => !member.featured);

  const breadcrumbs = [
    { name: "Home", url: "https://quadratetechsolutions.com" },
    { name: "Team", url: "https://quadratetechsolutions.com/team" }
  ];

  return (
    <>
      <ComprehensiveSEO 
        seo={{
          ...pageSEO.about,
          title: "Our Team | AI/ML Experts & Software Developers | Quadrate Tech",
          description: "Meet our expert team of AI/ML engineers, software developers, and technology leaders. 25+ professionals driving innovation in artificial intelligence and software development."
        }} 
        structuredData={[organizationSchema, websiteSchema]}
        breadcrumbs={breadcrumbs}
      />
      
      <main ref={ref} className="min-h-screen bg-gradient-to-b from-white to-gray-50/50">
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-fluid-4xl lg:text-fluid-5xl font-bold text-gray-900 mb-6">
                Meet Our <span className="gradient-text">Expert Team</span>
              </h1>
              <p className="text-fluid-lg lg:text-fluid-xl text-gray-600 mb-8 leading-relaxed">
                Our diverse team of 25+ AI/ML engineers, software developers, and technology leaders 
                are passionate about creating innovative solutions that transform businesses.
              </p>
              
              {/* Team Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: Users, label: "Team Members", value: "25+" },
                  { icon: Award, label: "Certifications", value: "50+" },
                  { icon: Star, label: "Years Experience", value: "100+" },
                  { icon: Globe, label: "Countries", value: "5" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0607E1]/10 to-[#4D0AFF]/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <stat.icon className="w-6 h-6 text-[#0607E1]" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Department Filter */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4">
                {departments.map((department) => (
                  <button
                    key={department}
                    onClick={() => setSelectedDepartment(department)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      selectedDepartment === department
                        ? 'bg-[#0607E1] text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {department}
                  </button>
                ))}
              </div>
              <div className="mt-4 text-center text-gray-600">
                Showing {filteredMembers.length} team members
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        {featuredMembers.length > 0 && (
          <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-fluid-3xl lg:text-fluid-4xl font-bold text-gray-900 mb-4">
                    Leadership Team
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Meet the visionary leaders driving innovation and excellence at Quadrate Tech Solutions
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                  {featuredMembers.map((member, index) => (
                    <motion.article
                      key={member.id}
                      className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -10 }}
                    >
                      {/* Member Photo */}
                      <div className="text-center mb-6">
                        <div className="w-32 h-32 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] rounded-full mx-auto flex items-center justify-center mb-4">
                          <Users className="w-16 h-16 text-white" />
                        </div>
                        <h3 className="text-fluid-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                        <p className="text-[#0607E1] font-semibold mb-2">{member.position}</p>
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-4">
                          <MapPin className="w-4 h-4" />
                          <span>{member.location}</span>
                          <span>•</span>
                          <Calendar className="w-4 h-4" />
                          <span>{member.experience}</span>
                        </div>
                      </div>

                      {/* Bio */}
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {member.longBio}
                      </p>

                      {/* Expertise */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {member.achievements.slice(0, 3).map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-2 text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Certifications */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Certifications</h4>
                        <div className="space-y-2">
                          {member.certifications.slice(0, 3).map((cert, certIndex) => (
                            <div key={certIndex} className="flex items-center gap-2 text-sm text-gray-600">
                              <Award className="w-4 h-4 text-green-500" />
                              <span>{cert}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex gap-4 pt-6 border-t border-gray-200">
                        <motion.a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Linkedin className="w-5 h-5" />
                        </motion.a>
                        {member.twitter && (
                          <motion.a
                            href={member.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Twitter className="w-5 h-5" />
                          </motion.a>
                        )}
                        {member.github && (
                          <motion.a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Github className="w-5 h-5" />
                          </motion.a>
                        )}
                        <motion.a
                          href={`mailto:${member.email}`}
                          className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 hover:bg-green-200 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Mail className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Team Members */}
        {regularMembers.length > 0 && (
          <section className="py-16 lg:py-24 bg-gray-50/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-fluid-3xl lg:text-fluid-4xl font-bold text-gray-900 mb-4">
                    Our Team
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Talented professionals who bring expertise, creativity, and passion to every project
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularMembers.map((member, index) => (
                    <motion.article
                      key={member.id}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -10 }}
                    >
                      {/* Member Photo */}
                      <div className="w-24 h-24 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF] rounded-full mx-auto flex items-center justify-center mb-4">
                        <Users className="w-12 h-12 text-white" />
                      </div>

                      <h3 className="text-fluid-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-[#0607E1] font-semibold mb-3">{member.position}</p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>

                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-2 justify-center mb-4">
                        {member.expertise.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Experience & Location */}
                      <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{member.experience}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{member.location.split(',')[0]}</span>
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex gap-3 justify-center">
                        <motion.a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Linkedin className="w-4 h-4" />
                        </motion.a>
                        {member.github && (
                          <motion.a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Github className="w-4 h-4" />
                          </motion.a>
                        )}
                        <motion.a
                          href={`mailto:${member.email}`}
                          className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 hover:bg-green-200 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Mail className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Join Our Team CTA */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0607E1] to-[#4D0AFF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center text-white max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-fluid-3xl lg:text-fluid-4xl font-bold mb-6">
                Join Our Amazing Team
              </h2>
              <p className="text-fluid-lg mb-8 opacity-90">
                We're always looking for talented individuals who are passionate about AI/ML and software development.
                Join us in building the future of technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/careers"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0607E1] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Users className="w-5 h-5 mr-2" />
                  View Open Positions
                </motion.a>
                <motion.a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#0607E1] transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
