// SCROLL ANIMATION
const faders = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

// DARK MODE
function toggleMode() {
  document.body.classList.toggle("light");
}

// TYPING EFFECT
const text = "Hi, I'm Dalton 🚀";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 80);
  }
}

window.onload = type;
