const proyectos = [
    { nombre: "Redline Project", descripcion: "A refined local e-commerce, enabling orders from the store table for a seamless, efficient experience in PC components and assembly.", imgSrc: "media/RedlineProject.jpeg" },
    { nombre: "Kuta Coffee ", descripcion: "An e-commerce in principle, which also allows customers to place orders from the store table, providing a more comfortable and efficient experience.", imgSrc: "media/Kutacoffee.jpeg" },
    { nombre: "Game Development", descripcion: "A retro-style pixel platformer on this web platform. Navigate through nostalgic gaming experiences. No frills, just pure exploration and enjoyment.", imgSrc: "media/Game.gif" },
    { nombre: "Spotify App Re-Design", descripcion: "The classic Spotify application, innovating with new features to enhance the experience for one of three personas and improve their overall interaction with the app.", imgSrc: "media/SpotifyClone.jpeg" }
];

  // Función para crear una card
function crearCard(proyecto) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${proyecto.imgSrc}" alt="" class="w-full h-48 object-cover transition-transform duration-300 rounded-lg border-2 border-violet-600">
        <h3 class="text-xl font-bold my-4 text-center">${proyecto.nombre}</h3>
        <p class="text-lg mb-4 text-center">${proyecto.descripcion}</p>
    `;
    return card;
}

  // Obtener el contenedor de proyectos
const proyectosContainer = document.getElementById('proyectosContainer');

  // Generar las cards y añadirlas al contenedor
proyectos.forEach(proyecto => {
    const card = crearCard(proyecto);
    proyectosContainer.appendChild(card);
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