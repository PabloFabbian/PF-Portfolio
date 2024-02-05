// Navbar details -----------------------------------------------------
$(document).ready(function() {
  $('.menu a').hover(
      function() {
          // Al hacer hover, añadir una clase para el efecto
          $(this).addClass('hovered');
      },
      function() {
          // Al salir del hover, quitar la clase para deshacer el efecto
          $(this).removeClass('hovered');
      }
  );
});

//------
document.addEventListener('DOMContentLoaded', function () {
  const burgerButton = document.querySelector('.burger-button');
  const menu = document.querySelector('.burger-menu');

  burgerButton.addEventListener('click', function () {
    this.classList.toggle('active');
    menu.classList.toggle('active');
  });

  // Close the menu when a menu item is clicked
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      burgerButton.classList.remove('active');
      menu.classList.remove('active');
    }
  });

  // Close the menu when clicking outside the menu
  document.addEventListener('click', function (e) {
    if (!burgerButton.contains(e.target) && !menu.contains(e.target)) {
      burgerButton.classList.remove('active');
      menu.classList.remove('active');
    }
  });

  // Toggle the menu on window resize
  window.addEventListener('resize', function () {
    if (window.innerWidth > 576) {
      burgerButton.classList.remove('active');
      menu.classList.remove('active');
    }
  });
});

function closeMenu() {
  const burgerButton = document.querySelector('.burger-button');
  const menu = document.querySelector('.menu');
  burgerButton.classList.remove('active');
  menu.classList.remove('active');
} 

//Carousel ------------------------------------------------------------
let currentSlide = 0;

const showCarousel = () => {
  document.getElementById("overlay").style.display = "flex";
  document.body.classList.add('no-scroll');
  currentSlide = 0;
  updateCarousel();
};

const hideCarousel = () => {
  document.getElementById("overlay").style.display = "none";
  document.body.classList.remove('no-scroll');
};

function changeSlide(event, direction) {
  if (event.target.classList.contains('carousel-btn')) {
    event.preventDefault();
  }

  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = 0;
  } else if (currentSlide >= document.querySelectorAll('.carousel-item').length) {
    currentSlide = document.querySelectorAll('.carousel-item').length - 1;
  }

  updateCarousel();

  if (event.target.classList.contains('carousel-btn')) {
    event.stopPropagation();
  }
}

function updateCarousel() {
  const carouselContainer = document.getElementById('carousel-container');
  const slideWidth = carouselContainer.offsetWidth;
  const newScrollLeft = currentSlide * slideWidth;

  carouselContainer.scrollLeft = newScrollLeft;

  const totalSlides = document.querySelectorAll('.carousel-item').length;

  // Obtener los botones del carrusel
  const leftBtn = document.querySelector('.carousel-btn.left');
  const rightBtn = document.querySelector('.carousel-btn.right');

  // Ocultar o mostrar el botón izquierdo según la posición actual del carrusel
  if (currentSlide === 0) {
    hideButton(leftBtn);
  } else {
    showButton(leftBtn);
  }

  // Ocultar o mostrar el botón derecho según la posición actual del carrusel
  if (currentSlide === totalSlides - 1) {
    hideButton(rightBtn);
  } else {
    showButton(rightBtn);
  }
}

// Funciones auxiliares para mostrar y ocultar los botones con transición
function hideButton(button) {
  button.style.opacity = '0';
  button.style.visibility = 'hidden';
  button.style.transform = '0.3s ease-in-out;';
}

function showButton(button) {
  button.style.opacity = '1';
  button.style.visibility = 'visible';
}

// Cierra el carrusel al hacer clic fuera de las imágenes y las flechas
document.getElementById("overlay").addEventListener("click", (e) => {
  if (e.target === this) {
    hideCarousel();
  }
});

// Cierra el carrusel al presionar la tecla Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    hideCarousel();
  }
});

// Datos para Tech Stack ------------------------------------------------------------
const techStackData = [
  { name: "HTML5", imgSrc: "media/Html5.png" },
  { name: "CSS3", imgSrc: "media/Css3.png" },
  { name: "Javascript", imgSrc: "media/Javascript.png" },
  { name: "React Js", imgSrc: "media/React.png" },
  { name: "Git", imgSrc: "media/Git.png" },
  { name: "Bootstrap", imgSrc: "media/Bootstrap.png" },
  { name: "Tailwind", imgSrc: "media/Tailwind.png" }
];

// Función para crear la lista de Tech Stack
function createTechStackList() {
  const techStackContainer = document.getElementById('techStack');
  techStackData.forEach(item => {
    const listItem = document.createElement('div');
    listItem.className = "flex flex-col items-center text-center techItem";
    listItem.innerHTML = `
      <img src="${item.imgSrc}" alt="${item.name} Logo" class="w-12 h-auto mb-6">
      <span class="text-lg">${item.name}</span>
    `;
    techStackContainer.appendChild(listItem);
  });
}

// Llamada a la función para generar la lista de Tech Stack
createTechStackList();

//Datos para Proyectos ------------------------------------------------------------
const proyectos = [
  { nombre: "Redline Project", descripcion: "A refined local e-commerce platform that aims to guarantee the most efficient experience in PC components and assembly for its users.", imgSrc: "media/RedlineProject.jpeg", repoLink: "https://github.com/PabloFabbian/Red_Line_Project" },
  { nombre: "Kuta Coffee ", descripcion: "An e-commerce in principle, which also allows customers to place orders from the store table, providing a more comfortable and efficient experience.", imgSrc: "media/KutaCoffee.jpeg", repoLink: "https://github.com/PabloFabbian/Kuta_Coffee" },
  { nombre: "Game Development", descripcion: "A retro-style pixel platformer on this web platform. Navigate through nostalgic gaming experiences. No frills, just pure exploration and enjoyment.", imgSrc: "media/Game.gif", repoLink: "#" },
  { nombre: "Spotify App Re-Design", descripcion: "The classic Spotify application, innovating with new features to enhance the experience for the clientele, improving their interaction with the app.", imgSrc: "media/SpotifyClone.jpeg", repoLink: "#" }
];

// Función para crear una card
function crearCard(proyecto) {
  const card = document.createElement('div');
  card.className = 'card';

  const contenedor = document.createElement('div');
  contenedor.className = 'contenedorProyecto';

  const imagen = document.createElement('img');
  imagen.src = proyecto.imgSrc;
  imagen.alt = '';
  imagen.className = 'w-full h-48 object-cover transition-transform duration-300 rounded-lg border-2 border-violet-600';

  const nombreProyecto = document.createElement('h3');
  nombreProyecto.className = 'text-xl font-bold my-4 mt-6 text-center nombreProyecto';
  nombreProyecto.textContent = proyecto.nombre;

  // Nuevo elemento para la flechita
  const flechita = document.createElement('div');
  flechita.className = 'flechita';
  flechita.innerHTML = '<i class="gg-external"></i>';

  // Al hacer clic en la flechita, abrir el enlace del repositorio
  flechita.addEventListener('click', function () {
      window.open(proyecto.repoLink, '_blank');
  });

  // Mostrar la flechita al hacer hover
  contenedor.addEventListener('mouseenter', function () {
      flechita.style.opacity = "1";
  });

  // Ocultar la flechita al salir del hover
  contenedor.addEventListener('mouseleave', function () {
      flechita.style.opacity = "0";
  });

  contenedor.appendChild(imagen);
  contenedor.appendChild(nombreProyecto);
  contenedor.appendChild(flechita); // Mover la flechita al contenedor principal

  card.appendChild(contenedor);

  const descripcion = document.createElement('p');
  descripcion.className = 'text-lg mb-4 text-center proyectoDescripcion';
  descripcion.textContent = proyecto.descripcion;

  card.appendChild(descripcion);

  return card;
}

// Obtener el contenedor de proyectos
const proyectosContainer = document.getElementById('proyectosContainer');

// Generar las cards y añadirlas al contenedor
proyectos.forEach(proyecto => {
    const card = crearCard(proyecto);
    proyectosContainer.appendChild(card);
});

//Formulario ------------------------------------------------------------
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los datos del formulario
  const formData = new FormData(event.target);
  const formDataObject = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  // Configuración de Email.js
  emailjs.init("user_5rV5HgjTEv6gNjLAO4Mgt");

  // Parámetros para enviar el correo
  const params = {
    ...formDataObject,
    to_email: "pablo.fabbian@gmail.com",
  };

  // Enviar el correo
  emailjs.send("Gmail", "template_template_uyqprzm", params)
    .then(function(response) {
      console.log('Correo enviado con éxito:', response);
      alert('Formulario enviado con éxito. ¡Gracias por contactarme!');
    }, function(error) {
      console.error('Error al enviar el correo:', error);
      alert('Error al enviar el formulario. Por favor, inténtalo de nuevo.');
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const animatedHeading = document.getElementById('animated-heading');

    // Función para verificar si el elemento está en la vista
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Función para activar la animación cuando el elemento está en la vista
    function handleScroll() {
        if (isElementInViewport(animatedHeading)) {
            animatedHeading.classList.add('animate');
            // Eliminar el listener después de la primera vez para que no vuelva a activarse
            window.removeEventListener('scroll', handleScroll);
        }
    }

    // Agregar un listener de scroll
    window.addEventListener('scroll', handleScroll);
});