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

