document.addEventListener('DOMContentLoaded', function() {
  // Force page to start at top immediately - ONLY ON INITIAL LOAD
  if (!sessionStorage.getItem('pageLoaded')) {
    // REMOVED: window.scrollTo(0, 0); - was causing modal scroll issues
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    sessionStorage.setItem('pageLoaded', 'true');
  }
  
  // Prevent scroll restoration
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

// Global project data for inline handlers - define early
window.projectData = {
  'ecommerce': {
    title: 'E-commerce Platform',
    description: 'A comprehensive e-commerce solution built with modern technologies. Features include user authentication, product catalog, shopping cart, payment processing, order management, inventory tracking, and admin dashboard. Perfect for businesses looking to establish or upgrade their online presence.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: [
      'User Registration & Authentication',
      'Product Catalog with Search & Filters',
      'Shopping Cart & Wishlist',
      'Secure Payment Integration',
      'Order Management System',
      'Inventory Management',
      'Admin Dashboard',
      'Mobile Responsive Design',
      'SEO Optimized'
    ],
    price: '$2,499',
    delivery: '3-4 weeks'
  },
  'mobile-app': {
    title: 'Mobile Fitness App',
    description: 'Cross-platform mobile application for fitness tracking and social engagement. Built with Flutter for iOS and Android. Includes workout tracking, progress monitoring, social features, personalized recommendations, and integration with wearable devices.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: [
      'Cross-platform (iOS & Android)',
      'Workout Tracking & Plans',
      'Progress Analytics',
      'Social Features & Challenges',
      'Nutrition Tracking',
      'Wearable Device Integration',
      'Push Notifications',
      'Offline Mode Support',
      'Cloud Data Sync'
    ],
    price: '$3,999',
    delivery: '4-6 weeks'
  },
  'dashboard': {
    title: 'Data Analytics Dashboard',
    description: 'Real-time business intelligence dashboard with interactive visualizations. Perfect for data-driven decision making. Features custom charts, real-time data processing, automated reporting, and integration with multiple data sources.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: [
      'Real-time Data Processing',
      'Interactive Charts & Graphs',
      'Custom KPI Tracking',
      'Automated Report Generation',
      'Multiple Data Source Integration',
      'Role-based Access Control',
      'Export & Sharing Features',
      'Mobile Responsive',
      'API Integration'
    ],
    price: '$1,899',
    delivery: '2-3 weeks'
  }
};
  
  // Initialize scroll navbar immediately (before page loader)
  initScrollNavbar();
  
  // Initialize modal system FIRST before anything else - DISABLED TO PREVENT CONFLICTS
  // initModalSystem();
  
  // Initialize smooth scrolling AFTER modal system - TEMPORARILY DISABLED
  /*
  if (typeof window.initSimpleSmoothScrolling === 'function') {
    window.initSimpleSmoothScrolling();
  }
  */
  
  // Initialize page loader first
  initPageLoader();
  
  // Initialize all components after loader
  setTimeout(() => {
    initTypingEffect();
    initModeToggle();
    // Re-initialize scroll navbar to ensure it works after page loader
    initScrollNavbar();
    initStickyLogo(); // Initialize sticky logo functionality
    initMobileMenu(); // Initialize mobile hamburger menu
    
    // Use original SectionManager (no conflicts) - RE-ENABLED WITH MODAL FIXES
    new SectionManager();
    
    initProjectModals();
    initFloatingTextAnimation();
    initEnhancedInputs();
    initEmailJS(); // Initialize email functionality
    
    // Initialize randomized particles
    initRandomizedParticles();
    
    // Initialize Blender 3D Showcase with delay for smooth loading
    setTimeout(() => {
      new Blender3DShowcase();
    }, 500);
    
    // RE-INITIALIZE MODAL SYSTEM AFTER EVERYTHING IS LOADED
    setTimeout(() => {
      initModalSystemLate();
    }, 1000);
    
    // NOTE: Removed automatic scroll to top - was causing modal scroll issues
    // The initial scroll to top on page load (lines 3-5) is sufficient
  }, 1000);
});

function initTypingEffect() {
  const element = document.getElementById('typed-text');
  if (!element) return;
  
  const phrases = [
    'Full-Stack Developer',
    'Freelancer',
    'Engineering Student',
    'Data Entry Professional',
    'Data Analyst',
    'Mobile App Developer',
    'Digital Marketing Expert',
    'E-commerce Specialist',
    'UI/UX Designer',
    'Web Developer',
    'Content Creator',
    'Technical Writer'
  ];
  
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let currentPhrase = '';

  function type() {
    const fullPhrase = phrases[phraseIndex];

    if (!isDeleting) {
      currentPhrase = fullPhrase.substring(0, charIndex + 1);
      charIndex++;
    } else {
      currentPhrase = fullPhrase.substring(0, charIndex - 1);
      charIndex--;
    }

    element.textContent = currentPhrase;

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === fullPhrase.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  setTimeout(type, 1000);
}

// Early modal system initialization to prevent conflicts - DISABLED
function initModalSystem() {
  console.log('=== OLD MODAL SYSTEM DISABLED ===');
  
  // DISABLED: This old modal system was causing conflicts with the new one
  // The new initModalSystemLate() function handles all modal functionality
  
  /* DISABLED: Competing event listener was causing scroll issues
  document.addEventListener('click', function(e) {
    const serviceCard = e.target.closest('.service-card');
    if (serviceCard) {
      e.preventDefault();
      e.stopPropagation();
      console.log('=== SERVICE CARD CLICKED VIA EVENT LISTENER ===');
      openServiceModalViaListener(serviceCard);
      return false;
    }
    
    const portfolioCard = e.target.closest('.portfolio-item');
    if (portfolioCard) {
      e.preventDefault(); 
      e.stopPropagation();
      console.log('=== PORTFOLIO CARD CLICKED VIA EVENT LISTENER ===');
      openProjectModalViaListener(portfolioCard);
      return false;
    }
  });
  */
  
  console.log('Old modal system disabled - using initModalSystemLate() instead');
  
  // Only setup modal close functionality (this is still needed)
  setupModalCloseFunctionality();
}

// Late initialization after all other systems are ready
function initModalSystemLate() {
  console.log('=== LATE MODAL SYSTEM INITIALIZATION ===');
  
  // Remove ANY existing event listeners that might be interfering
  const existingListener = document._modalListener;
  if (existingListener) {
    document.removeEventListener('click', existingListener, true);
    document.removeEventListener('click', existingListener, false);
  }
  
  // SCOPED MODAL SYSTEM - Only bind to specific elements
  // Bind modal handlers directly to service cards only
  document.querySelectorAll('.service-card').forEach(serviceCard => {
    serviceCard.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      console.log('=== SERVICE CARD CLICKED ===');
      console.log('Target:', e.target);
      console.log('Current scroll position:', window.pageYOffset || document.documentElement.scrollTop);
      
      openServiceModalDirect(serviceCard);
      
      // Check scroll position after modal opens
      setTimeout(() => {
        console.log('Scroll position after modal open:', window.pageYOffset || document.documentElement.scrollTop);
      }, 100);
    });
  });
  
  // Bind modal handlers directly to portfolio items only
  document.querySelectorAll('.portfolio-item').forEach(portfolioCard => {
    portfolioCard.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      console.log('=== PORTFOLIO CARD CLICKED ===');
      console.log('Target:', e.target);
      console.log('Current scroll position:', window.pageYOffset || document.documentElement.scrollTop);
      
      openProjectModalDirect(portfolioCard);
      
      // Check scroll position after modal opens
      setTimeout(() => {
        console.log('Scroll position after modal open:', window.pageYOffset || document.documentElement.scrollTop);
      }, 100);
    });
  });
  
  // Setup close functionality for all modals
  setupModalCloseFunctionality();
  
  // Handle problematic href="#" links specifically
  handleProblematicLinks();
  
  console.log('Late modal system initialized with scoped handlers');
}

function openServiceModalDirect(element) {
  console.log('Opening service modal directly');
  
  const modal = document.getElementById('modal');
  if (!modal) {
    console.error('Modal element not found');
    return;
  }
  
  const title = element.querySelector('h3');
  const desc = element.querySelector('p');
  
  if (!title || !desc) {
    console.error('Service card content not found');
    return;
  }
  
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  
  if (!modalTitle || !modalDesc) {
    console.error('Modal content elements not found');
    return;
  }
  
  // Set content
  modalTitle.textContent = title.textContent;
  modalDesc.textContent = desc.textContent;
  
  // Show modal
  modal.classList.add('open');
  document.body.classList.add('modal-open');
  
  console.log('Service modal opened successfully');
}

function openProjectModalDirect(element) {
  console.log('Opening project modal directly');
  
  const projectModal = document.getElementById('project-modal');
  if (!projectModal) {
    console.error('Project modal element not found');
    return;
  }
  
  const projectType = element.getAttribute('data-project');
  if (!projectType) {
    console.error('Project type not found');
    return;
  }
  
  const project = window.projectData ? window.projectData[projectType] : null;
  if (!project) {
    console.error('Project data not found for:', projectType);
    return;
  }
  
  // Populate modal
  const modalTitle = document.getElementById('project-modal-title');
  const modalDesc = document.getElementById('project-modal-description');
  const modalImage = document.getElementById('project-modal-image');
  const projectPrice = document.getElementById('project-price');
  const projectDelivery = document.getElementById('project-delivery');
  
  if (modalTitle) modalTitle.textContent = project.title;
  if (modalDesc) modalDesc.textContent = project.description;
  if (modalImage) {
    modalImage.src = project.image;
    modalImage.alt = project.title;
  }
  if (projectPrice) projectPrice.textContent = project.price;
  if (projectDelivery) projectDelivery.textContent = project.delivery;
  
  // Populate features
  const featuresList = document.getElementById('project-features-list');
  if (featuresList && project.features) {
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      featuresList.appendChild(li);
    });
  }
  
  // Show modal
  projectModal.classList.add('open');
  document.body.classList.add('modal-open');
  projectModal.setAttribute('data-current-project', projectType);
  
  console.log('Project modal opened successfully');
}

function openServiceModalViaListener(element) {
  console.log('Service modal via event listener');
  
  const modal = document.getElementById('modal');
  if (!modal) {
    console.error('Service modal not found');
    return false;
  }
  
  const title = element.querySelector('h3');
  const desc = element.querySelector('p');
  
  if (title && desc) {
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    
    if (modalTitle && modalDesc) {
      modalTitle.textContent = title.textContent;
      modalDesc.textContent = desc.textContent;
      modal.classList.add('open');
      document.body.classList.add('modal-open');
      console.log('Service modal opened successfully via listener');
    } else {
      console.error('Modal title or description elements not found');
    }
  } else {
    console.error('Service card title or description not found');
  }
  
  return false;
}

function openProjectModalViaListener(element) {
  console.log('Project modal via event listener');
  
  const projectModal = document.getElementById('project-modal');
  if (!projectModal) {
    console.error('Project modal not found');
    return false;
  }
  
  const projectType = element.getAttribute('data-project');
  const project = window.projectData ? window.projectData[projectType] : null;
  
  if (!project) {
    console.error('Project data not found for:', projectType);
    return false;
  }
  
  // Populate project modal
  const modalTitle = document.getElementById('project-modal-title');
  const modalDesc = document.getElementById('project-modal-description');
  const modalImage = document.getElementById('project-modal-image');
  const projectPrice = document.getElementById('project-price');
  const projectDelivery = document.getElementById('project-delivery');
  
  if (modalTitle) modalTitle.textContent = project.title;
  if (modalDesc) modalDesc.textContent = project.description;
  if (modalImage) {
    modalImage.src = project.image;
    modalImage.alt = project.title;
  }
  if (projectPrice) projectPrice.textContent = project.price;
  if (projectDelivery) projectDelivery.textContent = project.delivery;
  
  // Populate features list
  const featuresList = document.getElementById('project-features-list');
  if (featuresList && project.features) {
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      featuresList.appendChild(li);
    });
  }
  
  // Show project modal
  projectModal.classList.add('open');
  document.body.classList.add('modal-open');
  console.log('Project modal opened successfully via listener');
  
  // Store project data for order form
  projectModal.setAttribute('data-current-project', projectType);
  
  return false;
}

// Direct inline functions that will override everything else
window.openServiceModal = function(element) {
  console.log('=== SERVICE MODAL CLICKED ===');
  
  // Stop any event propagation
  if (typeof event !== 'undefined') {
    event.stopPropagation();
    event.preventDefault();
  }
  
  const modal = document.getElementById('modal');
  if (!modal) {
    console.error('Service modal not found');
    return false;
  }
  
  const title = element.querySelector('h3');
  const desc = element.querySelector('p');
  
  if (title && desc) {
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    
    if (modalTitle && modalDesc) {
      modalTitle.textContent = title.textContent;
      modalDesc.textContent = desc.textContent;
      modal.classList.add('open');
      document.body.classList.add('modal-open');
      console.log('Service modal opened successfully');
    } else {
      console.error('Modal title or description elements not found');
    }
  } else {
    console.error('Service card title or description not found');
  }
  
  return false;
};

window.openProjectModal = function(element) {
  console.log('=== PROJECT MODAL CLICKED ===');
  
  // Stop any event propagation
  if (typeof event !== 'undefined') {
    event.stopPropagation();
    event.preventDefault();
  }
  
  const projectModal = document.getElementById('project-modal');
  if (!projectModal) {
    console.error('Project modal not found');
    return false;
  }
  
  const projectType = element.getAttribute('data-project');
  const project = window.projectData ? window.projectData[projectType] : null;
  
  if (!project) {
    console.error('Project data not found for:', projectType);
    return false;
  }
  
  // Populate project modal
  const modalTitle = document.getElementById('project-modal-title');
  const modalDesc = document.getElementById('project-modal-description');
  const modalImage = document.getElementById('project-modal-image');
  const projectPrice = document.getElementById('project-price');
  const projectDelivery = document.getElementById('project-delivery');
  
  if (modalTitle) modalTitle.textContent = project.title;
  if (modalDesc) modalDesc.textContent = project.description;
  if (modalImage) {
    modalImage.src = project.image;
    modalImage.alt = project.title;
  }
  if (projectPrice) projectPrice.textContent = project.price;
  if (projectDelivery) projectDelivery.textContent = project.delivery;
  
  // Populate features list
  const featuresList = document.getElementById('project-features-list');
  if (featuresList && project.features) {
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      featuresList.appendChild(li);
    });
  }
  
  // Show project modal
  projectModal.classList.add('open');
  document.body.classList.add('modal-open');
  console.log('Project modal opened successfully');
  
  // Store project data for order form
  projectModal.setAttribute('data-current-project', projectType);
  
  return false;
};

function setupModalCloseFunctionality() {
  const modal = document.getElementById('modal');
  const projectModal = document.getElementById('project-modal');
  const orderModal = document.getElementById('order-modal');
  
  // Setup service modal close functionality
  if (modal) {
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        modal.classList.remove('open');
        document.body.classList.remove('modal-open');
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        e.preventDefault();
        modal.classList.remove('open');
        document.body.classList.remove('modal-open');
      }
    });
  }
  
  // Setup project modal close functionality
  if (projectModal) {
    const projectCloseBtn = document.querySelector('.project-close-btn');
    if (projectCloseBtn) {
      projectCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        projectModal.classList.remove('open');
        document.body.classList.remove('modal-open');
      });
    }

    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        e.preventDefault();
        projectModal.classList.remove('open');
        document.body.classList.remove('modal-open');
      }
    });
  }
  
  // Setup order modal close functionality
  if (orderModal) {
    const orderCloseBtn = document.querySelector('.order-close-btn');
    if (orderCloseBtn) {
      orderCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        orderModal.classList.remove('open');
        document.body.classList.remove('modal-open');
      });
    }

    orderModal.addEventListener('click', (e) => {
      if (e.target === orderModal) {
        e.preventDefault();
        orderModal.classList.remove('open');
        document.body.classList.remove('modal-open');
      }
    });
  }
}

// Handle specific problematic href="#" links without interfering with modal system
function handleProblematicLinks() {
  // Target specific buttons that use href="#"
  document.querySelectorAll('a.gig-btn, a.profile-btn, a[href="#"]').forEach(link => {
    // Skip if this link is inside a service or portfolio card (let modal system handle those)
    if (link.closest('.service-card') || link.closest('.portfolio-item')) {
      return;
    }
    
    link.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Prevented href="#" navigation for non-modal link:', link.className);
      return false;
    });
  });
}

function initModeToggle() {
  const modeToggle = document.getElementById('mode-toggle');
  if (!modeToggle) return;
  
  // Transform the button into a 3D slider
  modeToggle.innerHTML = `
    <div class="toggle-container">
      <div class="toggle-track">
        <div class="toggle-slider">
          <div class="toggle-icon">🌙</div>
        </div>
        <div class="toggle-bg-icons">
          <span class="dark-icon">🌙</span>
          <span class="light-icon">☀️</span>
        </div>
      </div>
    </div>
  `;
  
  // Add the 3D toggle styles
  addToggleStyles();
  
  const toggleContainer = modeToggle.querySelector('.toggle-container');
  const toggleSlider = modeToggle.querySelector('.toggle-slider');
  const toggleIcon = modeToggle.querySelector('.toggle-icon');
  const toggleTrack = modeToggle.querySelector('.toggle-track');
  
  let isLightMode = document.body.classList.contains('light-mode');
  
  // Set initial state
  if (isLightMode) {
    toggleTrack.classList.add('light');
    toggleIcon.textContent = '☀️';
  }
  
  modeToggle.addEventListener('click', () => {
    const light = document.body.classList.toggle('light-mode');
    isLightMode = light;
    
    // Add click animation
    toggleContainer.style.transform = 'scale(0.95)';
    
    // Force reflow to ensure CSS transition works
    toggleTrack.offsetHeight;
    
    // Toggle the track state with proper timing
    if (light) {
      toggleTrack.classList.add('light');
      toggleIcon.textContent = '☀️';
    } else {
      toggleTrack.classList.remove('light');
      toggleIcon.textContent = '🌙';
    }
    
    // Add sliding bounce effect
    setTimeout(() => {
      toggleSlider.style.transform = light ? 'translateX(30px) scale(1.1)' : 'translateX(0) scale(1.1)';
    }, 50);
    
    setTimeout(() => {
      toggleContainer.style.transform = 'scale(1)';
      toggleSlider.style.transform = light ? 'translateX(30px) scale(1)' : 'translateX(0) scale(1)';
    }, 200);
  });
  
  // Add hover effects
  modeToggle.addEventListener('mouseenter', () => {
    toggleContainer.style.transform = 'scale(1.05)';
    toggleTrack.style.boxShadow = `
      0 8px 25px rgba(0, 212, 255, 0.3),
      inset 0 2px 5px rgba(255, 255, 255, 0.1),
      inset 0 -2px 5px rgba(0, 0, 0, 0.3)
    `;
  });
  
  modeToggle.addEventListener('mouseleave', () => {
    toggleContainer.style.transform = 'scale(1)';
    toggleTrack.style.boxShadow = `
      0 4px 15px rgba(0, 0, 0, 0.3),
      inset 0 2px 5px rgba(255, 255, 255, 0.1),
      inset 0 -2px 5px rgba(0, 0, 0, 0.3)
    `;
  });
}

function addToggleStyles() {
  // Check if styles already exist
  if (document.getElementById('toggle-styles')) return;
  
  const style = document.createElement('style');
  style.id = 'toggle-styles';
  style.textContent = `
    .toggle-container {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
      transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
      cursor: pointer;
    }
    
    .toggle-track {
      position: relative;
      width: 60px;
      height: 30px;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
      border-radius: 15px;
      transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
      box-shadow: 
        0 4px 15px rgba(0, 0, 0, 0.3),
        inset 0 2px 5px rgba(255, 255, 255, 0.1),
        inset 0 -2px 5px rgba(0, 0, 0, 0.3);
      overflow: hidden;
    }
    
    .toggle-track.light {
      background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%);
      box-shadow: 
        0 4px 15px rgba(255, 216, 155, 0.4),
        inset 0 2px 5px rgba(255, 255, 255, 0.3),
        inset 0 -2px 5px rgba(0, 0, 0, 0.1);
    }
    
    .toggle-slider {
      position: absolute;
      top: 3px;
      left: 3px;
      width: 24px;
      height: 24px;
      background: linear-gradient(145deg, #ffffff, #e6e6e6);
      border-radius: 50%;
      transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
      box-shadow: 
        0 2px 8px rgba(0, 0, 0, 0.2),
        0 4px 12px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 3;
      transform: translateX(0);
    }
    
    .toggle-track.light .toggle-slider {
      transform: translateX(30px);
      background: linear-gradient(145deg, #fff9e6, #ffeb99);
      box-shadow: 
        0 2px 8px rgba(255, 180, 0, 0.3),
        0 4px 12px rgba(255, 180, 0, 0.2);
    }
    
    .toggle-icon {
      font-size: 12px;
      transition: all 0.3s ease;
      filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
    }
    
    .toggle-bg-icons {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 8px;
      z-index: 1;
      pointer-events: none;
    }
    
    .dark-icon, .light-icon {
      font-size: 10px;
      opacity: 0.6;
      transition: all 0.3s ease;
      filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5));
    }
    
    .toggle-track.light .dark-icon {
      opacity: 0.3;
    }
    
    .toggle-track.light .light-icon {
      opacity: 0.8;
      color: #ff8c00;
    }
    
    .toggle-track:not(.light) .dark-icon {
      opacity: 0.8;
      color: #00d4ff;
    }
    
    .toggle-track:not(.light) .light-icon {
      opacity: 0.3;
    }
    
    /* 3D Hover Effect */
    .toggle-container:hover .toggle-track {
      transform: perspective(200px) rotateX(5deg);
    }
    
    .toggle-container:active .toggle-track {
      transform: perspective(200px) rotateX(2deg) scale(0.98);
    }
    
    /* Glow effect */
    .toggle-track::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(45deg, #00d4ff, transparent, #ff8c00, transparent, #00d4ff);
      border-radius: 17px;
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: -1;
      animation: toggleGlow 3s linear infinite;
    }
    
    .toggle-container:hover .toggle-track::before {
      opacity: 0.5;
    }
    
    @keyframes toggleGlow {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    /* Enhanced 3D effect for dark mode button container */
    #mode-toggle {
      background: none !important;
      border: none !important;
      padding: 8px !important;
      border-radius: 20px !important;
      backdrop-filter: blur(10px) !important;
      background: rgba(255, 255, 255, 0.1) !important;
      transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1) !important;
    }
    
    #mode-toggle:hover {
      background: rgba(255, 255, 255, 0.15) !important;
      transform: translateY(-2px) !important;
      box-shadow: 0 8px 25px rgba(0, 212, 255, 0.2) !important;
    }
  `;
  
  document.head.appendChild(style);
}

function initScrollNavbar() {
  console.log('Initializing scroll navbar...');
  
  // Wait a bit to ensure DOM is fully ready
  setTimeout(() => {
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) {
      console.error('Navbar not found! Available elements:', document.querySelectorAll('nav'));
      return;
    }
    
    console.log('Navbar found:', navbar);
    
    let lastScrollTop = 0;
    let isScrolling = false;
    
    function handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Prevent negative values on iOS
      if (scrollTop < 0) return;
      
      console.log(`Scroll: ${scrollTop}, Last: ${lastScrollTop}`);
      
      // At the top of the page - always show
      if (scrollTop <= 50) {
        navbar.style.transform = 'translateY(0)';
        navbar.classList.remove('navbar-hidden');
        navbar.classList.add('navbar-visible');
        console.log('Top of page - show navbar');
      }
      // Scrolling down - hide navbar  
      else if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.style.transform = 'translateY(-100%)';
        navbar.classList.add('navbar-hidden');
        navbar.classList.remove('navbar-visible');
        console.log('Scrolling down - hide navbar');
      }
      // Scrolling up - show navbar
      else if (scrollTop < lastScrollTop) {
        navbar.style.transform = 'translateY(0)';
        navbar.classList.remove('navbar-hidden');
        navbar.classList.add('navbar-visible');
        console.log('Scrolling up - show navbar');
      }
      
      lastScrollTop = scrollTop;
      isScrolling = false;
    }
    
    // Use both scroll event and requestAnimationFrame for smooth performance
    window.addEventListener('scroll', () => {
      if (!isScrolling) {
        requestAnimationFrame(handleScroll);
        isScrolling = true;
      }
    }, { passive: true });
    
    // Initialize navbar as visible
    navbar.style.transform = 'translateY(0)';
    navbar.classList.add('navbar-visible');
    console.log('Scroll navbar initialized successfully');
    
  }, 100); // Small delay to ensure DOM is ready
}

function initStickyLogo() {
  console.log('Initializing sticky logo...');
  
  const stickyLogo = document.getElementById('sticky-logo');
  const heroSection = document.getElementById('home');
  const navbar = document.querySelector('.navbar');
  
  if (!stickyLogo) {
    console.error('Sticky logo not found!');
    return;
  }
  
  if (!heroSection) {
    console.error('Hero section not found!');
    return;
  }
  
  if (!navbar) {
    console.error('Navbar not found!');
    return;
  }
  
  function handleStickyLogoVisibility() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const heroHeight = heroSection.offsetHeight;
    const navbarHidden = navbar.classList.contains('navbar-hidden');
    
    // Show sticky logo when:
    // 1. Hero section is mostly out of view (scrolled past 80% of hero height)
    // 2. AND navbar is hidden (scrolling down)
    const heroOutOfView = scrollTop > (heroHeight * 0.8);
    const shouldShow = heroOutOfView && navbarHidden;
    
    console.log(`Sticky Logo - Scroll: ${scrollTop}, Hero Height: ${heroHeight}, Hero Out: ${heroOutOfView}, Navbar Hidden: ${navbarHidden}, Should Show: ${shouldShow}`);
    
    if (shouldShow) {
      stickyLogo.classList.add('show');
    } else {
      stickyLogo.classList.remove('show');
    }
  }
  
  // Listen for scroll events
  let isScrolling = false;
  window.addEventListener('scroll', () => {
    if (!isScrolling) {
      requestAnimationFrame(handleStickyLogoVisibility);
      isScrolling = true;
      setTimeout(() => { isScrolling = false; }, 16); // 60fps throttle
    }
  }, { passive: true });
  
  // Initial check
  handleStickyLogoVisibility();
  
  console.log('Sticky logo initialized successfully');
}

// Simple 3D Scroll Animation System
class SectionManager {
  constructor() {
    this.sections = document.querySelectorAll('section');
    this.header = document.querySelector('.hero-section');
    this.init();
  }

  init() {
    console.log(`Found ${this.sections.length} sections to observe`);
    
    // Set up scroll detection using Intersection Observer
    this.setupIntersectionObserver();
    this.bindNavigation();
    
    // Backup: Check sections on scroll as well
    this.setupScrollBackup();
  }

  setupScrollBackup() {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          this.checkSectionsOnScroll();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  checkSectionsOnScroll() {
    const windowHeight = window.innerHeight;
    
    this.sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      
      // If section is in viewport (top 20% to bottom 20%)
      if (rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2) {
        if (!section.classList.contains('visible')) {
          console.log(`Making section ${section.id} visible via scroll backup`);
          section.classList.add('visible', 'animate-in');
          
          if (section.id === 'services') {
            setTimeout(() => {
              this.animateServiceCards();
            }, 200);
          }
        }
      }
    });
  }

  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        console.log(`Section ${entry.target.id} intersecting: ${entry.isIntersecting}`);
        
        if (entry.isIntersecting) {
          // Section is visible, add animation classes
          entry.target.classList.add('visible', 'animate-in');
          
          // Special handling for services section
          if (entry.target.id === 'services') {
            setTimeout(() => {
              this.animateServiceCards();
            }, 200);
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    this.sections.forEach(section => {
      observer.observe(section);
      console.log(`Observing section: ${section.id}`);
    });

    // Set up hero section scroll behavior
    this.setupHeroScroll();
  }

  setupHeroScroll() {
    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset;
      const windowHeight = window.innerHeight;
      
      if (this.header) {
        if (scrollY > windowHeight * 0.15) {
          this.header.classList.add('scroll-hide');
        } else {
          this.header.classList.remove('scroll-hide');
        }
      }
    });
  }

  animateServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('visible');
      }, index * 150 + 300);
    });
  }

  bindNavigation() {
    // Enhanced navigation with smooth scrolling support - MODIFIED FOR MODAL COMPATIBILITY
    document.querySelectorAll('.nav-menu .nav-link, .nav-logo').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        // Check if click is specifically ON the card itself (not modal elements) - if so, ignore
        const isModalCard = (e.target.closest('.service-card') || e.target.closest('.portfolio-item')) && 
                           !e.target.closest('.modal') && !e.target.closest('.project-modal');
        if (isModalCard) {
          return; // Let modal system handle this
        }
        
        e.preventDefault();
        const targetId = anchor.getAttribute('href').substring(1);
        
        if (targetId === 'home') {
          window.scrollTo({ 
            top: 0, 
            behavior: 'auto' // Changed from 'smooth' to 'auto'
          });
        } else {
          const target = document.getElementById(targetId);
          if (target) {
            const targetOffset = target.offsetTop - 80; // Account for navbar
            window.scrollTo({
              top: targetOffset,
              behavior: 'auto' // Changed from 'smooth' to 'auto'
            });
          }
        }
      });
    });
    
    // Handle CTA buttons separately to avoid conflicts
    document.querySelectorAll('.cta-buttons .btn').forEach(button => {
      button.addEventListener('click', (e) => {
        // Check if click is specifically ON the card itself (not modal elements) - if so, ignore
        const isModalCard = (e.target.closest('.service-card') || e.target.closest('.portfolio-item')) && 
                           !e.target.closest('.modal') && !e.target.closest('.project-modal');
        if (isModalCard) {
          return; // Let modal system handle this
        }
        
        e.preventDefault();
        const targetId = button.getAttribute('href').substring(1);
        
        const target = document.getElementById(targetId);
        if (target) {
          const targetOffset = target.offsetTop - 80; // Account for navbar
          window.scrollTo({
            top: targetOffset,
            behavior: 'auto' // Changed from 'smooth' to 'auto'
          });
        }
      });
    });
  }
}

function initProjectModals() {
  const projectModal = document.getElementById('project-modal');
  const orderModal = document.getElementById('order-modal');
  
  if (!projectModal || !orderModal) return;

  // Since we're using inline onclick handlers for portfolio items, 
  // we only need to setup the modal button handlers

  // Order now button
  const orderNowBtn = document.querySelector('.order-now-btn');
  if (orderNowBtn) {
    orderNowBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      const currentProject = projectModal.getAttribute('data-current-project');
      const project = window.projectData[currentProject];
      
      if (project) {
        document.getElementById('order-project-type').value = project.title;
        document.getElementById('order-price').value = project.price;
        
        projectModal.classList.remove('open');
        orderModal.classList.add('open');
      }
    });
  }

  // Contact for custom quote button
  const contactAboutBtn = document.querySelector('.contact-about-btn');
  if (contactAboutBtn) {
    contactAboutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      projectModal.classList.remove('open');
      document.body.classList.remove('modal-open');
      
      // Scroll to contact section
      document.getElementById('contact').scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    });
  }

  // Cancel order button (keep this as it's different from close)
  const cancelOrderBtn = document.querySelector('.cancel-order-btn');
  if (cancelOrderBtn) {
    cancelOrderBtn.addEventListener('click', (e) => {
      e.preventDefault();
      orderModal.classList.remove('open');
      document.body.classList.remove('modal-open');
    });
  }

  // Note: Close buttons are now handled by setupModalCloseFunctionality()
  // Click outside to close functionality is also handled there

  // Order form submission
  const orderForm = document.querySelector('.order-form');
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      alert('Thank you for your order request! We will contact you within 24 hours to discuss the details and payment options.');
      
      orderModal.classList.remove('open');
      document.body.classList.remove('modal-open');
      
      // Reset form
      e.target.reset();
    });
  }
}

// Enhanced Floating Text Animation for Contact Form
function initFloatingTextAnimation() {
  // Get all animated inputs and textareas
  const animatedElements = [
    { input: document.getElementById('animated-input-name'), display: document.getElementById('floating-text-name') },
    { input: document.getElementById('animated-input-email'), display: document.getElementById('floating-text-email') },
    { input: document.getElementById('animated-textarea'), display: document.getElementById('floating-text-message') },
    { input: document.getElementById('animated-input-order-name'), display: document.getElementById('floating-text-order-name') },
    { input: document.getElementById('animated-input-order-email'), display: document.getElementById('floating-text-order-email') },
    { input: document.getElementById('animated-input-order-company'), display: document.getElementById('floating-text-order-company') },
    { input: document.getElementById('animated-textarea-order-requirements'), display: document.getElementById('floating-text-order-requirements') }
  ];

  animatedElements.forEach(({ input, display }) => {
    if (!input || !display) return;

    let previousText = '';

    // Handle text input - just display text, no animation
    function handleInput(event) {
      const newText = input.value;
      display.textContent = newText;
      previousText = newText;
    }

    // Event listeners - simplified
    input.addEventListener('input', handleInput);

    input.addEventListener('focus', function() {
      display.style.opacity = '1';
    });

    input.addEventListener('blur', function() {
      if (!this.value) {
        display.style.opacity = '0';
        display.textContent = '';
      }
    });
  });
}

// Enhanced input animations
function initEnhancedInputs() {
  const inputs = document.querySelectorAll('.animated-input, .animated-textarea');
  
  inputs.forEach(input => {
    input.addEventListener('input', function() {
      // Add typing effect to regular inputs
      const text = this.value;
      if (text.length > 0) {
        this.style.fontWeight = '500';
        this.style.letterSpacing = '0.8px';
        this.style.textShadow = '0 0 8px rgba(0, 212, 255, 0.3)';
      } else {
        this.style.fontWeight = '400';
        this.style.letterSpacing = '0.5px';
        this.style.textShadow = 'none';
      }
    });

    input.addEventListener('focus', function() {
      this.style.transform = 'scale(1.02)';
    });

    input.addEventListener('blur', function() {
      this.style.transform = 'scale(1)';
    });
  });
}

// ===============================================
// BLENDER 3D PROJECTS INTERACTIVE SYSTEM
// ===============================================

class Blender3DShowcase {
  constructor() {
    this.projects = document.querySelectorAll('.blender-project');
    this.ctaButton = document.querySelector('[data-action="blender-contact"]');
    this.particleSystem = null;
    
    this.init();
  }

  init() {
    this.setupProjectInteractions();
    this.setupParticleSystem();
    this.setupCTAInteraction();
    this.setupScrollAnimations();
    this.setupAdvanced3DEffects();
  }

  setupProjectInteractions() {
    this.projects.forEach((project, index) => {
      // Advanced hover effects with 3D transformation
      project.addEventListener('mouseenter', (e) => {
        this.activate3DProject(project);
        this.createRippleEffect(e, project);
      });

      project.addEventListener('mouseleave', () => {
        this.deactivate3DProject(project);
      });

      project.addEventListener('mousemove', (e) => {
        this.update3DRotation(e, project);
      });

      // Animation indicator interactions
      const animationIndicator = project.querySelector('.animation-indicator');
      if (animationIndicator) {
        animationIndicator.addEventListener('click', () => {
          this.playAnimationPreview(project);
        });
      }

      // Tool tag interactions
      const toolTags = project.querySelectorAll('.tool-tag');
      toolTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
          this.highlightToolTag(tag);
        });
      });
    });
  }

  activate3DProject(project) {
    project.style.transformStyle = 'preserve-3d';
    project.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.320, 1)';
    
    // Add dynamic lighting effect
    const dynamicLight = document.createElement('div');
    dynamicLight.className = 'dynamic-light';
    dynamicLight.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
        rgba(0, 212, 255, 0.15) 0%, 
        transparent 70%);
      pointer-events: none;
      border-radius: 20px;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;
    project.appendChild(dynamicLight);
    
    setTimeout(() => {
      dynamicLight.style.opacity = '1';
    }, 100);
  }

  deactivate3DProject(project) {
    project.style.transform = '';
    const dynamicLight = project.querySelector('.dynamic-light');
    if (dynamicLight) {
      dynamicLight.style.opacity = '0';
      setTimeout(() => {
        if (dynamicLight.parentNode) {
          dynamicLight.parentNode.removeChild(dynamicLight);
        }
      }, 300);
    }
  }

  update3DRotation(e, project) {
    const rect = project.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateX = (mouseY / rect.height) * -10;
    const rotateY = (mouseX / rect.width) * 10;
    
    project.style.transform = `
      translateY(-15px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      scale(1.02)
    `;

    // Update dynamic light position
    const dynamicLight = project.querySelector('.dynamic-light');
    if (dynamicLight) {
      const mouseXPercent = ((e.clientX - rect.left) / rect.width) * 100;
      const mouseYPercent = ((e.clientY - rect.top) / rect.height) * 100;
      dynamicLight.style.setProperty('--mouse-x', `${mouseXPercent}%`);
      dynamicLight.style.setProperty('--mouse-y', `${mouseYPercent}%`);
    }
  }

  createRippleEffect(e, project) {
    const ripple = document.createElement('div');
    const rect = project.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      transform: scale(0);
      animation: rippleAnimation 0.8s ease-out;
      z-index: 1;
    `;

    project.appendChild(ripple);

    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 800);
  }

  playAnimationPreview(project) {
    const animationIndicator = project.querySelector('.animation-indicator');
    const playButton = animationIndicator.querySelector('.play-button');
    
    // Create advanced animation preview effect
    playButton.style.transform = 'scale(0.8)';
    playButton.style.color = '#ff8c00';
    
    // Simulate loading/playing state
    const originalHTML = playButton.innerHTML;
    playButton.innerHTML = `
      <div style="width: 24px; height: 24px; border: 2px solid currentColor; border-top-color: transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>
    `;

    setTimeout(() => {
      playButton.innerHTML = originalHTML;
      playButton.style.transform = '';
      playButton.style.color = '';
      
      // Show success feedback
      this.showAnimationFeedback(project, 'Animation Preview Loaded!');
    }, 2000);
  }

  showAnimationFeedback(project, message) {
    const feedback = document.createElement('div');
    feedback.textContent = message;
    feedback.style.cssText = `
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 212, 255, 0.9);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
      z-index: 100;
      animation: feedbackSlide 2s ease-out forwards;
    `;

    project.style.position = 'relative';
    project.appendChild(feedback);

    setTimeout(() => {
      if (feedback.parentNode) {
        feedback.parentNode.removeChild(feedback);
      }
    }, 2000);
  }

  highlightToolTag(tag) {
    // Create particle burst effect
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        this.createTagParticle(tag);
      }, i * 100);
    }
  }

  createTagParticle(tag) {
    const particle = document.createElement('div');
    const rect = tag.getBoundingClientRect();
    
    particle.style.cssText = `
      position: fixed;
      left: ${rect.left + rect.width / 2}px;
      top: ${rect.top + rect.height / 2}px;
      width: 4px;
      height: 4px;
      background: var(--primary-color);
      border-radius: 50%;
      pointer-events: none;
      z-index: 1000;
      animation: particleBurst 1s ease-out forwards;
    `;

    document.body.appendChild(particle);

    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, 1000);
  }

  setupParticleSystem() {
    // Create ambient particle system for the entire section
    const blenderSection = document.getElementById('blender-projects');
    if (!blenderSection) return;

    const particleContainer = document.createElement('div');
    particleContainer.className = 'ambient-particles';
    particleContainer.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      overflow: hidden;
    `;

    blenderSection.appendChild(particleContainer);

    // Generate ambient particles
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        this.createAmbientParticle(particleContainer);
      }, i * 200);
    }

    // Regenerate particles periodically
    setInterval(() => {
      this.createAmbientParticle(particleContainer);
    }, 3000);
  }

  createAmbientParticle(container) {
    const particle = document.createElement('div');
    const size = Math.random() * 3 + 1;
    const duration = Math.random() * 10 + 15;
    const delay = Math.random() * 5;

    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: linear-gradient(45deg, #00d4ff, #ff8c00);
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: 100%;
      animation: ambientFloat ${duration}s linear ${delay}s infinite;
      opacity: 0.6;
      box-shadow: 0 0 10px currentColor;
    `;

    container.appendChild(particle);

    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, (duration + delay) * 1000);
  }

  setupCTAInteraction() {
    if (!this.ctaButton) return;

    this.ctaButton.addEventListener('click', () => {
      this.handleCTAClick();
    });

    // Advanced hover effects for CTA
    this.ctaButton.addEventListener('mouseenter', () => {
      this.activateCTAEffects();
    });

    this.ctaButton.addEventListener('mouseleave', () => {
      this.deactivateCTAEffects();
    });
  }

  handleCTAClick() {
    // Create advanced click effect
    const btnRect = this.ctaButton.getBoundingClientRect();
    
    // Show success animation
    const originalText = this.ctaButton.innerHTML;
    this.ctaButton.innerHTML = `
      <span style="display: flex; align-items: center; gap: 0.5rem;">
        <div style="width: 20px; height: 20px; border: 2px solid currentColor; border-top-color: transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>
        Connecting...
      </span>
    `;

    setTimeout(() => {
      this.ctaButton.innerHTML = `
        <span style="display: flex; align-items: center; gap: 0.5rem;">
          ✓ Ready to Create!
        </span>
      `;
      
      setTimeout(() => {
        this.ctaButton.innerHTML = originalText;
        // Scroll to contact section
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 1500);
    }, 2000);
  }

  activateCTAEffects() {
    // Create orbital particles around button
    const btnRect = this.ctaButton.getBoundingClientRect();
    
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        this.createOrbitalParticle(this.ctaButton, i);
      }, i * 100);
    }
  }

  createOrbitalParticle(button, index) {
    const particle = document.createElement('div');
    const angle = (index / 8) * 360;
    
    particle.style.cssText = `
      position: absolute;
      width: 6px;
      height: 6px;
      background: var(--primary-color);
      border-radius: 50%;
      left: 50%;
      top: 50%;
      transform-origin: 0 40px;
      transform: translate(-50%, -50%) rotate(${angle}deg);
      animation: orbitalRotate 2s linear infinite;
      box-shadow: 0 0 10px var(--primary-color);
      z-index: -1;
    `;

    button.style.position = 'relative';
    button.appendChild(particle);

    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, 2000);
  }

  deactivateCTAEffects() {
    // Effects automatically cleanup after timeout
  }

  setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateProjectEntry(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    this.projects.forEach(project => {
      observer.observe(project);
    });
  }

  animateProjectEntry(project) {
    project.style.opacity = '0';
    project.style.transform = 'translateY(50px) rotateX(-10deg)';
    
    setTimeout(() => {
      project.style.transition = 'all 1s cubic-bezier(0.23, 1, 0.320, 1)';
      project.style.opacity = '1';
      project.style.transform = 'translateY(0) rotateX(0)';
    }, 100);
  }

  setupAdvanced3DEffects() {
    // Add dynamic CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes rippleAnimation {
        to { transform: scale(4); opacity: 0; }
      }
      
      @keyframes feedbackSlide {
        0% { opacity: 0; transform: translateX(-50%) translateY(10px); }
        20% { opacity: 1; transform: translateX(-50%) translateY(0); }
        80% { opacity: 1; transform: translateX(-50%) translateY(0); }
        100% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
      }
      
      @keyframes particleBurst {
        0% { transform: scale(1) translate(0, 0); opacity: 1; }
        100% { 
          transform: scale(0) translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); 
          opacity: 0; 
        }
      }
      
      @keyframes ambientFloat {
        0% { transform: translateY(0) rotateZ(0deg); opacity: 0; }
        10% { opacity: 0.6; }
        90% { opacity: 0.6; }
        100% { transform: translateY(-100vh) rotateZ(360deg); opacity: 0; }
      }
      
      @keyframes orbitalRotate {
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg); }
      }
      
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
  }
}

// ===============================================
// EMAIL FUNCTIONALITY - EMAILJS INTEGRATION
// ===============================================

function initEmailJS() {
  // Initialize EmailJS with your public key
  emailjs.init('n2t_9Vg61ZDgBRPKC'); // Your EmailJS public key
  
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = submitBtn.querySelector('.btn-text');
  const btnLoading = submitBtn.querySelector('.btn-loading');
  const formStatus = document.getElementById('form-status');

  if (!contactForm) return;

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    sendEmail(this);
  });

  function sendEmail(form) {
    // Show loading state
    showLoadingState();

    // EmailJS service configuration
    const serviceID = 'service_ewvbxhl'; // Your EmailJS service ID
    const templateID = 'template_z8mvghc'; // Your EmailJS template ID

    // Send the email
    emailjs.sendForm(serviceID, templateID, form)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        showSuccessMessage();
        resetForm();
      })
      .catch(function(error) {
        console.log('FAILED...', error);
        showErrorMessage();
      })
      .finally(function() {
        hideLoadingState();
      });
  }

  function showLoadingState() {
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'flex';
  }

  function hideLoadingState() {
    submitBtn.disabled = false;
    btnText.style.display = 'block';
    btnLoading.style.display = 'none';
  }

  function showSuccessMessage() {
    formStatus.className = 'form-status success show';
    formStatus.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.5rem; justify-content: center;">
        <span style="font-size: 1.2rem;">✅</span>
        <span>Message sent successfully! I'll get back to you soon.</span>
      </div>
    `;
    
    setTimeout(() => {
      formStatus.classList.remove('show');
    }, 5000);
  }

  function showErrorMessage() {
    formStatus.className = 'form-status error show';
    formStatus.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.5rem; justify-content: center;">
        <span style="font-size: 1.2rem;">❌</span>
        <span>Failed to send message. Please try again or contact me directly.</span>
      </div>
    `;
    
    setTimeout(() => {
      formStatus.classList.remove('show');
    }, 5000);
  }

  function resetForm() {
    contactForm.reset();
    
    // Clear floating text displays
    document.getElementById('floating-text-name').textContent = '';
    document.getElementById('floating-text-email').textContent = '';
    document.getElementById('floating-text-message').textContent = '';
  }
}

// ===============================================
// ALTERNATIVE SOLUTIONS FOR EMAIL SENDING
// ===============================================

// Alternative 1: Formspree Integration
function initFormspree() {
  const contactForm = document.getElementById('contact-form');
  
  // Simply change the form action to Formspree endpoint
  contactForm.action = 'https://formspree.io/f/YOUR_FORM_ID'; // Replace with your Formspree form ID
  contactForm.method = 'POST';
  
  // Add Formspree's honeypot field for spam protection
  const honeypot = document.createElement('input');
  honeypot.type = 'hidden';
  honeypot.name = '_gotcha';
  honeypot.style.display = 'none';
  contactForm.appendChild(honeypot);
  
  // Add success redirect
  const redirect = document.createElement('input');
  redirect.type = 'hidden';
  redirect.name = '_next';
  redirect.value = window.location.href + '?success=true';
  contactForm.appendChild(redirect);
}

// Alternative 2: Netlify Forms (if hosting on Netlify)
function initNetlifyForms() {
  const contactForm = document.getElementById('contact-form');
  
  // Add Netlify form attributes
  contactForm.setAttribute('netlify', '');
  contactForm.setAttribute('name', 'contact');
  
  // Add hidden field for Netlify
  const netlifyField = document.createElement('input');
  netlifyField.type = 'hidden';
  netlifyField.name = 'form-name';
  netlifyField.value = 'contact';
  contactForm.appendChild(netlifyField);
}

// Alternative 3: Simple mailto fallback
function initMailtoFallback() {
  const contactForm = document.getElementById('contact-form');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('animated-input-name').value;
    const email = document.getElementById('animated-input-email').value;
    const message = document.getElementById('animated-textarea').value;
    
    const subject = `Portfolio Contact from ${name}`;
    const body = `
Name: ${name}
Email: ${email}

Message:
${message}

---
Sent from Hafiz Al Sami's Portfolio Website
    `.trim();
    
    const mailtoLink = `mailto:himel.khan1162@anglernook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  });
}

// ===============================================
// PAGE LOADING SYSTEM - PROFESSIONAL
// ===============================================

function initPageLoader() {
  const loader = document.getElementById('page-loader');
  const progressFill = document.getElementById('progress-fill');
  const progressText = document.getElementById('progress-text');
  const loadingStages = document.getElementById('loading-stages');
  
  if (!loader) return;

  let currentProgress = 0;
  let currentStageIndex = 0;
  const stages = loadingStages.querySelectorAll('.stage');
  const totalDuration = 4000; // 4 seconds total loading time
  const updateInterval = 50; // Update every 50ms
  const progressIncrement = 100 / (totalDuration / updateInterval);

  // Start the loading animation
  const progressInterval = setInterval(() => {
    currentProgress += progressIncrement;
    
    // Smooth progress with some randomness for realism
    const displayProgress = Math.min(currentProgress + (Math.random() * 5), 100);
    
    // Update progress bar and text
    progressFill.style.width = `${displayProgress}%`;
    progressText.textContent = `${Math.floor(displayProgress)}%`;
    
    // Update loading stages
    updateLoadingStage(displayProgress);
    
    // Complete loading when we reach 100%
    if (currentProgress >= 100) {
      clearInterval(progressInterval);
      completeLoading();
    }
  }, updateInterval);

  function updateLoadingStage(progress) {
    let newStageIndex = 0;
    
    if (progress >= 20) newStageIndex = 1;
    if (progress >= 40) newStageIndex = 2;
    if (progress >= 70) newStageIndex = 3;
    if (progress >= 95) newStageIndex = 4;
    
    if (newStageIndex !== currentStageIndex) {
      // Remove active class from current stage
      if (stages[currentStageIndex]) {
        stages[currentStageIndex].classList.remove('active');
      }
      
      // Add active class to new stage
      if (stages[newStageIndex]) {
        stages[newStageIndex].classList.add('active');
      }
      
      currentStageIndex = newStageIndex;
    }
  }

  function completeLoading() {
    // Ensure we're at 100%
    progressFill.style.width = '100%';
    progressText.textContent = '100%';
    
    // Show final stage
    stages.forEach(stage => stage.classList.remove('active'));
    if (stages[4]) stages[4].classList.add('active');
    
    // Add completion effects
    setTimeout(() => {
      // Add completion glow effect
      loader.style.background = `
        radial-gradient(circle at center, 
          rgba(0, 212, 255, 0.2) 0%, 
          var(--bg-primary) 50%)
      `;
      
      // Start fade out after a brief pause
      setTimeout(() => {
        hideLoader();
      }, 800);
    }, 500);
  }

  function hideLoader() {
    loader.classList.add('fade-out');
    
    // Remove loader from DOM after animation completes
    setTimeout(() => {
      if (loader.parentNode) {
        loader.parentNode.removeChild(loader);
      }
      
      // Trigger page entrance animations
      triggerPageEntranceAnimations();
    }, 1000);
  }

  function triggerPageEntranceAnimations() {
    // Add entrance animation class to main content
    const mainContent = document.querySelector('.space-background');
    if (mainContent) {
      mainContent.style.opacity = '0';
      mainContent.style.transform = 'translateY(30px)';
      mainContent.style.transition = 'all 1s cubic-bezier(0.23, 1, 0.320, 1)';
      
      setTimeout(() => {
        mainContent.style.opacity = '1';
        mainContent.style.transform = 'translateY(0)';
      }, 100);
    }

    // Animate navigation
    const nav = document.querySelector('nav');
    if (nav) {
      nav.style.opacity = '0';
      nav.style.transform = 'translateY(-20px)';
      nav.style.transition = 'all 0.8s ease-out 0.3s';
      
      setTimeout(() => {
        nav.style.opacity = '1';
        nav.style.transform = 'translateY(0)';
      }, 400);
    }

    // Animate hero section
    const hero = document.querySelector('#hero');
    if (hero) {
      const heroElements = hero.querySelectorAll('h1, .hero-subtitle, .cta-buttons, .stats-container');
      heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(40px)';
        element.style.transition = `all 0.8s cubic-bezier(0.23, 1, 0.320, 1) ${0.6 + index * 0.2}s`;
        
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, 700 + index * 200);
      });
    }
  }

  // Handle page visibility change (if user switches tabs)
  document.addEventListener('visibilitychange', function() {
    if (!document.hidden && loader.classList.contains('fade-out')) {
      // Page became visible after loading completed
      triggerPageEntranceAnimations();
    }
  });

  // Emergency fallback - remove loader after 8 seconds max
  setTimeout(() => {
    if (loader && !loader.classList.contains('fade-out')) {
      console.warn('Loading took too long, forcing completion');
      completeLoading();
    }
  }, 8000);
}

// ===============================================
// ENHANCED LOADING EFFECTS
// ===============================================

// Add loading awareness to other components
class LoadingAwareComponent {
  constructor() {
    this.isLoading = true;
    this.loadingComplete = false;
    
    // Listen for loading completion
    this.waitForLoadingComplete();
  }

  waitForLoadingComplete() {
    const checkLoader = () => {
      const loader = document.getElementById('page-loader');
      if (!loader || loader.classList.contains('fade-out')) {
        this.onLoadingComplete();
      } else {
        setTimeout(checkLoader, 100);
      }
    };
    
    setTimeout(checkLoader, 1000);
  }

  onLoadingComplete() {
    this.isLoading = false;
    this.loadingComplete = true;
    
    // Override this method in subclasses
    this.initPostLoadingAnimations();
  }

  initPostLoadingAnimations() {
    // Default implementation - can be overridden
    console.log('Loading complete, initializing enhanced animations');
  }
}

// Performance optimizations for loading
function optimizeLoadingPerformance() {
  // Preload critical images
  const criticalImages = [
    // Add your critical image URLs here
  ];

  criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  // Preload fonts
  const fonts = [
    'Orbitron',
    'Rajdhani', 
    'Space Grotesk',
    'Exo 2'
  ];

  fonts.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', function() {
  optimizeLoadingPerformance();
});

// DISABLED: Additional scroll protection - was causing modal scroll issues
/*
// Additional scroll protection - run immediately
(function() {
  // Force immediate scroll to top
  window.scrollTo(0, 0);
  
  // Prevent any scroll during early loading
  let scrollBlocked = true;
  
  function blockScroll(e) {
    if (scrollBlocked) {
      e.preventDefault();
      e.stopPropagation();
      window.scrollTo(0, 0);
      return false;
    }
  }
  
  // Block scroll events temporarily
  window.addEventListener('scroll', blockScroll, { passive: false });
  window.addEventListener('wheel', blockScroll, { passive: false });
  window.addEventListener('touchmove', blockScroll, { passive: false });
  
  // Remove scroll blocking after page is fully loaded
  setTimeout(() => {
    scrollBlocked = false;
    window.removeEventListener('scroll', blockScroll);
    window.removeEventListener('wheel', blockScroll);
    window.removeEventListener('touchmove', blockScroll);
  }, 2000); // Give enough time for page loader to complete
  
  // Override any hash navigation on load
  if (window.location.hash) {
    // Clear the hash without triggering navigation
    history.replaceState(null, null, window.location.pathname + window.location.search);
    window.scrollTo(0, 0);
  }
})();
*/

// ===============================================
// RANDOMIZED PARTICLE SYSTEM - ERROR-FREE
// ===============================================

function initRandomizedParticles() {
  // Create truly randomized particle positions for each section
  const sections = document.querySelectorAll('section');
  
  sections.forEach((section, sectionIndex) => {
    // Generate random positions and colors for this specific section
    const particleData = generateRandomParticleData(sectionIndex);
    
    // Apply randomized particle background via CSS custom properties
    section.style.setProperty('--particle-1-x', `${particleData.positions[0].x}%`);
    section.style.setProperty('--particle-1-y', `${particleData.positions[0].y}%`);
    section.style.setProperty('--particle-2-x', `${particleData.positions[1].x}%`);
    section.style.setProperty('--particle-2-y', `${particleData.positions[1].y}%`);
    section.style.setProperty('--particle-3-x', `${particleData.positions[2].x}%`);
    section.style.setProperty('--particle-3-y', `${particleData.positions[2].y}%`);
    section.style.setProperty('--particle-4-x', `${particleData.positions[3].x}%`);
    section.style.setProperty('--particle-4-y', `${particleData.positions[3].y}%`);
    
    // Randomize animation delay and duration
    const animationDelay = Math.random() * 30; // 0-30 seconds
    const animationDuration = 90 + Math.random() * 60; // 90-150 seconds
    
    section.style.setProperty('--particle-delay', `${animationDelay}s`);
    section.style.setProperty('--particle-duration', `${animationDuration}s`);
  });
  
  // Re-randomize particles every 2 minutes to keep them dynamic
  setInterval(() => {
    rerandomizeParticles();
  }, 120000); // 2 minutes
}

function generateRandomParticleData(sectionIndex) {
  // Create seed based on section index for consistent but varied patterns
  const seed = sectionIndex * 12345;
  
  const positions = [];
  const colors = [
    'rgba(0, 212, 255, 0.25)', // Blue
    'rgba(255, 140, 0, 0.2)',  // Orange  
    'rgba(78, 205, 196, 0.22)', // Teal
    'rgba(255, 69, 0, 0.18)'   // Red-orange
  ];
  
  // Generate 4 random positions with minimum distance between them
  for (let i = 0; i < 4; i++) {
    let x, y, attempts = 0;
    let validPosition = false;
    
    do {
      x = 10 + Math.random() * 80; // 10% to 90% to avoid edges
      y = 10 + Math.random() * 80;
      
      // Check minimum distance from other particles
      validPosition = true;
      for (let j = 0; j < positions.length; j++) {
        const distance = Math.sqrt(
          Math.pow(x - positions[j].x, 2) + 
          Math.pow(y - positions[j].y, 2)
        );
        if (distance < 25) { // Minimum 25% distance
          validPosition = false;
          break;
        }
      }
      
      attempts++;
    } while (!validPosition && attempts < 50);
    
    positions.push({ 
      x: Math.round(x), 
      y: Math.round(y),
      color: colors[i % colors.length]
    });
  }
  
  return { positions };
}

function rerandomizeParticles() {
  const sections = document.querySelectorAll('section');
  
  sections.forEach((section, sectionIndex) => {
    // Generate new random positions
    const particleData = generateRandomParticleData(sectionIndex + Date.now());
    
    // Smoothly transition to new positions
    section.style.transition = 'all 3s ease-in-out';
    
    setTimeout(() => {
      section.style.setProperty('--particle-1-x', `${particleData.positions[0].x}%`);
      section.style.setProperty('--particle-1-y', `${particleData.positions[0].y}%`);
      section.style.setProperty('--particle-2-x', `${particleData.positions[1].x}%`);
      section.style.setProperty('--particle-2-y', `${particleData.positions[1].y}%`);
      section.style.setProperty('--particle-3-x', `${particleData.positions[2].x}%`);
      section.style.setProperty('--particle-3-y', `${particleData.positions[2].y}%`);
      section.style.setProperty('--particle-4-x', `${particleData.positions[3].x}%`);
      section.style.setProperty('--particle-4-y', `${particleData.positions[3].y}%`);
      
      // Reset transition after update
      setTimeout(() => {
        section.style.transition = '';
      }, 3100);
    }, 100);
  });
}

// Mobile Menu Functionality
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  if (!hamburger || !navMenu) return;
  
  // Toggle mobile menu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  
  // Close menu when clicking on nav links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
  
  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}
