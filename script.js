// Menú Hamburguesa
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Cerrar menú al hacer click en un enlace
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.style.display = 'none';
    });
});

// Formulario de Contacto
const formulario = document.getElementById('formulario');

if (formulario) {
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Obtener valores del formulario
        const nombre = formulario.querySelector('input[type="text"]').value;
        const email = formulario.querySelector('input[type="email"]').value;
        const telefono = formulario.querySelector('input[type="tel"]').value;
        const mensaje = formulario.querySelector('textarea').value;
        
        // Crear mensaje de WhatsApp
        const mensaje_wa = `Hola Sofia Cleaning Service, mi nombre es ${nombre}.%0a%0aTeléfono: ${telefono}%0aEmail: ${email}%0a%0aMensaje: ${mensaje}`;
        
        // Crear URL de WhatsApp
        const whatsapp_url = `https://wa.me/19453931058?text=${mensaje_wa}`;
        
        // Mostrar alerta de éxito
        alert('¡Gracias por tu mensaje! Te contactaremos pronto.')
        
        // Limpiar formulario
        formulario.reset();
        
        // Abrir WhatsApp
        window.open(whatsapp_url, '_blank');
    });
}

// Efecto de scroll suave
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

// Animación de aparición al scroll
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

document.querySelectorAll('.servicio-card, .precio-card, .galeria-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
