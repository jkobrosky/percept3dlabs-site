const cube = document.querySelector(".cube");

let angle = 0;

function animate() {
  angle += 0.3;
  cube.style.transform = `rotateX(60deg) rotateZ(${45 + angle}deg)`;
  requestAnimationFrame(animate);
}

animate();
