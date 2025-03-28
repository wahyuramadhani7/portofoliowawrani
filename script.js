// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-in-out',
    delay: 100
});

// Loading Screen
window.addEventListener('load', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
});

// Custom Cursor
const cursorFollower = document.querySelector('.cursor-follower');
const links = document.querySelectorAll('a, button, .project-card, .skill-card');

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    cursorFollower.style.left = `${clientX}px`;
    cursorFollower.style.top = `${clientY}px`;
    
    setTimeout(() => {
        cursorFollower.style.opacity = '1';
    }, 100);
});

document.addEventListener('mouseout', () => {
    cursorFollower.style.opacity = '0';
});

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorFollower.style.border = '1px solid var(--text-highlight)';
        cursorFollower.style.background = 'rgba(100, 255, 218, 0.1)';
    });
    
    link.addEventListener('mouseleave', () => {
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.border = '2px solid var(--text-highlight)';
        cursorFollower.style.background = 'transparent';
    });
});

// Navbar Toggle for Mobile
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollTopBtn = document.querySelector('.scroll-top-btn');
    
    if (window.scrollY > 50) {
        navbar.style.padding = '0.75rem 0';
        navbar.style.boxShadow = '0 10px 30px -10px rgba(2, 12, 27, 0.7)';
    } else {
        navbar.style.padding = '1.5rem 0';
        navbar.style.boxShadow = 'none';
    }
    
    // Show/hide scroll to top button
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
    
    // Add active class to sections when scrolled into view
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        
        if (window.scrollY >= sectionTop - navbarHeight - 200 && 
            window.scrollY < sectionTop + sectionHeight - navbarHeight) {
            
            // Highlight active navigation link
            const id = section.getAttribute('id');
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Scroll to top button functionality
document.querySelector('.scroll-top-btn').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initialize Typed.js for the typing effect
document.addEventListener('DOMContentLoaded', function() {
    const options = {
        strings: [
            'Full Stack Developer',
            'Web Designer',
            'Mobile Developer',
            'UI/UX Enthusiast'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        startDelay: 500,
        loop: true
    };
    
    const typedElement = document.querySelector('.typing-text');
    if (typedElement) {
        new Typed(typedElement, options);
    }
});

// Initialize Particles.js
document.addEventListener('DOMContentLoaded', function() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 50,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#64ffda'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.2,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.3,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#8892b0',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.5
                        }
                    },
                    push: {
                        particles_nb: 3
                    }
                }
            },
            retina_detect: true
        });
    }
});

// Animate skill progress bars
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                bar.style.transform = 'scaleX(1)';
            });
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.skills-category').forEach(section => {
    observer.observe(section);
});

// Show more projects functionality
const showMoreBtn = document.querySelector('.show-more-btn');
if (showMoreBtn) {
    showMoreBtn.addEventListener('click', function() {
        const hiddenProjects = document.querySelectorAll('.project-card.hidden');
        
        if (hiddenProjects.length > 0) {
            // Show three more projects
            for (let i = 0; i < Math.min(3, hiddenProjects.length); i++) {
                hiddenProjects[i].classList.remove('hidden');
                hiddenProjects[i].classList.add('fade-in');
            }
            
            // Update button text if no more hidden projects
            if (document.querySelectorAll('.project-card.hidden').length === 0) {
                this.textContent = 'That\'s All!';
                this.disabled = true;
            }
        }
    });
}

// Subtle parallax effect on mouse move
document.addEventListener('mousemove', parallax);

function parallax(e) {
    const headerContent = document.querySelector('.header-content');
    if (!headerContent) return;
    
    const moveX = (e.clientX - window.innerWidth / 2) / window.innerWidth * 10;
    const moveY = (e.clientY - window.innerHeight / 2) / window.innerHeight * 10;
    
    headerContent.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

// Trigger animations on page load
window.addEventListener('load', function() {
    // Animate header elements with delays
    setTimeout(() => {
        document.querySelector('.header-intro').classList.add('animate');
        setTimeout(() => {
            document.querySelector('.glitch-effect').classList.add('animate');
            setTimeout(() => {
                document.querySelector('.header-subtitle').classList.add('animate');
                setTimeout(() => {
                    document.querySelector('.header-desc').classList.add('animate');
                    setTimeout(() => {
                        document.querySelector('.header-buttons').classList.add('animate');
                    }, 300);
                }, 300);
            }, 300);
        }, 300);
    }, 2500); // Start after loading screen
});

// Reveal animations for sections
const revealSections = document.querySelectorAll('.section');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, { threshold: 0.1 });

revealSections.forEach(section => {
    revealObserver.observe(section);
});

// Animate project cards on hover
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.classList.add('hovered');
    });
    
    card.addEventListener('mouseleave', function() {
        this.classList.remove('hovered');
    });
});

// Theme toggle (if implemented)
const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        
        // Save preference to localStorage
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
    }
}

// Add active class to current section on scroll
window.addEventListener('scroll', function() {
    const fromTop = window.scrollY + document.querySelector('.navbar').offsetHeight + 10;
    
    document.querySelectorAll('section').forEach(section => {
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});