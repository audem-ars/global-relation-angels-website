import React, { useEffect, useRef } from 'react';

const ReliableMesmerizingBackground = ({ section }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Variables for animation
    let particles = [];
    let animationFrameId;
    let isAnimating = false;
    let time = 0;
    
    // Color palettes for each section - using direct rgba values for reliability
    const colorPalettes = {
      hero: {
        background: [
          { pos: 0, color: 'rgba(12, 0, 71, 1)' },      // Ultra deep blue/purple
          { pos: 0.3, color: 'rgba(9, 9, 121, 1)' },    // Rich royal blue
          { pos: 0.7, color: 'rgba(16, 9, 121, 1)' },   // Slightly lighter blue
          { pos: 0.9, color: 'rgba(6, 4, 127, 1)' },    // Vibrant deep blue
          { pos: 1, color: 'rgba(0, 25, 161, 1)' }      // Deep saturated blue
        ],
        particles: ['rgba(0, 212, 255, 0.7)', 'rgba(157, 0, 255, 0.7)', 'rgba(255, 255, 255, 0.7)']
      },
      
      services: {
        background: [
          { pos: 0, color: 'rgba(0, 5, 70, 1)' },       // Very deep blue
          { pos: 0.4, color: 'rgba(0, 44, 95, 1)' },    // Deep navy
          { pos: 0.7, color: 'rgba(0, 64, 128, 1)' },   // Rich blue
          { pos: 0.9, color: 'rgba(0, 91, 153, 1)' },   // Brighter blue
          { pos: 1, color: 'rgba(0, 114, 185, 1)' }     // Vibrant blue
        ],
        particles: ['rgba(0, 255, 170, 0.7)', 'rgba(0, 209, 255, 0.7)', 'rgba(255, 255, 255, 0.7)']
      },
      
      testimonials: {
        background: [
          { pos: 0, color: 'rgba(45, 0, 118, 1)' },     // Deep purple
          { pos: 0.3, color: 'rgba(78, 0, 143, 1)' },   // Rich purple
          { pos: 0.6, color: 'rgba(90, 0, 160, 1)' },   // Medium purple
          { pos: 0.8, color: 'rgba(114, 0, 201, 1)' },  // Bright purple
          { pos: 1, color: 'rgba(132, 0, 255, 1)' }     // Vibrant purple
        ],
        particles: ['rgba(255, 0, 225, 0.7)', 'rgba(255, 196, 0, 0.7)', 'rgba(255, 255, 255, 0.7)']
      },
      
      contact: {
        background: [
          { pos: 0, color: 'rgba(0, 77, 64, 1)' },     // Deep teal
          { pos: 0.3, color: 'rgba(0, 105, 92, 1)' },  // Rich teal
          { pos: 0.6, color: 'rgba(0, 121, 107, 1)' }, // Medium teal
          { pos: 0.8, color: 'rgba(0, 137, 123, 1)' }, // Bright teal
          { pos: 1, color: 'rgba(0, 196, 154, 1)' }    // Vibrant teal
        ],
        particles: ['rgba(0, 255, 208, 0.7)', 'rgba(118, 255, 3, 0.7)', 'rgba(255, 255, 255, 0.7)']
      },
      
      default: {
        background: [
          { pos: 0, color: 'rgba(248, 250, 252, 1)' },  // Light whitish blue
          { pos: 0.3, color: 'rgba(240, 249, 255, 1)' },// Very light blue
          { pos: 0.6, color: 'rgba(224, 247, 250, 1)' },// Soft light blue
          { pos: 0.8, color: 'rgba(224, 242, 254, 1)' },// Light blue
          { pos: 1, color: 'rgba(219, 234, 254, 1)' }   // Light blue
        ],
        particles: ['rgba(56, 189, 248, 0.5)', 'rgba(186, 230, 253, 0.5)', 'rgba(255, 255, 255, 0.5)']
      }
    };
    
    // Set canvas to full width/height
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawBackground();
    };
    
    // Draw background based on section
    const drawBackground = () => {
      // Get the appropriate palette
      const palette = colorPalettes[section] || colorPalettes.default;
      
      // Create gradient based on the section
      let gradient;
      
      if (section === 'testimonials') {
        // Radial gradient for testimonials
        gradient = ctx.createRadialGradient(
          canvas.width / 2, canvas.height / 2, 0,
          canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) * 0.8
        );
      } else {
        // Linear gradient for others
        gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      }
      
      // Add color stops from palette
      palette.background.forEach(stop => {
        gradient.addColorStop(stop.pos, stop.color);
      });
      
      // Fill the background
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw additional elements based on section
      switch(section) {
        case 'hero':
          drawHeroElements();
          break;
        case 'services':
          drawServicesElements();
          break;
        case 'testimonials':
          drawTestimonialsElements();
          break;
        case 'contact':
          drawContactElements();
          break;
        default:
          drawDefaultElements();
      }
      
      // Initialize particles
      initParticles(palette.particles);
      
      // Start animation if not already running
      if (!isAnimating) {
        isAnimating = true;
        animate();
      }
    };
    
    // Hero section specific elements
    const drawHeroElements = () => {
      // Add stars
      drawStars(300);
      
      // Add nebula clouds
      drawClouds(4, 'rgba(157, 0, 255, 0.1)', 'rgba(0, 212, 255, 0.1)');
      
      // Add light rays
      drawLightRays();
      
      // Add horizon silhouette
      drawHorizon();
    };
    
    // Draw stars
    const drawStars = (count) => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      
      for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() < 0.9 ? 1 : 1 + Math.random() * 2;
        const opacity = 0.1 + Math.random() * 0.9;
        
        ctx.globalAlpha = opacity;
        ctx.beginPath();
        ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.globalAlpha = 1;
    };
    
    // Draw nebula clouds
    const drawClouds = (count, color1, color2) => {
      for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height * 0.7;
        const radius = 100 + Math.random() * 200;
        const color = Math.random() > 0.5 ? color1 : color2;
        
        const gradient = ctx.createRadialGradient(
          x, y, 0,
          x, y, radius
        );
        
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };
    
    // Draw light rays
    const drawLightRays = () => {
      const centerX = canvas.width * 0.4;
      const centerY = canvas.height * 0.2;
      const numRays = 8;
      const rayLength = canvas.height * 1.2;
      
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      
      for (let i = 0; i < numRays; i++) {
        const angle = (Math.PI * 2 * i) / numRays;
        const rayWidth = (Math.PI / numRays) * 0.7;
        
        const gradient = ctx.createRadialGradient(
          centerX, centerY, 0,
          centerX, centerY, rayLength
        );
        
        gradient.addColorStop(0, 'rgba(157, 0, 255, 0.3)');
        gradient.addColorStop(0.1, 'rgba(157, 0, 255, 0.1)');
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
    
    // Draw horizon silhouette
    const drawHorizon = () => {
      const baseHeight = canvas.height * 0.85;
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.beginPath();
      ctx.moveTo(0, baseHeight);
      
      // Create a jagged/mountainous horizon
      let x = 0;
      while (x < canvas.width) {
        const height = Math.random() * canvas.height * 0.15;
        const width = 30 + Math.random() * 100;
        
        // Create a mountain/hill
        ctx.lineTo(x + width / 2, baseHeight - height);
        ctx.lineTo(x + width, baseHeight);
        
        x += width;
      }
      
      // Complete the path
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      ctx.fill();
    };
    
    // Services section specific elements
    const drawServicesElements = () => {
      // Draw grid pattern
      drawGrid('rgba(0, 255, 170, 0.1)');
      
      // Draw flowing waves
      drawWaves();
      
      // Draw energy nodes
      drawNodes('rgba(0, 255, 170, 0.5)', 'rgba(0, 209, 255, 0.3)');
    };
    
    // Draw grid pattern
    const drawGrid = (color) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      
      // Draw vertical lines
      for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Draw horizontal lines
      for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };
    
    // Draw flowing waves
    const drawWaves = () => {
      for (let layer = 0; layer < 3; layer++) {
        const amplitude = 20 + (layer * 10);
        const frequency = 0.01 - (layer * 0.002);
        const yOffset = 100 + (layer * 150);
        
        ctx.strokeStyle = `rgba(0, 209, 255, ${0.1 - (layer * 0.02)})`;
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        
        for (let x = 0; x < canvas.width; x += 5) {
          const y = yOffset + amplitude * Math.sin(x * frequency);
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.stroke();
      }
    };
    
    // Draw energy nodes
    const drawNodes = (nodeColor, glowColor) => {
      const nodeCount = 5;
      
      for (let i = 0; i < nodeCount; i++) {
        const x = canvas.width * (0.1 + (i * 0.2));
        const y = canvas.height * (0.3 + Math.random() * 0.4);
        const radius = 20 + Math.random() * 20;
        
        // Draw glow
        const gradient = ctx.createRadialGradient(
          x, y, 0,
          x, y, radius * 3
        );
        
        gradient.addColorStop(0, glowColor);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw node
        ctx.fillStyle = nodeColor;
        ctx.beginPath();
        ctx.arc(x, y, radius * 0.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Connect nodes with lines
        if (i > 0) {
          const prevX = canvas.width * (0.1 + ((i - 1) * 0.2));
          const prevY = canvas.height * (0.3 + Math.random() * 0.4);
          
          ctx.strokeStyle = 'rgba(0, 255, 170, 0.2)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(prevX, prevY);
          ctx.lineTo(x, y);
          ctx.stroke();
        }
      }
    };
    
    // Testimonials section specific elements
    const drawTestimonialsElements = () => {
      // Draw concentric circles
      drawCircles();
      
      // Draw mystic sparkles
      drawSparkles('rgba(255, 196, 0, 0.7)', 'rgba(255, 0, 225, 0.4)');
    };
    
    // Draw concentric circles
    const drawCircles = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      for (let i = 0; i < 7; i++) {
        const radius = canvas.width * (0.1 + (i * 0.1));
        
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.03 - (i * 0.004)})`;
        ctx.lineWidth = 1;
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }
    };
    
    // Draw mystic sparkles
    const drawSparkles = (color1, color2) => {
      const sparkleCount = 15;
      
      for (let i = 0; i < sparkleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = 2 + Math.random() * 4;
        const color = Math.random() > 0.5 ? color1 : color2;
        
        // Draw glow
        const gradient = ctx.createRadialGradient(
          x, y, 0,
          x, y, size * 3
        );
        
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw center
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.beginPath();
        ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }
    };
    
    // Contact section specific elements
    const drawContactElements = () => {
      // Draw data grid
      drawGrid('rgba(0, 255, 208, 0.1)');
      
      // Draw data streams
      drawStreams();
      
      // Draw connection points
      drawConnections();
    };
    
    // Draw data streams
    const drawStreams = () => {
      const streamCount = 8;
      
      for (let i = 0; i < streamCount; i++) {
        const x = Math.random() * canvas.width;
        const width = 100 + Math.random() * 200;
        
        const gradient = ctx.createLinearGradient(x - width / 2, 0, x + width / 2, 0);
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
        gradient.addColorStop(0.5, 'rgba(0, 255, 208, 0.1)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x - width / 2, 0, width, canvas.height);
        
        // Add data packets
        const packetCount = 3 + Math.floor(Math.random() * 5);
        
        for (let j = 0; j < packetCount; j++) {
          const packetX = x + (Math.random() - 0.5) * width * 0.8;
          const packetY = Math.random() * canvas.height;
          const packetSize = 2 + Math.random() * 4;
          
          // Draw packet glow
          const packetGradient = ctx.createRadialGradient(
            packetX, packetY, 0,
            packetX, packetY, packetSize * 3
          );
          
          packetGradient.addColorStop(0, 'rgba(118, 255, 3, 0.5)');
          packetGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          
          ctx.fillStyle = packetGradient;
          ctx.beginPath();
          ctx.arc(packetX, packetY, packetSize * 3, 0, Math.PI * 2);
          ctx.fill();
          
          // Draw packet
          ctx.fillStyle = 'rgba(118, 255, 3, 0.8)';
          ctx.beginPath();
          ctx.arc(packetX, packetY, packetSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };
    
    // Draw connection points
    const drawConnections = () => {
      const pointCount = 6;
      const points = [];
      
      // Generate points
      for (let i = 0; i < pointCount; i++) {
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: 3 + Math.random() * 4
        });
      }
      
      // Draw connections
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < canvas.width * 0.3) {
            const opacity = 0.2 * (1 - distance / (canvas.width * 0.3));
            
            ctx.strokeStyle = `rgba(0, 255, 208, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Draw points
      points.forEach(point => {
        // Draw glow
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, point.radius * 3
        );
        
        gradient.addColorStop(0, 'rgba(0, 255, 208, 0.5)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw point
        ctx.fillStyle = 'rgba(0, 255, 208, 0.8)';
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };
    
    // Default section specific elements
    const drawDefaultElements = () => {
      // Draw subtle dot pattern
      drawDots();
    };
    
    // Draw subtle dot pattern
    const drawDots = () => {
      ctx.fillStyle = 'rgba(56, 189, 248, 0.1)';
      
      for (let x = 20; x < canvas.width; x += 20) {
        for (let y = 20; y < canvas.height; y += 20) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };
    
    // Initialize particles
    const initParticles = (colorArray) => {
      const count = 120; // Number of particles
      particles = [];
      
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 1 + Math.random() * 3,
          speedX: (Math.random() - 0.5) * 1.5,
          speedY: (Math.random() - 0.5) * 1.5,
          color: colorArray[Math.floor(Math.random() * colorArray.length)]
        });
      }
    };
    
    // Animation loop
    const animate = () => {
      // Increment time for animations
      time += 0.01;
      
      // Apply subtle fade
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      updateParticles();
      
      // Continue animation
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Update particles
    const updateParticles = () => {
      particles.forEach(particle => {
        // Draw particle
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
      
      // Draw connections between particles (for certain sections)
      if (section === 'services' || section === 'contact') {
        connectParticles();
      }
    };
    
    // Connect particles with lines
    const connectParticles = () => {
      const maxDistance = 100;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 0.1 * (1 - distance / maxDistance);
            
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Add event listener and initialize
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Clean up on unmount
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

export default ReliableMesmerizingBackground;