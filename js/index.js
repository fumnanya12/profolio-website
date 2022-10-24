const navToggle = document.querySelector('.nav-toggle');
const navLink= document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLink.forEach(link =>{
    link.addEventListener('click',()=> {
        document.body.classList.remove('nav-open');
    })
})


/*========Dark light=====*/
const themeButton=document.getElementById('theme-button');
const darktheme='dark-theme';
const iconTheme='fa-moon';

const selectedTheme= localStorage.getItem('selected-theme')
const selectedIcon=localStorage.getItem('selected-icon')

const getCurrentTheme=()=> document.body.classList.contains(darktheme) ? 'dark':'light'
const getCurrentIcon=()=>themeButton.classList.contains(iconTheme) ? 'fa-sun':'fa-moon'

if (selectedTheme){
    document.body.classList[selectedTheme ==='dark' ? 'add' : 'remove'](darktheme)
    themeButton.classList[selectedIcon ==='fa-moon'? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click',() =>{
console.log(iconTheme)
    document.body.classList.toggle(darktheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())


})