// Elementos
const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');
const closeMenu = document.getElementById('closeMenu');
const navLinks = document.querySelectorAll('.nav-link');
const header = document.getElementById('header');

// Toggle Menu Hamburguer
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sideMenu.classList.toggle('active');
    document.body.style.overflow = sideMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Fechar Menu
closeMenu.addEventListener('click', () => {
    hamburger.classList.remove('active');
    sideMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Fechar menu ao clicar em link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Remove active de todos
        navLinks.forEach(l => l.classList.remove('active'));
        // Adiciona active no clicado
        link.classList.add('active');
        
        // Fecha menu mobile
        hamburger.classList.remove('active');
        sideMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation on Scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Header Scroll Effect
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.style.background = 'rgba(10, 10, 15, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(139, 92, 246, 0.1)';
    } else {
        header.style.background = 'rgba(10, 10, 15, 0.95)';
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Fechar modal clicando fora
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Fechar modal com ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
});

// Intersection Observer para animações
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

// Observar elementos para animação
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.timeline-item, .project-card, .education-card, .skill-group');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Loading Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Console Easter Egg
console.log('%c👩‍💻 Portfólio Júlia Helena Ferreira', 
    'color: #8b5cf6; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c🚀 Desenvolvido com HTML5, CSS3 e JavaScript', 
    'color: #a78bfa; font-size: 14px; padding: 5px;');
console.log('%c💜 Procurando oportunidades como Dev Java Júnior!', 
    'color: #c4b5fd; font-size: 14px; padding: 5px;');

const earlierExperiences = document.getElementById('experiencias-anteriores');
const toggleExperiences = document.getElementById('toggleExperiences');
earlierExperiences.classList.add('is-collapsed');
earlierExperiences.inert = true;
earlierExperiences.setAttribute('aria-hidden', 'true');
toggleExperiences.parentElement.hidden = false;
toggleExperiences.addEventListener('click', () => {
    const expanded = toggleExperiences.getAttribute('aria-expanded') === 'true';
    toggleExperiences.setAttribute('aria-expanded', String(!expanded));
    earlierExperiences.classList.toggle('is-collapsed', expanded);
    earlierExperiences.inert = expanded;
    earlierExperiences.setAttribute('aria-hidden', String(expanded));
    toggleExperiences.textContent = expanded ? 'Ver mais experiências' : 'Ver menos experiências';
    if (expanded) {
        document.getElementById('experiencia').scrollIntoView({ block: 'start' });
    }
});
const badges = [...document.querySelectorAll('.hero-image .floating-card')];
const positions = badges.map(badge => badge.classList[1]);
for (let i = positions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [positions[i], positions[j]] = [positions[j], positions[i]];
}
badges.forEach((badge, i) => badge.classList.replace(badge.classList[1], positions[i]));

// Varia o fundo decorativo a cada abertura, mantendo a distribuição pela tela.
const binaryStreams = document.querySelectorAll('.binary-stream');
binaryStreams.forEach((stream, index) => {
    const left = (index + Math.random() * .6) * 100 / binaryStreams.length;
    stream.style.setProperty('--x', left.toFixed(2) + '%');
    stream.style.setProperty('--stream-opacity', left > 10 && left < 48 ? '.4' : '.8');
    stream.style.setProperty('--size', (10 + Math.random() * 12).toFixed(1) + 'px');
    stream.style.setProperty('--speed', (22 + Math.random() * 24).toFixed(1) + 's');
    stream.style.setProperty('--delay', (-Math.random() * 50).toFixed(1) + 's');
});

const symbolSlots = [
    [7, 14], [85, 12], [22, 83], [85, 82], [2, 45], [92, 42],
];
for (let i = symbolSlots.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [symbolSlots[i], symbolSlots[j]] = [symbolSlots[j], symbolSlots[i]];
}
document.querySelectorAll('.code-symbol').forEach((symbol, index) => {
    const [left, top] = symbolSlots[index];
    symbol.style.inset = (top + Math.random() * 4) + '% auto auto ' + (left + Math.random() * 3) + '%';
    symbol.style.animationDelay = (-Math.random() * 8) + 's';
    symbol.style.setProperty('--float-speed', (8 + Math.random() * 6).toFixed(1) + 's');
    symbol.style.animationDirection = index % 2 === 0 ? 'alternate' : 'alternate-reverse';
});

function syncMenuState() {
    const open = sideMenu.classList.contains('active');
    hamburger.setAttribute('aria-expanded', String(open));
    sideMenu.inert = !open;
    if (open) closeMenu.focus();
}
syncMenuState();
hamburger.addEventListener('click', syncMenuState);
closeMenu.addEventListener('click', () => {
    syncMenuState();
    hamburger.focus();
});
navLinks.forEach(link => link.addEventListener('click', syncMenuState));
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && sideMenu.classList.contains('active')) {
        closeMenu.click();
    }
});
