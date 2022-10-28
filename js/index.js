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
/*========cookies=====*/
const popUp=document.getElementById("cookiePopup");
document.getElementById("acceptCookie").
addEventListener("click",()=>{

//create date object
let d=new Date();

d.setMinutes(2+d.getMinutes());
// create a cookie withname= mycookieName, value= thisIs my cookie 
document.cookie ="myCookieName=thisIsMyCookie; expires=" +d+";";
//hide the popup
popUp.classList.add("hide");
popUp.classList.remove("show");
});
//check if cookie is already present

const checkcookie=()=> {
    //Read the cookie and spilt on"=""
    let input =document.cookie.split("=");
    //check for our cookie
    if(input[0]=="myCookieName"){
        //hide the popup
    popUp.classList.add("hide");
    popUp.classList.remove("show");
    }
    else{
        //hide the popup
    popUp.classList.add("show");
    popUp.classList.remove("hide");
    }
};

// check if cookie exists when page loads
window.onload =() =>{
    setTimeout(() =>{
        checkcookie();

    }, 2000);
};