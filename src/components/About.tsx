import React from 'react';
import { Heart, Users, Target, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Arjun J',
      role: 'Founder & Designer',
      image: '', // Blank for now
      catAvatar: '🐱'
    },
    {
      name: 'Harshavarhan',
      role: 'Product Manager',
      image: '', // Blank for now
      catAvatar: '😺'
    },
    {
      name: 'Sanjay',
      role: 'Marketing Lead',
      image: '', // Blank for now
      catAvatar: '😸'
    },
    {
      name: 'Yugendran',
      role: 'Operations Head',
      image: '', // Blank for now
      catAvatar: '😼'
    },
    {
      name: 'Jyotsna',
      role: 'Design Director',
      image: '', // Blank for now
      catAvatar: '😻'
    },
    {
      name: 'Nikitha',
      role: 'Customer Experience',
      image: '', // Blank for now
      catAvatar: '🙀'
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Passion',
      description: 'We love what we do and it shows in every product we create.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community',
      description: 'Building a family of cat shoe enthusiasts worldwide.'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Quality',
      description: 'Premium materials and craftsmanship in every pair.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Innovation',
      description: 'Constantly evolving to bring you the best footwear experience.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            The Humans Behind the <span className="text-emerald-500">Paws</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Meet our passionate team dedicated to creating the perfect fusion of feline inspiration and premium footwear.
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group interactive"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative">
                {/* Placeholder for photo */}
                <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-400 dark:bg-gray-500 rounded-lg flex items-center justify-center">
                    <span className="text-2xl text-gray-600 dark:text-gray-300">📷</span>
                  </div>
                </div>
                <motion.div 
                  className="absolute top-4 right-4 text-3xl"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    delay: index * 0.2
                  }}
                >
                  {member.catAvatar}
                </motion.div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-emerald-500 font-medium mb-3">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Values */}
        <motion.div 
          className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center group hover:scale-105 transition-transform duration-300 interactive"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 rounded-2xl mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {value.icon}
                </motion.div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Story Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl p-8 md:p-12 text-white">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Story
            </motion.h3>
            <motion.p 
              className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto opacity-90"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.9 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Born from the observation that cats move with unparalleled grace and silence, 
              Cat Shoes was created to bring that same elegance to human footwear. We believe 
              that shoes should be more than just functional – they should embody the spirit 
              of confidence, comfort, and quiet strength that cats naturally possess.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;