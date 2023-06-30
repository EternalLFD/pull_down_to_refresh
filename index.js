const mainDom = document.getElementsByClassName('main')[0];
console.error(mainDom)
let x, y, ox, oy = 0;
let distance = 0;;

mainDom.addEventListener('touchstart', (e) => {
    ox = e.touches[0].clientX;
    oy = e.touches[0].clientY;
})

mainDom.addEventListener('touchmove', (e) => {
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;

    distance = y - oy;
    let percent = (100 - distance * 0.5) / 100;
    percent = percent < 0.5 ? 0.5 : percent;
    e.target.style.transform = `translateY(${distance * percent}px)`;
})

mainDom.addEventListener('touchend', (e) => {
    e.target.style.transform = 'translateY(0px)';
})