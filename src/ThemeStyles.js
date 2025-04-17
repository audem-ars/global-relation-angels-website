// ThemeStyles.js
// Enhanced color palette and styling for Global Relations website

// Premium color palette with rich, trustworthy gradients
export const colorPalette = {
  // Primary blues - enhanced with deeper, more vibrant shades
  blues: {
    primary: '#1a56db', // Deeper, more authoritative blue
    deep: '#0f2e6b',    // Ultra-deep navy blue for trust
    medium: '#2563eb',  // Vibrant royal blue
    light: '#60a5fa',   // Bright accent blue
    ultralight: '#dbeafe', // Soft pale blue
    // Professional gradient presets with enhanced depth and dimensionality
    gradients: {
      primary: 'linear-gradient(135deg, #1a56db 0%, #0f2e6b 100%)',
      vibrant: 'linear-gradient(135deg, #2563eb 10%, #1a56db 50%, #0f2e6b 100%)',
      trustworthy: 'linear-gradient(165deg, #0f2e6b 0%, #1e3a8a 50%, #1a56db 100%)',
      elegant: 'linear-gradient(135deg, #0d2559 0%, #1e40af 100%)',
      professional: 'linear-gradient(145deg, #0f2e6b 0%, #1e429f 40%, #1a56db 100%)',
      hero: 'linear-gradient(135deg, #0d2559 0%, #1e3a8a 40%, #2563eb 80%, #3b82f6 100%)',
      services: 'linear-gradient(165deg, #0d2559 0%, #1e40af 80%, #1e3a8a 100%)',
      testimonials: 'radial-gradient(circle at center, #3b82f6 0%, #2563eb 30%, #1e40af 70%, #0f2e6b 100%)',
      contact: 'linear-gradient(145deg, #0d2559 0%, #1a56db 100%)'
    }
  },
  
  // Accent colors with premium variations
  accents: {
    gold: '#b45309',    // Deeper, more premium gold
    goldLight: '#fbbf24', // Bright accent gold
    emerald: '#047857',  // Rich emerald green for trust
    sapphire: '#1e429f', // Deep sapphire
    ruby: '#9f1239',     // Rich ruby red
    amethyst: '#6d28d9', // Deep purple
    // Premium gradients
    gradients: {
      gold: 'linear-gradient(135deg, #b45309 0%, #d97706 70%, #fbbf24 100%)',
      emerald: 'linear-gradient(135deg, #064e3b 0%, #047857 60%, #10b981 100%)',
      sapphire: 'linear-gradient(135deg, #172554 0%, #1e429f 60%, #3b82f6 100%)',
      ruby: 'linear-gradient(135deg, #7f1d1d 0%, #9f1239 60%, #e11d48 100%)',
      amethyst: 'linear-gradient(135deg, #4c1d95 0%, #6d28d9 60%, #8b5cf6 100%)'
    }
  },
  
  // Enhanced neutral tones for sophisticated backgrounds and text
  neutrals: {
    white: '#ffffff',
    pearl: '#f8fafc',    // Soft white with blue undertone
    silver: '#e2e8f0',   // Refined light silver
    platinum: '#94a3b8',  // Sophisticated mid-tone
    graphite: '#475569', // Professional dark gray
    charcoal: '#1e293b', // Deep charcoal
    deepBlack: '#0f172a', // Ultra-deep, rich black with blue undertones
    gradients: {
      glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.82) 100%)',
      darkGlass: 'linear-gradient(135deg, rgba(15, 23, 42, 0.82) 0%, rgba(15, 23, 42, 0.7) 100%)',
      softSilver: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      platinumShimmer: 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 50%, #e2e8f0 100%)'
    }
  }
};

// Enhanced typography system with premium font combinations
export const typography = {
  // Modern sans-serif for headings with enhanced weighting
  headings: {
    fontFamily: "'Montserrat', 'Helvetica Neue', sans-serif",
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900
    },
    // Advanced heading styles with enhanced spacing
    styles: {
      hero: {
        fontSize: 'clamp(2.75rem, 5vw, 4.25rem)',
        fontWeight: 800,
        lineHeight: '1.05',
        letterSpacing: '-0.03em'
      },
      h1: {
        fontSize: 'clamp(2.25rem, 4vw, 3.75rem)',
        fontWeight: 700,
        lineHeight: '1.1',
        letterSpacing: '-0.025em'
      },
      h2: {
        fontSize: 'clamp(1.85rem, 3vw, 2.75rem)',
        fontWeight: 700,
        lineHeight: '1.15',
        letterSpacing: '-0.02em'
      },
      h3: {
        fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
        fontWeight: 600,
        lineHeight: '1.2',
        letterSpacing: '-0.015em'
      },
      h4: {
        fontSize: 'clamp(1.3rem, 2vw, 1.6rem)',
        fontWeight: 600,
        lineHeight: '1.3'
      },
      h5: {
        fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)',
        fontWeight: 600,
        lineHeight: '1.4'
      },
      display: {
        fontSize: 'clamp(3.2rem, 7vw, 5.5rem)',
        fontWeight: 800,
        lineHeight: '1',
        letterSpacing: '-0.04em'
      }
    }
  },
  
  // Enhanced body text with improved legibility
  body: {
    fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600
    },
    styles: {
      large: {
        fontSize: 'clamp(1.15rem, 1.25vw, 1.3rem)',
        lineHeight: '1.65',
        fontWeight: 400
      },
      base: {
        fontSize: 'clamp(1rem, 1vw, 1.125rem)',
        lineHeight: '1.75',
        fontWeight: 400
      },
      small: {
        fontSize: 'clamp(0.875rem, 0.9vw, 1rem)',
        lineHeight: '1.7',
        fontWeight: 400
      },
      tiny: {
        fontSize: '0.8rem',
        lineHeight: '1.6',
        fontWeight: 400
      }
    }
  },
  
  // Enhanced accent typography for testimonials and quotes
  accent: {
    fontFamily: "'Playfair Display', Georgia, serif",
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    styles: {
      quote: {
        fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
        fontWeight: 400,
        fontStyle: 'italic',
        lineHeight: '1.4',
        letterSpacing: '0.01em'
      },
      testimonial: {
        fontSize: 'clamp(1.3rem, 1.5vw, 1.6rem)',
        fontWeight: 400,
        fontStyle: 'italic',
        lineHeight: '1.6',
        letterSpacing: '0.005em'
      }
    }
  }
};

// Enhanced shadow effects for greater depth and premium feel
export const shadows = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.07)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.12), 0 4px 6px -2px rgba(0, 0, 0, 0.07)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.06)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.08)',
  // Premium colored shadows
  blue: '0 10px 25px -5px rgba(26, 86, 219, 0.5)',
  deepBlue: '0 15px 30px -7px rgba(15, 46, 107, 0.5)',
  gold: '0 10px 25px -5px rgba(180, 83, 9, 0.5)',
  glow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 35px rgba(26, 86, 219, 0.5)',
  premium: '0 15px 35px -15px rgba(15, 23, 42, 0.25)',
  soft: '0 8px 30px rgba(0, 0, 0, 0.07)'
};

// Enhanced animations and transitions
export const animations = {
  transition: {
    fast: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    base: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)', // Enhanced bounce effect
    premium: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)' // Elegant, professional easing
  },
  keyframes: {
    fadeIn: `
      @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
    `,
    slideUp: `
      @keyframes slideUp {
        0% { transform: translateY(20px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }
    `,
    pulse: `
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.03); }
      }
    `,
    float: `
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
    `,
    shimmer: `
      @keyframes shimmer {
        0% { background-position: -1000px 0; }
        100% { background-position: 1000px 0; }
      }
    `,
    fadeInUp: `
      @keyframes fadeInUp {
        0% { transform: translateY(20px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }
    `,
    revealFromLeft: `
      @keyframes revealFromLeft {
        0% { transform: translateX(-30px); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
      }
    `
  },
  durations: {
    fast: '0.5s',
    medium: '0.8s',
    slow: '1.2s',
    staggered: '1.5s'
  },
  classes: {
    fadeIn: 'animate-fadeIn',
    slideUp: 'animate-slideUp',
    pulse: 'animate-pulse',
    float: 'animate-float',
    shimmer: 'animate-shimmer',
    fadeInUp: 'animate-fadeInUp',
    revealFromLeft: 'animate-revealFromLeft'
  }
};

// Enhanced glass morphism effects with more sophistication
export const glassMorphism = {
  light: {
    background: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.6)'
  },
  medium: {
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(15px)',
    border: '1px solid rgba(255, 255, 255, 0.4)'
  },
  dark: {
    background: 'rgba(15, 23, 42, 0.7)',
    backdropFilter: 'blur(15px)',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  },
  blue: {
    background: 'rgba(26, 86, 219, 0.15)',
    backdropFilter: 'blur(15px)',
    border: '1px solid rgba(26, 86, 219, 0.25)'
  },
  premium: {
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.1)'
  },
  ultraDeep: {
    background: 'rgba(15, 23, 42, 0.8)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(59, 130, 246, 0.3)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
  }
};

// Enhanced component-specific styling
export const componentStyles = {
  buttons: {
    primary: {
      background: colorPalette.blues.gradients.primary,
      color: colorPalette.neutrals.white,
      padding: '0.85rem 1.75rem',
      borderRadius: '0.5rem',
      fontWeight: typography.headings.weights.semibold,
      boxShadow: shadows.md,
      transition: animations.transition.bounce,
      hover: {
        transform: 'translateY(-3px)',
        boxShadow: shadows.blue
      }
    },
    secondary: {
      background: 'transparent',
      color: colorPalette.blues.primary,
      border: `2px solid ${colorPalette.blues.primary}`,
      padding: '0.85rem 1.75rem',
      borderRadius: '0.5rem',
      fontWeight: typography.headings.weights.semibold,
      transition: animations.transition.bounce,
      hover: {
        background: colorPalette.blues.primary,
        color: colorPalette.neutrals.white,
        transform: 'translateY(-3px)'
      }
    },
    accent: {
      background: colorPalette.accents.gradients.gold,
      color: colorPalette.neutrals.white,
      padding: '0.85rem 1.75rem',
      borderRadius: '0.5rem',
      fontWeight: typography.headings.weights.semibold,
      boxShadow: shadows.md,
      transition: animations.transition.bounce,
      hover: {
        transform: 'translateY(-3px)',
        boxShadow: shadows.gold
      }
    },
    premium: {
      background: colorPalette.blues.gradients.trustworthy,
      color: colorPalette.neutrals.white,
      padding: '0.85rem 1.75rem',
      borderRadius: '0.5rem',
      fontWeight: typography.headings.weights.semibold,
      boxShadow: shadows.deepBlue,
      transition: animations.transition.premium,
      hover: {
        transform: 'translateY(-3px) scale(1.02)',
        boxShadow: '0 15px 30px -10px rgba(15, 46, 107, 0.6)'
      }
    }
  },
  cards: {
    default: {
      background: colorPalette.neutrals.white,
      borderRadius: '0.75rem',
      boxShadow: shadows.md,
      padding: '2.25rem',
      transition: animations.transition.base,
      hover: {
        boxShadow: shadows.lg,
        transform: 'translateY(-5px)'
      }
    },
    glass: {
      ...glassMorphism.premium,
      borderRadius: '0.9rem',
      padding: '2.25rem',
      transition: animations.transition.base,
      hover: {
        transform: 'translateY(-5px)',
        boxShadow: shadows.premium
      }
    },
    feature: {
      background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(240, 249, 255, 0.85))',
      borderRadius: '1rem',
      boxShadow: shadows.soft,
      padding: '2.75rem',
      border: '1px solid rgba(255, 255, 255, 0.8)',
      transition: animations.transition.premium,
      hover: {
        boxShadow: shadows.blue,
        transform: 'translateY(-7px)'
      }
    },
    premium: {
      background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
      borderRadius: '1rem',
      padding: '2.5rem',
      boxShadow: '0 10px 40px -10px rgba(15, 23, 42, 0.1), 0 5px 10px -3px rgba(15, 23, 42, 0.05)',
      border: '1px solid rgba(226, 232, 240, 0.8)',
      transition: animations.transition.premium,
      hover: {
        transform: 'translateY(-8px) scale(1.01)',
        boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.15), 0 10px 20px -5px rgba(15, 23, 42, 0.1)'
      }
    }
  },
  sections: {
    hero: {
      background: colorPalette.blues.gradients.hero,
      padding: '5rem 0',
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center'
    },
    main: {
      padding: '6rem 0',
      position: 'relative'
    },
    alternate: {
      padding: '6rem 0',
      position: 'relative',
      backgroundColor: colorPalette.neutrals.pearl
    },
    premium: {
      padding: '7rem 0',
      position: 'relative',
      background: `linear-gradient(165deg, ${colorPalette.blues.deep} 0%, ${colorPalette.blues.primary} 100%)`,
      color: colorPalette.neutrals.white
    }
  },
  testimonials: {
    card: {
      background: colorPalette.blues.gradients.trustworthy,
      color: colorPalette.neutrals.white,
      borderRadius: '1.25rem',
      boxShadow: shadows.xl,
      padding: '3.5rem',
      position: 'relative',
      overflow: 'hidden'
    },
    quote: {
      ...typography.accent.styles.quote,
      color: 'rgba(255, 255, 255, 0.95)',
      marginBottom: '2.25rem'
    },
    author: {
      fontFamily: typography.headings.fontFamily,
      fontWeight: typography.headings.weights.semibold,
      fontSize: '1.3rem'
    },
    premiumCard: {
      background: 'linear-gradient(145deg, #0f2e6b 0%, #1a56db 100%)',
      color: colorPalette.neutrals.white,
      borderRadius: '1.25rem',
      boxShadow: '0 25px 50px -12px rgba(15, 46, 107, 0.35)',
      padding: '4rem',
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid rgba(59, 130, 246, 0.15)'
    }
  },
  inputs: {
    default: {
      border: `1px solid ${colorPalette.neutrals.silver}`,
      borderRadius: '0.5rem',
      padding: '0.85rem 1.25rem',
      transition: animations.transition.fast,
      fontSize: typography.body.styles.base.fontSize,
      focus: {
        borderColor: colorPalette.blues.primary,
        boxShadow: `0 0 0 3px rgba(26, 86, 219, 0.2)`,
        outline: 'none'
      }
    },
    premium: {
      border: `1px solid ${colorPalette.neutrals.silver}`,
      borderRadius: '0.6rem',
      padding: '0.95rem 1.25rem',
      transition: animations.transition.fast,
      fontSize: typography.body.styles.base.fontSize,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.03)',
      focus: {
        borderColor: colorPalette.blues.primary,
        boxShadow: `0 0 0 4px rgba(26, 86, 219, 0.15)`,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        outline: 'none'
      }
    }
  }
};

// Refined font combinations for specific sections
export const fontCombinations = {
  modern: {
    heading: "'Montserrat', sans-serif",
    body: "'Inter', sans-serif"
  },
  elegant: {
    heading: "'Playfair Display', serif",
    body: "'Inter', sans-serif"
  },
  professional: {
    heading: "'Montserrat', sans-serif",
    body: "'Source Sans Pro', sans-serif"
  },
  creative: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif"
  },
  premium: {
    heading: "'Montserrat', sans-serif",
    body: "'Inter', sans-serif",
    accent: "'Playfair Display', serif"
  },
  corporate: {
    heading: "'Montserrat', sans-serif",
    body: "'IBM Plex Sans', sans-serif",
    accent: "'IBM Plex Serif', serif"
  }
};

// Enhanced animation classes
export const animationClasses = {
  fadeIn: 'opacity-0 transition-opacity duration-700 ease-in',
  slideUp: 'opacity-0 translate-y-8 transition-all duration-700 ease-out',
  staggered: 'opacity-0 translate-y-8 transition-all ease-out',
  reveal: 'opacity-0 transition-opacity duration-1000 ease-in-out',
  shimmer: 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent',
  fadeInUp: 'opacity-0 transform translate-y-8 transition-all duration-800 ease-out',
  scaleIn: 'opacity-0 transform scale-95 transition-all duration-700 ease-out',
  revealLeft: 'opacity-0 transform -translate-x-8 transition-all duration-700 ease-out'
};

// Helper function to apply enhanced glass morphism style
export const applyGlassMorphism = (level = 'medium', color = 'light') => {
  const glassLevels = {
    light: { opacity: 0.85, blur: '12px' },
    medium: { opacity: 0.7, blur: '15px' },
    heavy: { opacity: 0.5, blur: '20px' },
    premium: { opacity: 0.8, blur: '25px' }
  };
  
  const glassColors = {
    light: 'rgba(255, 255, 255, $opacity)',
    dark: 'rgba(15, 23, 42, $opacity)',
    blue: 'rgba(26, 86, 219, $opacity)',
    gold: 'rgba(180, 83, 9, $opacity)'
  };
  
  const opacity = glassLevels[level].opacity;
  const blur = glassLevels[level].blur;
  const bgColor = glassColors[color].replace('$opacity', opacity);
  
  return {
    background: bgColor,
    backdropFilter: `blur(${blur})`,
    WebkitBackdropFilter: `blur(${blur})`,
    border: color === 'dark' 
      ? '1px solid rgba(255, 255, 255, 0.1)' 
      : color === 'blue'
        ? '1px solid rgba(26, 86, 219, 0.25)'
        : color === 'gold'
          ? '1px solid rgba(180, 83, 9, 0.25)'
          : '1px solid rgba(255, 255, 255, 0.6)',
    boxShadow: color === 'dark'
      ? '0 10px 30px rgba(0, 0, 0, 0.2)'
      : '0 10px 30px rgba(15, 23, 42, 0.07)'
  };
};

// Helper to create enhanced gradient text
export const gradientText = (startColor, endColor, direction = 135) => ({
  background: `linear-gradient(${direction}deg, ${startColor} 0%, ${endColor} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  display: 'inline-block'
});

// Export default enhanced theme
export default {
  colors: colorPalette,
  typography,
  shadows,
  animations,
  glassMorphism,
  components: componentStyles,
  fonts: fontCombinations,
  animationClasses,
  helpers: {
    applyGlassMorphism,
    gradientText
  }
};