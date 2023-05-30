const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const submit = document.querySelector('#submit');

const mobileMenu = () => {
      menu.classList.toggle('is-active');
      menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

const highlightMenu = () => {
      const elem = document.querySelector('.highlight')
      const homeMenu = document.querySelector('#home-page')
      const aboutMenu = document.querySelector('#about-page')
      const servicesMenu = document.querySelector('#services-page')

      let scrollPos = window.scrollY

      if (window.innerWidth > 960 && scrollPos < 600) {
            homeMenu.classList.add('highlight')
            aboutMenu.classList.remove('highlight')
            return
      } 
      else if (window.innerWidth > 960 && scrollPos < 1400) {
            aboutMenu.classList.add('highlight')
            homeMenu.classList.remove('highlight')
            servicesMenu.classList.remove('highlight')
            return
      }
       else if (window.innerWidth > 960 && scrollPos < 2345) {
            servicesMenu.classList.add('highlight')
            aboutMenu.classList.remove('highlight')
            return
      }

      if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
            elem.classList.remove('highlight')
      }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//close mobile menu
const hideMobileMenu = () => {
      const menuBars = document.querySelector('.is-active')
      if (window.innerWidth <= 768 && menuBars) {
            menu.classList.toggle('is-active')
            menuLinks.classList.remove('active')
      }
}


// Animation
  AOS.init();


//   nav search

// ---- ---- Const ---- ---- //
let inputBox = document.querySelector('.input-box'),
  searchIcon = document.querySelector('.search'),
  closeIcon = document.querySelector('.close-icon');

// ---- ---- Open Input ---- ---- //
searchIcon.addEventListener('click', () => {
  inputBox.classList.add('open');
});
// ---- ---- Close Input ---- ---- //
closeIcon.addEventListener('click', () => {
  inputBox.classList.remove('open');
});



 // Targeting video element 
 let clip = document.querySelector(".vid")
  
 /* Applying mouseover event on video clip 
 and then we call play() function to play 
 the video when the mouse is over the video */
 clip.addEventListener("mouseover", function (e) {
     clip.play();
 })

 /* Applying mouseout event on video clip 
 and then we call pause() function to stop 
 the video when the mouse is out the video */
 clip.addEventListener("mouseout", function (e) {
     clip.pause();
 })