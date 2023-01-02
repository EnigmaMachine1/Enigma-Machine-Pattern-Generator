'use strict';

const root = document.documentElement;
const btns = Array.from(document.querySelectorAll('.accordion-label'))

btns.forEach(e => {
    e.addEventListener('click', buttonClick)
});

function buttonClick(e) {
    const btn = e.currentTarget;
    btn.classList.toggle('open');
    btn.nextElementSibling.classList.toggle('open');
    root.style.setProperty('--content-height', btn.nextElementSibling.scrollHeight + 'px');
    btns.forEach(b => {
        if(b !== btn && b.classList.contains('open')){
            b.classList.remove('open');
            b.nextElementSibling.classList.remove('open');
        }
    });
    
}