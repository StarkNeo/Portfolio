document.addEventListener('click', e => {
    if (e.target.classList[0] === 'fa-solid') {
        let element = e.target.nextElementSibling;
        element.classList.toggle('data-project');

    }

})

let showMore=document.getElementById('more');
let showLess=document.getElementById('less');
let lastParag=document.getElementById('continue');

showMore.addEventListener('click',()=>{
    showMore.style.display='none';
    showLess.style.display='flex';
    lastParag.style.display='flex';


})

showLess.addEventListener('click',()=>{
    showMore.style.display='flex';
    showLess.style.display='none';
    lastParag.style.display='none';


})

let burger=document.getElementById('burger');
let menu=document.querySelector('ul');

burger.addEventListener('click',()=>{
    menu.classList.toggle('menu-hidden');
});