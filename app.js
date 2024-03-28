let menuBurger = document.querySelector(".hamburger input")
let navBurger = document.querySelector(".nav-burger")

menuBurger.addEventListener("click", ()=>{
    if (menuBurger.checked) {
        navBurger.classList.add("burger-open")
    }else{
        navBurger.classList.remove("burger-open")
    }
})