//onscroll change 
window.addEventListener('scroll',() =>{
    document.querySelector(`nav`).classList.toggle(`window-scrolled`, window.scrollY > 100);
})

// explode textn 
const textButtons = document.querySelectorAll(`.contact__btn`);
textButtons.forEach(textButtons => {
    let text = textButtons.querySelector(`p`);
    

    text.innerHTML = text.innerText.split("").map(
        (char, i) => `<span style ="transform:rotate(${i * 12.8}deg)">${char }</span>`
    ).join("");
});

// // swiper gallery

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween:40
        },
        1023: {
            slidesPerView:3,
            spaceBetween:60
        }
    }
});


// const nav = document.querySelector('.nav__links');
// const openNavBtn = document.querySelector('#nav__toggle-open');
// const closeNavBtn = document.querySelector('#nav__toggle-close');

// const openNav = () => {
//     nav.style.display = 'flex';
//     openNavBtn.style.display = 'none';
//     closeNavBtn.style.display = 'inline-block';
// };

// openNavBtn.addEventListener('click',openNav);

// const closeNav = () => {
//     nav.style.display = 'none';
//     openNavBtn.style.display = 'inline-block';
//     closeNavBtn.style.display = 'none';
// };
// closeNavBtn.addEventListener('click',closeNav);

// nav.querySelectorAll('li a').forEach(navLink => {
//     navLink.addEventListener('click',closeNav);
// });
// zkusim to vylepsit do if else//
const nav = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');

const toggleNav = () => {
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
        openNavBtn.style.display = 'inline-block';
        closeNavBtn.style.display = 'none';
    } else {
        nav.style.display = 'flex';
        openNavBtn.style.display = 'none';
        closeNavBtn.style.display = 'inline-block';
    }
};

openNavBtn.addEventListener('click', toggleNav);
closeNavBtn.addEventListener('click', toggleNav);

//tady je to nekde dokurvene :ˇ zkusim zakomentovat
//a vymyslet neco neoveho asi podminkiu

// nav.querySelectorAll('li a').forEach(navLink => {
//     navLink.addEventListener('click', toggleNav);
// });

//zkusim if else
// if(document.body.clientWidth < 1024){
    
//     nav.querySelectorAll('li a').forEach(navLink =>{
//         navLink.addEventListener('click', closeNav);
//     })
// }


//nejaky bug tlacitko porad zustava viditelne :-/
//zkusim rsiuze
// function winResize(e){
//     if (e.target.innerWidth > 1024) {
//         openNavBtn.style.display = 'none';
//         closeNavBtn.style.display = 'none';
//     }else{
//         openNavBtn.style.display = 'inline-block';
//     }
// }

// window.addEventListener("resize", winResize);

