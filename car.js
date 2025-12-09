let car = document.getElementById("car");
let rotationY = 0; // rotación horizontal
let rotationX = 0; // rotación vertical

// Rotar horizontalmente
function rotateCarY(degrees) {
    rotationY += degrees;
    car.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
}

// Rotar verticalmente
function rotateCarX(degrees) {
    rotationX += degrees;
    car.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
}

// Cambiar color de todas las caras
function changeColor(color) {
    let faces = document.querySelectorAll('.face');
    faces.forEach(face => face.style.background = color);
}

