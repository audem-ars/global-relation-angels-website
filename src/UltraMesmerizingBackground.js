import React, { useEffect, useRef } from 'react';

const UltraMesmerizingBackground = ({ section }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Variables for animation
    let particles = [];
    let luminousPoints = [];
    let nebulaClouds = [];
    let floatingShapes = [];
    let waveOffset = 0;
    let animationFrameId;
    let isAnimating = false;
    let time = 0;
    
    // Set canvas to full width/height
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawInitialBackground();
    };
    
    // ENHANCED COLOR PALETTES FOR EACH SECTION - Deeper, more vibrant, trustworthy colors
    // -------------------------------------
    const colorPalettes = {
      hero: {
        primary: '#0d2559', // Ultra deep navy blue - trust and authority
        secondary: '#0f2e6b', // Deep royal blue - stability
        accent1: '#1a56db', // Rich blue - confidence
        accent2: '#3b82f6', // Vibrant blue - energy
        highlight: '#8b5cf6', // Rich purple - luxury
        glow: 'rgba(139, 92, 246, 0.7)', // Purple glow with enhanced opacity
        ambientParticle: ['#3b82f6', '#8b5cf6', '#ffffff'],
        bgGradient: [
          { pos: 0, color: '#0d2559' }, // Ultra deep navy - foundation of trust
          { pos: 0.2, color: '#0f2e6b' }, // Deep royal blue
          { pos: 0.5, color: '#1e40af' }, // Rich royal blue
          { pos: 0.8, color: '#1e429f' }, // Dynamic blue
          { pos: 1, color: '#1e3a8a' } // Sophisticated blue
        ]
      },
      
      services: {
        primary: '#0e7490', // Deep teal - trustworthiness
        secondary: '#0891b2', // Rich teal - intelligence
        accent1: '#0284c7', // Deep blue - reliability
        accent2: '#38bdf8', // Bright blue - clarity
        highlight: '#06b6d4', // Vibrant turquoise - precision
        glow: 'rgba(6, 182, 212, 0.7)', // Turquoise glow
        ambientParticle: ['#06b6d4', '#0ea5e9', '#ffffff'],
        bgGradient: [
          { pos: 0, color: '#0e7490' }, // Deep teal
          { pos: 0.3, color: '#0891b2' }, // Rich teal
          { pos: 0.6, color: '#0284c7' }, // Deep blue
          { pos: 0.8, color: '#0369a1' }, // Strong blue
          { pos: 1, color: '#075985' } // Deep ocean blue
        ]
      },
      
      testimonials: {
        primary: '#4c1d95', // Deep violet - premium quality
        secondary: '#6d28d9', // Rich purple - luxury
        accent1: '#7c3aed', // Bright purple - creativity
        accent2: '#a855f7', // Lavender - inspiration
        highlight: '#c026d3', // Magenta - boldness
        glow: 'rgba(192, 38, 211, 0.7)', // Magenta glow
        ambientParticle: ['#a855f7', '#c026d3', '#ffffff'],
        bgGradient: [
          { pos: 0, color: '#4c1d95' }, // Deep violet
          { pos: 0.3, color: '#5b21b6' }, // Rich purple
          { pos: 0.5, color: '#6d28d9' }, // Medium purple
          { pos: 0.7, color: '#7c3aed' }, // Bright purple
          { pos: 1, color: '#8b5cf6' } // Vibrant purple
        ]
      },
      
      contact: {
        primary: '#064e3b', // Deep emerald - reliability
        secondary: '#047857', // Rich emerald - stability
        accent1: '#059669', // Bright emerald - growth
        accent2: '#10b981', // Vibrant teal - freshness
        highlight: '#34d399', // Mint - precision
        glow: 'rgba(16, 185, 129, 0.7)', // Emerald glow
        ambientParticle: ['#10b981', '#34d399', '#ffffff'],
        bgGradient: [
          { pos: 0, color: '#064e3b' }, // Deep emerald
          { pos: 0.3, color: '#047857' }, // Rich emerald
          { pos: 0.6, color: '#059669' }, // Bright emerald
          { pos: 0.8, color: '#10b981' }, // Vibrant emerald
          { pos: 1, color: '#34d399' } // Light mint accent
        ]
      },
      
      default: {
        primary: '#f8fafc', // Light whitish blue
        secondary: '#e0f2fe', // Soft light blue
        accent1: '#bae6fd', // Pale blue
        accent2: '#7dd3fc', // Light blue
        highlight: '#38bdf8', // Bright blue
        glow: 'rgba(56, 189, 248, 0.5)', // Blue glow
        ambientParticle: ['#38bdf8', '#bae6fd', '#ffffff'],
        bgGradient: [
          { pos: 0, color: '#f8fafc' }, // Light whitish blue
          { pos: 0.3, color: '#f0f9ff' }, // Very light blue
          { pos: 0.6, color: '#e0f7fa' }, // Soft light blue
          { pos: 0.8, color: '#e0f2fe' }, // Light blue
          { pos: 1, color: '#dbeafe' } // Light blue
        ]
      }
    };
    
    // Get color palette for current section
    const getColorPalette = () => {
      return colorPalettes[section] || colorPalettes.default;
    };
    
    // Draw initial background without animation
    const drawInitialBackground = () => {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      switch(section) {
        case 'hero':
          drawUltraHeroBackground();
          break;
        case 'services':
          drawUltraServicesBackground();
          break;
        case 'testimonials':
          drawUltraTestimonialsBackground();
          break;
        case 'contact':
          drawUltraContactBackground();
          break;
        default:
          drawUltraDefaultBackground();
      }
      
      // If not already animating, start the animation loop
      if (!isAnimating) {
        isAnimating = true;
        animate();
      }
    };
    
    // Create a dramatic gradient based on palette
    const createDramaticGradient = (type = 'linear', direction = 'diagonal') => {
      const palette = getColorPalette();
      let gradient;
      
      if (type === 'radial') {
        // Radial gradient
        gradient = ctx.createRadialGradient(
          canvas.width / 2, canvas.height / 2, 0,
          canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) * 0.8
        );
      } else {
        // Linear gradient with different directions
        let x0, y0, x1, y1;
        
        switch(direction) {
          case 'diagonal':
            x0 = 0; y0 = 0; x1 = canvas.width; y1 = canvas.height;
            break;
          case 'reverse-diagonal':
            x0 = canvas.width; y0 = 0; x1 = 0; y1 = canvas.height;
            break;
          case 'horizontal':
            x0 = 0; y0 = canvas.height / 2; x1 = canvas.width; y1 = canvas.height / 2;
            break;
          case 'vertical':
            x0 = canvas.width / 2; y0 = 0; x1 = canvas.width / 2; y1 = canvas.height;
            break;
          default:
            x0 = 0; y0 = 0; x1 = canvas.width; y1 = canvas.height;
        }
        
        gradient = ctx.createLinearGradient(x0, y0, x1, y1);
      }
      
      // Add color stops from the palette's gradient definition
      palette.bgGradient.forEach(stop => {
        gradient.addColorStop(stop.pos, stop.color);
      });
      
      return gradient;
    };

    // ULTRA-DRAMATIC HERO BACKGROUND - ENHANCED WITH DEEPER COLORS
    // -----------------------------
    const drawUltraHeroBackground = () => {
      const palette = getColorPalette();
      
      // Create deep space gradient
      const gradient = createDramaticGradient('linear', 'diagonal');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw nebula clouds with enhanced colors
      createNebulaClouds(5, palette.accent1, palette.accent2);
      drawNebulaClouds();
      
      // Add cosmic light rays with enhanced glow
      drawCosmicLightRays(palette.glow);
      
      // Add stellar dust with enhanced sparkle
      drawStellarDust(palette.highlight, palette.glow);
      
      // Add distant stars with enhanced depth
      drawDistantStars(600); // Increased star count for more depth
      
      // Add a mysterious horizon silhouette
      drawMysteriousHorizon(palette.primary);
      
      // Initialize luminous points
      initLuminousPoints(150, palette.ambientParticle); // Increased point count
      
      // Initialize particles with enhanced effects
      initParticles(180, {
        sizeRange: [1, 4.5],
        speedRange: [0.2, 1.2],
        colorVariations: palette.ambientParticle,
        glowEffect: true,
        glowColor: palette.glow
      });
      
      // Initialize floating shapes with enhanced styles
      initFloatingShapes(10, 'cosmic', palette); // More shapes for greater visual interest
    };
    
    // Create nebula clouds with enhanced vibrancy
    const createNebulaClouds = (count, color1, color2) => {
      nebulaClouds = [];
      
      for (let i = 0; i < count; i++) {
        nebulaClouds.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.7,
          radius: 120 + Math.random() * 240, // Larger clouds
          color: Math.random() > 0.5 ? color1 : color2,
          opacity: 0.08 + Math.random() * 0.12 // Enhanced opacity
        });
      }
    };
    
    // Draw nebula clouds with enhanced glow
    const drawNebulaClouds = () => {
      nebulaClouds.forEach(cloud => {
        const gradient = ctx.createRadialGradient(
          cloud.x, cloud.y, 0,
          cloud.x, cloud.y, cloud.radius
        );
        
        gradient.addColorStop(0, cloud.color.replace(')', `, ${cloud.opacity + 0.15})`).replace('rgb', 'rgba')); // Enhanced center glow
        gradient.addColorStop(0.5, cloud.color.replace(')', `, ${cloud.opacity})`).replace('rgb', 'rgba'));
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cloud.x, cloud.y, cloud.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };
    
    // Draw cosmic light rays with enhanced depth
    const drawCosmicLightRays = (glowColor) => {
      const centerX = canvas.width * (0.3 + Math.random() * 0.4);
      const centerY = canvas.height * (0.2 + Math.random() * 0.2);
      const numRays = 10 + Math.floor(Math.random() * 8); // More rays
      const rayLength = canvas.height * 1.8; // Longer rays
      
      ctx.save();
      ctx.globalCompositeOperation = 'screen'; // Enhanced blending mode
      
      for (let i = 0; i < numRays; i++) {
        const angle = (Math.PI * 2 * i) / numRays;
        const rayWidth = (Math.PI / numRays) * 0.8; // Wider rays
        
        const gradient = ctx.createRadialGradient(
          centerX, centerY, 0,
          centerX, centerY, rayLength
        );
        
        // Enhanced color opacity for more vibrant rays
        gradient.addColorStop(0, 'rgba(157, 0, 255, 0.35)');
        gradient.addColorStop(0.1, 'rgba(157, 0, 255, 0.15)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, rayLength, angle - rayWidth, angle + rayWidth);
        ctx.closePath();
        ctx.fill();
      }
      
      ctx.restore();
    };
    
    // Draw stellar dust with enhanced sparkle
    const drawStellarDust = (highlightColor, glowColor) => {
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      
      // Draw 4 regions of dust (increased from 3)
      for (let r = 0; r < 4; r++) {
        const centerX = Math.random() * canvas.width;
        const centerY = Math.random() * canvas.height;
        const radius = 150 + Math.random() * 250; // Larger dust clouds
        
        const dustCount = 150; // More dust particles
        const color = r % 2 === 0 ? highlightColor : glowColor;
        
        for (let i = 0; i < dustCount; i++) {
          const angle = Math.random() * Math.PI * 2;
          const distance = Math.random() * radius;
          const x = centerX + Math.cos(angle) * distance;
          const y = centerY + Math.sin(angle) * distance;
          const size = 0.5 + Math.random() * 2; // Larger particles
          
          const opacity = 0.15 + Math.random() * 0.25 * (1 - distance / radius); // Enhanced opacity
          
          ctx.fillStyle = color.replace(')', `, ${opacity})`).replace('rgb', 'rgba');
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      ctx.restore();
    };
    
    // Draw distant stars with enhanced brilliance
    const drawDistantStars = (count) => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'; // More brilliant stars
      
      for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() < 0.8 ? 1 : 1 + Math.random() * 2.5; // Some larger stars
        const opacity = 0.4 + Math.random() * 0.6; // Enhanced brilliance
        
        ctx.globalAlpha = opacity;
        ctx.beginPath();
        ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Add occasional star glow for largest stars
        if (size > 2.5) {
          ctx.globalAlpha = 0.15;
          ctx.beginPath();
          ctx.arc(x, y, size * 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      ctx.globalAlpha = 1;
    };
    
    // Draw mysterious horizon silhouette with enhanced detail
    const drawMysteriousHorizon = (color) => {
      const baseHeight = canvas.height * 0.85;
      
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(0, baseHeight);
      
      // Create a jagged/mountainous horizon with more detail
      let x = 0;
      const detail = canvas.width / 200; // More points for smoother curves
      while (x < canvas.width) {
        const height = Math.random() * canvas.height * 0.25; // Taller peaks
        const width = 15 + Math.random() * 100; // Varied widths
        
        // Create a mountain/hill with a smoother curve
        ctx.lineTo(x + width / 3, baseHeight - height * 0.7);
        ctx.lineTo(x + width / 2, baseHeight - height);
        ctx.lineTo(x + width * 2/3, baseHeight - height * 0.8);
        ctx.lineTo(x + width, baseHeight);
        
        x += width;
      }
      
      // Complete the path
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      ctx.fill();
    };
    
    // ULTRA-DRAMATIC SERVICES BACKGROUND - ENHANCED WITH TECH PRECISION
    // --------------------------------
    const drawUltraServicesBackground = () => {
      const palette = getColorPalette();
      
      // Create deep ocean gradient with enhanced depth
      const gradient = createDramaticGradient('linear', 'reverse-diagonal');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add depth water layers with enhanced precision
      drawDeepWaterLayers(palette);
      
      // Draw energy grid with enhanced definition
      drawEnergyGrid(palette);
      
      // Add energy nodes with enhanced glow
      drawEnergyNodes(palette);
      
      // Initialize luminous points
      initLuminousPoints(160, palette.ambientParticle); // More points
      
      // Initialize particles with enhanced connection
      initParticles(180, {
        sizeRange: [1, 3],
        speedRange: [0.2, 1.1],
        colorVariations: palette.ambientParticle,
        glowEffect: true,
        glowColor: palette.glow,
        connectDots: true
      });
      
      // Initialize floating shapes with enhanced tech style
      initFloatingShapes(12, 'tech', palette);
    };
    
    // Draw deep water layers with enhanced flow
    const drawDeepWaterLayers = (palette) => {
      const layerCount = 7; // More layers
      
      for (let i = 0; i < layerCount; i++) {
        const y = canvas.height * 0.3 + (canvas.height * 0.6 * i / layerCount);
        const opacity = 0.12 - (i * 0.01); // Enhanced visibility
        
        ctx.strokeStyle = palette.accent2.replace(')', `, ${opacity})`).replace('rgb', 'rgba');
        ctx.lineWidth = 1.5; // Thicker lines
        
        ctx.beginPath();
        
        let lastY = y;
        
        for (let x = 0; x < canvas.width; x += 4) { // More detail points
          const variance = Math.sin(x * 0.008 + i * 2) * 25; // Enhanced wave pattern
          const newY = y + variance;
          
          if (x === 0) {
            ctx.moveTo(x, newY);
          } else {
            // Create a smooth curve
            ctx.lineTo(x, newY);
          }
          
          lastY = newY;
        }
        
        ctx.stroke();
      }
    };
    
    // Draw energy grid with enhanced precision
    const drawEnergyGrid = (palette) => {
      const gridSize = 40; // Larger grid for more precision
      const opacity = 0.18; // Enhanced visibility
      
      ctx.strokeStyle = palette.highlight.replace(')', `, ${opacity})`).replace('rgb', 'rgba');
      ctx.lineWidth = 0.75; // Refined line width
      
      // Draw horizontal lines with wave effect
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        
        for (let x = 0; x < canvas.width; x += 4) { // More detail points
          const variance = Math.sin(x * 0.008 + y * 0.008) * 7; // Enhanced wave pattern
          const newY = y + variance;
          
          if (x === 0) {
            ctx.moveTo(x, newY);
          } else {
            ctx.lineTo(x, newY);
          }
        }
        
        ctx.stroke();
      }
      
      // Draw vertical lines with wave effect
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        
        for (let y = 0; y < canvas.height; y += 4) { // More detail points
          const variance = Math.sin(y * 0.008 + x * 0.008) * 7; // Enhanced wave pattern
          const newX = x + variance;
          
          if (y === 0) {
            ctx.moveTo(newX, y);
          } else {
            ctx.lineTo(newX, y);
          }
        }
        
        ctx.stroke();
      }
    };
    
    // Draw energy nodes with enhanced glow and connections
    const drawEnergyNodes = (palette) => {
      const nodeCount = 8; // More nodes
      
      for (let i = 0; i < nodeCount; i++) {
        const x = canvas.width * 0.2 + (canvas.width * 0.6 * i / nodeCount);
        const y = canvas.height * (0.3 + Math.random() * 0.4);
        const radius = 35 + Math.random() * 35; // Larger nodes
        
        // Create glowing node with enhanced glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, palette.highlight.replace(')', ', 0.7)').replace('rgb', 'rgba')); // Enhanced center brightness
        gradient.addColorStop(0.5, palette.accent2.replace(')', ', 0.4)').replace('rgb', 'rgba')); // Enhanced mid glow
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Create core with enhanced brilliance
        ctx.fillStyle = palette.highlight;
        ctx.beginPath();
        ctx.arc(x, y, radius * 0.3, 0, Math.PI * 2);
        ctx.fill();
        
        // Add inner ring for enhanced detail
        ctx.strokeStyle = palette.highlight.replace(')', ', 0.5)').replace('rgb', 'rgba');
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, radius * 0.6, 0, Math.PI * 2);
        ctx.stroke();
        
        // Connect nodes with enhanced connections
        if (i > 0) {
          const prevX = canvas.width * 0.2 + (canvas.width * 0.6 * (i - 1) / nodeCount);
          const prevY = canvas.height * (0.3 + Math.random() * 0.4);
          
          // Main connection line
          ctx.strokeStyle = palette.highlight.replace(')', ', 0.4)').replace('rgb', 'rgba');
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.moveTo(prevX, prevY);
          ctx.lineTo(x, y);
          ctx.stroke();
          
          // Secondary glow line
          ctx.strokeStyle = palette.highlight.replace(')', ', 0.15)').replace('rgb', 'rgba');
          ctx.lineWidth = 6;
          ctx.beginPath();
          ctx.moveTo(prevX, prevY);
          ctx.lineTo(x, y);
          ctx.stroke();
        }
      }
    };
    
    // ULTRA-DRAMATIC TESTIMONIALS BACKGROUND - ENHANCED WITH LUXURY
    // ------------------------------------
    const drawUltraTestimonialsBackground = () => {
      const palette = getColorPalette();
      
      // Create cosmic purple gradient with enhanced richness
      const gradient = createDramaticGradient('radial');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add magical dust clouds with enhanced luxury feel
      drawMagicalDustClouds(palette);
      
      // Draw mystic circles with enhanced sophistication
      drawMysticCircles(palette);
      
      // Add light sparks with enhanced brilliance
      drawLightSparks(palette);
      
      // Initialize luminous points with enhanced glow
      initLuminousPoints(200, palette.ambientParticle); // More points
      
      // Initialize particles with enhanced luxury feel
      initParticles(160, {
        sizeRange: [1.2, 4.5], // Larger particles
        speedRange: [0.15, 0.7], // Slower, more elegant movement
        colorVariations: palette.ambientParticle,
        glowEffect: true,
        glowColor: palette.glow
      });
      
      // Initialize floating shapes with enhanced mystic style
      initFloatingShapes(9, 'mystic', palette);
    };
    
    // Draw magical dust clouds with enhanced luxury
    const drawMagicalDustClouds = (palette) => {
      const cloudCount = 4; // More clouds
      
      for (let i = 0; i < cloudCount; i++) {
        const x = canvas.width * (0.2 + Math.random() * 0.6);
        const y = canvas.height * (0.2 + Math.random() * 0.6);
        const radius = 130 + Math.random() * 170; // Larger clouds
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, palette.accent2.replace(')', ', 0.4)').replace('rgb', 'rgba')); // Enhanced center brightness
        gradient.addColorStop(0.5, palette.accent1.replace(')', ', 0.15)').replace('rgb', 'rgba')); // Enhanced mid glow
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Add cloud particles with enhanced luxury sparkle
        for (let j = 0; j < 70; j++) { // More particles
          const angle = Math.random() * Math.PI * 2;
          const distance = Math.random() * radius * 0.7;
          const particleX = x + Math.cos(angle) * distance;
          const particleY = y + Math.sin(angle) * distance;
          const particleSize = 1.2 + Math.random() * 2.5; // Larger particles
          
          ctx.fillStyle = palette.highlight.replace(')', `, ${0.25 + Math.random() * 0.6})`).replace('rgb', 'rgba'); // Enhanced brightness
          ctx.beginPath();
          ctx.arc(particleX, particleY, particleSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };
    
    // Draw mystic circles with enhanced sophistication
    const drawMysticCircles = (palette) => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Draw concentric circles with enhanced precision
      for (let i = 0; i < 9; i++) { // More circles
        const radius = canvas.width * (0.15 + (i * 0.08)); // More precise spacing
        
        ctx.strokeStyle = palette.highlight.replace(')', `, ${0.12 - (i * 0.01)})`).replace('rgb', 'rgba');
        ctx.lineWidth = i === 0 ? 2 : 1; // Enhanced first circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Draw intersecting circles with enhanced mystique
      for (let i = 0; i < 5; i++) { // More intersecting circles
        const x = centerX + (Math.random() - 0.5) * canvas.width * 0.4;
        const y = centerY + (Math.random() - 0.5) * canvas.height * 0.4;
        const radius = canvas.width * (0.1 + Math.random() * 0.1); // Varied sizes
        
        ctx.strokeStyle = palette.accent2.replace(')', ', 0.15)').replace('rgb', 'rgba');
        ctx.lineWidth = 1.5; // Thicker lines
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.stroke();
        
        // Add decorative patterns for mystique
        const patternCount = 6 + Math.floor(Math.random() * 6);
        ctx.strokeStyle = palette.accent1.replace(')', ', 0.1)').replace('rgb', 'rgba');
        ctx.lineWidth = 0.75;
        
        for (let j = 0; j < patternCount; j++) {
          const angle = (Math.PI * 2 * j) / patternCount;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(
            x + Math.cos(angle) * radius,
            y + Math.sin(angle) * radius
          );
          ctx.stroke();
        }
      }
    };
    
    // Draw light sparks with enhanced brilliance
    const drawLightSparks = (palette) => {
      const sparkCount = 30; // More sparks
      
      for (let i = 0; i < sparkCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = 2.5 + Math.random() * 5; // Larger sparks
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3.5); // Enhanced glow radius
        gradient.addColorStop(0, palette.highlight.replace(')', ', 0.8)').replace('rgb', 'rgba')); // Enhanced brightness
        gradient.addColorStop(0.5, palette.highlight.replace(')', ', 0.4)').replace('rgb', 'rgba')); // Enhanced mid glow
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, size * 3.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Core with enhanced brilliance
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.beginPath();
        ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Add star-like rays for enhanced sparkle
        if (Math.random() > 0.7) { // Only on some sparks
          ctx.strokeStyle = palette.highlight.replace(')', ', 0.6)').replace('rgb', 'rgba');
          ctx.lineWidth = 1;
          
          for (let j = 0; j < 4; j++) {
            const angle = (Math.PI * j) / 4;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(
              x + Math.cos(angle) * size * 5,
              y + Math.sin(angle) * size * 5
            );
            ctx.stroke();
          }
        }
      }
    };
    
    // ULTRA-DRAMATIC CONTACT BACKGROUND - ENHANCED WITH DECISIVENESS
    // -------------------------------
    const drawUltraContactBackground = () => {
      const palette = getColorPalette();
      
      // Create deep teal gradient with enhanced precision
      const gradient = createDramaticGradient('linear', 'vertical');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw data streams with enhanced clarity
      drawDataStreams(palette);
      
      // Draw connection nodes with enhanced precision
      drawConnectionNodes(palette);
      
      // Add technical pattern with enhanced detail
      drawTechnicalPattern(palette);
      
      // Initialize luminous points with enhanced cohesion
      initLuminousPoints(150, palette.ambientParticle);
      
      // Initialize particles with enhanced connectivity
      initParticles(180, {
        sizeRange: [1, 3],
        speedRange: [0.3, 1],
        colorVariations: palette.ambientParticle,
        glowEffect: true,
        glowColor: palette.glow,
        connectDots: true,
        interactive: true
      });
      
      // Initialize floating shapes with enhanced precision
      initFloatingShapes(10, 'tech', palette);
    };
    
    // Draw data streams with enhanced clarity and precision
    const drawDataStreams = (palette) => {
      const streamCount = 18; // More streams for enhanced density
      
      for (let i = 0; i < streamCount; i++) {
        const x = Math.random() * canvas.width;
        const width = 120 + Math.random() * 240; // Wider streams
        const speed = 0.6 + Math.random() * 2.2; // Enhanced variation
        
        const gradient = ctx.createLinearGradient(x - width / 2, 0, x + width / 2, 0);
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
        gradient.addColorStop(0.5, palette.accent2.replace(')', ', 0.2)').replace('rgb', 'rgba')); // Enhanced visibility
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x - width / 2, 0, width, canvas.height);
        
        // Add data packets with enhanced definition
        const packetCount = 7 + Math.floor(Math.random() * 12); // More packets
        
        for (let j = 0; j < packetCount; j++) {
          const packetX = x + (Math.random() - 0.5) * width * 0.8;
          const packetY = Math.random() * canvas.height;
          const packetSize = 2.5 + Math.random() * 4.5; // Larger packets
          
          // Create main packet
          ctx.fillStyle = palette.highlight;
          ctx.beginPath();
          ctx.arc(packetX, packetY, packetSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Add data trails for enhanced movement sense
          ctx.strokeStyle = palette.highlight.replace(')', ', 0.3)').replace('rgb', 'rgba');
          ctx.lineWidth = packetSize * 0.4;
          ctx.beginPath();
          ctx.moveTo(packetX, packetY);
          ctx.lineTo(packetX, packetY - packetSize * 6);
          ctx.stroke();
          
          // Add glow with enhanced brilliance
          const glowGradient = ctx.createRadialGradient(
            packetX, packetY, 0,
            packetX, packetY, packetSize * 6 // Enhanced glow radius
          );
          glowGradient.addColorStop(0, palette.highlight.replace(')', ', 0.4)').replace('rgb', 'rgba')); // Enhanced brightness
          glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          
          ctx.fillStyle = glowGradient;
          ctx.beginPath();
          ctx.arc(packetX, packetY, packetSize * 6, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };
    
    // Draw connection nodes with enhanced precision and detail
    const drawConnectionNodes = (palette) => {
      const nodeCount = 12; // More nodes for enhanced network feel
      const nodes = [];
      
      // Create nodes at strategic positions
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: 5 + Math.random() * 12 // Enhanced size variation
        });
      }
      
      // Draw connections between nodes with enhanced precision
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < canvas.width * 0.45) { // Enhanced connection distance
            // Draw main connection line
            const opacity = 0.25 * (1 - distance / (canvas.width * 0.45)); // Enhanced visibility
            
            ctx.strokeStyle = palette.highlight.replace(')', `, ${opacity})`).replace('rgb', 'rgba');
            ctx.lineWidth = 1.5; // Thicker lines
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
            
            // Add secondary connection glow for enhanced network feel
            if (distance < canvas.width * 0.25) { // Only for closer nodes
              ctx.strokeStyle = palette.highlight.replace(')', `, ${opacity * 0.3})`).replace('rgb', 'rgba');
              ctx.lineWidth = 4;
              ctx.beginPath();
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(nodes[j].x, nodes[j].y);
              ctx.stroke();
            }
          }
        }
      }
      
      // Draw node circles with enhanced detail
      nodes.forEach(node => {
        // Draw glow with enhanced brilliance
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 5 // Enhanced glow radius
        );
        gradient.addColorStop(0, palette.highlight.replace(')', ', 0.7)').replace('rgb', 'rgba')); // Enhanced brightness
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 5, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw node with enhanced detail
        ctx.fillStyle = palette.highlight;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Add inner ring for enhanced node detail
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 0.6, 0, Math.PI * 2);
        ctx.stroke();
      });
    };
    
    // Draw technical pattern with enhanced precision
    const drawTechnicalPattern = (palette) => {
      const gridSize = 50; // Enhanced grid size for more precision
      
      // Draw grid with enhanced clarity
      ctx.strokeStyle = palette.accent1.replace(')', ', 0.15)').replace('rgb', 'rgba'); // Enhanced visibility
      ctx.lineWidth = 1.2; // Thicker lines
      
      // Horizontal lines with enhanced precision
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Vertical lines with enhanced precision
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Add circuit-like elements at intersections with enhanced detail
      for (let x = gridSize; x < canvas.width; x += gridSize) {
        for (let y = gridSize; y < canvas.height; y += gridSize) {
          if (Math.random() < 0.15) { // More elements
            const size = 5 + Math.random() * 5; // Enhanced size
            
            ctx.fillStyle = palette.accent2.replace(')', ', 0.5)').replace('rgb', 'rgba'); // Enhanced visibility
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
            
            // Add small lines from the circle with enhanced detail
            const lineCount = 2 + Math.floor(Math.random() * 3); // More lines
            
            for (let i = 0; i < lineCount; i++) {
              const angle = Math.random() * Math.PI * 2;
              const length = gridSize * 0.35 + Math.random() * gridSize * 0.25; // Enhanced length
              
              ctx.strokeStyle = palette.accent2.replace(')', ', 0.3)').replace('rgb', 'rgba'); // Enhanced visibility
              ctx.lineWidth = 1.5; // Thicker lines
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length);
              ctx.stroke();
              
              // Add connection nodes at the end of some lines
              if (Math.random() > 0.6) {
                const endX = x + Math.cos(angle) * length;
                const endY = y + Math.sin(angle) * length;
                const nodeSize = 2 + Math.random() * 2;
                
                ctx.fillStyle = palette.accent2.replace(')', ', 0.4)').replace('rgb', 'rgba');
                ctx.beginPath();
                ctx.arc(endX, endY, nodeSize, 0, Math.PI * 2);
                ctx.fill();
              }
            }
          }
        }
      }
    };
    
    // ULTRA-DRAMATIC DEFAULT BACKGROUND - ENHANCED WITH SUBTLETY
    // ------------------------------
    const drawUltraDefaultBackground = () => {
      const palette = getColorPalette();
      
      // Create subtle gradient with enhanced refinement
      const gradient = createDramaticGradient('linear', 'diagonal');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add subtle pattern with enhanced sophistication
      drawSubtlePattern(palette);
      
      // Initialize minimal particles with enhanced elegance
      initParticles(70, { // More particles
        sizeRange: [1, 2.5], // Slightly larger
        speedRange: [0.08, 0.25], // Slower, more elegant
        colorVariations: [palette.highlight],
        glowEffect: true, // Added subtle glow
        glowColor: palette.highlight.replace(')', ', 0.3)').replace('rgb', 'rgba')
      });
    };
    
    // Draw subtle pattern with enhanced sophistication
    const drawSubtlePattern = (palette) => {
      // Draw dot grid with enhanced refinement
      ctx.fillStyle = palette.highlight.replace(')', ', 0.12)').replace('rgb', 'rgba'); // Enhanced visibility
      
      for (let x = 25; x < canvas.width; x += 25) { // More dense grid
        for (let y = 25; y < canvas.height; y += 25) {
          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2); // Slightly larger dots
          ctx.fill();
        }
      }
      
      // Add some floating subtle gradients with enhanced elegance
      for (let i = 0; i < 5; i++) { // More gradients
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = 150 + Math.random() * 250; // Larger radius
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, palette.highlight.replace(')', ', 0.04)').replace('rgb', 'rgba')); // Enhanced subtlety
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Add subtle flowing lines for sophistication
      ctx.strokeStyle = palette.highlight.replace(')', ', 0.08)').replace('rgb', 'rgba');
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 3; i++) {
        const yBase = canvas.height * (0.25 + i * 0.25);
        
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 5) {
          const y = yBase + Math.sin(x * 0.01) * 50;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
    };
    
    // PARTICLE SYSTEMS - ENHANCED WITH ELEGANCE
    // --------------
    // Initialize luminous points with enhanced brilliance
    const initLuminousPoints = (count, colors) => {
      luminousPoints = [];
      
      for (let i = 0; i < count; i++) {
        luminousPoints.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: 1.2 + Math.random() * 2.5, // Enhanced size
          color: colors[Math.floor(Math.random() * colors.length)],
          pulseFactor: 0.5 + Math.random() * 0.6, // Enhanced pulse
          pulseSpeed: 0.004 + Math.random() * 0.018, // More natural speed
          opacity: 0.35 + Math.random() * 0.65 // Enhanced brilliance
        });
      }
    };
    
    // Initialize particles with enhanced movement
    const initParticles = (count, options = {}) => {
      const {
        sizeRange = [1, 3],
        speedRange = [0.2, 1],
        colorVariations = ['#ffffff'],
        glowEffect = false,
        glowColor = 'rgba(255, 255, 255, 0.7)',
        connectDots = false,
        interactive = false
      } = options;
      
      particles = [];
      
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]),
          speedX: (Math.random() - 0.5) * (speedRange[1] - speedRange[0]) * 2,
          speedY: (Math.random() - 0.5) * (speedRange[1] - speedRange[0]) * 2,
          color: colorVariations[Math.floor(Math.random() * colorVariations.length)],
          glow: glowEffect,
          glowColor: glowColor,
          connectDots: connectDots,
          interactive: interactive,
          pulseDirection: Math.random() > 0.5 ? 1 : -1,
          pulseSpeed: 0.004 + Math.random() * 0.009, // More natural speed
          originalSize: 0
        });
        
        // Store original size for pulsing effect
        particles[i].originalSize = particles[i].size;
      }
    };
    
    // Initialize floating shapes with enhanced sophistication
    const initFloatingShapes = (count, style = 'default', palette) => {
      floatingShapes = [];
      
      const baseShapeTypes = ['circle', 'square', 'triangle', 'polygon'];
      let shapeTypes = [...baseShapeTypes];
      
      // Customize shape types based on style with enhanced variety
      if (style === 'cosmic') {
        shapeTypes = ['circle', 'polygon', 'star', 'ring', 'doublering', 'hex']; // Enhanced variety
      } else if (style === 'tech') {
        shapeTypes = ['square', 'polygon', 'diamond', 'circuit', 'hexagon', 'octagon']; // Enhanced variety
      } else if (style === 'mystic') {
        shapeTypes = ['circle', 'polygon', 'star', 'rune', 'mysticSeal', 'triad']; // Enhanced variety
      }
      
      for (let i = 0; i < count; i++) {
        let shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
        let size, opacity, strokeWidth;
        
        switch(style) {
          case 'cosmic':
            size = 45 + Math.random() * 90; // Enhanced size
            opacity = 0.12 + Math.random() * 0.22; // Enhanced visibility
            strokeWidth = 1.8; // Enhanced line weight
            break;
          case 'tech':
            size = 25 + Math.random() * 55; // Enhanced size
            opacity = 0.18 + Math.random() * 0.22; // Enhanced visibility
            strokeWidth = 1.2; // Enhanced line weight
            break;
          case 'mystic':
            size = 35 + Math.random() * 75; // Enhanced size
            opacity = 0.12 + Math.random() * 0.18; // Enhanced visibility
            strokeWidth = 1.7; // Enhanced line weight
            break;
          default:
            size = 25 + Math.random() * 65; // Enhanced size
            opacity = 0.1 + Math.random() * 0.12; // Enhanced visibility
            strokeWidth = 1.2; // Enhanced line weight
        }
        
        floatingShapes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          type: shapeType,
          size: size,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.012, // Enhanced rotational variation
          speedX: (Math.random() - 0.5) * 0.35, // Enhanced movement
          speedY: (Math.random() - 0.5) * 0.35, // Enhanced movement
          opacity: opacity,
          strokeWidth: strokeWidth,
          fillColor: palette.accent1,
          strokeColor: palette.highlight,
          sides: Math.floor(5 + Math.random() * 4), // For polygons
          style: style
        });
      }
    };
    
    // ANIMATION LOOP - ENHANCED WITH SMOOTHNESS
    // -------------
    const animate = () => {
      // Increment time for animations with enhanced natural flow
      time += 0.008; // Slightly slower for more elegance
      
      // Apply subtle fade effect instead of full clear for enhanced smoothness
      ctx.fillStyle = 'rgba(0, 0, 0, 0.025)'; // Enhanced subtle fade
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update wave offset for flowing animations
      waveOffset += 0.4; // Slightly slower for more natural flow
      
      // Update and draw luminous points
      updateLuminousPoints();
      
      // Update and draw floating shapes
      updateFloatingShapes();
      
      // Update and draw particles
      updateParticles();
      
      // Continue animation
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Update luminous points with enhanced elegance
    const updateLuminousPoints = () => {
      luminousPoints.forEach(point => {
        // Pulse effect with enhanced natural flow
        const pulseAmount = Math.sin(time * point.pulseSpeed * 10) * point.pulseFactor;
        const currentRadius = point.radius * (1 + pulseAmount * 0.6); // Enhanced variation
        const currentOpacity = point.opacity * (0.7 + pulseAmount * 0.3);
        
        // Draw glow with enhanced brilliance
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, currentRadius * 6 // Enhanced glow radius
        );
        gradient.addColorStop(0, point.color.replace(')', `, ${currentOpacity * 0.6})`).replace('rgb', 'rgba')); // Enhanced brightness
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(point.x, point.y, currentRadius * 6, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw core with enhanced brilliance
        ctx.fillStyle = point.color.replace(')', `, ${currentOpacity})`).replace('rgb', 'rgba');
        ctx.beginPath();
        ctx.arc(point.x, point.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      });
    };
    
    // Update floating shapes with enhanced movement
    const updateFloatingShapes = () => {
      floatingShapes.forEach(shape => {
        // Update position with enhanced natural flow
        shape.x += shape.speedX * (1 + Math.sin(time * 0.5) * 0.1); // Enhanced natural variation
        shape.y += shape.speedY * (1 + Math.cos(time * 0.5) * 0.1); // Enhanced natural variation
        
        // Update rotation with enhanced elegance
        shape.rotation += shape.rotationSpeed * (1 + Math.sin(time) * 0.2); // Enhanced natural variation
        
        // Wrap around edges
        if (shape.x < -shape.size) shape.x = canvas.width + shape.size;
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size;
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size;
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size;
        
        // Draw shape with enhanced detail
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        
        ctx.fillStyle = shape.fillColor.replace(')', `, ${shape.opacity * 0.5})`).replace('rgb', 'rgba');
        ctx.strokeStyle = shape.strokeColor.replace(')', `, ${shape.opacity})`).replace('rgb', 'rgba');
        ctx.lineWidth = shape.strokeWidth;
        
        switch(shape.type) {
          case 'circle':
            ctx.beginPath();
            ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            break;
            
          case 'ring':
            ctx.beginPath();
            ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
            ctx.stroke();
            
            // Inner ring with enhanced detail
            ctx.beginPath();
            ctx.arc(0, 0, shape.size / 3, 0, Math.PI * 2);
            ctx.stroke();
            break;
            
          case 'doublering': // Enhanced shape type
            ctx.beginPath();
            ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.arc(0, 0, shape.size / 3, 0, Math.PI * 2);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.arc(0, 0, shape.size / 5, 0, Math.PI * 2);
            ctx.stroke();
            break;
            
          case 'square':
            const halfSize = shape.size / 2;
            ctx.fillRect(-halfSize, -halfSize, shape.size, shape.size);
            ctx.strokeRect(-halfSize, -halfSize, shape.size, shape.size);
            break;
            
          case 'diamond':
            ctx.beginPath();
            ctx.moveTo(0, -shape.size / 2);
            ctx.lineTo(shape.size / 2, 0);
            ctx.lineTo(0, shape.size / 2);
            ctx.lineTo(-shape.size / 2, 0);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            break;
            
          case 'triangle':
            const h = shape.size * Math.sqrt(3) / 2;
            ctx.beginPath();
            ctx.moveTo(0, -h / 2);
            ctx.lineTo(-shape.size / 2, h / 2);
            ctx.lineTo(shape.size / 2, h / 2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            break;
            
          case 'polygon':
            drawPolygon(0, 0, shape.size / 2, shape.sides);
            ctx.fill();
            ctx.stroke();
            break;
            
          case 'star':
            drawStar(0, 0, shape.size / 2, shape.size / 4, 5);
            ctx.fill();
            ctx.stroke();
            break;
            
          case 'hex': // Enhanced shape type
            drawPolygon(0, 0, shape.size / 2, 6);
            ctx.fill();
            ctx.stroke();
            break;
            
          case 'hexagon': // Enhanced shape type for tech
            drawPolygon(0, 0, shape.size / 2, 6);
            ctx.fill();
            ctx.stroke();
            
            // Inner detail for enhanced tech feel
            ctx.beginPath();
            ctx.arc(0, 0, shape.size / 5, 0, Math.PI * 2);
            ctx.fill();
            break;
            
          case 'octagon': // Enhanced shape type for tech
            drawPolygon(0, 0, shape.size / 2, 8);
            ctx.fill();
            ctx.stroke();
            break;
            
          case 'circuit':
            drawCircuit(0, 0, shape.size);
            break;
            
          case 'rune':
            drawRune(0, 0, shape.size);
            break;
            
          case 'mysticSeal': // Enhanced shape type
            drawMysticSeal(0, 0, shape.size);
            break;
            
          case 'triad': // Enhanced shape type
            drawTriad(0, 0, shape.size);
            break;
        }
        
        ctx.restore();
      });
    };
    
    // Draw a polygon with enhanced precision
    const drawPolygon = (x, y, radius, sides) => {
      ctx.beginPath();
      for (let i = 0; i < sides; i++) {
        const angle = (Math.PI * 2 * i) / sides + Math.PI / sides;
        const pointX = x + radius * Math.cos(angle);
        const pointY = y + radius * Math.sin(angle);
        
        if (i === 0) {
          ctx.moveTo(pointX, pointY);
        } else {
          ctx.lineTo(pointX, pointY);
        }
      }
      ctx.closePath();
    };
    
    // Draw a star with enhanced brilliance
    const drawStar = (x, y, outerRadius, innerRadius, points) => {
      ctx.beginPath();
      for (let i = 0; i < points * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = (Math.PI * i) / points;
        const pointX = x + radius * Math.cos(angle);
        const pointY = y + radius * Math.sin(angle);
        
        if (i === 0) {
          ctx.moveTo(pointX, pointY);
        } else {
          ctx.lineTo(pointX, pointY);
        }
      }
      ctx.closePath();
    };
    
    // Draw a circuit-like pattern with enhanced tech feel
    const drawCircuit = (x, y, size) => {
      // Main shape with enhanced precision
      ctx.beginPath();
      ctx.rect(-size / 2, -size / 2, size, size);
      ctx.stroke();
      
      // Inner lines with enhanced detail
      const gap = size / 4;
      
      // Horizontal line with enhanced tech feel
      ctx.beginPath();
      ctx.moveTo(-size / 2, 0);
      ctx.lineTo(size / 2, 0);
      ctx.stroke();
      
      // Vertical line with enhanced tech feel
      ctx.beginPath();
      ctx.moveTo(0, -size / 2);
      ctx.lineTo(0, size / 2);
      ctx.stroke();
      
      // Draw small circle at center with enhanced detail
      ctx.beginPath();
      ctx.arc(0, 0, size / 10, 0, Math.PI * 2);
      ctx.fill();
      
      // Add corner nodes for enhanced tech feel
      const cornerSize = size / 15;
      for (let i = 0; i < 4; i++) {
        const angle = (Math.PI / 2) * i;
        const cornerX = Math.cos(angle) * (size / 2 - cornerSize);
        const cornerY = Math.sin(angle) * (size / 2 - cornerSize);
        
        ctx.beginPath();
        ctx.arc(cornerX, cornerY, cornerSize, 0, Math.PI * 2);
        ctx.fill();
      }
    };
    
    // Draw a rune-like symbol with enhanced mystique
    const drawRune = (x, y, size) => {
      const runeType = Math.floor(Math.random() * 7); // More rune types
      
      switch(runeType) {
        case 0: // Hagalaz with enhanced detail
          ctx.beginPath();
          ctx.moveTo(-size / 3, -size / 2);
          ctx.lineTo(size / 3, size / 2);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(size / 3, -size / 2);
          ctx.lineTo(-size / 3, size / 2);
          ctx.stroke();
          
          // Add central line for enhanced detail
          ctx.beginPath();
          ctx.moveTo(0, -size / 3);
          ctx.lineTo(0, size / 3);
          ctx.stroke();
          break;
          
        case 1: // Algiz with enhanced detail
          ctx.beginPath();
          ctx.moveTo(0, -size / 2);
          ctx.lineTo(0, size / 2);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(0, -size / 2);
          ctx.lineTo(-size / 3, -size / 4);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(0, -size / 2);
          ctx.lineTo(size / 3, -size / 4);
          ctx.stroke();
          
          // Add decorative element for enhanced mystique
          ctx.beginPath();
          ctx.arc(0, -size / 2, size / 15, 0, Math.PI * 2);
          ctx.fill();
          break;
          
        case 2: // Sowilo with enhanced flow
          ctx.beginPath();
          ctx.moveTo(-size / 3, -size / 2);
          ctx.lineTo(0, -size / 3);
          ctx.lineTo(-size / 3, -size / 6);
          ctx.lineTo(0, 0);
          ctx.lineTo(-size / 3, size / 6);
          ctx.lineTo(0, size / 3);
          ctx.lineTo(-size / 3, size / 2);
          ctx.stroke();
          
          // Add endpoint details for enhanced mystique
          ctx.beginPath();
          ctx.arc(-size / 3, -size / 2, size / 20, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.beginPath();
          ctx.arc(-size / 3, size / 2, size / 20, 0, Math.PI * 2);
          ctx.fill();
          break;
          
        case 3: // Eihwaz with enhanced detail
          ctx.beginPath();
          ctx.moveTo(0, -size / 2);
          ctx.lineTo(0, size / 2);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(-size / 4, -size / 4);
          ctx.lineTo(size / 4, -size / 3);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(-size / 4, size / 4);
          ctx.lineTo(size / 4, size / 3);
          ctx.stroke();
          
          // Add central point for enhanced mystique
          ctx.beginPath();
          ctx.arc(0, 0, size / 18, 0, Math.PI * 2);
          ctx.fill();
          break;
          
        case 4: // Othala with enhanced precision
          ctx.beginPath();
          ctx.moveTo(-size / 2, size / 2);
          ctx.lineTo(-size / 2, -size / 2);
          ctx.lineTo(size / 2, -size / 2);
          ctx.lineTo(size / 2, size / 2);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(-size / 2, -size / 2);
          ctx.lineTo(0, 0);
          ctx.lineTo(size / 2, -size / 2);
          ctx.stroke();
          
          // Add decorative elements for enhanced mystique
          ctx.beginPath();
          ctx.arc(-size / 2, -size / 2, size / 18, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.beginPath();
          ctx.arc(size / 2, -size / 2, size / 18, 0, Math.PI * 2);
          ctx.fill();
          break;
          
        case 5: // Ansuz with enhanced flow - New rune
          ctx.beginPath();
          ctx.moveTo(-size / 4, -size / 2);
          ctx.lineTo(0, -size / 2);
          ctx.lineTo(size / 4, -size / 4);
          ctx.lineTo(0, 0);
          ctx.lineTo(size / 4, size / 4);
          ctx.lineTo(0, size / 2);
          ctx.lineTo(-size / 4, size / 2);
          ctx.stroke();
          
          // Add decorative circle for enhanced mystique
          ctx.beginPath();
          ctx.arc(0, 0, size / 15, 0, Math.PI * 2);
          ctx.stroke();
          break;
          
        case 6: // Dagaz with enhanced symmetry - New rune
          ctx.beginPath();
          ctx.moveTo(-size / 2, -size / 3);
          ctx.lineTo(-size / 4, size / 3);
          ctx.lineTo(size / 4, -size / 3);
          ctx.lineTo(size / 2, size / 3);
          ctx.stroke();
          
          // Connecting line
          ctx.beginPath();
          ctx.moveTo(-size / 3, 0);
          ctx.lineTo(size / 3, 0);
          ctx.stroke();
          
          // Add decorative elements for enhanced mystique
          ctx.beginPath();
          ctx.arc(-size / 2, -size / 3, size / 20, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.beginPath();
          ctx.arc(size / 2, size / 3, size / 20, 0, Math.PI * 2);
          ctx.fill();
          break;
      }
    };
    
    // Draw a mystic seal with enhanced spiritual symbolism - New shape
    const drawMysticSeal = (x, y, size) => {
      // Outer circle
      ctx.beginPath();
      ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
      ctx.stroke();
      
      // Inner circle
      ctx.beginPath();
      ctx.arc(0, 0, size / 3, 0, Math.PI * 2);
      ctx.stroke();
      
      // Draw connecting lines
      const lineCount = 6;
      for (let i = 0; i < lineCount; i++) {
        const angle = (Math.PI * 2 * i) / lineCount;
        const innerX = Math.cos(angle) * (size / 3);
        const innerY = Math.sin(angle) * (size / 3);
        const outerX = Math.cos(angle) * (size / 2);
        const outerY = Math.sin(angle) * (size / 2);
        
        ctx.beginPath();
        ctx.moveTo(innerX, innerY);
        ctx.lineTo(outerX, outerY);
        ctx.stroke();
      }
      
      // Central symbol
      ctx.beginPath();
      ctx.moveTo(0, -size / 10);
      ctx.lineTo(size / 10, size / 10);
      ctx.lineTo(-size / 10, size / 10);
      ctx.closePath();
      ctx.fill();
    };
    
    // Draw a triad symbol with enhanced balance - New shape
    const drawTriad = (x, y, size) => {
      const radius = size / 2;
      const smallRadius = radius / 4;
      
      // Draw three interlocking circles
      for (let i = 0; i < 3; i++) {
        const angle = (Math.PI * 2 * i) / 3;
        const distFromCenter = radius * 0.4;
        const cx = Math.cos(angle) * distFromCenter;
        const cy = Math.sin(angle) * distFromCenter;
        
        ctx.beginPath();
        ctx.arc(cx, cy, radius / 2.5, 0, Math.PI * 2);
        ctx.stroke();
        
        // Small filled circle at each position
        ctx.beginPath();
        ctx.arc(cx, cy, smallRadius, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Central connecting lines
      ctx.beginPath();
      for (let i = 0; i < 3; i++) {
        const angle = (Math.PI * 2 * i) / 3;
        const distFromCenter = radius * 0.4;
        const cx = Math.cos(angle) * distFromCenter;
        const cy = Math.sin(angle) * distFromCenter;
        
        if (i === 0) {
          ctx.moveTo(cx, cy);
        } else {
          ctx.lineTo(cx, cy);
        }
      }
      ctx.closePath();
      ctx.stroke();
    };
    
    // Update particles with enhanced flow
    const updateParticles = () => {
      // Draw connecting lines first (if enabled) with enhanced precision
      if (particles.length > 0 && particles[0].connectDots) {
        connectParticles();
      }
      
      // Then draw and update each particle with enhanced elegance
      particles.forEach(particle => {
        // Pulse size effect with enhanced natural flow
        if (particle.glow) {
          particle.size = particle.originalSize * (0.8 + Math.sin(time * particle.pulseSpeed * 20) * 0.3); // Enhanced variation
        }
        
        // Draw particle with glow if enabled
        if (particle.glow) {
          // Draw glow with enhanced brilliance
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 5 // Enhanced glow radius
          );
          gradient.addColorStop(0, particle.glowColor);
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 5, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Draw particle core with enhanced brilliance
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Update position with enhanced natural movement
        particle.x += particle.speedX * (1 + Math.sin(time * 0.7) * 0.1); // Enhanced natural variation
        particle.y += particle.speedY * (1 + Math.cos(time * 0.7) * 0.1); // Enhanced natural variation
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
    };
    
    // Connect particles with lines if they're close enough - Enhanced connection
    const connectParticles = () => {
      const maxDistance = canvas.width * 0.08; // Enhanced connection distance
      
      ctx.beginPath();
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            // Calculate opacity based on distance with enhanced precision
            const opacity = 0.25 * (1 - distance / maxDistance); // Enhanced visibility
            
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.8; // Enhanced line weight
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
          }
        }
      }
      
      ctx.stroke();
    };
    
    // Add event listener and initialize
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Clean up animation on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      isAnimating = false;
    };
  }, [section]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default UltraMesmerizingBackground;