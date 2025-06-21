import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

interface StartupAnimationProps {
  onComplete: () => void;
}

const Cat3D: React.FC<{ position: [number, number, number]; scale: number }> = ({ position, scale }) => {
  return (
    <group position={position} scale={scale}>
      {/* Cat Body */}
      <Box args={[1.5, 0.8, 0.6]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#4a5568" />
      </Box>
      
      {/* Cat Head */}
      <Sphere args={[0.5]} position={[0.8, 0.3, 0]}>
        <meshStandardMaterial color="#4a5568" />
      </Sphere>
      
      {/* Cat Ears */}
      <Box args={[0.2, 0.4, 0.1]} position={[0.9, 0.6, -0.2]}>
        <meshStandardMaterial color="#4a5568" />
      </Box>
      <Box args={[0.2, 0.4, 0.1]} position={[0.9, 0.6, 0.2]}>
        <meshStandardMaterial color="#4a5568" />
      </Box>
      
      {/* Cat Tail */}
      <Box args={[0.8, 0.2, 0.2]} position={[-1, 0.5, 0]} rotation={[0, 0, 0.3]}>
        <meshStandardMaterial color="#4a5568" />
      </Box>
      
      {/* Cat Legs */}
      <Box args={[0.2, 0.6, 0.2]} position={[0.4, -0.7, -0.2]}>
        <meshStandardMaterial color="#4a5568" />
      </Box>
      <Box args={[0.2, 0.6, 0.2]} position={[0.4, -0.7, 0.2]}>
        <meshStandardMaterial color="#4a5568" />
      </Box>
      <Box args={[0.2, 0.6, 0.2]} position={[-0.4, -0.7, -0.2]}>
        <meshStandardMaterial color="#4a5568" />
      </Box>
      <Box args={[0.2, 0.6, 0.2]} position={[-0.4, -0.7, 0.2]}>
        <meshStandardMaterial color="#4a5568" />
      </Box>
    </group>
  );
};

const Person3D: React.FC<{ position: [number, number, number]; scale: number }> = ({ position, scale }) => {
  return (
    <group position={position} scale={scale}>
      {/* Person Body */}
      <Box args={[0.8, 1.5, 0.4]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#10b981" />
      </Box>
      
      {/* Person Head */}
      <Sphere args={[0.4]} position={[0, 1.2, 0]}>
        <meshStandardMaterial color="#f7fafc" />
      </Sphere>
      
      {/* Person Arms */}
      <Box args={[0.3, 1, 0.3]} position={[-0.6, 0.2, 0]}>
        <meshStandardMaterial color="#f7fafc" />
      </Box>
      <Box args={[0.3, 1, 0.3]} position={[0.6, 0.2, 0]}>
        <meshStandardMaterial color="#f7fafc" />
      </Box>
      
      {/* Person Legs */}
      <Box args={[0.3, 1.2, 0.3]} position={[-0.2, -1.5, 0]}>
        <meshStandardMaterial color="#2d3748" />
      </Box>
      <Box args={[0.3, 1.2, 0.3]} position={[0.2, -1.5, 0]}>
        <meshStandardMaterial color="#2d3748" />
      </Box>
    </group>
  );
};

const Shoe3D: React.FC<{ position: [number, number, number]; scale: number }> = ({ position, scale }) => {
  return (
    <group position={position} scale={scale}>
      {/* Shoe Base */}
      <Box args={[2, 0.3, 0.8]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#10b981" />
      </Box>
      
      {/* Shoe Upper */}
      <Box args={[1.5, 0.8, 0.6]} position={[0.2, 0.5, 0]}>
        <meshStandardMaterial color="#065f46" />
      </Box>
      
      {/* Shoe Laces */}
      <Box args={[0.1, 0.6, 0.1]} position={[0.2, 0.7, -0.2]}>
        <meshStandardMaterial color="#ffffff" />
      </Box>
      <Box args={[0.1, 0.6, 0.1]} position={[0.2, 0.7, 0.2]}>
        <meshStandardMaterial color="#ffffff" />
      </Box>
    </group>
  );
};

const StartupAnimation: React.FC<StartupAnimationProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 1000);
    const timer2 = setTimeout(() => setStage(2), 3000);
    const timer3 = setTimeout(() => setStage(3), 5000);
    const timer4 = setTimeout(() => setStage(4), 7000);
    const timer5 = setTimeout(() => onComplete(), 9000);
    const skipTimer = setTimeout(() => setShowSkip(true), 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(skipTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Skip Button */}
      <AnimatePresence>
        {showSkip && (
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            onClick={onComplete}
            className="absolute top-8 right-8 z-10 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors duration-200"
          >
            Skip Animation
          </motion.button>
        )}
      </AnimatePresence>

      {/* 3D Scene */}
      <div className="w-full h-full">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />

          {/* Stage 0: Cat jumping from top corner */}
          {stage >= 0 && (
            <motion.group
              initial={{ position: [8, 8, 0], rotation: [0, 0, -0.5] }}
              animate={{
                position: stage >= 1 ? [0, -2, 0] : [8, 8, 0],
                rotation: stage >= 1 ? [0, 0, 0] : [0, 0, -0.5]
              }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <Cat3D position={[0, 0, 0]} scale={1} />
            </motion.group>
          )}

          {/* Stage 1: Person appears */}
          {stage >= 2 && (
            <motion.group
              initial={{ position: [-4, -2, 0], opacity: 0 }}
              animate={{ position: [-4, -2, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Person3D position={[0, 0, 0]} scale={1} />
            </motion.group>
          )}

          {/* Stage 2: Cat transforms to shoe */}
          {stage >= 3 && (
            <motion.group
              initial={{ position: [0, -2, 0], scale: 1 }}
              animate={{ 
                position: [0, -2, 0], 
                scale: 1.2,
                rotateY: Math.PI * 2 
              }}
              transition={{ duration: 2 }}
            >
              <Shoe3D position={[0, 0, 0]} scale={1} />
            </motion.group>
          )}

          {/* Stage 3: Person admiring animation */}
          {stage >= 4 && (
            <motion.group
              animate={{ 
                rotateY: [0, 0.2, -0.2, 0],
                position: [[-4, -2, 0], [-3.5, -2, 0], [-4, -2, 0]]
              }}
              transition={{ 
                duration: 2, 
                repeat: 2,
                repeatType: "reverse" 
              }}
            >
              <Person3D position={[0, 0, 0]} scale={1} />
            </motion.group>
          )}

          {/* Floating text */}
          {stage >= 4 && (
            <Text
              position={[0, 3, 0]}
              fontSize={1}
              color="#10b981"
              anchorX="center"
              anchorY="middle"
            >
              Cat Shoes
            </Text>
          )}

          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </div>

      {/* Loading indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-2 text-white">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <span className="ml-4 text-sm">Loading your purrfect experience...</span>
        </div>
      </div>
    </motion.div>
  );
};

export default StartupAnimation;