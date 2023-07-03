const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });

    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', e => {
      e.preventDefault();
    });

    const galleryImages = document.querySelectorAll('.gallery img');
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    const lightboxClose = document.createElement('span');
    lightboxClose.className = 'lightbox-close';
    lightboxClose.innerHTML = '&times;';

    galleryImages.forEach(image => {
      image.addEventListener('click', () => {
        const clone = image.cloneNode();
        lightbox.innerHTML = '';
        lightbox.appendChild(clone);
        lightbox.appendChild(lightboxClose);
        document.body.appendChild(lightbox);
        lightbox.style.display = 'flex';
      });
    });

    lightbox.addEventListener('click', event => {
      if (event.target === lightbox || event.target === lightboxClose) {
        lightbox.style.display = 'none';
      }
    });