import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Instagram, Upload, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [likedImages, setLikedImages] = useState<number[]>([]);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Customer with ShadowPaw Sneakers',
      user: '@catfan_arjun',
      likes: 245,
      caption: 'Finally found shoes that match my stealth mode! 🐾 #CatShoesOnMe'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'WhiskerWalk Loafers lifestyle',
      user: '@stylish_sarah',
      likes: 189,
      caption: 'Office vibes with my new WhiskerWalk loafers 😻 #CatShoesOnMe'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'PounceSlip Slip-ons casual wear',
      user: '@weekend_warrior',
      likes: 156,
      caption: 'Perfect for my morning coffee runs ☕ #CatShoesOnMe'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Customer review photo',
      user: '@fashionista_priya',
      likes: 312,
      caption: 'Obsessed with the comfort level! 🖤 #CatShoesOnMe'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'NightStalker Boots street style',
      user: '@urban_explorer',
      likes: 278,
      caption: 'Night city adventures with my new boots 🌃 #CatShoesOnMe'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Athletic sneakers workout',
      user: '@fitness_lover',
      likes: 167,
      caption: 'Best workout companions ever! 💪 #CatShoesOnMe'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Casual lifestyle photo',
      user: '@minimalist_mike',
      likes: 203,
      caption: 'Simple, clean, comfortable. Perfect. #CatShoesOnMe'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Date night outfit',
      user: '@date_night_ready',
      likes: 145,
      caption: 'Date night ready with my Cat Shoes! 💕 #CatShoesOnMe'
    }
  ];

  const toggleLike = (imageId: number) => {
    setLikedImages(prev => 
      prev.includes(imageId) 
        ? prev.filter(id => id !== imageId)
        : [...prev, imageId]
    );
  };

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
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
            Cat Shoes <span className="text-emerald-500">Community</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            See how our customers style their Cat Shoes and join the community with #CatShoesOnMe
          </p>
          <motion.div 
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full inline-flex"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram className="h-5 w-5" />
            <span className="font-semibold">#CatShoesOnMe</span>
          </motion.div>
        </motion.div>

        {/* Upload Section */}
        <motion.div 
          className="mb-12 bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-2xl p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 text-white rounded-full mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Camera className="h-8 w-8" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Share Your Cat Shoes Style
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Upload your photos and get featured in our community gallery!
            </p>
            <motion.button 
              className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-colors duration-200 interactive"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Upload className="h-5 w-5 mr-2" />
              Upload Your Photo
            </motion.button>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer interactive"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedImage(image.src)}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 dark:bg-gray-800/90 rounded-full p-3">
                    <span className="text-gray-800 dark:text-white font-medium">View</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    {image.user}
                  </span>
                  <div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                    <motion.button 
                      className={`hover:text-red-500 transition-colors duration-200 ${
                        likedImages.includes(image.id) ? 'text-red-500' : ''
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(image.id);
                      }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart className="h-4 w-4" fill={likedImages.includes(image.id) ? 'currentColor' : 'none'} />
                    </motion.button>
                    <motion.button 
                      className="hover:text-blue-500 transition-colors duration-200"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <MessageCircle className="h-4 w-4" />
                    </motion.button>
                    <motion.button 
                      className="hover:text-green-500 transition-colors duration-200"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Share2 className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {image.caption}
                </p>
                
                <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                  <Heart className="h-4 w-4 fill-current text-red-500" />
                  <span>{likedImages.includes(image.id) ? image.likes + 1 : image.likes} likes</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl p-8 md:p-12 text-white">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join the Cat Shoes Family
            </motion.h3>
            <motion.p 
              className="text-lg md:text-xl mb-8 opacity-90"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.9 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Share your Cat Shoes moments and connect with fellow cat shoe enthusiasts worldwide!
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 interactive"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="h-5 w-5 inline mr-2" />
                Follow Us on Instagram
              </motion.button>
              <motion.button 
                className="bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-800 transition-colors duration-200 interactive"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Upload className="h-5 w-5 inline mr-2" />
                Upload Your Photo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal for enlarged image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.button
              className="absolute top-8 right-8 text-white text-2xl hover:text-gray-300 transition-colors duration-200"
              onClick={() => setSelectedImage(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;