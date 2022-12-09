let menuToggle = document.querySelector("#menu")
let activeUl = document.querySelector(".navs ul")
menuToggle.addEventListener('click',clickedMenu) 
function clickedMenu(){
    if (!(menuToggle.classList.contains("menu-close"))){
        menuToggle.classList.remove("menu")
        menuToggle.classList.add("menu-close")
        activeUl.classList.add("active")
    } else{
        menuToggle.classList.remove("menu-close")
        menuToggle.classList.add("menu")
        activeUl.classList.remove("active")
    }
}
    

