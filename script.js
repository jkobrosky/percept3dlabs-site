const cube = document.querySelector(".cube");

let angle = 0;

function animate() {
  angle += 0.5;
  cube.style.transform = `rotate(${angle}deg)`;
  requestAnimationFrame(animate);
}

animate();
