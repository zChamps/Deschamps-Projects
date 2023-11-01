const iconeMenu = document.querySelector("#icone-menu")
const containerMenuMobile = document.querySelector("#container-nav-links")
const iconeCLoseMenu = document.querySelector("#icone-close-nav")
const main = document.querySelector("main")

iconeMenu.addEventListener("click", () =>{
    containerMenuMobile.style.display = "flex"
    iconeCLoseMenu.addEventListener("click", () => {
        containerMenuMobile.style.display = "none"
    })
    main.addEventListener("click", () => {
        containerMenuMobile.style.display = "none"
    })
})