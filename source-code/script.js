const toggleBar = document.querySelector('._toggleBar');
const toggleMenu = document.querySelector('.toggleMenu');
const close = document.querySelector('.closeMenu')

toggleBar.addEventListener('click', () =>{
    console.log('Hello World');
    toggleMenu.classList.add("show")
    toggleMenu.classList.remove("hide")
})

close.addEventListener('click', () =>{
    console.log('Hello Ph');
    toggleMenu.classList.add("hide")
    toggleMenu.classList.remove("show")
})

// toggleBar.addEventListener('click', () =>{
//     console.log('toggle show');
//     toggleMenu.style.display = "block"
    
// })

// close.addEventListener('click', () =>{
//     console.log('toggle hide');
//     toggleMenu.style.display = "none"
// })
