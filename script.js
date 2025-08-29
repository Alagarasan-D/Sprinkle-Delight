// Application data from JSON
const APP_DATA = {
  targetUrl: "https://sprinkle-delight.netlify.app/",
  loadingMessages: [
    {range: [0, 25], message: "Mixing the ingredients..."},
    {range: [25, 50], message: "Adding the sprinkles..."},
    {range: [50, 75], message: "Baking to perfection..."},
    {range: [75, 95], message: "Almost ready to serve..."},
    {range: [95, 100], message: "Preparing your sweet experience..."}
  ],
  brandColors: {
    primary: "#FF6B9D",
    secondary: "#4ECDC4", 
    accent: "#FFE066",
    success: "#95E1D3",
    background: "#F8F3FF"
  },
  networkSpeeds: {
    fast: {duration: 3000, label: "Fast"},
    medium: {duration: 5000, label: "Good"}, 
    slow: {duration: 8000, label: "Slow"}
  },
  animations: {
    sprinkleCount: 50,
    fallSpeed: "3s",
    pulseSpeed: "2s"
  }
};

// Global state
let loadingState = {
  progress: 0,
  isLoading: true,
  currentMessage: "",
  networkSpeed: "medium",
  startTime: Date.now(),
  loadingInterval: null,
  fallbackTimer: null,
  hasError: false
};

// DOM elements
const elements = {
  percentageValue: null,
  progressFill: null,
  statusMessage: null,
  networkIndicator: null,
  networkLabel: null,
  cancelButton: null,
  errorOverlay: null,
  retryButton: null,
  screenReaderUpdates: null,
  sprinklesContainer: null
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeElements();
  setupEventListeners();
  detectNetworkSpeed();
  createSprinkles();
  startLoading();
  setupFallbackTimer();
  announceToScreenReader("Loading Sprinkle-Delight website");
});

// Initialize DOM element references
function initializeElements() {
  elements.percentageValue = document.querySelector('.percentage-value');
  elements.progressFill = document.querySelector('.progress-fill');
  elements.statusMessage = document.querySelector('.status-message');
  elements.networkIndicator = document.querySelector('.network-indicator');
  elements.networkLabel = document.querySelector('.network-label');
  elements.cancelButton = document.getElementById('cancelButton');
  elements.errorOverlay = document.getElementById('errorOverlay');
  elements.retryButton = document.getElementById('retryButton');
  elements.screenReaderUpdates = document.getElementById('screenReaderUpdates');
  elements.sprinklesContainer = document.querySelector('.sprinkles-container');
}

// Setup event listeners
function setupEventListeners() {
  // Cancel button
  elements.cancelButton.addEventListener('click', handleCancel);
  
  // Retry button
  elements.retryButton.addEventListener('click', handleRetry);
  
  // Keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && loadingState.isLoading) {
      handleCancel();
    }
    if (e.key === 'Enter' && !loadingState.isLoading && loadingState.hasError) {
      handleRetry();
    }
  });
  
  // Handle browser back/forward
  window.addEventListener('beforeunload', function() {
    if (loadingState.loadingInterval) {
      clearInterval(loadingState.loadingInterval);
    }
    if (loadingState.fallbackTimer) {
      clearTimeout(loadingState.fallbackTimer);
    }
  });
  
  // Handle visibility change
  document.addEventListener('visibilitychange', function() {
    if (document.hidden && loadingState.isLoading) {
      // Pause animations for performance
      pauseAnimations();
    } else if (!document.hidden && loadingState.isLoading) {
      // Resume animations
      resumeAnimations();
    }
  });
}

// Simulate network speed detection
function detectNetworkSpeed() {
  // Simulate network detection based on random or connection type
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  let speedKey = "medium"; // default
  
  if (connection) {
    const effectiveType = connection.effectiveType;
    if (effectiveType === '4g' || effectiveType === '3g') {
      speedKey = Math.random() > 0.3 ? "fast" : "medium";
    } else if (effectiveType === '2g' || effectiveType === 'slow-2g') {
      speedKey = "slow";
    }
  } else {
    // Random simulation if no connection API
    const rand = Math.random();
    if (rand > 0.7) speedKey = "fast";
    else if (rand < 0.3) speedKey = "slow";
  }
  
  loadingState.networkSpeed = speedKey;
  updateNetworkStatus(APP_DATA.networkSpeeds[speedKey].label);
}

// Update network status display
function updateNetworkStatus(label) {
  if (elements.networkLabel) {
    elements.networkLabel.textContent = label + " Connection";
  }
  
  if (elements.networkIndicator) {
    elements.networkIndicator.className = 'network-indicator';
    if (loadingState.networkSpeed === 'slow') {
      elements.networkIndicator.classList.add('slow');
    } else if (loadingState.hasError) {
      elements.networkIndicator.classList.add('error');
    }
  }
}

// Create animated sprinkles
function createSprinkles() {
  if (!elements.sprinklesContainer) return;
  
  // Check if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }
  
  const colors = [
    APP_DATA.brandColors.primary,
    APP_DATA.brandColors.secondary,
    APP_DATA.brandColors.accent,
    APP_DATA.brandColors.success
  ];
  
  const shapes = ['circle', 'rect', 'star'];
  
  for (let i = 0; i < APP_DATA.animations.sprinkleCount; i++) {
    const sprinkle = document.createElement('div');
    sprinkle.className = `sprinkle ${shapes[Math.floor(Math.random() * shapes.length)]}`;
    
    // Random color
    sprinkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Random position and timing
    sprinkle.style.left = Math.random() * 100 + '%';
    sprinkle.style.animationDelay = Math.random() * 3 + 's';
    sprinkle.style.animationDuration = (Math.random() * 2 + 2) + 's';
    
    elements.sprinklesContainer.appendChild(sprinkle);
  }
}

// Start the loading process
function startLoading() {
  const duration = APP_DATA.networkSpeeds[loadingState.networkSpeed].duration;
  const updateInterval = 50; // Update every 50ms for smooth animation
  const increment = 100 / (duration / updateInterval);
  
  loadingState.loadingInterval = setInterval(function() {
    if (!loadingState.isLoading) {
      clearInterval(loadingState.loadingInterval);
      return;
    }
    
    loadingState.progress += increment;
    
    // Ensure we don't exceed 100%
    if (loadingState.progress >= 100) {
      loadingState.progress = 100;
      clearInterval(loadingState.loadingInterval);
      completeLoading();
    }
    
    updateLoadingDisplay();
  }, updateInterval);
}

// Update loading display elements
function updateLoadingDisplay() {
  const progress = Math.floor(loadingState.progress);
  
  // Update percentage
  if (elements.percentageValue) {
    elements.percentageValue.textContent = progress;
  }
  
  // Update progress bar
  if (elements.progressFill) {
    elements.progressFill.style.width = progress + '%';
  }
  
  // Update status message
  const message = getStatusMessage(progress);
  if (message !== loadingState.currentMessage) {
    loadingState.currentMessage = message;
    if (elements.statusMessage) {
      elements.statusMessage.style.opacity = '0';
      setTimeout(() => {
        elements.statusMessage.textContent = message;
        elements.statusMessage.style.opacity = '1';
      }, 150);
    }
    
    // Announce progress to screen readers at key milestones
    if (progress % 25 === 0 && progress > 0) {
      announceToScreenReader(`Loading ${progress}% complete. ${message}`);
    }
  }
}

// Get status message based on progress
function getStatusMessage(progress) {
  for (const messageData of APP_DATA.loadingMessages) {
    const [min, max] = messageData.range;
    if (progress >= min && progress < max) {
      return messageData.message;
    }
  }
  return APP_DATA.loadingMessages[APP_DATA.loadingMessages.length - 1].message;
}

// Complete loading and redirect
function completeLoading() {
  loadingState.isLoading = false;
  announceToScreenReader("Loading complete. Redirecting to Sprinkle-Delight website.");
  
  // Add completion animation
  if (elements.percentageValue) {
    elements.percentageValue.parentElement.style.transform = 'scale(1.1)';
    elements.percentageValue.parentElement.style.transition = 'transform 0.5s ease-out';
  }
  
  // Wait a moment then redirect
  setTimeout(() => {
    redirectToMainSite();
  }, 1000);
}

// Redirect to main site
function redirectToMainSite() {
  try {
    // Clear any existing timers
    if (loadingState.fallbackTimer) {
      clearTimeout(loadingState.fallbackTimer);
    }
    
    // Try to redirect
    window.location.href = APP_DATA.targetUrl;
  } catch (error) {
    console.error('Redirect failed:', error);
    showError('Failed to redirect to main site. Please click the link below.');
  }
}

// Handle cancel/skip
function handleCancel() {
  loadingState.isLoading = false;
  if (loadingState.loadingInterval) {
    clearInterval(loadingState.loadingInterval);
  }
  announceToScreenReader("Loading cancelled. Redirecting to main site.");
  redirectToMainSite();
}

// Handle retry
function handleRetry() {
  loadingState.hasError = false;
  loadingState.isLoading = true;
  loadingState.progress = 0;
  
  hideError();
  detectNetworkSpeed();
  startLoading();
  setupFallbackTimer();
  announceToScreenReader("Retrying loading process.");
}

// Setup fallback timer (max 10 seconds)
function setupFallbackTimer() {
  loadingState.fallbackTimer = setTimeout(() => {
    if (loadingState.isLoading) {
      console.warn('Loading timeout reached, redirecting...');
      redirectToMainSite();
    }
  }, 10000);
}

// Show error overlay
function showError(message) {
  loadingState.hasError = true;
  loadingState.isLoading = false;
  
  if (loadingState.loadingInterval) {
    clearInterval(loadingState.loadingInterval);
  }
  
  // Update network status to show error
  updateNetworkStatus('Connection Error');
  
  // Show error overlay
  if (elements.errorOverlay) {
    const errorMessage = elements.errorOverlay.querySelector('.error-message');
    if (errorMessage) {
      errorMessage.textContent = message;
    }
    elements.errorOverlay.classList.remove('hidden');
  }
  
  announceToScreenReader('Error occurred: ' + message);
  
  // Focus the retry button for keyboard users
  setTimeout(() => {
    if (elements.retryButton) {
      elements.retryButton.focus();
    }
  }, 100);
}

// Hide error overlay
function hideError() {
  if (elements.errorOverlay) {
    elements.errorOverlay.classList.add('hidden');
  }
  updateNetworkStatus(APP_DATA.networkSpeeds[loadingState.networkSpeed].label);
}

// Announce to screen readers
function announceToScreenReader(message) {
  if (elements.screenReaderUpdates) {
    elements.screenReaderUpdates.textContent = message;
    
    // Clear after a delay to avoid accumulation
    setTimeout(() => {
      elements.screenReaderUpdates.textContent = '';
    }, 1000);
  }
}

// Pause animations for performance
function pauseAnimations() {
  if (elements.sprinklesContainer) {
    elements.sprinklesContainer.style.animationPlayState = 'paused';
    const sprinkles = elements.sprinklesContainer.querySelectorAll('.sprinkle');
    sprinkles.forEach(sprinkle => {
      sprinkle.style.animationPlayState = 'paused';
    });
  }
}

// Resume animations
function resumeAnimations() {
  if (elements.sprinklesContainer) {
    elements.sprinklesContainer.style.animationPlayState = 'running';
    const sprinkles = elements.sprinklesContainer.querySelectorAll('.sprinkle');
    sprinkles.forEach(sprinkle => {
      sprinkle.style.animationPlayState = 'running';
    });
  }
}

// Handle network errors
window.addEventListener('online', function() {
  if (loadingState.hasError) {
    announceToScreenReader('Connection restored');
    updateNetworkStatus(APP_DATA.networkSpeeds[loadingState.networkSpeed].label);
  }
});

window.addEventListener('offline', function() {
  showError('No internet connection. Please check your network and try again.');
});

// Error handling for unexpected errors
window.addEventListener('error', function(e) {
  console.error('JavaScript error:', e.error);
  if (loadingState.isLoading) {
    showError('An unexpected error occurred. Please try again.');
  }
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
  console.error('Unhandled promise rejection:', e.reason);
  if (loadingState.isLoading) {
    showError('Network request failed. Please check your connection and try again.');
  }
});

// Preconnect to target site for faster loading
function preconnectToTarget() {
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = APP_DATA.targetUrl;
  document.head.appendChild(link);
  
  // Also add dns-prefetch as fallback
  const dnsLink = document.createElement('link');
  dnsLink.rel = 'dns-prefetch';
  dnsLink.href = APP_DATA.targetUrl;
  document.head.appendChild(dnsLink);
}

// Initialize preconnection
preconnectToTarget();

// Export for debugging (only in development)
if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
  window.loadingDebug = {
    state: loadingState,
    elements: elements,
    completeLoading: completeLoading,
    showError: showError,
    handleRetry: handleRetry
  };
}
