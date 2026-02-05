// Initialize audio
let backgroundAudio = null;
let isAudioPlaying = false;

function initializeAudio() {
    backgroundAudio = new Audio('happy_birthday.mp3');
    backgroundAudio.volume = 0.5;
    backgroundAudio.loop = true;
}

// Create romantic rose petals
function createRosePetals() {
    let container = document.getElementById('rosePetals');
    // Create container if missing to avoid errors
    if (!container) {
        container = document.createElement('div');
        container.id = 'rosePetals';
        container.className = 'rose-petals-container';
        document.body.appendChild(container);
    }
    
    const petals = ['🌹', '🌺', '💐', '🌷', '🌸'];
    
    // Create petals continuously
    setInterval(() => {
        if (Math.random() > 0.7) {
            const petal = document.createElement('div');
            petal.className = 'rose-petal';
            petal.textContent = petals[Math.floor(Math.random() * petals.length)];
            petal.style.left = Math.random() * 100 + '%';
            petal.style.animationDuration = (Math.random() * 4 + 6) + 's';
            petal.style.animationDelay = Math.random() * 2 + 's';
            petal.style.animation = 'fallAndSway ' + (Math.random() * 4 + 6) + 's linear infinite';
            container.appendChild(petal);
            
            setTimeout(() => {
                petal.remove();
            }, 12000);
        }
    }, 800);
}

// Create sparkles effect
function createSparkles(x, y, count = 10) {
    let container = document.getElementById('sparkles');
    if (!container) {
        container = document.createElement('div');
        container.id = 'sparkles';
        container.className = 'sparkles-container';
        document.body.appendChild(container);
    }
    
    const sparkleEmojis = ['✨', '💫', '⭐', '🌟', '✦'];
    
    for (let i = 0; i < count; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.textContent = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.animation = 'sparkleAnimation ' + (Math.random() * 1 + 1) + 's ease-out forwards';
        container.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 2000);
    }
}

// Auto-trigger sparkles on mouse movement (romantic effect)
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.98) {
        createSparkles(e.clientX, e.clientY, 3);
    }
});

function toggleMusic() {
    if (!backgroundAudio) {
        initializeAudio();
    }

    const button = document.getElementById('musicToggle');
    
    if (isAudioPlaying) {
        backgroundAudio.pause();
        isAudioPlaying = false;
        if (button) button.textContent = '🎵 Play Music';
    } else {
        backgroundAudio.play().catch(error => {
            console.log('Audio playback failed:', error);
        });
        isAudioPlaying = true;
        if (button) button.textContent = '⏸ Pause Music';
    }
}

// Surprise confetti animation
function triggerSurprise() {
    // Create multiple types of confetti
    createConfettiExplosion();
    createFireworks();
    createHeartExplosion();
    
    // Show surprise message
    showSurpriseModal();
    
    // Play a celebratory sound (optional)
    playSound();
    
    // Create rose petals
    createIntensePetals();
}

function createIntensePetals() {
    const container = document.getElementById('rosePetals');
    if (!container) return;
    
    const petals = ['🌹', '🌺', '💐', '🌷', '🌸'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const petal = document.createElement('div');
            petal.className = 'rose-petal';
            petal.textContent = petals[Math.floor(Math.random() * petals.length)];
            petal.style.left = Math.random() * 100 + '%';
            petal.style.animationDuration = (Math.random() * 3 + 5) + 's';
            petal.style.animationDelay = '0s';
            petal.style.animation = 'fallAndSway ' + (Math.random() * 3 + 5) + 's linear forwards';
            container.appendChild(petal);
            
            setTimeout(() => {
                petal.remove();
            }, 10000);
        }, i * 50);
    }
}

function createHeartExplosion() {
    const container = document.getElementById('sparkles');
    if (!container) return;
    
    for (let i = 0; i < 40; i++) {
        const heart = document.createElement('div');
        heart.style.position = 'absolute';
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.fontSize = '1.5rem';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '10001';
        heart.textContent = ['❤️', '💕', '💖', '💗'][Math.floor(Math.random() * 4)];
        document.body.appendChild(heart);
        
        const angle = (i / 40) * Math.PI * 2;
        const distance = 150;
        const targetX = Math.cos(angle) * distance;
        const targetY = Math.sin(angle) * distance;
        
        heart.animate([
            { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
            { transform: `translate(calc(-50% + ${targetX}px), calc(-50% + ${targetY}px)) scale(0)`, opacity: 0 }
        ], {
            duration: 1500,
            easing: 'ease-out'
        }).onfinish = () => {
            heart.remove();
        };
    }
}

function createConfettiExplosion() {
    const colors = ['#ff6b6b', '#ff8e8e', '#667eea', '#764ba2', '#f093fb', '#4facfe', '#ffd700', '#ff1493', '#00ff00'];
    const shapes = ['circle', 'square', 'triangle'];
    
    // Create confetti pieces
    for (let i = 0; i < 120; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '0px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Random shape
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        if (shape === 'square') {
            confetti.style.borderRadius = '0%';
        } else if (shape === 'triangle') {
            confetti.style.borderRadius = '50%';
            confetti.style.width = '8px';
            confetti.style.height = '8px';
        }
        
        confetti.style.animationDelay = Math.random() * 0.6 + 's';
        confetti.style.animationDuration = (Math.random() * 3 + 2.5) + 's';
        document.body.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            if (confetti.parentElement) {
                confetti.remove();
            }
        }, 5500);
    }
}

function createFireworks() {
    const colors = ['#ff6b6b', '#667eea', '#764ba2', '#f093fb', '#4facfe', '#ffd700'];
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const x = Math.random() * 80 + 10;
            const y = Math.random() * 40 + 10;
            
            for (let j = 0; j < 20; j++) {
                const spark = document.createElement('div');
                spark.className = 'firework-spark';
                spark.style.left = x + '%';
                spark.style.top = y + '%';
                spark.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                document.body.appendChild(spark);
                
                setTimeout(() => {
                    if (spark.parentElement) {
                        spark.remove();
                    }
                }, 1500);
            }
        }, i * 300);
    }
}

function playSound() {
    try {
        // Create a simple celebration beep
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();
        
        oscillator.connect(gain);
        gain.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        gain.gain.setValueAtTime(0.3, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch (e) {
        console.log('Sound playback not available');
    }
}

// Show surprise modal
function showSurpriseModal() {
    const modal = document.createElement('div');
    modal.className = 'surprise-modal';
    modal.innerHTML = `
        <div class="surprise-content">
            <div class="surprise-icon">🎉</div>
            <h2>SURPRISE! 🎊</h2>
            <p class="surprise-text">You are absolutely amazing and I'm so lucky to have you in my life!</p>
            <div class="surprise-separator"></div>
            <p style="font-size: 2.5rem; margin: 20px 0; font-weight: bold;">💕 HAPPY BIRTHDAY, BABY! 💕</p>
            <p class="surprise-subtext">May your day be filled with love, laughter, and unforgettable moments!</p>
            <button onclick="this.closest('.surprise-modal').remove()" class="close-modal-btn">Continue Celebrating →</button>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Add celebration animation
    setTimeout(() => {
        const content = modal.querySelector('.surprise-content');
        if (content) {
            content.classList.add('celebrate-animation');
        }
    }, 100);
}

// Initialize particles on page load
document.addEventListener('DOMContentLoaded', function () {
    createParticles();
    initializeAnimations();
    setupScrollAnimations();
    initializeAudio();
    createRosePetals();
});

// Create floating particles
function createParticles() {
    const particles = document.getElementById('particles');
    if (!particles) {
        console.warn('Particles container not found');
        return;
    }
    
    const particleEmojis = ['❤️', '💕', '💖', '💗', '🌸', '🌺', '✨', '💫', '🦋'];

    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.innerHTML = particleEmojis[Math.floor(Math.random() * particleEmojis.length)];

        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        // Random animation duration and delay
        particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';

        particles.appendChild(particle);
    }
}

// Initialize typewriter and other animations
function initializeAnimations() {
    // Typewriter effect is handled by CSS

    // Add staggered animation delays to elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
        element.style.animationDelay = (index * 0.2) + 's';
    });
}

// Scroll animations (AOS - Animate On Scroll)
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');

                // Special handling for message text
                if (entry.target.classList.contains('message-card')) {
                    animateMessageText();
                }
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const elementsToObserve = document.querySelectorAll('[data-aos], .section-title, .message-card');
    elementsToObserve.forEach(element => {
        observer.observe(element);

        // Add delay based on data-delay attribute
        const delay = element.getAttribute('data-delay');
        if (delay) {
            element.style.transitionDelay = delay + 'ms';
        }
    });
}

// Animate message text with staggered effect
function animateMessageText() {
    const messageTexts = document.querySelectorAll('.message-text');
    messageTexts.forEach((text, index) => {
        setTimeout(() => {
            text.classList.add('fade-in-animate');
        }, index * 500);
    });
}

// Smooth scroll to sections and reveal gallery
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        // If it's the gallery, make it visible first
        if (sectionId === 'gallery') {
            section.classList.add('visible');
        }
        
        // Scroll to section
        setTimeout(() => {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 50);
    }
}

// Toggle like functionality for photos
function toggleLike(button) {
    const heartIcon = button.querySelector('.heart-icon');
    button.classList.toggle('liked');

    if (button.classList.contains('liked')) {
        heartIcon.textContent = '❤️';
        // Create floating heart effect
        createFloatingHeart(button);
    } else {
        heartIcon.textContent = '🤍';
    }
}

// Create floating heart animation when photo is liked
function createFloatingHeart(button) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.fontSize = '1.5rem';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';

    const rect = button.getBoundingClientRect();
    heart.style.left = rect.left + 'px';
    heart.style.top = rect.top + 'px';

    document.body.appendChild(heart);

    // Animate the heart
    heart.animate([
        { transform: 'translateY(0px) scale(1)', opacity: 1 },
        { transform: 'translateY(-60px) scale(1.5)', opacity: 0 }
    ], {
        duration: 1500,
        easing: 'ease-out'
    }).onfinish = () => {
        document.body.removeChild(heart);
    };
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const parallaxSpeed = 0.5;

    if (hero) {
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }

    // Update particles position based on scroll
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        const speed = 0.2 + (index % 3) * 0.1;
        particle.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add mouse movement effect to hero section
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    // Subtle movement effect
    const moveX = (x - 0.5) * 20;
    const moveY = (y - 0.5) * 20;

    const floatingHearts = document.querySelector('.floating-hearts');
    if (floatingHearts) {
        floatingHearts.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});

// Add click effect to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add entrance animations for photos when they come into view
const photoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target.querySelector('img');
            if (img) {
                img.style.animation = 'photoEnter 0.8s ease-out forwards';
            }
        }
    });
}, { threshold: 0.2 });

// Observe all photo cards
document.querySelectorAll('.photo-card').forEach(card => {
    photoObserver.observe(card);
});

// Add photo enter animation
const photoStyle = document.createElement('style');
photoStyle.textContent = `
    @keyframes photoEnter {
        from {
            transform: scale(0.8) rotate(-5deg);
            opacity: 0;
        }
        to {
            transform: scale(1) rotate(0deg);
            opacity: 1;
        }
    }
`;
document.head.appendChild(photoStyle);

// Typewriter effect function
function typewriterEffect() {
    const typewriter = document.getElementById('typewriter');
    if (!typewriter) return;
    
    const text = typewriter.innerHTML;
    typewriter.innerHTML = '';
    let index = 0;
    
    const speed = 50;
    
    function type() {
        if (index < text.length) {
            typewriter.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    
    type();
}