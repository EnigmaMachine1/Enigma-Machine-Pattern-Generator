'use strict';

const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const pattern = document.querySelector('.pattern-list');
const styleList = ['1. Lines', '2. Shapes', '3. Edging', '4. Tendrils', '5. Towers', '6. Uncategorized'];
const urlList = ['line-patterns.html', 'shape-patterns.html', 'edging-patterns.html', 'tendril-patterns.html', 'tower-patterns.html', 'uncategorized-patterns.html'];
const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
const carouselNavItems = document.querySelectorAll('.nav-item');
const carouselNavItemsArray = Array.from(document.querySelectorAll('.nav-item'));
const CAROUSEL_SIZE = carouselItems.length;

leftBtn.addEventListener('click', swipe);
rightBtn.addEventListener('click', swipe);

carouselNavItemsArray.forEach(e => {
    e.addEventListener('click', dotChange);
});

function swipe(e) {
    const currentCarouselItem = document.querySelector('.carousel-item.active');
    const currentIndex = carouselItems.indexOf(currentCarouselItem);
    let nextIndex;

    if(e.currentTarget.classList.contains('left')){
        nextIndex = currentIndex === 0 ? CAROUSEL_SIZE - 1 : currentIndex - 1;
    }
    else{
        nextIndex = currentIndex === CAROUSEL_SIZE - 1 ? 0 : currentIndex + 1; 
    }

    carouselItems[nextIndex].classList.add('active');
    carouselNavItems[nextIndex].classList.add('active');
    currentCarouselItem.classList.remove('active');
    carouselNavItems[currentIndex].classList.remove('active');
    pattern.textContent = styleList[nextIndex];
    pattern.setAttribute('href', urlList[nextIndex]);
}

function dotChange(e) {
    const currentCarouselItem = document.querySelector('.carousel-item.active');
    const currentIndex = carouselItems.indexOf(currentCarouselItem);
    if(e.currentTarget.classList.contains('active')){return;}
    else{
        currentCarouselItem.classList.remove('active');
        carouselNavItems[currentIndex].classList.remove('active');
        e.currentTarget.classList.add('active');
        carouselItems[carouselNavItemsArray.indexOf(e.currentTarget)].classList.add('active');
        pattern.textContent = styleList[carouselNavItemsArray.indexOf(e.currentTarget)];
        pattern.setAttribute('href', urlList[carouselNavItemsArray.indexOf(e.currentTarget)]);
    }
}