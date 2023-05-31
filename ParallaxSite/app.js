
const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title"); 
const header=document.querySelector("header");
const defaultTitle = document.querySelector('.default-title');
const hoverTitle = document.querySelector('.hover-title');

let header_height= header.offsetHeight;

big_title.addEventListener('mouseenter', () => {
    defaultTitle.style.display = 'none';
    hoverTitle.style.display = 'inline-block';
    hoverTitle.style.color = 'blanchedalmond';
});

big_title.addEventListener('mouseleave', () => {
    defaultTitle.style.display = 'inline-block';
    hoverTitle.style.display = 'none';
    defaultTitle.style.color = 'black';
});


window.addEventListener('scroll',() => {
    let scroll = window.pageYOffset;
     
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    })

    big_title.style.opacity = -scroll/(header_height/2)+1;
})