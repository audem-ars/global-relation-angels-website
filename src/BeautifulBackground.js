import React, { useEffect, useRef } from 'react';

const BeautifulBackground = ({ section }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Variables for animation
    let particles = [];
    let animationFrameId;
    let isAnimating = false;
    
    // Set canvas to full width/height
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawInitialBackground();
    };
    
    // Draw initial background without animation
    const drawInitialBackground = () => {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      switch(section) {
        case 'hero':
          drawHeroBackground();
          break;
        case 'services':
          drawServicesBackground();
          break;
        case 'testimonials':
          drawTestimonialsBackground();
          break;
        case 'contact':
          drawContactBackground();
          break;
        default:
          drawDefaultBackground();
      }
      
      // If not already animating, start the animation loop
      if (!isAnimating) {
        isAnimating = true;
        animateParticles();
      }
    };
    
    // Hero section - City skyline with gradient
    const drawHeroBackground = () => {
      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#1e40af');  // Deep blue
      gradient.addColorStop(0.5, '#3b82f6'); // Medium blue
      gradient.addColorStop(1, '#60a5fa');   // Light blue
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw city skyline
      drawCitySkyline();
      
      // Initialize particles
      initParticles(100);
    };
    
    // Draw city skyline silhouette
    const drawCitySkyline = () => {
      // Set city skyline color
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      
      // Base height for buildings
      const baseHeight = canvas.height * 0.8;
      const width = canvas.width;
      
      // Create path for skyline
      ctx.beginPath();
      ctx.moveTo(0, baseHeight);
      
      // Define buildings
      // Building 1
      ctx.lineTo(width * 0.05, baseHeight);
      ctx.lineTo(width * 0.05, baseHeight - (canvas.height * 0.1));
      ctx.lineTo(width * 0.07, baseHeight - (canvas.height * 0.1));
      ctx.lineTo(width * 0.07, baseHeight - (canvas.height * 0.15));
      ctx.lineTo(width * 0.1, baseHeight - (canvas.height * 0.15));
      ctx.lineTo(width * 0.1, baseHeight);
      
      // Building 2 - skyscraper
      ctx.lineTo(width * 0.15, baseHeight);
      ctx.lineTo(width * 0.15, baseHeight - (canvas.height * 0.25));
      ctx.lineTo(width * 0.17, baseHeight - (canvas.height * 0.25));
      ctx.lineTo(width * 0.17, baseHeight - (canvas.height * 0.3));
      ctx.lineTo(width * 0.19, baseHeight - (canvas.height * 0.3));
      ctx.lineTo(width * 0.19, baseHeight);
      
      // More buildings...
      ctx.lineTo(width * 0.23, baseHeight);
      ctx.lineTo(width * 0.23, baseHeight - (canvas.height * 0.18));
      ctx.lineTo(width * 0.27, baseHeight - (canvas.height * 0.18));
      ctx.lineTo(width * 0.27, baseHeight);
      
      ctx.lineTo(width * 0.32, baseHeight);
      ctx.lineTo(width * 0.32, baseHeight - (canvas.height * 0.22));
      ctx.lineTo(width * 0.34, baseHeight - (canvas.height * 0.22));
      ctx.lineTo(width * 0.34, baseHeight);
      
      ctx.lineTo(width * 0.4, baseHeight);
      ctx.lineTo(width * 0.4, baseHeight - (canvas.height * 0.15));
      ctx.lineTo(width * 0.45, baseHeight - (canvas.height * 0.15));
      ctx.lineTo(width * 0.45, baseHeight);
      
      ctx.lineTo(width * 0.5, baseHeight);
      ctx.lineTo(width * 0.5, baseHeight - (canvas.height * 0.25));
      ctx.lineTo(width * 0.53, baseHeight - (canvas.height * 0.25));
      ctx.lineTo(width * 0.53, baseHeight);
      
      ctx.lineTo(width * 0.58, baseHeight);
      ctx.lineTo(width * 0.58, baseHeight - (canvas.height * 0.2));
      ctx.lineTo(width * 0.6, baseHeight - (canvas.height * 0.2));
      ctx.lineTo(width * 0.6, baseHeight);
      
      ctx.lineTo(width * 0.65, baseHeight);
      ctx.lineTo(width * 0.65, baseHeight - (canvas.height * 0.12));
      ctx.lineTo(width * 0.75, baseHeight - (canvas.height * 0.12));
      ctx.lineTo(width * 0.75, baseHeight);
      
      ctx.lineTo(width * 0.8, baseHeight);
      ctx.lineTo(width * 0.8, baseHeight - (canvas.height * 0.3));
      ctx.lineTo(width * 0.82, baseHeight - (canvas.height * 0.3));
      ctx.lineTo(width * 0.82, baseHeight);
      
      ctx.lineTo(width * 0.88, baseHeight);
      ctx.lineTo(width * 0.88, baseHeight - (canvas.height * 0.18));
      ctx.lineTo(width * 0.92, baseHeight - (canvas.height * 0.18));
      ctx.lineTo(width * 0.92, baseHeight);
      
      ctx.lineTo(width * 0.95, baseHeight);
      ctx.lineTo(width * 0.95, baseHeight - (canvas.height * 0.14));
      ctx.lineTo(width * 0.98, baseHeight - (canvas.height * 0.14));
      ctx.lineTo(width * 0.98, baseHeight);
      ctx.lineTo(width, baseHeight);
      
      // Complete the path
      ctx.lineTo(width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      
      // Fill the skyline
      ctx.fill();
      
      // Add some windows (small lights)
      drawBuildingWindows(baseHeight);
    };
    
    // Draw windows on buildings
    const drawBuildingWindows = (baseHeight) => {
      ctx.fillStyle = 'rgba(255, 255, 150, 0.6)';
      
      // Random windows throughout the buildings
      for (let i = 0; i < 200; i++) {
        const x = Math.random() * canvas.width;
        const y = baseHeight - (Math.random() * (canvas.height * 0.4));
        
        // Only draw if below the baseHeight (in a building)
        if (y > baseHeight) continue;
        
        const windowSize = 2 + Math.random() * 2;
        
        // Draw window
        ctx.fillRect(x, y, windowSize, windowSize);
      }
    };
    
    // Services section - Wave patterns with floating shapes
    const drawServicesBackground = () => {
      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#1e3a8a');  // Very deep blue
      gradient.addColorStop(1, '#3b82f6');  // Medium blue
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw wave patterns
      drawWavePattern();
      
      // Draw floating shapes
      drawFloatingShapes();
      
      // Initialize particles
      initParticles(50);
    };
    
    // Draw wave pattern
    const drawWavePattern = () => {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 2;
      
      // Multiple wave layers
      for (let layer = 0; layer < 3; layer++) {
        const amplitude = 20 + (layer * 10);
        const frequency = 0.01 - (layer * 0.002);
        const yOffset = 100 + (layer * 120);
        
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
    
    // Draw floating shapes
    const drawFloatingShapes = () => {
      // Define shapes
      const shapes = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, size: 50, type: 'circle' },
        { x: canvas.width * 0.8, y: canvas.height * 0.2, size: 70, type: 'square' },
        { x: canvas.width * 0.5, y: canvas.height * 0.7, size: 60, type: 'triangle' },
        { x: canvas.width * 0.3, y: canvas.height * 0.8, size: 40, type: 'circle' },
        { x: canvas.width * 0.7, y: canvas.height * 0.6, size: 65, type: 'square' }
      ];
      
      // Draw each shape
      shapes.forEach(shape => {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 2;
        
        switch(shape.type) {
          case 'circle':
            ctx.beginPath();
            ctx.arc(shape.x, shape.y, shape.size / 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            break;
            
          case 'square':
            ctx.fillRect(shape.x - shape.size / 2, shape.y - shape.size / 2, shape.size, shape.size);
            ctx.strokeRect(shape.x - shape.size / 2, shape.y - shape.size / 2, shape.size, shape.size);
            break;
            
          case 'triangle':
            const h = shape.size * Math.sqrt(3) / 2;
            
            ctx.beginPath();
            ctx.moveTo(shape.x, shape.y - h / 2);
            ctx.lineTo(shape.x - shape.size / 2, shape.y + h / 2);
            ctx.lineTo(shape.x + shape.size / 2, shape.y + h / 2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            break;
          default:
            break;
        }
      });
    };
    
    // Testimonials section - Elegant gradient with subtle patterns
    const drawTestimonialsBackground = () => {
      // Create radial gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 10,
        canvas.width / 2, canvas.height / 2, canvas.width * 0.8
      );
      gradient.addColorStop(0, '#3b82f6');  // Medium blue
      gradient.addColorStop(0.5, '#2563eb'); // Blue
      gradient.addColorStop(1, '#1e40af');   // Deep blue
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw elegant patterns
      drawElegantPattern();
      
      // Initialize particles
      initParticles(80, true);  // Slower, more elegant particles
    };
    
    // Draw elegant pattern for testimonials
    const drawElegantPattern = () => {
      // Draw circles
      for (let i = 0; i < 5; i++) {
        const radius = canvas.width * (0.2 + (i * 0.08));
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.03 - (i * 0.002)})`;
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Draw diagonal lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < canvas.width; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i + canvas.height, canvas.height);
        ctx.stroke();
      }
    };
    
    // Contact section - Dynamic gradient with interactive elements
    const drawContactBackground = () => {
      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#1e40af');  // Deep blue
      gradient.addColorStop(1, '#3b82f6');  // Medium blue
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw dynamic pattern
      drawDynamicPattern();
      
      // Initialize interactive particles
      initParticles(150, false, true);  // More interactive particles
    };
    
    // Draw dynamic pattern for contact section
    const drawDynamicPattern = () => {
      // Draw grid pattern
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Draw accent circles
      for (let i = 0; i < 5; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = 50 + Math.random() * 100;
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };
    
    // Default background
    const drawDefaultBackground = () => {
      // Create subtle gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#f0f9ff');  // Very light blue
      gradient.addColorStop(1, '#e0f2fe');  // Lighter blue
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw subtle pattern
      drawSubtlePattern();
    };
    
    // Draw subtle pattern for default background
    const drawSubtlePattern = () => {
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';  // Light blue
      ctx.lineWidth = 1;
      
      // Draw dots pattern
      for (let x = 20; x < canvas.width; x += 20) {
        for (let y = 20; y < canvas.height; y += 20) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    };
    
    // Initialize particles
    const initParticles = (count, slow = false, interactive = false) => {
      particles = [];
      
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 1 + Math.random() * 3,
          speedX: slow ? (Math.random() - 0.5) * 0.5 : (Math.random() - 0.5) * 2,
          speedY: slow ? (Math.random() - 0.5) * 0.5 : (Math.random() - 0.5) * 2,
          opacity: 0.1 + Math.random() * 0.4,
          interactive: interactive
        });
      }
    };
    
    // Animate particles
    const animateParticles = () => {
      // Only update particles and not redraw the entire background
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update particles
      particles.forEach(particle => {
        // Draw particle
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
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
        
        // Interactive behavior - particles connect with lines when close
        if (particle.interactive) {
          particles.forEach(otherParticle => {
            if (particle !== otherParticle) {
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < 100) {
                ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.stroke();
              }
            }
          });
        }
      });
      
      // Continue animation
      animationFrameId = requestAnimationFrame(animateParticles);
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

export default BeautifulBackground;