const text = "A Peaceful Cafe Space in the Heart of Galle Face.";
const typewriter = document.getElementById("typewriter");
let index = 0;

typewriter.classList.add("appear");

function type() {
  if (index < text.length) {
    typewriter.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 60);
  }
}
typewriter.style.opacity = "1";
type();

// Fade-in on scroll
const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Contact form submission
const form = document.getElementById("contactForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  setTimeout(() => {
    document.getElementById("confirmationMsg").style.display = "block";
    form.reset();
  }, 1000);
});
