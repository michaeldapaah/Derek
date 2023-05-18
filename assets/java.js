var typed = new Typed(".input", {
    strings: ["At Affordable cost", " at Best Quality", "for your nourishment" ],
    typeSpeed: 70,
    backSpeed: 60,
    loop:true
})

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}