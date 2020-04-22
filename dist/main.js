window.sr = ScrollReveal();
sr.reveal('.left', {
    duration: 2000,
    origin: 'right',
    distance: '40px'
});
sr.reveal('.right', {
    duration: 2000,
    origin: 'left',
    distance: '40px'
});

sr.reveal('.wine1 .container .img-cont,#contact2 .container .text', {
    duration: 2000,
    origin: 'right',
    distance: '40px'
});
sr.reveal('.wine1 .container aside,#contact2 .container .img', {
    duration: 2000,
    origin: 'left',
    distance: '40px'
});

sr.reveal('#wine2 .container .img-cont', {
    duration: 2000,
    origin: 'left',
    distance: '40px'
});
sr.reveal('#wine2 .container aside', {
    duration: 2000,
    origin: 'left',
    distance: '40px'
});


sr.reveal('#dining .content,#wine2 .content,#menu1 .content,#team .content,#contact .content,#reservation .content,#footer div, .galley', {
    duration: 2000,
    origin: 'bottom',
    distance: '40px'
});
sr.reveal('#res .container', {
    duration: 2000,
    origin: 'bottom',
    distance: '5px'
});

sr.reveal('figure', {
    duration: 2000,
    origin: 'left',
    distance: '20px'
});
sr.reveal('#store-items', {
    duration: 4000,
    origin: 'bottom',
    distance: '90px'
});

sr.reveal('#row2', {
    duration: 3000,
    origin: 'left',
    distance: '200px'
});

sr.reveal('#row1', {
    duration: 3000,
    origin: 'right',
    distance: '200px'
});




let btn = document.querySelector('#ham')
let overlay = document.querySelector('.overlay')
let list = document.querySelector('.overlay ul')
let show = false

btn.addEventListener('click', e => {
    if (!show) {
        btn.classList.add('close')
        overlay.classList.add('open')
        list.classList.add('open')
        show = true
    } else {
        btn.classList.remove('close')
        overlay.classList.remove('open')
        list.classList.remove('open')
        value = false
    }
})


let drop = document.querySelector('.drop')
let li = document.querySelector('.drop .dropdown li')
drop.addEventListener('click', e => {
    li.classList.add('show')
})

const video1 = document.getElementById('video1')
const video2 = document.getElementById('video2')
const video3 = document.getElementById('video3')
video3.onended = () => {
    video1.play()
    video3.style.opacity = 0;
    video1.style.opacity = 1
}
video2.onended = () => {
    video3.play()
    video2.style.opacity = 0;
    video3.style.opacity = 1
}
video1.onended = () => {
    video2.play()
    video1.style.opacity = 0;
    video2.style.opacity = 1
}