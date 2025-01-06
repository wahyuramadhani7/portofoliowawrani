// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
  
  // Navbar background change on scroll
  window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
          navbar.style.background = 'rgba(255, 255, 255, 0.95)';
          navbar.style.padding = '0.5rem 0';
      } else {
          navbar.style.background = 'rgba(255, 255, 255, 0.95)';
          navbar.style.padding = '1rem 0';
      }
  });
  
  // Mobile menu toggle
  const navLinks = document.querySelector('.nav-links');
  const navToggle = document.createElement('div');
  navToggle.classList.add('nav-toggle');
  navToggle.innerHTML = '<i class="fas fa-bars"></i>';
  document.querySelector('.nav-container').appendChild(navToggle);
  
  navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });
  
  document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
          navLinks.classList.remove('active');
      });
  });