import React, { useState } from 'react';
import { ExternalLink, Filter, Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  colors: string[];
  sizes: string[];
  platforms: {
    amazon: string;
    flipkart: string;
    myntra: string;
    ajio: string;
  };
}

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([899, 2499]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: 'ShadowPaw Sneakers',
      price: 1999,
      originalPrice: 2499,
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Sneakers',
      rating: 4.8,
      reviews: 234,
      description: 'Silent steps, bold style. Perfect for urban adventures.',
      features: ['Noiseless Sole', 'Breathable Mesh', 'Memory Foam', 'Anti-Slip Grip'],
      colors: ['Black', 'Gray', 'White'],
      sizes: ['6', '7', '8', '9', '10', '11'],
      platforms: {
        amazon: '#',
        flipkart: '#',
        myntra: '#',
        ajio: '#'
      }
    },
    {
      id: 2,
      name: 'WhiskerWalk Loafers',
      price: 1599,
      originalPrice: 1999,
      image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Loafers',
      rating: 4.6,
      reviews: 189,
      description: 'Elegant comfort for the sophisticated cat lover.',
      features: ['Premium Leather', 'Cushioned Insole', 'Flexible Sole', 'Moisture Wicking'],
      colors: ['Brown', 'Black', 'Tan'],
      sizes: ['6', '7', '8', '9', '10', '11'],
      platforms: {
        amazon: '#',
        flipkart: '#',
        myntra: '#',
        ajio: '#'
      }
    },
    {
      id: 3,
      name: 'PounceSlip Slip-ons',
      price: 1199,
      originalPrice: 1499,
      image: 'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Slip-ons',
      rating: 4.7,
      reviews: 156,
      description: 'Quick, easy, and incredibly comfortable.',
      features: ['Easy Slip-on', 'Lightweight', 'Flexible Design', 'All-day Comfort'],
      colors: ['Navy', 'Gray', 'Beige'],
      sizes: ['6', '7', '8', '9', '10', '11'],
      platforms: {
        amazon: '#',
        flipkart: '#',
        myntra: '#',
        ajio: '#'
      }
    },
    {
      id: 4,
      name: 'NightStalker Boots',
      price: 2299,
      originalPrice: 2799,
      image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Boots',
      rating: 4.9,
      reviews: 312,
      description: 'Premium leather boots for the urban explorer.',
      features: ['Waterproof', 'Ankle Support', 'Durable Sole', 'Premium Leather'],
      colors: ['Black', 'Brown', 'Dark Gray'],
      sizes: ['6', '7', '8', '9', '10', '11', '12'],
      platforms: {
        amazon: '#',
        flipkart: '#',
        myntra: '#',
        ajio: '#'
      }
    },
    {
      id: 5,
      name: 'PurrsuitRun Athletics',
      price: 1799,
      originalPrice: 2199,
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Sneakers',
      rating: 4.5,
      reviews: 278,
      description: 'Performance meets style in these athletic sneakers.',
      features: ['Shock Absorption', 'Breathable Upper', 'Energy Return', 'Lightweight'],
      colors: ['White/Green', 'Black/Red', 'Gray/Blue'],
      sizes: ['6', '7', '8', '9', '10', '11', '12'],
      platforms: {
        amazon: '#',
        flipkart: '#',
        myntra: '#',
        ajio: '#'
      }
    },
    {
      id: 6,
      name: 'ChillCat Casuals',
      price: 899,
      originalPrice: 1199,
      image: 'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Slip-ons',
      rating: 4.4,
      reviews: 145,
      description: 'Relaxed style for everyday comfort.',
      features: ['Canvas Upper', 'Rubber Sole', 'Casual Style', 'Easy Care'],
      colors: ['White', 'Black', 'Navy', 'Red'],
      sizes: ['6', '7', '8', '9', '10', '11'],
      platforms: {
        amazon: '#',
        flipkart: '#',
        myntra: '#',
        ajio: '#'
      }
    }
  ];

  const categories = ['All', 'Sneakers', 'Loafers', 'Slip-ons', 'Boots'];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section id="products" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
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
            Our <span className="text-emerald-500">Products</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover our premium collection of cat-inspired footwear, designed for comfort and style.
          </p>
        </motion.div>

        {/* Enhanced Filters */}
        <motion.div 
          className="mb-12 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6">
            <Filter className="h-5 w-5 text-emerald-500 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Filters</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 interactive ${
                      selectedCategory === category
                        ? 'bg-emerald-500 text-white shadow-lg'
                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-600'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
              </label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="899"
                  max="2499"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
                />
                <input
                  type="range"
                  min="899"
                  max="2499"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group interactive"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Price Badge */}
                <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.originalPrice && (
                    <span className="line-through text-xs opacity-75 mr-1">₹{product.originalPrice}</span>
                  )}
                  ₹{product.price}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    onClick={() => toggleFavorite(product.id)}
                    className={`p-2 rounded-full backdrop-blur-sm transition-colors duration-200 ${
                      favorites.includes(product.id) 
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/80 text-gray-700 hover:bg-red-500 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className="h-4 w-4" fill={favorites.includes(product.id) ? 'currentColor' : 'none'} />
                  </motion.button>
                  
                  <motion.button
                    onClick={() => setSelectedProduct(product)}
                    className="p-2 bg-white/80 text-gray-700 rounded-full backdrop-blur-sm hover:bg-emerald-500 hover:text-white transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Eye className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {product.name}
                  </h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buy Buttons */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Buy on:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(product.platforms).map(([platform, link]) => (
                      <motion.a
                        key={platform}
                        href={link}
                        className="flex items-center justify-center px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-emerald-50 dark:hover:bg-emerald-900 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-lg text-sm font-medium transition-colors duration-200 capitalize interactive"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {platform}
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-500 dark:text-gray-400">
              No products found matching your criteria.
            </p>
          </motion.div>
        )}
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedProduct.name}
                  </h2>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-80 object-cover rounded-lg"
                    />
                  </div>

                  <div>
                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(selectedProduct.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                          ({selectedProduct.reviews} reviews)
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="text-3xl font-bold text-emerald-600">₹{selectedProduct.price}</span>
                      {selectedProduct.originalPrice && (
                        <span className="ml-2 text-lg text-gray-500 line-through">
                          ₹{selectedProduct.originalPrice}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {selectedProduct.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 text-sm rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Available Colors:</h4>
                      <div className="flex space-x-2">
                        {selectedProduct.colors.map((color) => (
                          <span
                            key={color}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                          >
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(selectedProduct.platforms).map(([platform, link]) => (
                        <a
                          key={platform}
                          href={link}
                          className="flex items-center justify-center px-4 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors duration-200 capitalize"
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Buy on {platform}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Products;