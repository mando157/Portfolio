//* Moving Word
const text = "Front End";
const typeing_text = document.getElementById("typing-text");

let i = 0;
let isDeleting = false;

function typeing(){
    if(!isDeleting){
        typeing_text.innerText = text.substring(0 , i + 1);
        i++;

        if(i === text.length){
            isDeleting = true;
            setTimeout(typeing , 800);
            return;
        }
    }
    else{
        typeing_text.innerText = text.substring(0 , Math.max(i - 1 , 0));
        i--;
        if(i===0){
            isDeleting = false;
            setTimeout(typeing , 400);
            return;
        }
    }
    setTimeout(typeing, isDeleting? 80 : 120);
}
typeing();

//* Features Card Animation 

const cards = document.querySelectorAll(".feature-card");


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
      else{
        entry.target.classList.remove("show");
      }
    });
  }, {
    threshold: 0.2
  });

  cards.forEach(card => observer.observe(card));

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

function move (){
    if(canMove){
        x += 2;
        if(x > container.offsetWidth){
            x = -words.offsetWidth;
        }
        words.style.transform = `translateX(${x}px)`
    }
    requestAnimationFrame(move);
}
move();

