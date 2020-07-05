const range = document.querySelector("#range");

function main() {
  const scene = document.querySelector(".scene");
  const count = 50;
  for (let i = 0; i < count; i++) {
    const left = Math.floor(Math.random() * innerWidth);
    const duration = Math.random() * 1 + 0.2;
    const height = Math.random() * range.value;
    let star = document.createElement("i");
    star.style.left = left + "px";
    star.style.width = 1 + "px";
    star.style.height = height + "px";
    star.style.animationDuration = duration + "s";
    scene.appendChild(star);
  }
}

function drag() {
  document.querySelectorAll("i").forEach((star) => {
    star.style.height = range.value + "px";
  });
}

window.addEventListener("load", main);
