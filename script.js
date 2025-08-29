// Cake data with proper flavor-specific images
const cakes = [
    {
        id: 1,
        name: "Vanilla Cake",
        price: 659,
        mrp: 859,
        image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg",
        category: "classic",
        description: "Classic vanilla sponge cake with vanilla buttercream",
        rating: 4.5,
        orderCount: 127
    },
    {
        id: 2,
        name: "Chocolate Cake",
        price: 800,
        mrp: 1000,
        image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
        category: "chocolate",
        description: "Rich and moist chocolate cake with chocolate ganache",
        rating: 4.8,
        orderCount: 203
    },
    {
        id: 3,
        name: "Blueberry Cake",
        price: 1000,
        mrp: 1200,
        image: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
        category: "fruit",
        description: "Fresh blueberry cake with cream cheese frosting",
        rating: 4.3,
        orderCount: 89
    },
    {
        id: 4,
        name: "Blackcurrant Cake",
        price: 1000,
        mrp: 1200,
        image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg",
        category: "fruit",
        description: "Tangy blackcurrant cake with berry compote",
        rating: 4.2,
        orderCount: 76
    },
    {
        id: 5,
        name: "Choco Truffle Cake",
        price: 1200,
        mrp: 1400,
        image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg",
        category: "chocolate",
        description: "Decadent chocolate truffle cake with dark chocolate",
        rating: 4.9,
        orderCount: 156
    },
    {
        id: 6,
        name: "Red Velvet Cake",
        price: 1100,
        mrp: 1300,
        image:"/images/Red Velvet Cake.jpg" ,
        category: "special",
        description: "Classic red velvet with cream cheese frosting",
        rating: 4.7,
        orderCount: 134
    },
    {
        id: 7,
        name: "White Forest Cake",
        price: 900,
        mrp: 1100,
        image: "/images/White Forest Cake.jpg",

        category: "special",
        description: "White chocolate forest cake with cherries",
        rating: 4.4,
        orderCount: 98
    },
    {
        id: 8,
        name: "Black Forest Cake",
        price: 900,
        mrp: 1100,
        image: "/images/Black Forest Cake.jpg",

        category: "chocolate",
        description: "Traditional black forest with cherries and cream",
        rating: 4.6,
        orderCount: 145
    },
    {
        id: 9,
        name: "Rasmalai Cake",
        price: 1200,
        mrp: 1400,
        image: "images/Rasmalai Cake.jpg",

        category: "special",
        description: "Indian fusion rasmalai flavored cake",
        rating: 4.5,
        orderCount: 67
    },
    {
        id: 10,
        name: "Gulab Jamun Cake",
        price: 1200,
        mrp: 1400,
               image: "images/Gulab Jamun Cake.jpg",

        category: "special",
        description: "Traditional gulab jamun flavored cake",
        rating: 4.3,
        orderCount: 54
    },
    {
        id: 11,
        name: "Strawberry Cake",
        price: 850,
        mrp: 1050,
                image: "images/Strawberry Cake.jpg",

        category: "fruit",
        description: "Fresh strawberry cake with strawberry cream",
        rating: 4.4,
        orderCount: 112
    },
    {
        id: 12,
        name: "Pineapple Cake",
        price: 850,
        mrp: 1050,
                image: "images/Pineapple Cake.jpg",

        category: "fruit",
        description: "Tropical pineapple cake with pineapple chunks",
        rating: 4.2,
        orderCount: 89
    },
    {
        id: 13,
        name: "Butterscotch Cake",
        price: 850,
        mrp: 1050,
                image: "images/Butterscotch Cake.jpg",

        category: "classic",
        description: "Butterscotch flavored cake with caramel sauce",
        rating: 4.1,
        orderCount: 78
    },
    {
        id: 14,
        name: "Rose Milk Cake",
        price: 850,
        mrp: 1050,
              image: "images/Rose Milk Cake.jpg",

        category: "special",
        description: "Delicate rose milk flavored cake",
        rating: 4.0,
        orderCount: 45
    },
    {
        id: 15,
        name: "Mango Cake",
        price: 950,
        mrp: 1150,
              image: "images/Mango Chocolate Cake.jpg",

        category: "fruit",
        description: "Tropical mango cake with fresh mango pulp",
        rating: 4.6,
        orderCount: 93
    },
    {
        id: 16,
        name: "Coffee Cake",
        price: 900,
        mrp: 1100,
                image: "images/Coffee Cake.jpg",

        category: "classic",
        description: "Rich coffee flavored cake with mocha cream",
        rating: 4.3,
        orderCount: 71
    },
    {
        id: 17,
        name: "Lemon Cake",
        price: 800,
        mrp: 1000,
                image: "images/Lemon Cake.jpg",

        category: "fruit",
        description: "Zesty lemon cake with lemon glaze",
        rating: 4.2,
        orderCount: 65
    },
    {
        id: 18,
        name: "Carrot Cake",
        price: 950,
        mrp: 1150,
                image: "images/Carrot Cake.jpg",

        category: "special",
        description: "Moist carrot cake with cream cheese frosting",
        rating: 4.4,
        orderCount: 58
    },
    {
        id: 19,
        name: "Coconut Cake",
        price: 850,
        mrp: 1050,
                image: "images/Coconut Cake.jpg",

        category: "classic",
        description: "Tropical coconut cake with coconut flakes",
        rating: 4.1,
        orderCount: 52
    },
    {
        id: 20,
        name: "Oreo Cake",
        price: 1100,
        mrp: 1300,
              image: "images/Oreo Cake.jpg",

        category: "chocolate",
        description: "Chocolate cake with crushed Oreo cookies",
        rating: 4.7,
        orderCount: 167
    },
      {
        id: 21,
        name: "Oreo Cake",
        price: 900,
        mrp: 1100,
       image: "images/ice-cream-sundae-cake-square-featured-image.jpg",
        category: "chocolate",
        description: "Chocolate cake with crushed Oreo cookies",
        rating: 4.1,
        orderCount: 167
    }
];

// User authentication state
let currentUser = JSON.parse(localStorage.getItem('sprinkleDelightCurrentUser')) || null;
let users = JSON.parse(localStorage.getItem('sprinkleDelightUsers')) || [];

// DOM Elements
const cakesGrid = document.getElementById('cakesGrid');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    displayCakes(cakes);
    setupEventListeners();
    setMinDate();
    updateAuthUI();
    animateCounters();
    initializeTheme();
    loadUserSession();
});

// Load user session on page load
function loadUserSession() {
    const savedUser = localStorage.getItem('sprinkleDelightCurrentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateAuthUI();
    }
}

// Initialize theme
function initializeTheme() {
    const savedTheme = localStorage.getItem('sprinkleDelightTheme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('themeToggle').innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Theme toggle event listener
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
}

// Toggle theme
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('sprinkleDelightTheme', 'light');
    } else {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('sprinkleDelightTheme', 'dark');
    }
}

// Generate star rating HTML
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            starsHTML += '<span class="rating-star">★</span>';
        } else if (i === fullStars && hasHalfStar) {
            starsHTML += '<span class="rating-star">☆</span>';
        } else {
            starsHTML += '<span class="rating-star empty">☆</span>';
        }
    }
    
    return starsHTML;
}

// Display cakes in grid
function displayCakes(cakesToShow) {
    cakesGrid.innerHTML = '';
    cakesToShow.forEach(cake => {
        const cakeCard = createCakeCard(cake);
        cakesGrid.appendChild(cakeCard);
    });
}

// Create cake card element
function createCakeCard(cake) {
    const discountPercentage = Math.round(((cake.mrp - cake.price) / cake.mrp) * 100);
    const card = document.createElement('div');
    card.className = 'cake-card';
    card.innerHTML = `
        <div class="cake-image-container">
            <img src="${cake.image}" alt="${cake.name}" loading="lazy">
            <div class="discount-badge">${discountPercentage}% OFF</div>
        </div>
        <div class="cake-info">
            <h3>${cake.name}</h3>
            <div class="cake-rating">
                <div class="rating-stars">${generateStarRating(cake.rating)}</div>
                <span class="rating-text">${cake.rating} (${cake.orderCount} orders)</span>
            </div>
            <div class="order-count">${cake.orderCount}+ people ordered this</div>
            <p class="cake-description">${cake.description}</p>
            <div class="cake-price">
                <div class="price">
                    <span class="mrp">₹${cake.mrp}</span>
                    <span class="actual-price">₹${cake.price}</span>
                </div>
                <button class="order-btn" onclick="openOrderModal(${cake.id})">Order Now</button>
            </div>
        </div>
    `;
    return card;
}

// Filter cakes by category
function filterCakes(category) {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'all') {
        displayCakes(cakes);
    } else {
        const filteredCakes = cakes.filter(cake => cake.category === category);
        displayCakes(filteredCakes);
    }
}

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Form submissions
    setupFormHandlers();
    
    // Star rating
    setupStarRating();
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Setup form handlers
function setupFormHandlers() {
    // Signup form
    document.getElementById('signupForm').addEventListener('submit', handleSignup);
    
    // Login form
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    
    // Contact form
    document.getElementById('contactForm').addEventListener('submit', handleContact);
    
    // Feedback form
    document.getElementById('feedbackForm').addEventListener('submit', handleFeedback);
    
    // Order form
    document.getElementById('orderForm').addEventListener('submit', handleOrder);
    
    // Edit profile form
    document.getElementById('editProfileForm').addEventListener('submit', handleEditProfile);
}

// Handle signup form submission
function handleSignup(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Validation
    if (data.password !== data.confirmPassword) {
        showErrorMessage('Passwords do not match!');
        return;
    }
    
    if (data.password.length < 6) {
        showErrorMessage('Password must be at least 6 characters long!');
        return;
    }
    
    // Check if user already exists
    const existingUser = users.find(user => user.email === data.email);
    if (existingUser) {
        showErrorMessage('User with this email already exists!');
        return;
    }
    
    // Create new user
    const newUser = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        password: data.password
    };
    
    users.push(newUser);
    localStorage.setItem('sprinkleDelightUsers', JSON.stringify(users));
    
    showSuccessMessage('Account created successfully! You can now login.');
    closeModal('signupModal');
    e.target.reset();
}

// Handle login form submission
function handleLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Find user in stored users
    const user = users.find(u => u.email === data.email && u.password === data.password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('sprinkleDelightCurrentUser', JSON.stringify(user));
        updateAuthUI();
        closeModal('loginModal');
        e.target.reset();
        
        showSuccessMessage('Welcome back, ' + user.name + '!');
    } else {
        showErrorMessage('Invalid email or password!');
    }
}

// Update authentication UI
function updateAuthUI() {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const profileBtn = document.getElementById('profileBtn');
    const profileName = document.getElementById('profileName');
    
    if (currentUser) {
        loginBtn.style.display = 'none';
        signupBtn.style.display = 'none';
        profileBtn.style.display = 'flex';
        profileName.textContent = currentUser.name;
        updateProfileModal();
    } else {
        loginBtn.style.display = 'inline-block';
        signupBtn.style.display = 'inline-block';
        profileBtn.style.display = 'none';
    }
}

// Update profile modal with current user data
function updateProfileModal() {
    if (!currentUser) return;
    
    document.getElementById('profileDisplayName').textContent = currentUser.name;
    document.getElementById('profileDisplayEmail').textContent = currentUser.email;
    document.getElementById('profileInfoName').textContent = currentUser.name;
    document.getElementById('profileInfoEmail').textContent = currentUser.email;
    document.getElementById('profileInfoPhone').textContent = currentUser.phone;
    document.getElementById('profileInfoAddress').textContent = currentUser.address;
}

// Show edit profile form
function showEditProfile() {
    if (!currentUser) return;
    
    document.getElementById('editName').value = currentUser.name;
    document.getElementById('editEmail').value = currentUser.email;
    document.getElementById('editPhone').value = currentUser.phone;
    document.getElementById('editAddress').value = currentUser.address;
    
    document.getElementById('profileView').style.display = 'none';
    document.getElementById('editProfileView').style.display = 'block';
}

// Cancel edit profile
function cancelEdit() {
    document.getElementById('profileView').style.display = 'block';
    document.getElementById('editProfileView').style.display = 'none';
}

// Handle edit profile form submission
function handleEditProfile(e) {
    e.preventDefault();
    
    if (!currentUser) return;
    
    const updatedUser = {
        name: document.getElementById('editName').value,
        email: document.getElementById('editEmail').value,
        phone: document.getElementById('editPhone').value,
        address: document.getElementById('editAddress').value,
        password: currentUser.password
    };
    
    // Update user in users array
    const userIndex = users.findIndex(user => user.email === currentUser.email);
    if (userIndex !== -1) {
        users[userIndex] = updatedUser;
        localStorage.setItem('sprinkleDelightUsers', JSON.stringify(users));
    }
    
    // Update current user
    currentUser = updatedUser;
    localStorage.setItem('sprinkleDelightCurrentUser', JSON.stringify(updatedUser));
    
    updateAuthUI();
    cancelEdit();
    showSuccessMessage('Profile updated successfully!');
}

// Logout function
function logout() {
    currentUser = null;
    localStorage.removeItem('sprinkleDelightCurrentUser');
    updateAuthUI();
    closeModal('profileModal');
    showSuccessMessage('Logged out successfully!');
}

// Show success message (non-intrusive)
function showSuccessMessage(message) {
    createNotification(message, 'success');
}

// Show error message
function showErrorMessage(message) {
    createNotification(message, 'error');
}

// Create notification
function createNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}-notification`;
    
    const icon = type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';
    const bgColor = type === 'success' ? 
        'linear-gradient(135deg, #4CAF50, #45a049)' : 
        'linear-gradient(135deg, #f44336, #d32f2f)';
    
    notification.innerHTML = `
        <i class="${icon}"></i>
        <span>${message}</span>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 500;
        animation: slideInRight 0.3s ease;
        max-width: 350px;
        font-size: 14px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Handle contact form submission
function handleContact(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    showSuccessMessage('Message sent successfully! We will get back to you soon.');
    e.target.reset();
}

// Handle feedback form submission
function handleFeedback(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Get rating
    const activeStars = document.querySelectorAll('.star.active');
    
    showSuccessMessage('Thank you for your feedback!');
    closeModal('feedbackModal');
    e.target.reset();
    resetStarRating();
}

// Handle order form submission
function handleOrder(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Get cake details
    const cakeId = parseInt(document.getElementById('orderModal').dataset.cakeId);
    const cake = cakes.find(c => c.id === cakeId);
    
    // Calculate total
    const quantity = parseInt(data.quantity);
    const total = cake.price * quantity;
    
    // Create WhatsApp message
    const message = `🧁 *New Cake Order - Sprinkle Delight*

*Cake Details:*
🎂 ${cake.name}
💰 ₹${cake.price} x ${quantity} = ₹${total}

*Customer Details:*
👤 ${data.customerName}
📱 ${data.customerPhone}
📧 ${data.customerEmail}

*Delivery Details:*
📍 ${data.deliveryAddress}
📅 ${data.deliveryDate}
⏰ ${data.deliveryTime}

${data.specialInstructions ? `*Special Instructions:*\n${data.specialInstructions}` : ''}

Please confirm this order. Thank you! 🙏`;

    // Open WhatsApp
    const whatsappUrl = `https://wa.me/917094930981?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Close modal and reset form
    closeModal('orderModal');
    e.target.reset();
    
    showSuccessMessage('Order details sent to WhatsApp! Please wait for confirmation.');
}

// Setup star rating functionality
function setupStarRating() {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
    });
}

// Reset star rating
function resetStarRating() {
    document.querySelectorAll('.star').forEach(star => {
        star.classList.remove('active');
    });
}

// Toggle password visibility
function togglePassword(button) {
    const input = button.previousElementSibling;
    const icon = button.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.className = 'fas fa-eye-slash';
    } else {
        input.type = 'password';
        icon.className = 'fas fa-eye';
    }
}

// Modal functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Open order modal with cake details
function openOrderModal(cakeId) {
    // Check if user is logged in
    if (!currentUser) {
        showErrorMessage('Please login first to place an order!');
        openModal('loginModal');
        return;
    }
    
    const cake = cakes.find(c => c.id === cakeId);
    const modal = document.getElementById('orderModal');
    const orderDetails = document.getElementById('orderDetails');
    
    orderDetails.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
            <img src="${cake.image}" alt="${cake.name}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 10px; margin-bottom: 15px;">
            <h3 style="color: #333; margin-bottom: 10px;">${cake.name}</h3>
            <div class="price" style="margin-bottom: 10px;">
                <span class="mrp" style="text-decoration: line-through; color: #999;">₹${cake.mrp}</span>
                <span class="actual-price" style="color: #e91e63; font-weight: bold; font-size: 1.2rem; margin-left: 10px;">₹${cake.price}</span>
            </div>
            <p style="color: #666; font-size: 0.9rem;">${cake.description}</p>
        </div>
    `;
    
    modal.dataset.cakeId = cakeId;
    openModal('orderModal');
}

// Set minimum date for delivery
function setMinDate() {
    const minDate = new Date();
    minDate.setHours(minDate.getHours() + 12); // 12 hours from now
    const dateInput = document.querySelector('input[name="deliveryDate"]');
    if (dateInput) {
        dateInput.min = minDate.toISOString().split('T')[0];
    }
}

// Animate counters
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseFloat(counter.dataset.target);
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    
                    if (target === 99.9) {
                        counter.textContent = current.toFixed(1) + '%';
                    } else if (target >= 100) {
                        counter.textContent = Math.floor(current) + '+';
                    } else {
                        counter.textContent = Math.floor(current) + '+';
                    }
                }, 16);
                
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

// Add loading animation and intersection observer
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Observe elements for animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.cake-card, .featured-card, .feature, .stat-card, .service-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

});
