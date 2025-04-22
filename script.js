/*side javascript code for the navigation*/
let menuBtn = document. querySelector(" .menu-btn");
let cancelBtn = document.querySelector(" .cancel-btn");
let navBar = document .querySelector(" .navbar");

//console.log(num.innerhtml);
menuBtn.onclick = function() {
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none"
    navBar.classList.add("active");
}

cancelBtn.onclick = function() {
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    navBar.classList.remove("active");
}
//sticky navigation menu javascript code
let val;
let nav =document. querySelector("nav");
Window.consol = function() {
    if(ducument.ducumentElement.scrollTop > 20){
        console.log('sticky');
        nav.classList.remove("sticky");
    }
}
//toggle navigation menu