const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');
const main = document.querySelector('main');
const content = document.getElementById('content');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  main.classList.toggle('menu-open');
});

// Simular carga de página con efecto fade (código corregido)
window.addEventListener('DOMContentLoaded', () => {
  content.classList.add('show');
});

// Función para cargar contenido de página (código corregido)
function loadPage(page) {
  content.classList.remove('show');
  setTimeout(() => {
    fetch(page)
      .then(response => response.text())
      .then(html => {
        content.innerHTML = html;
        content.classList.add('show');
      })
      .catch(error => {
        console.error('Error al cargar la página:', error);
        content.innerHTML = '<h2>Error</h2><p>No se pudo cargar la página.</p>';
        content.classList.add('show');
      });
  }, 500);
}

// Eventos para enlaces del menú (código corregido)
const menuLinks = document.querySelectorAll('nav a');
menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const page = link.getAttribute('href');

    // Evitar cargar "index.html" en el contenedor
    if (page !== 'index.html') {
      loadPage(page);
    } else {
      // Redirigir a la página principal
      window.location.href = page;
    }

    // Cerrar el menú en মোবাইল
    if (window.innerWidth <= 768) {
      nav.classList.remove('open');
      main.classList.remove('menu-open');
    }
  });
});

// Código para el botón "scroll to top" (sin cambios)
$(document).ready(function() {
  const btnScrollTop = $('#btn-scroll-top');

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      btnScrollTop.fadeIn();
    } else {
      btnScrollTop.fadeOut();
    }
  });

  btnScrollTop.click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'smooth');
  });
});

