let hamburgerButton = document.getElementById("hamburger-button")
let bookmark = document.getElementById("bookmark")
let navbar = document.getElementById("navbar")
let html = document.getElementsByName("html")
let root = document.getElementsByTagName( 'html' )[0];
let closeButton = document.getElementById('close-button')
let navbarElement = document.getElementsByClassName('nav-element')
let socialMediaNav = document.getElementById("social-media-nav")


hamburgerButton.addEventListener("click", () => {


    root.className += "block-scroll"

    navbar.classList.remove("hidden")

    hamburgerButton.style.display = 'none'
    bookmark.style.display = 'none'

    var xPosition = window.scrollX || window.pageXOffset || document.body.scrollLeft;
    var yPosition = window.scrollY || window.pageYOffset || document.body.scrollTop;

    window.onscroll = function() {
        window.scrollTo(xPosition, yPosition);
    };

})

for(let i = 0; i < navbarElement.length; i++){
    navbarElement[i].addEventListener('click' ,() => {
        hideNav()
        window.scrollTo(navbarElement[i].children)
    })
}

closeButton.addEventListener("click", () => {
    hideNav()

})

function hideNav() {
    navbar.className += "hidden"

    hamburgerButton.style.display = 'flex'
    bookmark.style.display = 'flex'


    root.classList.remove('block-scroll')

    enableScroll()
}

function disableScroll() {

}

function enableScroll() {
    window.onscroll = function() {
       
    };
}

