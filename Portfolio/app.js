// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
} 

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

const texts = [
    "I am a passionate Frontend Developer.",
    "I am an experienced React.js Developer.",
    "I am a talented Graphic Designer.",
    "I am a creative Programmer.",
];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typing-text').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Pause before changing text
    } else {
        setTimeout(type, 100); // Speed of typing
    }
})();


document.getElementById('getCvBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'images/my_resume.pdf'; 
    link.download = 'Darakhshan_Mujtaba_Resume.pdf'; 
    link.click();
});
