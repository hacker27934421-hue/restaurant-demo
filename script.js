// ============================================
// RESTAURANT CONFIGURATION (EDIT HERE)
// ============================================

const RESTAURANT_CONFIG = {
    name: "Flavor Fusion",
    tagline: "Delicious Food, Direct Orders, No Middleman",
    description: "Serving families since 2010 with authentic recipes and fresh ingredients.",
    phone: "+91 9876543210",
    whatsapp: "+91 9876543210",
    email: "contact@flavorfusion.com",
    address: "123 Main Street, Food City, FC 123456",
    openingTime: "10:00",
    closingTime: "22:00",
    workingDays: "Monday - Sunday",
    primaryColor: "#FF6B6B",
    secondaryColor: "#4ECDC4",
    accentColor: "#FFD166",
    facebook: "https://facebook.com/flavorfusion",
    instagram: "https://instagram.com/flavorfusion",
    twitter: "https://twitter.com/flavorfusion"
};

// ============================================
// MENU DATA (EDIT HERE - ADD/REMOVE ITEMS)
// ============================================

const MENU_DATA = [
    // VEG ITEMS
    { category: "veg", name: "Paneer Butter Masala", price: 280, description: "Creamy tomato gravy with soft cottage cheese cubes", tags: ["chef"] },
    { category: "veg", name: "Veg Biryani", price: 220, description: "Fragrant basmati rice with mixed vegetables and spices", tags: [] },
    { category: "veg", name: "Margherita Pizza", price: 250, description: "Classic pizza with tomato sauce and mozzarella cheese", tags: ["popular"] },
    { category: "veg", name: "Vegetable Noodles", price: 180, description: "Stir-fried noodles with fresh seasonal vegetables", tags: [] },
    { category: "veg", name: "Garlic Bread", price: 120, description: "Toasted bread with garlic butter and herbs", tags: [] },
    { category: "veg", name: "Paneer Tikka", price: 260, description: "Marinated cottage cheese grilled to perfection", tags: ["popular"] },
    { category: "veg", name: "Dal Makhani", price: 240, description: "Creamy black lentils simmered overnight", tags: [] },
    
    // NON-VEG ITEMS
    { category: "nonveg", name: "Butter Chicken", price: 320, description: "Tender chicken in rich buttery tomato gravy", tags: ["chef"] },
    { category: "nonveg", name: "Chicken Biryani", price: 280, description: "Fragrant basmati rice with succulent chicken pieces", tags: ["popular"] },
    { category: "nonveg", name: "Fish & Chips", price: 350, description: "Crispy fried fish with french fries and tartar sauce", tags: [] },
    { category: "nonveg", name: "Chicken Burger", price: 200, description: "Juicy chicken patty with lettuce, tomato and mayo", tags: [] },
    { category: "nonveg", name: "Mutton Rogan Josh", price: 380, description: "Traditional Kashmiri mutton curry with rich spices", tags: [] },
    { category: "nonveg", name: "Chicken Tikka Masala", price: 300, description: "Grilled chicken in creamy tomato sauce", tags: ["popular"] },
    
    // DRINKS
    { category: "drinks", name: "Fresh Lime Soda", price: 80, description: "Refreshing soda with fresh lime juice and mint", tags: [] },
    { category: "drinks", name: "Mango Shake", price: 120, description: "Thick and creamy shake made with fresh mangoes", tags: ["popular"] },
    { category: "drinks", name: "Cold Coffee", price: 150, description: "Chilled coffee with cream and ice cream topping", tags: [] },
    { category: "drinks", name: "Soft Drinks", price: 60, description: "Coke, Pepsi, Sprite, Fanta (300ml bottle)", tags: [] },
    { category: "drinks", name: "Mineral Water", price: 30, description: "1 litre bottled mineral water", tags: [] },
    
    // APPETIZERS
    { category: "appetizers", name: "Spring Rolls", price: 150, description: "Crispy vegetable spring rolls with sauce", tags: ["new"] },
    { category: "appetizers", name: "Chicken Wings", price: 220, description: "Spicy fried chicken wings", tags: ["spicy"] },
    
    // DESSERTS
    { category: "desserts", name: "Chocolate Brownie", price: 120, description: "Warm chocolate brownie with ice cream", tags: ["popular"] },
    { category: "desserts", name: "Gulab Jamun", price: 80, description: "Traditional Indian sweet in sugar syrup", tags: [] }
];

// ============================================
// GALLERY DATA (EDIT HERE)
// ============================================

const GALLERY_DATA = [
    { title: "Restaurant Interior", description: "Our comfortable dining area", image: "" },
    { title: "Special Dish", description: "Chef's special creation", image: "" },
    { title: "Happy Customers", description: "Family enjoying meal", image: "" },
    { title: "Kitchen Area", description: "Our hygienic kitchen", image: "" },
    { title: "Birthday Celebration", description: "Special birthday setup", image: "" },
    { title: "Fresh Ingredients", description: "Daily fresh vegetables", image: "" }
];

// ============================================
// BRANCHES DATA (EDIT HERE)
// ============================================

const BRANCHES_DATA = [
    { name: "Main Branch", phone: "+91 9876543210", address: "123 Main Street, Food City, FC 123456", timings: "10 AM - 10 PM", manager: "Rajesh Kumar" },
    { name: "Downtown Branch", phone: "+91 9876543211", address: "456 Downtown Road, Food City", timings: "10 AM - 11 PM", manager: "Priya Sharma" }
];

// ============================================
// MAIN INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile navigation
    initMobileNavigation();
    
    // Apply restaurant configuration
    applyRestaurantConfig();
    
    // Initialize chatbot
    initChatbot();
    
    // Load specific page content
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'menu.html' || currentPage === '') {
        initMenuPage();
    } else if (currentPage === 'about.html') {
        initGalleryPage();
    } else if (currentPage === 'contact.html') {
        initContactPage();
    }
});

// ============================================
// MOBILE NAVIGATION
// ============================================

function initMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (hamburger && navMenu && navMenu.classList.contains('active')) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
    });
}

// ============================================
// APPLY RESTAURANT CONFIGURATION
// ============================================

function applyRestaurantConfig() {
    const config = RESTAURANT_CONFIG;
    
    // Update restaurant name
    document.querySelectorAll('.logo-text, .hero-title, .footer h3, .page-title').forEach(el => {
        el.textContent = config.name;
    });
    
    // Update tagline
    document.querySelectorAll('.hero-tagline').forEach(el => {
        el.textContent = config.tagline;
    });
    
    // Update description
    document.querySelectorAll('.hero-description').forEach(el => {
        el.textContent = config.description;
    });
    
    // Update phone numbers
    document.querySelectorAll('a[href^="tel:"]').forEach(el => {
        el.href = `tel:${config.phone}`;
        el.textContent = config.phone;
    });
    
    // Update WhatsApp links
    document.querySelectorAll('a[href^="https://wa.me/"]').forEach(el => {
        const phone = config.whatsapp.replace(/[^0-9]/g, '');
        el.href = `https://wa.me/${phone}`;
        el.textContent = config.whatsapp;
    });
    
    // Update address
    document.querySelectorAll('.footer-contact p, .contact-text p, address').forEach(el => {
        if (el.textContent.includes('123 Main Street') || el.textContent.includes('Main Street')) {
            el.textContent = config.address;
        }
    });
    
    // Update opening hours
    const hoursText = `${formatTime(config.openingTime)} – ${formatTime(config.closingTime)}`;
    document.querySelectorAll('.footer-info p, .contact-item p').forEach(el => {
        if (el.textContent.includes('10 AM') || el.textContent.includes('Open:')) {
            el.innerHTML = `<i class="fas fa-clock"></i> Open: ${hoursText} (${config.workingDays})`;
        }
    });
    
    // Update colors
    document.documentElement.style.setProperty('--primary-color', config.primaryColor);
    document.documentElement.style.setProperty('--secondary-color', config.secondaryColor);
    document.documentElement.style.setProperty('--accent-color', config.accentColor);
    
    // Update meta theme color
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
        metaTheme.setAttribute('content', config.primaryColor);
    }
}

function formatTime(timeString) {
    if (!timeString) return '10 AM';
    
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    
    return `${hour12}:${minutes || '00'} ${ampm}`;
}

// ============================================
// MENU PAGE FUNCTIONS
// ============================================

function initMenuPage() {
    createCategoryFilterButtons();
    displayMenuItems();
    
    // Initialize filter functionality
    initMenuFilter();
}

function createCategoryFilterButtons() {
    const categoryContainer = document.querySelector('.category-buttons');
    if (!categoryContainer) return;
    
    // Get unique categories from menu data
    const categories = ['all'];
    MENU_DATA.forEach(item => {
        if (!categories.includes(item.category)) {
            categories.push(item.category);
        }
    });
    
    // Create filter buttons
    categoryContainer.innerHTML = '';
    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'category-btn';
        button.dataset.category = category;
        
        // Format button text
        let buttonText = category;
        if (category === 'all') buttonText = 'All Items';
        else if (category === 'veg') buttonText = 'Veg Specials';
        else if (category === 'nonveg') buttonText = 'Non-Veg Delights';
        else if (category === 'drinks') buttonText = 'Drinks & Beverages';
        else if (category === 'appetizers') buttonText = 'Appetizers';
        else if (category === 'desserts') buttonText = 'Desserts';
        else buttonText = category.charAt(0).toUpperCase() + category.slice(1);
        
        button.textContent = buttonText;
        
        // Set first button as active
        if (category === 'all') {
            button.classList.add('active');
        }
        
        categoryContainer.appendChild(button);
    });
}

function displayMenuItems(filterCategory = 'all') {
    const menuContainer = document.querySelector('.menu-items .container');
    if (!menuContainer) return;
    
    // Clear existing content
    menuContainer.innerHTML = '';
    
    // Filter items by category
    const filteredItems = filterCategory === 'all' 
        ? MENU_DATA 
        : MENU_DATA.filter(item => item.category === filterCategory);
    
    if (filteredItems.length === 0) {
        menuContainer.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; width: 100%;">
                <i class="fas fa-utensils" style="font-size: 3rem; color: #ccc; margin-bottom: 15px;"></i>
                <h3>No items found in this category</h3>
                <p>Please select another category</p>
            </div>
        `;
        return;
    }
    
    // Group items by category
    const groupedItems = {};
    filteredItems.forEach(item => {
        if (!groupedItems[item.category]) {
            groupedItems[item.category] = [];
        }
        groupedItems[item.category].push(item);
    });
    
    // Create HTML for each category
    Object.keys(groupedItems).forEach(category => {
        const items = groupedItems[category];
        const categoryId = category.replace(/\s+/g, '-');
        
        // Get category title
        let categoryTitle = category;
        if (category === 'veg') categoryTitle = 'Veg Specials';
        else if (category === 'nonveg') categoryTitle = 'Non-Veg Delights';
        else if (category === 'drinks') categoryTitle = 'Drinks & Beverages';
        else if (category === 'appetizers') categoryTitle = 'Appetizers';
        else if (category === 'desserts') categoryTitle = 'Desserts';
        else categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);
        
        // Get category icon
        let iconClass = 'fas fa-utensils';
        let iconColor = '#FF6B6B';
        
        if (category.includes('veg')) {
            iconClass = 'fas fa-carrot';
            iconColor = '#27ae60';
        } else if (category.includes('nonveg')) {
            iconClass = 'fas fa-drumstick-bite';
            iconColor = '#e74c3c';
        } else if (category.includes('drink')) {
            iconClass = 'fas fa-glass-cheers';
            iconColor = '#3498db';
        } else if (category.includes('dessert')) {
            iconClass = 'fas fa-ice-cream';
            iconColor = '#FD79A8';
        } else if (category.includes('appetizer')) {
            iconClass = 'fas fa-pepper-hot';
            iconColor = '#FFD166';
        }
        
        // Create category section
        const section = document.createElement('div');
        section.className = 'menu-section';
        section.id = categoryId;
        
        let menuItemsHTML = '';
        
        // Create HTML for each menu item
        items.forEach(item => {
            const tagsHTML = item.tags && item.tags.length > 0
                ? `<div class="menu-tags">${
                    item.tags.map(tag => 
                        `<span class="tag ${tag}">${tag.charAt(0).toUpperCase() + tag.slice(1)}</span>`
                    ).join('')
                }</div>`
                : '';
            
            menuItemsHTML += `
                <div class="menu-item" data-category="${item.category}">
                    <div class="menu-item-info">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        ${tagsHTML}
                    </div>
                    <div class="menu-item-price">₹${item.price}</div>
                </div>
            `;
        });
        
        section.innerHTML = `
            <h2 class="menu-section-title">
                <i class="${iconClass}" style="color: ${iconColor};"></i> ${categoryTitle}
            </h2>
            <div class="menu-grid">
                ${menuItemsHTML}
            </div>
        `;
        
        menuContainer.appendChild(section);
    });
}

function initMenuFilter() {
    const filterButtons = document.querySelectorAll('.category-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get selected category
            const selectedCategory = this.dataset.category;
            
            // Display filtered items
            displayMenuItems(selectedCategory);
            
            // Scroll to menu section on mobile
            if (window.innerWidth < 768) {
                setTimeout(() => {
                    document.querySelector('.menu-items').scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 300);
            }
        });
    });
}

// ============================================
// GALLERY PAGE FUNCTIONS
// ============================================

function initGalleryPage() {
    displayGalleryItems();
}

function displayGalleryItems() {
    const galleryContainer = document.querySelector('.gallery-full');
    if (!galleryContainer) return;
    
    galleryContainer.innerHTML = '';
    
    GALLERY_DATA.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        galleryItem.innerHTML = `
            <div class="image-placeholder">
                ${item.image 
                    ? `<img src="images/${item.image}" alt="${item.title}" style="width:100%;height:100%;object-fit:cover;">`
                    : `<i class="fas fa-image"></i><p>${item.title}</p>`
                }
            </div>
        `;
        
        galleryContainer.appendChild(galleryItem);
    });
}

// ============================================
// CONTACT PAGE FUNCTIONS
// ============================================

function initContactPage() {
    displayBranches();
}

function displayBranches() {
    const contactSection = document.querySelector('.contact-details');
    if (!contactSection || BRANCHES_DATA.length === 0) return;
    
    // Main branch (first one) is already displayed in default HTML
    // Add other branches if available
    if (BRANCHES_DATA.length > 1) {
        const branchesHTML = `
            <div class="other-branches" style="margin-top: 40px;">
                <h3 style="margin-bottom: 20px;">Our Other Branches</h3>
                <div class="branches-list">
                    ${BRANCHES_DATA.slice(1).map(branch => `
                        <div class="branch-card" style="background: white; padding: 20px; border-radius: 10px; margin-bottom: 15px; box-shadow: 0 3px 10px rgba(0,0,0,0.1);">
                            <h4 style="color: var(--primary-color); margin-bottom: 10px;">${branch.name}</h4>
                            <p><i class="fas fa-map-marker-alt" style="color: #666; margin-right: 8px;"></i> ${branch.address}</p>
                            ${branch.phone ? `<p><i class="fas fa-phone" style="color: #666; margin-right: 8px;"></i> ${branch.phone}</p>` : ''}
                            ${branch.timings ? `<p><i class="fas fa-clock" style="color: #666; margin-right: 8px;"></i> ${branch.timings}</p>` : ''}
                            ${branch.manager ? `<p><i class="fas fa-user-tie" style="color: #666; margin-right: 8px;"></i> Manager: ${branch.manager}</p>` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        contactSection.insertAdjacentHTML('beforeend', branchesHTML);
    }
}

// ============================================
// CHATBOT FUNCTIONALITY
// ============================================

function initChatbot() {
    const chatbotIcon = document.getElementById('chatbotIcon');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');
    const chatbotMessages = document.getElementById('chatbotMessages');
    
    if (!chatbotIcon) return;
    
    // Open/close chatbot
    chatbotIcon.addEventListener('click', function() {
        chatbotWindow.classList.toggle('active');
        if (chatbotWindow.classList.contains('active')) {
            setTimeout(() => chatbotInput.focus(), 100);
        }
    });
    
    chatbotClose.addEventListener('click', function() {
        chatbotWindow.classList.remove('active');
    });
    
    // Close when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth < 768 && chatbotWindow.classList.contains('active')) {
            if (!chatbotIcon.contains(e.target) && !chatbotWindow.contains(e.target)) {
                chatbotWindow.classList.remove('active');
            }
        }
    });
    
    // Send message functionality
    chatbotSend.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') sendMessage();
    });
    
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (!message) return;
        
        // Add user message
        addMessage(message, 'user');
        chatbotInput.value = '';
        
        // Get and show bot response
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage(response, 'bot');
        }, 500);
    }
    
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.textContent = text;
        chatbotMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    function getBotResponse(userInput) {
        userInput = userInput.toLowerCase();
        const config = RESTAURANT_CONFIG;
        
        if (userInput.includes('menu') || userInput.includes('food') || userInput.includes('dish')) {
            return "You can check our full menu on the Menu page. We have vegetarian, non-vegetarian, drinks, appetizers and desserts!";
        } else if (userInput.includes('order') || userInput.includes('delivery') || userInput.includes('takeaway')) {
            return `You can order via WhatsApp (${config.whatsapp}) or call us at ${config.phone}. Click the WhatsApp button on any page!`;
        } else if (userInput.includes('time') || userInput.includes('open') || userInput.includes('close') || userInput.includes('hour')) {
            return `We're open from ${formatTime(config.openingTime)} to ${formatTime(config.closingTime)}, ${config.workingDays.toLowerCase()}.`;
        } else if (userInput.includes('location') || userInput.includes('address') || userInput.includes('where')) {
            return `Our main branch is at ${config.address}. Check the Contact page for all our locations.`;
        } else if (userInput.includes('price') || userInput.includes('cost')) {
            return "You can check all prices on our Menu page. We offer great value for delicious food!";
        } else if (userInput.includes('hello') || userInput.includes('hi') || userInput.includes('hey')) {
            return `Hello! 👋 Welcome to ${config.name}. How can I help you today?`;
        } else if (userInput.includes('thank')) {
            return "You're welcome! 😊";
        } else if (userInput.includes('bye') || userInput.includes('goodbye')) {
            return `Goodbye! Hope to see you soon at ${config.name}! 👋`;
        } else {
            return "I can help with menu information, ordering, timings, and location. What would you like to know?";
        }
    }
}

// ============================================
// SMOOTH SCROLLING
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
            e.preventDefault();
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const hamburger = document.querySelector('.hamburger.active');
            if (hamburger) {
                hamburger.classList.remove('active');
                document.querySelector('.nav-menu').classList.remove('active');
            }
        }
    });
});