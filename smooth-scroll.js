// ===============================================
// SIMPLE SMOOTH SCROLLING SYSTEM - LIGHTWEIGHT
// Gaming-Quality Smoothness WITHOUT conflicts
// ===============================================

class SimpleSmoothScroll {
  constructor() {
    this.isEnabled = true;
    this.init();
  }

  init() {
    console.log('Initializing Simple Smooth Scrolling...');
    this.addSmoothScrollCSS();
    this.enhanceScrollBehavior();
    this.setupSmoothNavigation();
  }

  addSmoothScrollCSS() {
    const style = document.createElement('style');
    style.id = 'simple-smooth-scroll-styles';
    style.textContent = `
      /* Enhanced smooth scrolling - NO conflicts */
      html {
        scroll-behavior: smooth !important;
        scroll-padding-top: 80px;
      }
      
      body {
        scroll-behavior: smooth !important;
      }
      
      /* Gaming-quality smoothness */
      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
      }
      
      /* Enhanced animations */
      .service-card, .portfolio-item, .blender-project {
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        will-change: transform;
        backface-visibility: hidden;
      }
      
      .service-card:hover, .portfolio-item:hover, .blender-project:hover {
        transform: translateY(-8px) scale(1.02);
        transition-duration: 0.3s;
        box-shadow: 
          0 20px 60px rgba(0, 212, 255, 0.2),
          0 10px 30px rgba(0, 0, 0, 0.3);
      }
      
      /* Smooth button interactions */
      .btn, button, .cta-button {
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        will-change: transform;
        backface-visibility: hidden;
      }
      
      .btn:hover, button:hover, .cta-button:hover {
        transform: translateY(-2px);
        transition-duration: 0.2s;
        box-shadow: 
          0 10px 30px rgba(0, 212, 255, 0.3),
          0 5px 15px rgba(0, 0, 0, 0.2);
      }
      
      .btn:active, button:active, .cta-button:active {
        transform: translateY(0);
        transition-duration: 0.1s;
      }
      
      /* Smooth modal transitions */
      .modal {
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      }
      
      /* Smooth form interactions */
      input, textarea, select {
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      }
      
      input:focus, textarea:focus, select:focus {
        transform: scale(1.02);
        transition-duration: 0.2s;
      }
      
      /* Mobile optimizations */
      @media (max-width: 768px) {
        .service-card:hover, .portfolio-item:hover {
          transform: none;
        }
        
        .btn:hover, button:hover {
          transform: none;
        }
        
        input:focus, textarea:focus {
          transform: scale(1.01);
        }
      }
      
      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }
    `;
    
    document.head.appendChild(style);
  }

  enhanceScrollBehavior() {
    // Add momentum scrolling for webkit
    document.body.style.webkitOverflowScrolling = 'touch';
    
    // Enhance wheel scrolling smoothness
    let isScrolling = false;
    
    window.addEventListener('wheel', (e) => {
      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(() => {
          isScrolling = false;
        });
      }
    }, { passive: true });
  }

  setupSmoothNavigation() {
    // Enhanced navigation with smooth scrolling
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      
      e.preventDefault();
      
      const targetId = link.getAttribute('href').substring(1);
      let targetElement;
      
      if (targetId === 'home' || targetId === '') {
        window.scrollTo({ 
          top: 0, 
          behavior: 'smooth' 
        });
        return;
      }
      
      targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Account for navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  }

  // Public method for smooth scrolling
  scrollTo(target, offset = 80) {
    let targetElement;
    
    if (typeof target === 'string') {
      targetElement = document.getElementById(target);
    } else if (typeof target === 'number') {
      window.scrollTo({
        top: target,
        behavior: 'smooth'
      });
      return;
    } else {
      targetElement = target;
    }
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - offset;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }
}

// Initialize Simple Smooth Scrolling
let simpleSmoothScroll;

function initSimpleSmoothScrolling() {
  console.log('Initializing Simple Smooth Scrolling...');
  simpleSmoothScroll = new SimpleSmoothScroll();
  console.log('Simple Smooth Scrolling initialized successfully!');
}

// Auto-initialize
if (document.readyState !== 'loading') {
  initSimpleSmoothScrolling();
} else {
  document.addEventListener('DOMContentLoaded', initSimpleSmoothScrolling);
}

// Export for global access
window.SimpleSmoothScroll = SimpleSmoothScroll;
window.simpleSmoothScroll = simpleSmoothScroll;
