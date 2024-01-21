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

// Datos para Tech Stack
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
    listItem.className = "flex flex-col items-center text-center";
    listItem.innerHTML = `
      <img src="${item.imgSrc}" alt="${item.name} Logo" class="w-12 h-auto mb-6">
      <span class="text-lg">${item.name}</span>
    `;
    techStackContainer.appendChild(listItem);
  });
}

// Llamada a la función para generar la lista de Tech Stack
createTechStackList();

//Datos para Proyectos
const proyectos = [
  { nombre: "Redline Project", descripcion: "A refined local e-commerce platform that aims to guarantee the most efficient experience in PC components and assembly for its users.", imgSrc: "media/RedlineProject.jpeg" },
  { nombre: "Kuta Coffee ", descripcion: "An e-commerce in principle, which also allows customers to place orders from the store table, providing a more comfortable and efficient experience.", imgSrc: "media/Kutacoffee.jpeg" },
  { nombre: "Game Development", descripcion: "A retro-style pixel platformer on this web platform. Navigate through nostalgic gaming experiences. No frills, just pure exploration and enjoyment.", imgSrc: "media/Game.gif" },
  { nombre: "Spotify App Re-Design", descripcion: "The classic Spotify application, innovating with new features to enhance the experience for the clientele, improving their interaction with the app.", imgSrc: "media/SpotifyClone.jpeg" }
];

// Función para crear una card
function crearCard(proyecto) {
  const card = document.createElement('div');
  card.className = 'card';

  const contenedor = document.createElement('div');
  contenedor.className = 'contenedorProyecto'; // Nuevo contenedor

  const imagen = document.createElement('img');
  imagen.src = proyecto.imgSrc;
  imagen.alt = '';
  imagen.className = 'w-full h-48 object-cover transition-transform duration-300 rounded-lg border-2 border-violet-600';

  const nombreProyecto = document.createElement('h3');
  nombreProyecto.className = 'text-xl font-bold my-4 mt-6 text-center nombreProyecto';
  nombreProyecto.textContent = proyecto.nombre;

  contenedor.appendChild(imagen);
  contenedor.appendChild(nombreProyecto);

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

//Formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
  // Agregar la lógica de envío del formulario aquí.
  event.preventDefault();
  alert('Formulario enviado con éxito. (¡Agrega tu lógica de envío aquí!)');
});