const toggleOnButton = document.getElementsByClassName('activate-nav-button')[0]
const toggleOffButton = document.getElementsByClassName('deactivate-nav-button')[0]
const navbarContainer = document.getElementsByClassName('nav-bar')[0]

toggleOnButton.addEventListener('click', () => {
    navbarContainer.style.visibility = "visible"; 
    navbarContainer.classList.toggle('.nav-bar.active')
    navbarContainer.className = '.nav-bar.active'
})

toggleOffButton.addEventListener('click', () => {
    navbarContainer.style.visibility = "hidden"; 
    navbarContainer.classList.toggle('.nav-bar')
})