// Smooth Scroll for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
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

    // Add scroll animations
    observeElements();
    
    // Add parallax effect to hero
    window.addEventListener('scroll', parallaxEffect);
    
    // Initialize floating shapes animation
    animateShapes();
    
    console.log('E.M.O.R.A website loaded successfully');
});

// Scroll to Services Section
function scrollToServices() {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
        servicesSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Show Alert for Features
function showAlert(feature) {
    const messages = {
        'Professional Sessions': '🧠 Professional Sessions\n\nConnect with licensed therapists and counselors who understand your journey. Schedule your first session today and take the first step towards healing.\n\n✓ Licensed professionals\n✓ Specialized care\n✓ Flexible scheduling\n✓ Complete confidentiality',
        'Community Forums': '💭 Support Communities\n\nJoin our safe, moderated forums where you can share experiences and connect with others who understand. You\'re not alone.\n\n✓ Anonymous participation\n✓ Expert moderation\n✓ Diverse support groups\n✓ 24/7 access'
    };
    
    alert(messages[feature] || `Welcome to ${feature}!`);
}

// Open Chatbot
function openChatbot() {
    alert('🤖 AI Mental Wellness Guide\n\nYour compassionate AI companion is here to help!\n\nGet instant support with:\n✓ Crisis resources\n✓ Coping techniques\n✓ Emotional guidance\n✓ Mental health information\n✓ 24/7 availability\n\nStart a conversation anytime you need support.');
}

// Parallax Effect on Scroll
function parallaxEffect() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const floatingShapes = document.querySelectorAll('.shape');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    floatingShapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.1;
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.05}deg)`;
    });
}

// Intersection Observer for Scroll Animations
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards and features
    const cards = document.querySelectorAll('.card');
    const features = document.querySelectorAll('.feature-item');
    
    [...cards, ...features].forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Animate Floating Shapes
function animateShapes() {
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        // Random initial position
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        shape.style.left = `${randomX}%`;
        shape.style.top = `${randomY}%`;
        
        // Animate
        setInterval(() => {
            const currentLeft = parseFloat(shape.style.left);
            const currentTop = parseFloat(shape.style.top);
            
            const newLeft = currentLeft + (Math.random() - 0.5) * 2;
            const newTop = currentTop + (Math.random() - 0.5) * 2;
            
            shape.style.left = `${Math.max(0, Math.min(100, newLeft))}%`;
            shape.style.top = `${Math.max(0, Math.min(100, newTop))}%`;
        }, 3000 + index * 1000);
    });
}

// Add Ripple Effect to Buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.cta-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple-effect');
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
});

// Navbar Scroll Effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.padding = '1rem 6%';
        nav.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.15)';
    } else {
        nav.style.padding = '1.5rem 6%';
        nav.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
    }
    
    lastScroll = currentScroll;
});

// Stats Counter Animation
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = stat.textContent;
        
        if (!isNaN(target)) {
            let count = 0;
            const increment = target / 50;
            
            const timer = setInterval(() => {
                count += increment;
                if (count >= target) {
                    stat.textContent = target;
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(count);
                }
            }, 30);
        }
    });
}

// Trigger stats animation when in view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Chatbot Bubble Interactive Effect
const chatbotBubble = document.querySelector('.chatbot-bubble');
if (chatbotBubble) {
    let mouseX = 0;
    let mouseY = 0;
    let bubbleX = 0;
    let bubbleY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateBubble() {
        const rect = chatbotBubble.getBoundingClientRect();
        const bubbleCenterX = rect.left + rect.width / 2;
        const bubbleCenterY = rect.top + rect.height / 2;
        
        const deltaX = mouseX - bubbleCenterX;
        const deltaY = mouseY - bubbleCenterY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        if (distance < 200) {
            const force = (200 - distance) / 200;
            bubbleX += deltaX * force * 0.05;
            bubbleY += deltaY * force * 0.05;
        }
        
        bubbleX *= 0.9;
        bubbleY *= 0.9;
        
        chatbotBubble.style.transform = `translate(${bubbleX}px, ${bubbleY}px)`;
        
        requestAnimationFrame(animateBubble);
    }
    
    animateBubble();
}

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open modals or reset state
        console.log('ESC pressed - Ready to close modals');
    }
});

// Performance optimization - Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Log initialization
console.log('%c E.M.O.R.A Initialized ', 'background: linear-gradient(135deg, #880D1E, #DD2D4A); color: white; font-size: 16px; padding: 10px; border-radius: 5px;');
console.log('Mental health support platform ready 💝');