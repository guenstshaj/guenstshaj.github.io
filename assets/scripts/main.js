let menu_btn = document.querySelector('.menu');
let menu = document.querySelector(".navbar");
let accordion = document.getElementsByClassName("content-container");


for (var i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        this.classList.toggle('active');
    });
}

menu_btn.addEventListener('click', function (e) {
    menu.classList.toggle("open");
    const isOpen = menu.classList.contains("open");
    menu_btn.childNodes[0].className = isOpen ? 'bx bx-x' : 'bx bx-menu';
});

