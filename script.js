const cursor = document.querySelector('.cursor');

// Používáme rychlou metodu pro aktualizaci souřadnic
const moveCursor = (e) => {
  // Přičtením transformace přímo na GPU minimalizujeme lag
  cursor.style.setProperty('--x', e.clientX + 'px');
  cursor.style.setProperty('--y', e.clientY + 'px');
};

window.addEventListener('mousemove', moveCursor);


const imageS = document.querySelectorAll('.IMAGE');

imageS.forEach((image) => {
  image.addEventListener("click", () => {
    image.classList.toggle("imageonclick");
  });
});