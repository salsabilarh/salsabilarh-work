// Mobile Menu Toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('bx-x');
        menuIcon.classList.toggle('bx-menu');
    });

    navbar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
            menuIcon.classList.add('bx-menu');
        });
    });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Sticky header
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.padding = '1rem 5%';
    } else {
        header.style.padding = '1.5rem 5%';
    }
});

// Typing animation
const dynamicText = document.querySelector('.dynamic-text');
if (dynamicText) {
    const roles = ['Full Stack Developer', 'Node.js Developer', 'React.js Developer', 'Problem Solver'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentRole = roles[roleIndex];
        if (isDeleting) {
            dynamicText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            dynamicText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }

        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }

        const speed = isDeleting ? 50 : 100;
        setTimeout(typeEffect, speed);
    }

    typeEffect();
}

// Scroll reveal animation
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

document.querySelectorAll('.exp-card, .project-showcase-card, .tech-category, .soft-skill-card, .achievement-item, .cert-column, .org-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Function to scroll to specific project
window.scrollToProject = function(projectId) {
    const projectElement = document.getElementById(projectId);
    if (projectElement) {
        projectElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Add highlight effect
        projectElement.style.transition = 'all 0.3s';
        projectElement.style.boxShadow = '0 0 0 3px var(--primary)';
        setTimeout(() => {
            projectElement.style.boxShadow = '';
        }, 2000);
    }
};

// Contact Form Handler - Web3Forms
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const form = this;
    const statusDiv = document.getElementById('form-status');
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    statusDiv.innerHTML = '<span style="color: #ca3b1a;">Sending...</span>';
    submitBtn.innerHTML = 'Sending... <i class="bx bx-loader-alt bx-spin"></i>';
    submitBtn.disabled = true;
    
    const formData = new FormData(form);
    
    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        if (data.success) {
            statusDiv.innerHTML = '<span style="color: #2ecc71;">✓ Message sent successfully! I\'ll get back to you soon.</span>';
            form.reset();
        } else {
            statusDiv.innerHTML = '<span style="color: #e74c3c;">✗ Error sending message. Please try again.</span>';
        }
    } catch (error) {
        statusDiv.innerHTML = '<span style="color: #e74c3c;">✗ Network error. Please check your connection.</span>';
    }
    
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
    
    setTimeout(() => { 
        if (statusDiv.innerHTML.includes('successfully')) {
            statusDiv.innerHTML = '';
        }
    }, 5000);
});