//* Moving Word
const text = "Front End";
const typeing_text = document.getElementById("typing-text");

let i = 0;
let isDeleting = false;

function typeing() {
  if (!isDeleting) {
    typeing_text.innerText = text.substring(0, i + 1);
    i++;

    if (i === text.length) {
      isDeleting = true;
      setTimeout(typeing, 800);
      return;
    }
  } else {
    typeing_text.innerText = text.substring(0, Math.max(i - 1, 0));
    i--;
    if (i === 0) {
      isDeleting = false;
      setTimeout(typeing, 400);
      return;
    }
  }
  setTimeout(typeing, isDeleting ? 80 : 120);
}
typeing();

//* Features Card Animation

const cards = document.querySelectorAll(".feature-card ");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

cards.forEach((card) => observer.observe(card));

//* Moving bar
const words = document.querySelector(".moving");
const container = document.querySelector(".motion-text");

let canMove = true;
let x = -words.offsetWidth;

container.addEventListener("mouseenter", () => {
  canMove = false;
});
container.addEventListener("mouseleave", () => {
  canMove = true;
});

function move() {
  if (canMove) {
    x += 2;
    if (x > container.offsetWidth) {
      x = -words.offsetWidth;
    }
    words.style.transform = `translateX(${x}px)`;
  }
  requestAnimationFrame(move);
}
move();

//* Skills Counter
const htmlcount = document.getElementById("html-count");
const jscount = document.getElementById("js-count");
const csscount = document.getElementById("css-count");
const bootstrapcount = document.getElementById("bootstrap-count");
const skillsSection = document.getElementById("skills");

let isAnimating = false;

function animateCount(element, target) {
  if (!element) return;

  let count = 0;
  const increment = target / 100;
  const interval = setInterval(() => {
    count += increment;
    if (count >= target) {
      count = target;
      clearInterval(interval);
      isAnimating = false;
    }
    element.innerText = Math.floor(count) + "%";
  }, 30);
}

const skillObserver = new IntersectionObserver(
  (enters) => {
    enters.forEach((entry) => {
      if (entry.isIntersecting && !isAnimating) {
        isAnimating = true;
        animateCount(htmlcount, 95);
        animateCount(jscount, 65);
        animateCount(csscount, 85);
        animateCount(bootstrapcount, 75);
      }
    });
  },
  {
    threshold: 0.5,
  },
);

if (skillsSection) {
  skillObserver.observe(skillsSection);
}
