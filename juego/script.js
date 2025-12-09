// ==========================================
// DATOS DEL CARRUSEL
// ==========================================

const items = [
  {
    img: "img/car.png",
    props: {
      tipo: "carro",
      color: "azul",
      marca: "?"
    }
  },
  {
    img: "img/celu.png",
    props: {
      tipo: "celular",
      color: "Plata",
      marca: "?",
      modelo: "?"
    }
  },
  {
    img: "img/libro.png",
    props: {
      tipo: "libro",
      autor: "?",
      titulo: "?",
      genero: "?"
    }
  }
];

let index = 0;

// ==========================================
// MOSTRAR ELEMENTO
// ==========================================
function renderItem() {
  const item = items[index];

  // Actualizar imagen con fade
  const img = document.getElementById("carouselImage");
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = item.img;
    img.style.opacity = 1;
  }, 200);

  // Mostrar propiedades
  const list = document.getElementById("propertyList");
  list.innerHTML = "";
  for (const key in item.props) {
    list.innerHTML += `<li><strong>${key}</strong>: ${item.props[key]}</li>`;
  }

  document.getElementById("feedback").innerHTML = "";
}
renderItem();

function nextItem() {
  index = (index + 1) % items.length;
  renderItem();
}

function prevItem() {
  index = (index - 1 + items.length) % items.length;
  renderItem();
}